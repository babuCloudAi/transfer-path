import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    Button,
    Box,
    colors
} from '@mui/material';
import {CustomIcon} from '@/components/common';

export default function ErrorDialog({errors, onClose, onResolve}) {
    return (
        <Dialog
            open={errors.length > 0}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            className="errorDialog"
        >
            <DialogTitle className="errorDialogTitle">
                <CustomIcon
                    icon="bxs:error"
                    width="48"
                    height="48"
                    style={{color: '#D32F2F'}}
                />
                <Typography className="errorDialogHeading">
                    Error Uploading Files
                </Typography>
                <Typography className="errorDialogSubheading">
                    Correct the errors noted and try again.
                </Typography>
            </DialogTitle>

            <DialogContent className="errorDialogContent">
                <Typography className="errorDialogNotice">
                    Requires action to continue.
                </Typography>

                {errors.map(({id, message}, index) => (
                    <Box key={`${id}_${index}`} className="errorDialogItem">
                        <Box className="errorDialogMessage">
                            <CustomIcon
                                icon="mdi:alert-circle-outline"
                                width="20"
                                height="20"
                                style={{color: '#D32F2F'}}
                            />
                            <Typography className="errorDialogText">
                                {message}
                            </Typography>
                        </Box>
                        <Button
                            variant="contained"
                            size="medium"
                            onClick={() => onResolve(id)}
                        >
                            RESOLVE
                        </Button>
                    </Box>
                ))}
            </DialogContent>
        </Dialog>
    );
}
