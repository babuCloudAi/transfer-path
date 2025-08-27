'use client';

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    Box
} from '@mui/material';

export default function CustomDialog({
    open,
    title,
    message,
    onClose,
    onConfirm,
    confirmText,
    cancelText,
    maxWidth
}) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="confirm-dialog-title"
            aria-describedby="confirm-dialog-description"
            className="customDialog"
            maxWidth={maxWidth}
        >
            {/* Title */}
            {title && (
                <DialogTitle id="confirm-dialog-title">{title}</DialogTitle>
            )}
            {/* Message */}
            {message && (
                <DialogContent>
                    <DialogContentText id="confirm-dialog-description">
                        {message}
                    </DialogContentText>
                </DialogContent>
            )}

            {/* Actions */}
            <DialogActions>
                <Box className="dialogActions">
                    <Button
                        variant="outlined"
                        onClick={onClose}
                        className="cancelBtn"
                    >
                        {cancelText}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={onConfirm}
                        autoFocus
                        className="confirmBtn"
                    >
                        {confirmText}
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>
    );
}
