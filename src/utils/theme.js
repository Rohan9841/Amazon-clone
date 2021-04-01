import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#461D7C',
        },
        secondary: {
            main: '#FDD023'
        },
        border: {
            main: '#a88734 #9c7e31 #846a29'
        },
        white: {
            main: '#FFFFFF'
        },
        black: {
            main: '#131931'
        },
        yellow: {
            main: '#cd9042'
        },
        button: {
            main: '#f0c14b'
        },
        grey: {
            main: '#f3f3f3'
        }
        // type: 'dark'
    },
});

export default theme;