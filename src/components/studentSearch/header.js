import {Box, Typography} from '@mui/material';

export default function Header({}) {
    return (
        <Box className="header">
            {/* Left info section */}
            <Box className="evaluationSearch__info" width={'100%'}>
                <Typography className="title">
                    Prospective Student Search
                </Typography>
            </Box>
        </Box>
    );
}
