import {Box, Typography} from '@mui/material';

export default function FilePreview({files, selectedIndex, onDrop}) {
    return (
        <Box
            className="filePreviewWrapper"
            onDragOver={e => e.preventDefault()}
            onDrop={onDrop}
        >
            {selectedIndex !== null && files[selectedIndex] ? (
                <iframe
                    src={files[selectedIndex].previewURL}
                    title={files[selectedIndex].name}
                    width="100%"
                    height="100%"
                    className="filePreviewFrame"
                />
            ) : (
                <Typography className="filePreviewPlaceholder">
                    Select a file to preview.
                </Typography>
            )}
        </Box>
    );
}
