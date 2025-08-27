import {CustomIcon} from '@/components/common';
import {
    Typography,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Button,
    ListItemButton,
    Box
} from '@mui/material';
import Image from 'next/image';

// ✅ Helper function to format file size
const formatFileSize = size => {
    if (!size) return '';
    const i = Math.floor(Math.log(size) / Math.log(1024));
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    return (
        (size / Math.pow(1024, i)).toFixed(1).replace(/\.0$/, '') +
        ' ' +
        sizes[i]
    );
};

export default function FileList({
    files = [],
    selectedIndex,
    onFileClick,
    onRemoveFile,
    handleFiles,
    disabled
}) {
    return (
        <Box className="fileList">
            <Typography className="fileListTitle">Uploaded Files</Typography>

            {files.length > 0 ? (
                <>
                    <List>
                        {files.map((file, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton
                                    className="fileListItem"
                                    selected={selectedIndex === index}
                                    onClick={() => onFileClick(index)}
                                >
                                    {selectedIndex === index && (
                                        <Box className="fileListDot" />
                                    )}
                                    <ListItemText
                                        primaryTypographyProps={{
                                            className: 'fileListFileName'
                                        }}
                                        primary={file.name}
                                        secondaryTypographyProps={{
                                            className: 'fileListFileSize'
                                        }}
                                        secondary={formatFileSize(file.size)}
                                    />
                                    <IconButton
                                        edge="end"
                                        onClick={e => {
                                            e.stopPropagation();
                                            onRemoveFile(index);
                                        }}
                                    >
                                        <CustomIcon
                                            icon="hugeicons:delete-01"
                                            width="18"
                                            height="18"
                                        />
                                    </IconButton>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <Box display="flex" justifyContent="center" width="100%">
                        <Button
                            variant="outlined"
                            sx={{mt: 2}}
                            disabled={disabled}
                            startIcon={
                                <Image
                                    src="/img/upload.svg"
                                    alt="fileUpload"
                                    width={12}
                                    height={12}
                                />
                            }
                            onClick={() =>
                                document.getElementById('fileInput').click()
                            }
                        >
                            Upload More
                        </Button>
                    </Box>

                    <input
                        id="fileInput"
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx"
                        style={{display: 'none'}}
                        onChange={e => handleFiles(e.target.files)}
                    />
                </>
            ) : (
                <Typography className="fileListEmptyText">
                    There are no transcript files.
                </Typography>
            )}
        </Box>
    );
}
