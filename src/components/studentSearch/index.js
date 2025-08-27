'use client';

import {Box, Card, CardContent} from '@mui/material';
import {useState, useEffect} from 'react';
import Header from './header';

import alumniData from '@/data/alumniData.json';
import newStudentData from '@/data/newStudentData.json';
import StudentSearchForm from './studentSearchForm';
import {alumniColumns, newStudentColumns} from './columns';
import StudentSearchResults from './studentSearchResults';
import EditProgramsOfInterest from '../editProgramsOfInterest';

export default function StudentSearch() {
    const [studentType, setStudentType] = useState('alumni');
    const [uin, setUin] = useState('');
    const [email, setEmail] = useState('');
    const [rows, setRows] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [showEditPrograms, setShowEditPrograms] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleClear = () => {
        setUin('');
        setEmail('');
        setRows([]);
        setHasSearched(false);
    };

    const handleSearch = () => {
        setHasSearched(true);
        if (studentType === 'alumni') {
            const filtered = alumniData.filter(row =>
                uin ? row.uin.includes(uin) : true
            );
            setRows(filtered);
        } else if (studentType === 'new') {
            const filtered = newStudentData.filter(row =>
                email ? row.email.includes(email) : true
            );
            setRows(filtered);
        }
    };

    useEffect(() => {
        setUin('');
        setEmail('');
        setRows([]);
        setHasSearched(false);
    }, [studentType]);

    const handleEditPrograms = student => {
        setSelectedStudent(student);
        setShowEditPrograms(true);

        try {
            localStorage.setItem('selectedStudent', JSON.stringify(student));
        } catch (error) {
            console.error('Error saving student to localStorage:', error);
        }
    };

    return (
        <>
            {!showEditPrograms && (
                <Box>
                    <Header />
                    <Card
                        sx={{
                            borderRadius: 3,
                            boxShadow: 2,
                            p: 2,
                            maxWidth: 900,
                            margin: '32px auto'
                        }}
                    >
                        <CardContent>
                            <StudentSearchForm
                                studentType={studentType}
                                setStudentType={setStudentType}
                                uin={uin}
                                setUin={setUin}
                                email={email}
                                setEmail={setEmail}
                                onClear={handleClear}
                                onSearch={handleSearch}
                            />
                        </CardContent>
                    </Card>

                    {hasSearched &&
                        (studentType === 'alumni' || studentType === 'new') && (
                            <StudentSearchResults
                                studentType={studentType}
                                rows={rows}
                                alumniColumns={alumniColumns}
                                newStudentColumns={newStudentColumns}
                                onEditPrograms={handleEditPrograms}
                            />
                        )}
                </Box>
            )}
            {showEditPrograms && (
                <EditProgramsOfInterest
                    open={showEditPrograms}
                    onClose={() => setShowEditPrograms(false)}
                    studentData={selectedStudent}
                />
            )}
        </>
    );
}
