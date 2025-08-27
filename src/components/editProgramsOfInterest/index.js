'use client';
import {useEffect, useState} from 'react';
import {CustomHeader} from '../common';
import ProgramsOfInterest from './programsOfInterest';
import {Box, Typography} from '@mui/material';
import AlumniBannerProcessing from './alumniBannerProcessing';
import ConfirmEnrollmentHistory from './confirmEnrollmentHistory';
import TranscriptUploader from './transcriptUploader';
import TranscriptUploadProcessing from './transcriptUploader/transcriptUploadProcessing';
import ErrorsProcessingFiles from './transcriptUploader/errorsProcessingFiles';

export default function EditProgramsOfInterest({studentData}) {
    const [showProcessing, setShowProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isProcessed, setIsProcessed] = useState(false);
    const [showTranscriptUploader, setShowTranscriptUploader] = useState(false);
    const [isTranscriptsProcessed, setIsTranscriptsProcessed] = useState(false);
    const [isTranscriptsCompleted, setIsTranscriptsCompleted] = useState(false);

    const handleNext = () => {
        if (isProcessed && !showTranscriptUploader) {
            setShowTranscriptUploader(true);
        } else if (showTranscriptUploader && !isTranscriptsProcessed) {
            setIsTranscriptsProcessed(true);
            setProgress(0);
        } else if (isTranscriptsCompleted) {
            console.log('Transcript flow finished → NEXT SCREEN');
        } else {
            setShowProcessing(true);
            setProgress(0);
            setIsProcessed(false);
        }
    };

    useEffect(() => {
        let timer;
        if (showProcessing && progress < 100) {
            timer = setInterval(() => {
                setProgress(prev => {
                    const next = prev + 5;
                    if (next >= 100) {
                        clearInterval(timer);
                        setIsProcessed(true);
                        return 100;
                    }
                    return next;
                });
            }, 500);
        }
        return () => clearInterval(timer);
    }, [showProcessing, progress]);

    useEffect(() => {
        let timer;
        if (isTranscriptsProcessed && progress < 100) {
            timer = setInterval(() => {
                setProgress(prev => {
                    const next = prev + 10;
                    if (next >= 100) {
                        clearInterval(timer);
                        setIsTranscriptsCompleted(true);
                        return 100;
                    }
                    return next;
                });
            }, 500);
        }
        return () => clearInterval(timer);
    }, [isTranscriptsProcessed, progress]);

    if (!studentData) {
        return <Typography>No student data selected.</Typography>;
    }

    return (
        <>
            <CustomHeader
                studentName={`${studentData.firstName} ${studentData.lastName}`}
                email={studentData.email}
                uin={studentData.uin}
                disabled={showProcessing && !isProcessed}
                onContnue={handleNext}
            />

            {/* Step 1: Programs */}
            {!showProcessing && !isProcessed && !showTranscriptUploader && (
                <Box className="editProgramsOfInterest">
                    <Typography className="editProgramsOfInterest__title">
                        Edit Programs of Interest
                    </Typography>
                    <Box className="editProgramsOfInterest__content">
                        <ProgramsOfInterest />
                    </Box>
                </Box>
            )}

            {/* Step 2: Alumni Banner Processing */}
            {showProcessing && !isProcessed && !showTranscriptUploader && (
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    gap={4}
                    mt={12}
                >
                    <AlumniBannerProcessing progress={progress} />
                </Box>
            )}

            {/* Step 3: Confirm Enrollment */}
            {isProcessed && !showTranscriptUploader && (
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    gap={4}
                    mt={6}
                >
                    <ConfirmEnrollmentHistory />
                </Box>
            )}

            {/* Step 4: Transcript Uploader */}
            {showTranscriptUploader && !isTranscriptsProcessed && (
                <TranscriptUploader
                    onComplete={() => setIsTranscriptsProcessed(true)}
                />
            )}

            {/* Step 5: Transcript Processing */}
            {isTranscriptsProcessed && !isTranscriptsCompleted && (
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    gap={4}
                    mt={12}
                >
                    <TranscriptUploadProcessing
                        progress={progress}
                        studentName={`${studentData.firstName} ${studentData.lastName}`}
                    />
                </Box>
            )}

            {/* Step 6: Errors after Transcript Processing complete */}
            {isTranscriptsCompleted && (
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    gap={4}
                    mt={12}
                >
                    <ErrorsProcessingFiles
                        onFinish={() => {
                            setIsTranscriptsCompleted(false);
                            setIsTranscriptsProcessed(true);
                            setProgress(0);
                        }}
                    />
                </Box>
            )}
        </>
    );
}
