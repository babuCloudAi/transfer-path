'use client';

import React, {useState} from 'react';
import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    OutlinedInput,
    Chip,
    FormHelperText,
    Checkbox,
    ListItemText
} from '@mui/material';

const programs = [
    'Program from student RFI',
    'Computer Science',
    'Business Administration',
    'Mechanical Engineering',
    'Psychology'
];

export default function ProgramsOfInterest() {
    const [selected, setSelected] = useState([]);

    const handleChange = event => {
        const {
            target: {value}
        } = event;

        const newValue = typeof value === 'string' ? value.split(',') : value;

        if (newValue.length <= 3) {
            setSelected(newValue);
        }
    };

    const handleDelete = itemToDelete => {
        setSelected(prev => prev.filter(item => item !== itemToDelete));
    };

    return (
        <FormControl fullWidth>
            <InputLabel required>Program(s) of Interest</InputLabel>
            <Select
                multiple
                value={selected}
                onChange={handleChange}
                input={<OutlinedInput label="Program(s) of Interest" />}
                renderValue={selected => (
                    <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                        {selected.map(val => (
                            <Chip
                                key={val}
                                label={val}
                                color="primary"
                                onDelete={() => handleDelete(val)}
                                onMouseDown={e => e.stopPropagation()}
                            />
                        ))}
                    </Box>
                )}
            >
                {programs.map(program => (
                    <MenuItem
                        key={program}
                        value={program}
                        disabled={
                            selected.length >= 3 && !selected.includes(program)
                        }
                    >
                        <Checkbox checked={selected.indexOf(program) > -1} />
                        <ListItemText primary={program} />
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>Maximum of 3</FormHelperText>
        </FormControl>
    );
}
