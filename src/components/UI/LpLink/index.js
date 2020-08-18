

import React from 'react';
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    fontWeight: 300,
    padding: `0 ${theme.spacing(0.5)}px`,
    borderBottom: `1px solid ${theme.palette.primary.light}`,
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      color: theme.palette.secondary.main
    }
  }
}));

const LpLink = ({ className, children, ...rest }) => {
  const classes = useStyles();

  return (
    <Link
      className={clsx(classes.root, className)}
      variant='caption'
      {...rest}>
      {children}
    </Link>
  );
};

export default LpLink;
