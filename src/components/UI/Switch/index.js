
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const AntSwitch = withStyles(theme => ({
  root: {
    width: 36,
    height: 20,
    borderRadius: 10,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 4,
    color: theme.palette.background.default, // off color
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.error.main, // on background
        borderColor: theme.palette.error.main // on border
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.text.secondary}`, // off border 
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor: theme.palette.text.secondary, // off background
  },
  checked: {},
  disabled: {
    opacity: 0.4,
    '&$checked': {
      opacity: 0.4,
      '& + $track': {
        opacity: 0.4,
      },
    },
  }
}))(Switch);

const LpSwitch = ({ className, label, onChange = () => { }, checked = true, disabled, ...rest }) => {
  return (
    <Typography className={className} component="div" variant='caption' color='textSecondary'>
      <Grid id='gogogo' component='label' container alignItems='center' spacing={1}>
        <Grid item>
          <AntSwitch
            checked={checked}
            onChange={onChange}
            value="checkedC"
            disabled={disabled}
            {...rest}
          />
        </Grid>
        <Grid item style={{ cursor: 'pointer' }}>{label}</Grid>
      </Grid>
    </Typography>
  );
}

export default LpSwitch;