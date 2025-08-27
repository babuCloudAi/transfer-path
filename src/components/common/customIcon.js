import {Icon} from '@iconify-icon/react';

export const CustomIcon = props => {
    return (
        <Icon
            className={props.className}
            icon={props.icon}
            width={props.width ?? '26px'}
            height={props.height ?? '26px'}
            {...props}
        />
    );
};
