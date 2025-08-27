'use client';

import React from 'react';
import {Box, Typography, LinearProgress, Button} from '@mui/material';
import Image from 'next/image';

export function ProcessingScreen({
    progress = 0,
    title = '',
    subtitle = '',
    imageSrc = '/img/processing.svg',
    imageAlt = 'processing',
    showProgress = true,
    showComeBackLater = true,
    onComeBackLater
}) {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            sx={{bgcolor: 'white', p: 3}}
            width={'60%'}
        >
            {/* Logo / Illustration */}
            <Box mb={4}>
                <Image src={imageSrc} alt={imageAlt} width={257} height={118} />
            </Box>

            {/* Title + Subtitle */}
            {title && (
                <Typography fontSize={32} fontWeight={400}>
                    {title}
                </Typography>
            )}
            {subtitle && (
                <Typography fontSize={32} fontWeight={400}>
                    {subtitle}
                </Typography>
            )}

            {/* Progress Section */}
            {showProgress && (
                <Box width="100%" mt={10}>
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        mb={1}
                    >
                        <Typography fontSize={14} fontWeight={400} mt={1}>
                            {progress}% complete | This may take up to 15
                            minutes.
                        </Typography>

                        {showComeBackLater && (
                            <Button
                                variant="outlined"
                                sx={{
                                    borderRadius: 'var(--borderRadius, 4px)',
                                    padding: '0px 16px'
                                }}
                                onClick={onComeBackLater}
                            >
                                COME BACK LATER
                            </Button>
                        )}
                    </Box>

                    <LinearProgress
                        variant="determinate"
                        value={progress}
                        sx={{
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: '#e0e0e0',
                            '& .MuiLinearProgress-bar': {
                                borderRadius: 5
                            }
                        }}
                    />
                </Box>
            )}
        </Box>
    );
}
