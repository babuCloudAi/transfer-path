'use client';

import {CustomIcon} from '@/components/common';
import {
    Box,
    Typography,
    TextField,
    InputAdornment,
    IconButton,
    Button,
    Menu,
    FormControlLabel,
    Checkbox,
    RadioGroup,
    Radio,
    Chip
} from '@mui/material';
import {useState, useEffect} from 'react';

const institutionTypes = [
    'VCCS',
    'Community Colleges',
    'Virginia In-State Colleges',
    'Out-of-State Colleges'
];

const sortOptions = [
    {label: 'Oldest to newest', value: 'oldest'},
    {label: 'Newest to oldest', value: 'newest'},
    {label: 'Student Name A - Z', value: 'az'},
    {label: 'Student Name Z - A', value: 'za'}
];

export default function Header({
    searchText,
    setSearchText,
    selectedInstitutions,
    setSelectedInstitutions,
    selectedSort,
    setSelectedSort,
    onApplyFilters // 👈 new callback
}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    // Temporary states for filter menu
    const [tempSort, setTempSort] = useState(selectedSort);
    const [tempInstitutions, setTempInstitutions] =
        useState(selectedInstitutions);

    // Sync temporary states when menu opens
    useEffect(() => {
        if (open) {
            setTempSort(selectedSort);
            setTempInstitutions(selectedInstitutions);
        }
    }, [open, selectedSort, selectedInstitutions]);

    const handleFilterClick = e => setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleInstitutionToggle = type => {
        setTempInstitutions(prev =>
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        );
    };

    const handleApplyFilters = () => {
        setSelectedSort(tempSort);
        setSelectedInstitutions(tempInstitutions);
        handleClose();
        if (onApplyFilters) onApplyFilters(); // 👈 trigger loading skeletons
    };

    const handleClearFilters = () => {
        setTempSort('newest');
        setTempInstitutions([]);
    };

    const handleRemoveChip = label => {
        setSelectedInstitutions(prev => prev.filter(t => t !== label));
    };

    return (
        <>
            <Box className="header">
                {/* Left info section */}
                <Box className="header__info" width={'100%'}>
                    <Typography className="title">
                        Open Evaluation Requests
                    </Typography>
                    <Typography className="subTitle">
                        You currently have 7 transcripts awaiting review
                    </Typography>
                </Box>

                {/* Search + filter actions */}
                <Box className="header__actions" width={'100%'}>
                    <TextField
                        size="small"
                        placeholder="Search transcript cases"
                        className="header__search"
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <CustomIcon
                                        icon="mdi:magnify"
                                        width="20"
                                        height="20"
                                    />
                                </InputAdornment>
                            )
                        }}
                    />

                    <IconButton
                        onClick={handleFilterClick}
                        className="header__filterButton"
                    >
                        <CustomIcon
                            icon="fluent-mdl2:filter-solid"
                            width="24"
                            height="24"
                        />
                    </IconButton>
                </Box>

                {/* Filter & Sort Menu */}
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    classes={{paper: 'header__menuPaper'}}
                >
                    <Box className="header__menu">
                        <Box className="header__subMenu">
                            {/* Sorting section */}
                            <Box flex={1}>
                                <Typography
                                    variant="subtitle2"
                                    className="header__menuTitle"
                                >
                                    Sort By
                                </Typography>
                                <RadioGroup
                                    value={tempSort}
                                    onChange={e => setTempSort(e.target.value)}
                                >
                                    {sortOptions.map(option => (
                                        <FormControlLabel
                                            key={option.value}
                                            value={option.value}
                                            control={<Radio size="small" />}
                                            label={option.label}
                                        />
                                    ))}
                                </RadioGroup>
                            </Box>

                            {/* Institution filter section */}
                            <Box flex={1}>
                                <Typography
                                    variant="subtitle2"
                                    className="header__menuTitle"
                                >
                                    Filter by Institution Type
                                </Typography>
                                {institutionTypes.map(type => (
                                    <FormControlLabel
                                        className="header__filterLabel"
                                        key={type}
                                        control={
                                            <Checkbox
                                                size="small"
                                                checked={tempInstitutions.includes(
                                                    type
                                                )}
                                                onChange={() =>
                                                    handleInstitutionToggle(
                                                        type
                                                    )
                                                }
                                            />
                                        }
                                        label={type}
                                    />
                                ))}
                            </Box>
                        </Box>

                        {/* Footer actions */}
                        <Box className="header__menuActions">
                            <Button
                                size="small"
                                variant="outlined"
                                onClick={handleClearFilters}
                            >
                                CLEAR ALL
                            </Button>
                            <Button
                                size="small"
                                variant="contained"
                                onClick={handleApplyFilters}
                            >
                                APPLY
                            </Button>
                        </Box>
                    </Box>
                </Menu>
            </Box>

            {/* Applied filters as chips */}
            {(selectedInstitutions.length > 0 || selectedSort !== 'newest') && (
                <Box className="header__filters">
                    <Box display={'flex'} gap={2} flexWrap="wrap">
                        <Typography className="header__filtersLabel">
                            Applied Filters |
                        </Typography>

                        {selectedInstitutions.map(filter => (
                            <Chip
                                key={filter}
                                label={filter}
                                onDelete={() => handleRemoveChip(filter)}
                                variant="outlined"
                                size="small"
                                className="header__chip"
                            />
                        ))}

                        {selectedSort !== 'newest' && (
                            <Chip
                                label={
                                    sortOptions.find(
                                        s => s.value === selectedSort
                                    )?.label
                                }
                                onDelete={() => setSelectedSort('newest')}
                                variant="outlined"
                                size="small"
                                className="header__chip"
                            />
                        )}
                    </Box>
                    <Button
                        size="small"
                        className="header__clear"
                        onClick={() => {
                            setSelectedSort('newest');
                            setSelectedInstitutions([]);
                            if (onApplyFilters) onApplyFilters(); // reset also shows loading
                        }}
                        endIcon={
                            <CustomIcon
                                icon="ic:round-clear"
                                width="18"
                                height="18"
                            />
                        }
                    >
                        CLEAR ALL
                    </Button>
                </Box>
            )}
        </>
    );
}
