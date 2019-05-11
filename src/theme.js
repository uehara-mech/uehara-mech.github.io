import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import lightblue from '@material-ui/core/colors/lightBlue';
import grey from '@material-ui/core/colors/grey';

import * as config from './config';

export const theme = createMuiTheme({
    mixins: {
        toolbar: {
            minHeight: "50px"
        }
    },
    palette: {
        primary: {
            main: "#F8F8F8",
        },
        secondary: {
            main: "#E10051"
        },
        text: {
            primary: '#000',
            secondary: '#3a3a3a'
        },
        background: {
            main: '#fff'
        },
        textwhite: '#fff',
    },
    typography: {
        useNextVariants: true,
    },
});

export const dark_theme = createMuiTheme({
    mixins: {
        toolbar: {
            minHeight: `${config.drawerHeight}px`
        }
    },
    palette: {
        primary: {
            main: "#4c4c4c",
        },
        secondary: lightblue,
        text: {
            primary: '#e8e8e8',
            secondary: '#e8e8e8'
        },
        background: {
            paper: "#323232",
            default: '#4C4C4C'
        },
        titleText: "#fff",
        windowBack: "#262626",
        containerBack: "#323232",
        cardHeader: "#323232",
        sidebar: "#3E3E3E",
        labelBack: "#2A2A2A",
        containerBorder: "#636363",
        free: "#129cd2",
        alert: "#a51f1d",
        used: "#c78e45",
        expandIcon: "#e8e8e8",
        tableHead: grey[800],
        tableBorder: "#636363"
    },
    typography: {
        useNextVariants: true,
    },
});