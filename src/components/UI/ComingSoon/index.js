
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
}));

const ComingSoon = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h5' color='textSecondary'>Coming Soon <br /><br /></Typography>
    </div>
  );
}

export default ComingSoon;