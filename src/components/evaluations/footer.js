import {CustomIcon} from '@/components/common';
import {Box, Select, MenuItem, IconButton} from '@mui/material';

export default function Footer() {
    return (
        <Box className="footer">
            <Box className="footer__rows">
                Rows per page:
                <Select
                    value={10}
                    size="small"
                    variant="standard"
                    disableUnderline
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                </Select>
            </Box>
            <Box className="footer__pagination">
                <Box>1-3 of 3</Box>
                <Box>
                    <IconButton size="small">
                        <CustomIcon
                            icon="jam:chevron-left"
                            width="18"
                            height="18"
                        />
                    </IconButton>
                    <IconButton size="small">
                        <CustomIcon
                            icon="jam:chevron-right"
                            width="18"
                            height="18"
                        />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}
