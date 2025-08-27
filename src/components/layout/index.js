'use client';
import {Box, CssBaseline} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import {theme} from '@/config';
import Sidebar from '@/components/sidebar';

export default function Layout({children}) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Box sx={{display: 'flex', height: '100vh'}}>
                    <Sidebar />
                    {children}
                </Box>
            </ThemeProvider>
        </>
    );
}
