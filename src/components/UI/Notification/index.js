import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactNotification from 'react-notifications-component';
import CancelIcon from 'components/Icons/CancelIcon';
import CloseIcon from 'components/Icons/CloseIcon';
import ConfirmIcon from 'components/Icons/ConfirmIcon';
import 'react-notifications-component/dist/theme.css';

const useStyles = makeStyles(theme => ({
    container: {
        width: '100vw',
        '& > div': {
            width: 440
        }
    },
    content: {
        position: 'relative',
        background: theme.palette.primary.light,
        width: 440,
        minHeight: 56,
        padding: theme.spacing(2),
        border: `1px solid ${theme.palette.text.secondary}`,
        display: 'flex',
        alignItems: 'center',
        borderRadius: theme.spacing(3 / 8),
        boxShadow: theme.shadows[2],
        color: theme.palette.text.notification,
        userSelect: 'none'
    },
    icon: {
        marginRight: theme.spacing(2)
    },
    closeIcon: {
        position: 'absolute',
        top: theme.spacing(1.5),
        right: theme.spacing(1.5),
        width: theme.spacing(1.5),
        height: theme.spacing(1.5)
    }
}));

export const NotificationContent = ({ message, isError }) => {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            {isError ? <CancelIcon className={classes.icon} /> : <ConfirmIcon className={classes.icon} />}
            {message}
            <CloseIcon className={classes.closeIcon} />
        </div>
    );
};

const Notification = ({ language, ...rest }) => {
    const classes = useStyles();

    return (
        <ReactNotification
            className={classes.container}
        />
    );
}

export default Notification;