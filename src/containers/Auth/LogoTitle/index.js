
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        marginTop: theme.spacing(4),
        width: theme.spacing(17.7),
        height: theme.spacing(17.7),
        backgroundColor: theme.palette.background.main,
        margin: 'auto',
    },
    roots: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
            backgroundColor: 'transparent !important'
        }
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: theme.custom.palette.lightGrey,
        margin: theme.spacing(2)
    },
    leftLine: {
        marginLeft: 0
    },
    rightLine: {
        marginRight: 0
    }
}));

const LogoTitle = ({ title, className }) => {
    const classes = useStyles();

    return (
        <Avatar className={classes.root}>
            <Typography variant='h4'>
                {title}
            </Typography>
        </Avatar>
    );
};

export default LogoTitle;