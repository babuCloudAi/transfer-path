import {Box, Button, LinearProgress, Typography} from '@mui/material';
import Image from 'next/image';

export function CustomHeader({studentName, email, uin, disabled, onContnue}) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 48px',
                background: 'var(--common-white, #FFF)',
                boxShadow:
                    '0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.20)'
            }}
        >
            {/* Left Section - User Info */}
            <Box>
                <Typography fontSize={40} fontWeight={400}>
                    {studentName}
                </Typography>
                <Typography fontSize={14} fontWeight={400}>
                    ODU UIN - {uin} &nbsp; &nbsp; {email}
                </Typography>
            </Box>

            {/* Right Section - Progress + Buttons */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    flexDirection: 'column'
                }}
            >
                {/* Progress */}
                <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                    <Box sx={{width: 250}}>
                        <LinearProgress variant="determinate" value={33} />
                    </Box>
                    <Typography fontSize={14} fontWeight={400}>
                        33%
                    </Typography>
                </Box>
                <Box
                    display={'flex'}
                    gap={2}
                    width={'100%'}
                    justifyContent={'flex-end'}
                >
                    {/* Navigation Buttons */}
                    <Button
                        variant="contained"
                        size="medium"
                        disabled={disabled}
                        startIcon={
                            <Image
                                src="/img/studentSearch/backArrow.svg"
                                alt="forward"
                                width={14}
                                height={14}
                            />
                        }
                        sx={{
                            borderRadius: 'var(--borderRadius, 4px)',
                            background:
                                'var(--Button-Secondary-BackgroundFill, #ECF3FB)',
                            color: '#000',
                            boxShadow:
                                '0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.20)',
                            textTransform: 'none',
                            '&:hover': {
                                background: '#dbe8f5'
                            }
                        }}
                    >
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        size="medium"
                        disabled={disabled}
                        onClick={onContnue}
                        sx={{
                            borderRadius: 'var(--borderRadius, 4px)',
                            background:
                                'var(--Button-Secondary-BackgroundFill, #ECF3FB)',
                            color: '#000',
                            boxShadow:
                                '0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.20)',
                            textTransform: 'none',
                            '&:hover': {
                                background: '#dbe8f5'
                            }
                        }}
                        endIcon={
                            <Image
                                src="/img/studentSearch/nextArrow.svg"
                                alt="forward"
                                width={14}
                                height={14}
                            />
                        }
                    >
                        Next
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
