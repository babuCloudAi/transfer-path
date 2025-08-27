import {Card, CardContent, Box, Typography, Button} from '@mui/material';
import Image from 'next/image';

export default function UploadZone({handleFiles, onDrop}) {
    return (
        <Box>
            <Card
                elevation={3}
                onDragOver={e => e.preventDefault()}
                onDrop={onDrop}
                className="uploadZoneCard"
            >
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8.5
                    }}
                >
                    <Box>
                        <Typography className="uploadZoneHeading">
                            Upload transcript files
                        </Typography>
                        <Typography className="uploadZoneSubtext">
                            Up to 10 files with max file size as 5 MB.
                        </Typography>
                        <Typography className="uploadZoneSubtext">
                            Accepted File Types: .pdf, .doc, .docx
                        </Typography>
                    </Box>

                    <Box
                        className="uploadZoneDropArea"
                        onClick={() =>
                            document.getElementById('fileInput').click()
                        }
                    >
                        <Image
                            src="/img/download.svg"
                            alt="fileUpload"
                            width={50}
                            height={50}
                        />
                        <Typography className="uploadZoneDropText">
                            Drag and drop your files here
                        </Typography>
                        <Typography className="uploadZoneDivider">
                            - or -
                        </Typography>
                        <Button variant="outlined">Browse Files</Button>
                    </Box>

                    <input
                        type="file"
                        id="fileInput"
                        multiple
                        accept=".pdf,.doc,.docx"
                        style={{display: 'none'}}
                        onChange={e => handleFiles(e.target.files)}
                    />
                </CardContent>
            </Card>
        </Box>
    );
}
