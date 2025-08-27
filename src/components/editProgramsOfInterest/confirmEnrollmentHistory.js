'use client';
import React, {useState} from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Snackbar,
    Alert,
    IconButton
} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import Image from 'next/image';

const enrollmentData = [
    {
        id: 1,
        subject: 'SUBJ',
        course: '00M',
        title: 'Course Title',
        term: 'Fall 2025',
        grade: 'A+',
        credit: 3
    },
    {
        id: 2,
        subject: 'SUBJ',
        course: '00M',
        title: 'Course Title',
        term: 'Fall 2025',
        grade: 'A+',
        credit: 3
    },
    {
        id: 3,
        subject: 'SUBJ',
        course: '00M',
        title: 'Course Title',
        term: 'Fall 2025',
        grade: 'A+',
        credit: 3
    },
    {
        id: 4,
        subject: 'SUBJ',
        course: '00M',
        title: 'Course Title',
        term: 'Fall 2025',
        grade: 'A+',
        credit: 3
    },
    {
        id: 100,
        subject: 'SUBJ',
        course: '00M',
        title: 'Course Title',
        term: 'Fall 2025',
        grade: 'A+',
        credit: 3
    },
    {
        id: 101,
        subject: 'SUBJ',
        course: '00M',
        title: 'Course Title',
        term: 'Fall 2025',
        grade: 'A+',
        credit: 3
    },
    {
        id: 102,
        subject: 'SUBJ',
        course: '00M',
        title: 'Course Title',
        term: 'Fall 2025',
        grade: 'A+',
        credit: 3
    }
];

const columns = [
    {field: 'id', headerName: '', width: 70},
    {field: 'subject', headerName: 'Subject', width: 100},
    {field: 'course', headerName: 'Course #', width: 100},
    {field: 'title', headerName: 'Course Title', flex: 1, minWidth: 150},
    {field: 'term', headerName: 'Term', width: 120},
    {field: 'grade', headerName: 'Grade', width: 80},
    {field: 'credit', headerName: 'Credit', width: 80}
];

export default function ConfirmEnrollmentHistory() {
    const [openSnackbar, setOpenSnackbar] = useState(true);

    return (
        <Box className="confirmEnrollment">
            <Typography className="confirmEnrollmentTitle">
                Confirm Enrollment History
            </Typography>

            <Card className="enrollmentCard">
                <CardContent>
                    <Box className="enrollmentHeader">
                        <Box className="studentInfo">
                            <Box className="studentBasic">
                                <Typography className="studentName">
                                    Jane Doe
                                </Typography>
                                <Typography className="studentUniversity">
                                    Old Dominion University
                                </Typography>
                            </Box>

                            <Box className="universityLogo">
                                <Image
                                    alt="Old Dominion University"
                                    src="/img/studentSearch/oldDominionUniversityLogo.svg"
                                    width={162}
                                    height={68}
                                />
                            </Box>
                        </Box>
                        <Box className="studentStats">
                            <Box className="statRow">
                                <Typography className="label">UIN</Typography>
                                <Typography className="value">
                                    23456789
                                </Typography>
                            </Box>
                            <Box className="statRow">
                                <Typography className="label">
                                    Credits Received
                                </Typography>
                                <Typography className="value">20</Typography>
                            </Box>
                            <Box className="statRow">
                                <Typography className="label">
                                    Cumulative GPA
                                </Typography>
                                <Typography className="value">3.0</Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="enrollmentGrid">
                        <DataGrid
                            rows={enrollmentData}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5, 10, 20]}
                            disableSelectionOnClick
                            sx={{
                                // '& .MuiDataGrid-columnHeaders': {
                                //     backgroundColor: 'white'
                                // },
                                // '& .MuiDataGrid-columnHeader': {
                                //     backgroundColor: 'white'
                                // },
                                '& .MuiDataGrid-footerContainer .MuiTypography-root':
                                    {
                                        color: 'rgba(0, 0, 0, 0.60)',
                                        fontSize: '12px',
                                        fontStyle: 'normal',
                                        fontWeight: 400
                                    }
                            }}
                        />
                    </Box>
                </CardContent>
            </Card>

            <Snackbar
                open={openSnackbar}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                sx={{
                    '& .MuiSnackbarContent-root': {
                        background: '#fff',
                        color: '#000',
                        borderRadius: '8px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                        padding: '8px 16px',
                        width: '85%',
                        display: 'flex',
                        alignItems: 'center'
                    },
                    '&.MuiSnackbar-root': {
                        top: '170px'
                    }
                }}
                message={
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                            width: '100%',
                            alignItems: 'flex-start',
                            position: 'relative' // enable absolute positioning inside
                        }}
                    >
                        {/* Success Icon */}
                        <Image
                            src="/img/studentSearch/success.svg"
                            alt="success"
                            width={32}
                            height={32}
                            style={{marginTop: '4px'}}
                        />

                        {/* Message */}
                        <Box sx={{flex: 1, pr: 4}}>
                            {' '}
                            {/* add padding-right so text doesn’t overlap with close btn */}
                            <Typography
                                sx={{
                                    color: 'var(--text-primary, rgba(0, 0, 0, 0.87))',
                                    fontFamily: 'Roboto',
                                    fontSize: '20px',
                                    fontWeight: 500,
                                    lineHeight: '160%',
                                    letterSpacing: '0.15px',
                                    textAlign: 'start'
                                }}
                            >
                                Success!
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'var(--text-primary, rgba(0, 0, 0, 0.87))',
                                    fontFamily: 'Roboto',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    lineHeight: '143%',
                                    letterSpacing: '0.17px',
                                    textAlign: 'start'
                                }}
                            >
                                Student Name’s enrollment history has been
                                obtained from Banner.
                            </Typography>
                        </Box>

                        {/* Close Button */}
                        <IconButton
                            onClick={() => setOpenSnackbar(false)}
                            size="small"
                            sx={{
                                position: 'absolute',
                                bottom: '70px',
                                left: '425px'
                            }}
                        >
                            <Image
                                src="/img/studentSearch/close.svg"
                                alt="close"
                                width={20}
                                height={20}
                            />
                        </IconButton>
                    </Box>
                }
            />
        </Box>
    );
}
