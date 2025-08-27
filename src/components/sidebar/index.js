'use client';

import {
    Avatar,
    Box,
    IconButton,
    Typography,
    useMediaQuery
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import {styled} from '@mui/material/styles';
import {useEffect, useState} from 'react';
import MenuList from './menuList';
import {usePathname} from 'next/navigation';
import Sidebarfooter from './sidebarfooter';
import {theme} from '@/config';
import userInfo from '@/data/user/userInfo.json';
import Image from 'next/image';

const drawerWidth = 240;

const openedMixin = theme => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden'
});

const closedMixin = theme => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',

    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(7)} + 1px)`
    }
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: prop => prop !== 'open'
})(({theme, open}) => ({
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme)
    })
}));

export default function Sidebar() {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [isOpen, setIsOpen] = useState(true);
    const path = usePathname();
    const tabActive = path.split('/')[1];

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        if (isSmallScreen) {
            setIsOpen(false);
        }
    }, [isSmallScreen]);
    return (
        <>
            {/* Side bar toggle button */}
            <IconButton
                className={`app__sideBarToggler ${!isOpen ? 'closed' : ''}`}
                onClick={toggleDrawer}
            >
                <Image
                    src={
                        isOpen
                            ? '/img/sideBarIcons/sideBarToggleClose.svg'
                            : '/img/sideBarIcons/sideBarToggleOpen.svg'
                    }
                    alt="toggleIcon"
                    width={48}
                    height={48}
                />
            </IconButton>

            {/* Side bar*/}
            <Drawer className="app__sideBar" open={isOpen} variant="permanent">
                <Box className={`avatar ${isOpen ? 'expanded' : 'collapsed'}`}>
                    <Avatar className="custom-avatar" alt={userInfo.name}>
                        {userInfo.name ? userInfo.name.charAt(0) : 'U'}{' '}
                    </Avatar>
                    <Typography className="username">
                        {userInfo.name || 'Unknown User'}
                    </Typography>
                </Box>

                <MenuList isOpen={isOpen} tabActive={tabActive} />
                <Box sx={{mt: 'auto'}}>
                    <Sidebarfooter isOpen={isOpen} />
                </Box>
            </Drawer>
        </>
    );
}
