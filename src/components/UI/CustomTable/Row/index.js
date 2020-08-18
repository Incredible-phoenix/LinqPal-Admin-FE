import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: theme.spacing(7.5),
    boxShadow: '0 3px 8px 0 rgba(0,0,0,0.15)',
    backgroundColor: theme.palette.primary.light,
    transition: 'ease-out 0.3s',
    userSelect: 'none',
    '& td:first-child': {
      borderTopLeftRadius: theme.spacing(3 / 8),
      borderBottomLeftRadius: theme.spacing(3 / 8),
    },
    '& td:last-child': {
      borderTopRightRadius: theme.spacing(3 / 8),
      borderBottomRightRadius: theme.spacing(3 / 8),
    },
    '&:hover': {
      backgroundColor: `${theme.palette.text.secondary}60`,
      transform: 'translateY(-1px)'
    }
  },
}));

const Row = ({ children }) => {
  const classes = useStyles();

  return (
    <tr className={classes.root}>
      {children}
    </tr>
  );
}

export default Row;