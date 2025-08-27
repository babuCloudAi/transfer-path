'use client';

import {useState, useMemo} from 'react';
import {Box, Fab, Typography, Skeleton} from '@mui/material';
import {CustomIcon} from '../common';
import Header from './header';
import Footer from './footer';
import EvaluationCard from './evaluationCard';
import evaluationData from '@/data/evaluationData.json';
import CustomDialog from '../common/customDialog';
import Link from 'next/link';

export default function Evaluations() {
    const [searchText, setSearchText] = useState('');
    const [selectedInstitutions, setSelectedInstitutions] = useState([]);
    const [selectedSort, setSelectedSort] = useState('newest');

    // Loading state
    const [loading, setLoading] = useState(false);

    // Dialog state
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedEval, setSelectedEval] = useState(null);

    // Handle card click
    const handleCardClick = evaluation => {
        setSelectedEval(evaluation);
        setDialogOpen(true);
    };

    // Dialog actions
    const handleCloseDialog = () => {
        setDialogOpen(false);
        setSelectedEval(null);
    };

    const handleConfirmDialog = () => {
        console.log('Continue evaluation for:', selectedEval);
        setDialogOpen(false);
    };

    // Filtering + searching + sorting combined
    const filteredData = useMemo(() => {
        let data = [...evaluationData];

        // Search by name or email
        if (searchText.trim()) {
            const query = searchText.toLowerCase();
            data = data.filter(
                item =>
                    item.firstName.toLowerCase().includes(query) ||
                    item.lastName.toLowerCase().includes(query) ||
                    item.email.toLowerCase().includes(query)
            );
        }

        // Institution filters
        if (selectedInstitutions.length > 0) {
            data = data.filter(item =>
                selectedInstitutions.includes(item.institutionType)
            );
        }

        // Sorting
        switch (selectedSort) {
            case 'oldest':
                data.sort(
                    (a, b) =>
                        new Date(a.submittedDate) - new Date(b.submittedDate)
                );
                break;
            case 'newest':
                data.sort(
                    (a, b) =>
                        new Date(b.submittedDate) - new Date(a.submittedDate)
                );
                break;
            case 'az':
                data.sort((a, b) => a.firstName.localeCompare(b.firstName));
                break;
            case 'za':
                data.sort((a, b) => b.firstName.localeCompare(a.firstName));
                break;
            default:
                break;
        }

        return data;
    }, [searchText, selectedInstitutions, selectedSort]);

    // Trigger loading when filters applied
    const handleApplyFilters = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000); // 3 sec delay
    };

    return (
        <Box className="evaluations">
            <Header
                searchText={searchText}
                setSearchText={setSearchText}
                selectedInstitutions={selectedInstitutions}
                setSelectedInstitutions={setSelectedInstitutions}
                selectedSort={selectedSort}
                setSelectedSort={setSelectedSort}
                onApplyFilters={handleApplyFilters} // pass callback
            />

            <Box className="list" width={'100%'}>
                {loading ? (
                    // Show 5 skeletons
                    <>
                        {Array.from({length: 5}).map((_, idx) => (
                            <Box key={idx} mb={2}>
                                <Skeleton
                                    variant="rectangular"
                                    height={120}
                                    sx={{borderRadius: 2}}
                                />
                            </Box>
                        ))}
                    </>
                ) : filteredData.length > 0 ? (
                    <>
                        {filteredData.map(evalItem => (
                            <Box
                                key={evalItem.id}
                                onClick={() => handleCardClick(evalItem)}
                                style={{cursor: 'pointer'}}
                            >
                                <EvaluationCard evaluation={evalItem} />
                            </Box>
                        ))}

                        <Footer />
                    </>
                ) : (
                    <Typography fontSize={24} fontWeight={400}>
                        You currently have no prospective students awaiting
                        review.
                    </Typography>
                )}
            </Box>

            <Link href="/newEvaluation" style={{textDecoration: 'none'}}>
                <Fab
                    variant="extended"
                    color="primary"
                    sx={{
                        position: 'fixed',
                        bottom: 32,
                        right: 32,
                        zIndex: 1000,
                        gap: 1
                    }}
                >
                    <CustomIcon icon="tdesign:plus" width="24" height="24" />
                    New Evaluation
                </Fab>
            </Link>

            {/* Dialog */}
            <CustomDialog
                open={dialogOpen}
                title="Continue Evaluation?"
                onClose={handleCloseDialog}
                onConfirm={handleConfirmDialog}
                confirmText="Yes"
                cancelText="No"
                maxWidth={'xs'}
            />
        </Box>
    );
}
