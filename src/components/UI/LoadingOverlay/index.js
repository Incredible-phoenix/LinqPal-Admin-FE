import React from 'react';
import Typography from '@material-ui/core/Typography';
import LoadingSpinner from '../LoadingSpinner';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: theme.spacing(4)
  },
  loadingLabel: {
    fontSize: theme.spacing(2.5)
  }
}));

const LoadingOverlay = ({ loading, label, }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LoadingSpinner
        loading={loading} />
      { label &&
        <Typography
          className={classes.loadingLabel}>
          {label}
        </Typography>
      }
    </div>
  );
};

export default LoadingOverlay;