import React, { useState } from 'react';
import Typograhpy from '@material-ui/core/Typography';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TrashIcon from 'components/Icons/TrashIcon';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    height: theme.spacing(3),
    padding: `0 ${theme.spacing(2)}px 0 ${theme.spacing(1)}px`
  },
  label: {
    color: theme.palette.error.main,
    marginRight: theme.spacing(10 / 8),
    textDecoration: 'underline'
  },
  hoverColor: {
    color: theme.palette.error.light
  }
}));

const DeleteButton = props => {
  const classes = useStyles();
  const [isHover, setIsHover] = useState(false);

  const onEnter = () => {
    setIsHover(true)
  };

  const onLeave = () => {
    setIsHover(false);
  };

  return (
    <div className={classes.root}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      {...props}>
      <Typograhpy variant='body2' className={clsx(classes.label, isHover && classes.hoverColor)}>
        delete
      </Typograhpy>
      <TrashIcon
        color={isHover && '#EE2741'} />
    </div>
  );
}

export default DeleteButton;