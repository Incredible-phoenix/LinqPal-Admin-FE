import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: 14,
    fontWeight: 300,
    padding: `0 ${theme.spacing(0.5)}px`
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const Cell = ({ children, className, center, ...rest }) => {
  const classes = useStyles();

  return (
    <td className={clsx(classes.root, className)} {...rest}>
      {center ?
        <div className={classes.center}>
          {children}
        </div>
        : children
      }
    </td>
  );
}

export default Cell;