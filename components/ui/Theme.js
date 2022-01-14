import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#ef9a9a'
        },
        secondary: {
            main: '#f50057'
        },
        text: {
            primary: '#000000'
        },
        error: {
            main: '#FF6363'
        },
        success: {
            main: '#BAFFB4'
        },
        info: {
            main: '#99FEFF'
        },
        warning: {
            main: '#FFC600'
        },
        background: {
            paper: '#FDEFEF'
        }
    },
    typography: {
        fontFamily: 'Poppins',
        fontWeightBold: 900,
        fontWeightMedium: 700,
        fontWeightRegular: 600,
        fontWeightLight: 500,
        htmlFontSize: 16,
        fontSize: 14
    }
});

export default theme;