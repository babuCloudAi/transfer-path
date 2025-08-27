import {Box, Typography, LinearProgress} from '@mui/material';

export default function EvaluationCard({evaluation}) {
    const {
        id,
        submittedDate,
        firstName,
        lastName,
        email,
        progress,
        reviewStatus,
        evaluationStatus
    } = evaluation;

    return (
        <>
            <Box className="evaluationCard">
                {/* Left Section */}
                <Box className="evaluationCardLeft">
                    <Typography className="idLabel">Evaluation ID</Typography>
                    <Typography className="id">{id}</Typography>
                    <Typography className="submitted">
                        Eval Started - {submittedDate}
                    </Typography>
                </Box>

                {/* Middle Section */}
                <Box className="evaluationCardMiddle">
                    <Typography className="name">
                        {lastName}, {firstName}
                    </Typography>
                    <Typography className="email">{email}</Typography>
                </Box>

                {/* Right Section */}
                <Box className="evaluationCardRight">
                    <Box className="progressContainer">
                        <LinearProgress
                            variant="determinate"
                            value={progress}
                            sx={{width: '100%', height: 6, borderRadius: '4px'}}
                        />
                        <Typography className="progressText">
                            {progress}%
                        </Typography>
                    </Box>
                    <Box className="reviewInfo">
                        <Typography className="reviewStatus">
                            AI Processing {reviewStatus}
                        </Typography>
                        <Typography className="evaluationStatus">
                            Ready for {evaluationStatus}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
