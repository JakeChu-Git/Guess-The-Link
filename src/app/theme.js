'use client';
import { Nunito } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const nunito = Nunito({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: nunito.style.fontFamily,
    h4: {
      fontWeight: 900,
    },
    h5: {
      fontWeight: 800,
    },
    body1: {
      fontWeight: 900,
    },
  },
});

export default theme;
