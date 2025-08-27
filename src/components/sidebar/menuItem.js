import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Tooltip
} from '@mui/material';
import Link from 'next/link';
import {CustomIcon} from '../common';

export default function MenuItem({title, icon, isOpen, isActive, tabRoute}) {
    return (
        <ListItem
            key={title}
            disableGutters
            disablePadding
            className={`${
                isActive ? (isOpen ? 'active' : 'collapsedActive') : ''
            }`}
            sx={{
                display: 'block'
            }}
        >
            <Tooltip title={!isOpen ? title : ''} placement="right">
                <ListItemButton
                    component={Link}
                    href={tabRoute}
                    className={'menuButton'}
                    sx={{
                        pl: !isOpen ? 0 : undefined,
                        pr: 0
                    }}
                >
                    <ListItemIcon
                        className={`listIcon ${!isOpen && 'iconCollapsed'}`}
                    >
                        <CustomIcon
                            icon={icon}
                            className={`${
                                isActive
                                    ? isOpen
                                        ? 'icon-active'
                                        : 'collapsedActive'
                                    : ''
                            }`}
                        />
                    </ListItemIcon>

                    {isOpen && (
                        <ListItemText primary={title} className="title" />
                    )}
                </ListItemButton>
            </Tooltip>
        </ListItem>
    );
}
