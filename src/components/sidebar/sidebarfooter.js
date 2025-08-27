import {Box, Button, Typography} from '@mui/material';
import Image from 'next/image';

export default function Sidebarfooter({isOpen}) {
    return (
        <Box className="app__sidebarFooter">
            {/* Logout Button */}
            <Button
                variant="text"
                className="logoutBtn"
                startIcon={
                    <Image
                        src="/img/sidebarIcons/logOut.svg"
                        alt="logoutBtn"
                        width={24}
                        height={24}
                    />
                }
                onClick={() => console.log('Logout clicked')}
            >
                {isOpen && (
                    <Typography variant="body1" component="span">
                        Logout
                    </Typography>
                )}
            </Button>

            {/* Logo + Text */}
            <Box className="logoWrapper">
                <Image
                    src="/img/sidebarIcons/otm-logo.svg"
                    alt="OTM Logo"
                    width={isOpen ? 150 : 60} // shrink logo when collapsed
                    height={isOpen ? 72 : 36} // adjust proportionally
                />
            </Box>
        </Box>
    );
}
