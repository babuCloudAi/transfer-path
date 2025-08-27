'use client';

import {useState} from 'react';
import {Box, Card, Typography, Button} from '@mui/material';
import {CustomIcon} from '@/components/common';
import ManualTranscriptForm from './manualTranscriptForm';

export default function ErrorsProcessingFiles({onFinish}) {
    const [showManualForm, setShowManualForm] = useState(false);

    return (
        <>
            {!showManualForm && (
                <Card className="errorsProcessingFiles">
                    {/* Header */}
                    <Box className="errorsProcessingFiles__title">
                        <CustomIcon
                            icon="bxs:error"
                            className="errorsProcessingFiles__icon--large"
                            width={82}
                            height={82}
                        />
                        <Typography className="errorsProcessingFiles__heading">
                            Errors Processing Files
                        </Typography>
                        <Typography className="errorsProcessingFiles__subheading">
                            Correct the errors noted and try again.
                        </Typography>
                    </Box>

                    {/* Requires Action Section */}
                    <Typography className="errorsProcessingFiles__notice" m={1}>
                        Requires action to continue.
                    </Typography>

                    <Box className="errorsProcessingFiles__item" mb={4}>
                        <Box
                            className="errorsProcessingFiles__message"
                            width={'50%'}
                        >
                            <CustomIcon
                                icon="bxs:error"
                                className="errorsProcessingFiles__icon--small-warning"
                                width={18}
                                height={18}
                            />
                            <Typography className="errorsProcessingFiles__text">
                                The file, [fileName], cannot be processed.
                            </Typography>
                        </Box>
                        <Box
                            className="errorsProcessingFiles__buttons"
                            width={'50%'}
                        >
                            <Button
                                variant="contained"
                                size="medium"
                                sx={{
                                    borderRadius: 'var(--borderRadius, 4px)',
                                    background: ' #E0E0E0',
                                    color: '#000',
                                    boxShadow:
                                        '0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.20)',
                                    textTransform: 'none',
                                    '&:hover': {
                                        background: '#dbe8f5'
                                    }
                                }}
                            >
                                IGNORE
                            </Button>
                            <Button
                                size="small"
                                variant="contained"
                                color="primary"
                                className="errorsProcessingFiles__button--nowrap"
                                onClick={() => setShowManualForm(true)} // ✅ trigger manual form
                            >
                                Manually Enter Data
                            </Button>
                        </Box>
                    </Box>

                    {/* Optional Section */}
                    <Typography className="errorsProcessingFiles__optional-title">
                        Optional to address
                    </Typography>

                    <Box className="errorsProcessingFiles__item">
                        <Box
                            className="errorsProcessingFiles__message"
                            width={'50%'}
                        >
                            <CustomIcon
                                icon="bxs:error"
                                className="errorsProcessingFiles__icon--small-warning"
                                width={18}
                                height={18}
                            />
                            <Typography className="errorsProcessingFiles__text">
                                AI detected a missing transcript.
                            </Typography>
                        </Box>
                        <Box
                            className="errorsProcessingFiles__buttons"
                            width={'50%'}
                        >
                            <Button
                                variant="contained"
                                size="medium"
                                sx={{
                                    borderRadius: 'var(--borderRadius, 4px)',
                                    background: ' #E0E0E0',
                                    color: '#000',
                                    boxShadow:
                                        '0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.20)',
                                    textTransform: 'none',
                                    '&:hover': {
                                        background: '#dbe8f5'
                                    }
                                }}
                            >
                                IGNORE
                            </Button>
                            <Button
                                size="small"
                                variant="contained"
                                color="primary"
                            >
                                Resolve
                            </Button>
                        </Box>
                    </Box>
                </Card>
            )}
            {showManualForm && <ManualTranscriptForm onFinish={onFinish} />}
        </>
    );
}
