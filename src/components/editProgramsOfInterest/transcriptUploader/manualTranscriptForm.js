'use client';

import {useState} from 'react';
import {
    Box,
    Grid,
    Button,
    IconButton,
    MenuItem,
    Typography,
    InputAdornment
} from '@mui/material';
import {CustomIcon, CustomTextField} from '@/components/common';

export default function ManualTranscriptForm({onFinish}) {
    const [studentName, setStudentName] = useState('');
    const [institution, setInstitution] = useState('');
    const [gpa, setGpa] = useState('');
    const [credits, setCredits] = useState('');
    const [degree, setDegree] = useState('');

    const [courses, setCourses] = useState([
        {
            id: 1,
            subject: '',
            number: '',
            title: '',
            term: '',
            grade: '',
            credits: ''
        }
    ]);

    const addCourse = () => {
        setCourses([
            ...courses,
            {
                id: courses.length + 1,
                subject: '',
                number: '',
                title: '',
                term: '',
                grade: '',
                credits: ''
            }
        ]);
    };

    const removeCourse = id => {
        setCourses(courses.filter(c => c.id !== id));
    };

    const handleCourseChange = (id, field, value) => {
        setCourses(
            courses.map(c => (c.id === id ? {...c, [field]: value} : c))
        );
    };

    return (
        <Box className="manualTranscriptForm">
            {/* Title */}
            <Box>
                <Typography className="title">
                    Manually Enter Transcript Data
                </Typography>
                <Typography className="subtitle">
                    Manually entering data for [couldn’tRead file name].
                </Typography>
            </Box>

            {/* Student Data */}
            <Box className="section studentData">
                <Typography className="sectionTitle" mb={3}>
                    Student Data
                </Typography>
                <Grid container spacing={2} mb={3}>
                    <Grid size={{xs: 12, md: 6}}>
                        <CustomTextField
                            className="input"
                            label="Student Name"
                            value={studentName}
                            onChange={e => setStudentName(e.target.value)}
                            required
                            placeholder="Enter student name"
                        />
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <CustomTextField
                            className="input"
                            label="Institution Name"
                            value={institution}
                            onChange={e => setInstitution(e.target.value)}
                            required
                            placeholder="Institution name"
                        />
                    </Grid>
                </Grid>
            </Box>

            {/* Academic Data */}
            <Box className="section academicData">
                <Typography className="sectionTitle" mb={2}>
                    Academic Data
                </Typography>
                <Grid container spacing={2} mb={3}>
                    <Grid size={{xs: 12, md: 3}}>
                        <CustomTextField
                            className="input"
                            label="Cumulative GPA"
                            value={gpa}
                            onChange={e => setGpa(e.target.value)}
                            required
                            placeholder="Cumulative GPA"
                        />
                    </Grid>
                    <Grid size={{xs: 12, md: 3}}>
                        <CustomTextField
                            className="input"
                            label="Credits Received"
                            value={credits}
                            onChange={e => setCredits(e.target.value)}
                            required
                            placeholder="Credits"
                        />
                    </Grid>
                    <Grid size={{xs: 12, md: 12}}>
                        <CustomTextField
                            className="input"
                            label="Degree(s) Awarded"
                            value={degree}
                            onChange={e => setDegree(e.target.value)}
                            required
                            placeholder="Degree(s)"
                        />
                    </Grid>
                </Grid>
            </Box>

            {/* Coursework */}
            <Box className="section coursework">
                <Typography className="sectionTitle" mb={1.2}>
                    Coursework
                </Typography>

                {courses.map((course, index) => (
                    <Box key={course.id} className="courseRow">
                        <Box className="courseRowIndex">{index + 1}</Box>

                        <Box className="courseRowField courseRowSubject">
                            <CustomTextField
                                fullWidth
                                label="Subject"
                                value={course.subject}
                                onChange={e =>
                                    handleCourseChange(
                                        course.id,
                                        'subject',
                                        e.target.value
                                    )
                                }
                                placeholder="Enter Subject"
                            />
                        </Box>

                        <Box className="courseRowField courseRowNumber">
                            <CustomTextField
                                fullWidth
                                label="Course Number"
                                value={course.number}
                                onChange={e =>
                                    handleCourseChange(
                                        course.id,
                                        'number',
                                        e.target.value
                                    )
                                }
                                placeholder="Enter Course Number"
                            />
                        </Box>

                        <Box className="courseRowField courseRowTitle">
                            <CustomTextField
                                fullWidth
                                label="Course Title"
                                value={course.title}
                                onChange={e =>
                                    handleCourseChange(
                                        course.id,
                                        'title',
                                        e.target.value
                                    )
                                }
                                placeholder="Enter course title"
                            />
                        </Box>

                        <Box className="courseRowField courseRowGrade">
                            <CustomTextField
                                select
                                fullWidth
                                label="Letter Grade"
                                value={course.grade || ''}
                                onChange={e =>
                                    handleCourseChange(
                                        course.id,
                                        'grade',
                                        e.target.value
                                    )
                                }
                                placeholder="Enter grade"
                                InputProps={{
                                    endAdornment: course.grade ? (
                                        <InputAdornment position="end">
                                            <IconButton
                                                size="small"
                                                onClick={() =>
                                                    handleCourseChange(
                                                        course.id,
                                                        'grade',
                                                        ''
                                                    )
                                                }
                                            >
                                                <CustomIcon
                                                    icon="mdi:close-circle"
                                                    width="18"
                                                    height="18"
                                                />
                                            </IconButton>
                                        </InputAdornment>
                                    ) : null
                                }}
                            >
                                <MenuItem value="A">A</MenuItem>
                                <MenuItem value="B">B</MenuItem>
                                <MenuItem value="C">C</MenuItem>
                                <MenuItem value="D">D</MenuItem>
                                <MenuItem value="F">F</MenuItem>
                            </CustomTextField>
                        </Box>

                        <Box className="courseRowField courseRowCredits">
                            <CustomTextField
                                fullWidth
                                label="Credits Earned"
                                value={course.credits}
                                onChange={e =>
                                    handleCourseChange(
                                        course.id,
                                        'credits',
                                        e.target.value
                                    )
                                }
                                placeholder="Enter credits earned"
                            />
                        </Box>

                        <Box className="courseRowRemove">
                            <IconButton onClick={() => removeCourse(course.id)}>
                                <CustomIcon
                                    icon="mdi:close"
                                    width="20"
                                    height="20"
                                />
                            </IconButton>
                        </Box>
                    </Box>
                ))}
                <Box
                    display={'flex'}
                    justifyContent={'flex-start'}
                    width={'100%'}
                >
                    <Button
                        variant="outlined"
                        onClick={addCourse}
                        className="addButton"
                        endIcon={
                            <CustomIcon
                                icon="icons8:plus"
                                width="20"
                                height="20"
                            />
                        }
                    >
                        Add New Class
                    </Button>
                </Box>
                <Box
                    display={'flex'}
                    justifyContent={'flex-end'}
                    width={'100%'}
                >
                    <Button
                        variant="contained"
                        className="finishButton"
                        onClick={onFinish}
                        endIcon={
                            <CustomIcon
                                icon="mdi:tick"
                                width="20"
                                height="20"
                            />
                        }
                    >
                        Finish & Process Files
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
