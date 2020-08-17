import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    borderSpacing: '0 12px'
  }
}));

const Table = ({ children }) => {
  const classes = useStyles();

  return (
    <table className={classes.root}>
      {children}
    </table>
  );
}

export default Table;