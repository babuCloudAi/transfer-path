'use client';

import {
    Box,
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
    Link
} from '@mui/material';
import {CustomTextField} from '../common';

export default function StudentSearchForm({
    studentType,
    setStudentType,
    uin,
    setUin,
    email,
    setEmail,
    onClear,
    onSearch
}) {
    const isClearEnabled = Boolean(uin || email);

    return (
        <Box>
            <Box display="flex" gap={9} alignItems="center">
                <Typography variant="subtitle1" gutterBottom>
                    Select Student Type
                </Typography>
                <RadioGroup
                    row
                    value={studentType}
                    onChange={e => setStudentType(e.target.value)}
                    sx={{gap: 9}}
                >
                    <FormControlLabel
                        value="new"
                        control={<Radio />}
                        label="New Student"
                    />
                    <FormControlLabel
                        value="alumni"
                        control={<Radio />}
                        label="Alumni"
                    />
                </RadioGroup>
            </Box>

            <Box display="flex" alignItems="baseline" gap={2} mt={2}>
                {studentType === 'alumni' && (
                    <CustomTextField
                        label="UIN"
                        placeholder="12345678"
                        value={uin}
                        onChange={e => setUin(e.target.value)}
                        required={true}
                    />
                )}
                {studentType === 'new' && (
                    <CustomTextField
                        label="Email"
                        placeholder="example@email.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required={true}
                        type="email"
                    />
                )}
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    textAlign={'end'}
                >
                    <Box display={'flex'} gap={2}>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={onClear}
                            disabled={!isClearEnabled}
                        >
                            CLEAR
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={onSearch}
                        >
                            SEARCH
                        </Button>
                    </Box>

                    {/* {studentType === 'new' && (
                        <Box mt={1}>
                            <Link
                                component="button"
                                underline="always"
                                onClick={() =>
                                    console.log('Advanced Search clicked')
                                }
                                sx={{
                                    fontSize: '10px',
                                    fontWeight: 400,
                                    color: '#000'
                                }}
                            >
                                Advanced Search
                            </Link>
                        </Box>
                    )} */}
                </Box>
            </Box>
        </Box>
    );
}
