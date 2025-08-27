'use client';
import {Box, IconButton, Tooltip} from '@mui/material';
import Image from 'next/image';

export default function ActionCell({row, studentType, onEditPrograms}) {
    const handleClick = () => {
        // 🔹 Save row data locally
        localStorage.setItem(
            'editStudentData',
            JSON.stringify({...row, studentType})
        );

        console.log('Saved row data for editing:', row);
        if (onEditPrograms) {
            onEditPrograms(true);
        }
    };

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Tooltip
                title={
                    studentType === 'alumni'
                        ? 'Edit Alumni Details'
                        : 'Edit New Student Details'
                }
            >
                <IconButton
                    sx={{color: 'primary.main'}}
                    size="small"
                    onClick={handleClick}
                >
                    <Image
                        src="/img/studentSearch/forword.svg"
                        alt="forward"
                        width={30}
                        height={30}
                    />
                </IconButton>
            </Tooltip>
        </Box>
    );
}
