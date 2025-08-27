import {Box, IconButton, Tooltip} from '@mui/material';
import Image from 'next/image';

// Alumni Columns
export const alumniColumns = onEditPrograms => [
    {field: 'uin', headerName: 'UIN', flex: 1},
    {field: 'lastName', headerName: 'Last Name', flex: 1},
    {field: 'firstName', headerName: 'First Name', flex: 1},
    {field: 'midas', headerName: 'MIDAS', flex: 1},
    {field: 'email', headerName: 'Email', flex: 1},
    {
        field: 'action',
        headerName: '',
        flex: 0.5,
        sortable: false,
        filterable: false,
        renderCell: params => (
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Tooltip title="forward">
                    <IconButton
                        size="small"
                        onClick={() => onEditPrograms(params.row)}
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
        )
    }
];

// New Student Columns
export const newStudentColumns = () => [
    {field: 'rfiDate', headerName: 'RFI Date/Time', flex: 1},
    {field: 'lastName', headerName: 'Last Name', flex: 1},
    {field: 'firstName', headerName: 'First Name', flex: 1},
    {field: 'email', headerName: 'Email Address', flex: 1},
    {
        field: 'action',
        headerName: '',
        flex: 0.5,
        sortable: false,
        filterable: false,
        renderCell: () => (
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Tooltip title="forward">
                    <IconButton size="small">
                        <Image
                            src="/img/studentSearch/forword.svg"
                            alt="forward"
                            width={30}
                            height={30}
                        />
                    </IconButton>
                </Tooltip>
            </Box>
        )
    }
];
