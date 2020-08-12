
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import LogoTitle from 'containers/Auth/LogoTitle';

const useStyles = makeStyles(theme => ({
    container: {
        paddingLeft: 0,
        paddingRight: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: "80%",
        height: '100vh',
        backgroundColor: theme.palette.background.main,
        justifyContent: 'space-around'
    },
    mainlayout: {
        justifyContent: 'center',
        backgroundColor: theme.palette.background.default,
        width: theme.spacing(40),
        minheight: theme.spacing(60),
    },
}));
const authPageStyles = makeStyles(theme => ({
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(3),
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(0),
        },
    },
    checkTop: { paddingtop: theme.spacing(2.5) },
    bottom: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'row',
            paddingBottom: theme.spacing(1.5),
            marginTop: theme.spacing(2),
            width: '100%',
            justifyContent: 'space-evenly'
        },
    },
    center: {
        marginTop: theme.spacing(1.5),
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(1.5)
        },
    }
}));
const AuthWrapper = ({ children }) => {
    const classes = useStyles();

    return (
        <Container className={classes.container} maxWidth='sm'>
            <div className={classes.mainlayout}>
                <LogoTitle className={classes.logoTitle} />
                {children}
            </div>
        </Container>
    );
};

export { authPageStyles };
export default AuthWrapper;