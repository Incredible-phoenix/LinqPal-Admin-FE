
import React from 'react';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        cursor: 'pointer',
        backgroundColor: theme.palette.background.default,
    },
    rect: {
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        left: '50%',
        top: '50%',
        width: `calc(100% - ${theme.spacing(4)}px)`,
        padding: `${theme.spacing(5)}px ${theme.spacing(4)}px`,
        background: theme.palette.primary.light,
        boxShadow: theme.shadows[10],
        borderRadius: theme.spacing(3 / 8),
        [theme.breakpoints.up('sm')]: {
            width: 560
        },
    },
    smallRect: {
        [theme.breakpoints.up('sm')]: {
            width: 360
        },
    },
    appLogo: {
        cursor: 'pointer',
        margin: `0 auto`,
    }
}));

const formStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    center: {
        alignItems: 'center',
        textAlign: 'center'
    },
    topSpacing: {
        marginTop: theme.spacing(4)
    },
    topSmallSpacing: {
        marginTop: theme.spacing(2)
    },
    oneLine: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rightAlign: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    forgotPassword: {
        marginTop: theme.spacing(1),
        marginLeft: 'auto'
    }
}));

const AuthWrapper = ({ smallWidth, children, history }) => {
    const classes = useStyles();

    return (
        <>
            <div className={clsx(classes.rect, smallWidth && classes.smallRect)}>
                {children}
            </div>
        </>
    );
};

export { formStyles };
export default withRouter(AuthWrapper);