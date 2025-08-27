'use client';
import React, {useState, useCallback, useEffect} from 'react';
import {Box} from '@mui/material';
import UploadZone from './uploadZone';
import FileList from './fileList';
import FilePreview from './filePreview';
import ErrorDialog from './errorDialog';

const MAX_FILES = 10;
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_TYPES = ['application/pdf', 'application/msword'];
const ACCEPTED_EXTENSIONS = ['.pdf', '.doc', '.docx'];

export default function TranscriptUploader({onComplete}) {
    const [files, setFiles] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [errors, setErrors] = useState([]);

    const checkExtension = fileName =>
        ACCEPTED_EXTENSIONS.some(ext => fileName.toLowerCase().endsWith(ext));

    const handleFiles = newFiles => {
        setFiles(prevFiles => {
            const acceptedFiles = [];
            const newErrors = [];
            let availableSlots = MAX_FILES - prevFiles.length;

            if (prevFiles.length + newFiles.length > MAX_FILES) {
                newErrors.push({
                    id: `limit_${Date.now()}`,
                    message: 'You have exceeded the maximum limit of 10 files.'
                });
            }

            for (const file of newFiles) {
                if (availableSlots <= 0) break;

                if (
                    !ACCEPTED_TYPES.includes(file.type) &&
                    !checkExtension(file.name)
                ) {
                    newErrors.push({
                        id: `type_${file.name}_${Date.now()}`,
                        message: `The file "${file.name}" is not allowed. Only .doc, .docx, .pdf are permitted.`
                    });
                    continue;
                }

                if (file.size > MAX_FILE_SIZE) {
                    newErrors.push({
                        id: `size_${file.name}_${Date.now()}`,
                        message: `The file "${file.name}" exceeds 5MB.`
                    });
                    continue;
                }

                Object.defineProperty(file, 'previewURL', {
                    value: URL.createObjectURL(file),
                    writable: false,
                    configurable: true
                });

                acceptedFiles.push(file);
                availableSlots--;
            }

            if (newErrors.length > 0)
                setErrors(prev => [...prev, ...newErrors]);

            const combined = [...prevFiles, ...acceptedFiles];
            if (selectedIndex === null && combined.length > 0) {
                setSelectedIndex(0);
            }

            return combined;
        });
    };

    const onDrop = useCallback(e => {
        e.preventDefault();
        handleFiles(e.dataTransfer.files);
    }, []);

    const handleRemoveFile = index => {
        setFiles(prevFiles => {
            URL.revokeObjectURL(prevFiles[index].previewURL);
            const updated = prevFiles.filter((_, i) => i !== index);

            if (updated.length === 0) {
                setSelectedIndex(null);
            } else if (index === selectedIndex) {
                setSelectedIndex(Math.min(selectedIndex, updated.length - 1));
            } else if (index < selectedIndex) {
                setSelectedIndex(selectedIndex - 1);
            }
            return updated;
        });
    };

    const handleFileClick = index => setSelectedIndex(index);
    const handleResolveError = id =>
        setErrors(prev => prev.filter(e => e.id !== id));

    useEffect(() => {
        return () => {
            files.forEach(file => URL.revokeObjectURL(file.previewURL));
        };
    }, [files]);

    return (
        <>
            <Box className="transcriptUploader">
                {files.length === 0 ? (
                    <Box className="transcriptUploaderPanel">
                        <Box className="fileListWrapper">
                            <FileList
                                files={files}
                                selectedIndex={selectedIndex}
                                onFileClick={handleFileClick}
                                onRemoveFile={handleRemoveFile}
                                handleFiles={handleFiles}
                            />
                        </Box>
                        <Box className="uploadZoneWrapper">
                            <UploadZone
                                handleFiles={handleFiles}
                                onDrop={onDrop}
                            />
                        </Box>
                    </Box>
                ) : (
                    <Box className="transcriptUploaderPanel">
                        <Box className="fileListWrapper">
                            <FileList
                                files={files}
                                selectedIndex={selectedIndex}
                                onFileClick={handleFileClick}
                                onRemoveFile={handleRemoveFile}
                                handleFiles={handleFiles}
                                disabled={files.length >= MAX_FILES}
                            />
                        </Box>
                        <Box className="filePreviewWrapper">
                            <FilePreview
                                files={files}
                                selectedIndex={selectedIndex}
                                onDrop={onDrop}
                            />
                        </Box>
                    </Box>
                )}
                <ErrorDialog
                    errors={errors}
                    onClose={() => setErrors([])}
                    onResolve={handleResolveError}
                />
            </Box>
        </>
    );
}
