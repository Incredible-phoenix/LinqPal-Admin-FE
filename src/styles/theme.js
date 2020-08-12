
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme({
    palette: {
        primary: {
            light: '#292b40',
            main: '#141720',
            dark: '#115293',
            contrastText: '#fff',
        },
        secondary: {
            light: '#555e6c',
            main: '#2b3648',
            dark: '#1e2532',
            contrastText: '#fff'
        },
        error: {
            light: '#ff3333',
            main: '#ff0000',
            dark: '#b20000',
            contrastText: '#fff'
        },
        background: {
            default: '#292C40',
            sideDrawer: '#0f1118',
            selectedMenu: '#141720',
            main: '#232637'
        },
        text: {
            primary: '#fff',
            secondary: '#585c75',
            inactiveSubMenu: '#92959e'
        },
    },
    custom: {
        palette: {
            green: '#4caf50',
            blueGrey: '#5c739c',
            lightGrey: '#31373f',
            darkRed: '#ba1a48'
        },
        layout: {
            topAppBarHeight: 80,
            footerHeight: 173,
            drawerWidth: 268,
        },
    }

}));

export default theme;