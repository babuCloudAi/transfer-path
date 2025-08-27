'use client';

import {TextField} from '@mui/material';

export function CustomTextField({
    label,
    placeholder,
    value,
    onChange,
    required = false,
    fullWidth = true,
    type = 'text',
    error = false,
    helperText = '',
    ...props
}) {
    return (
        <TextField
            label={label}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            fullWidth={fullWidth}
            type={type}
            helperText={required && 'Required'}
            {...props}
        />
    );
}
