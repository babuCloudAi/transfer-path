import {List} from '@mui/material';
import MenuItem from './menuItem';

export default function MenuList({isOpen, tabActive}) {
    return (
        <List
            sx={{
                p: isOpen ? 1 : 0
            }}
        >
            <MenuItem
                title="Home"
                icon="ic:sharp-home"
                tabRoute="/"
                isOpen={isOpen}
                isActive={tabActive === '' || tabActive === 'home'}
            />
            <MenuItem
                title="Evaluation History"
                icon="basil:clock-outline"
                tabRoute="/evaluationHistory"
                isOpen={isOpen}
                isActive={tabActive === 'evaluationHistory'}
            />
        </List>
    );
}
