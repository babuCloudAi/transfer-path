'use client';
import {Box, Card, Typography} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';

export default function StudentSearchResults({
    studentType,
    rows,
    alumniColumns,
    newStudentColumns,
    onEditPrograms
}) {
    return (
        <Card className="studentSearchResults">
            <Typography className="studentSearchResultsTitle">
                {studentType === 'alumni'
                    ? 'Alumni Search Results'
                    : 'New Student Search Results'}
            </Typography>
            <Box className="studentSearchResultsGrid">
                <DataGrid
                    rows={rows}
                    columns={
                        studentType === 'alumni'
                            ? alumniColumns(onEditPrograms)
                            : newStudentColumns(onEditPrograms)
                    }
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    disableSelectionOnClick
                    getRowId={row => row.id}
                    localeText={{
                        noRowsLabel:
                            'There are no students that match your search criteria.'
                    }}
                />
            </Box>
        </Card>
    );
}
