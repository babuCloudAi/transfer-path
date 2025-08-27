'use client';

import {createTheme, responsiveFontSizes} from '@mui/material/styles';
import {Roboto} from 'next/font/google';

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'] // pick weights you need
});

export const theme = responsiveFontSizes(
    createTheme({
        typography: {
            fontFamily: roboto.style.fontFamily
        }
    })
);
