import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: theme.spacing(4),
    backgroundColor: theme.custom.palette.lightBlue, // `${theme.palette.primary.light}4D`,
    // backgroundColor: 'green',
    '& th:first-child': {
      borderTopLeftRadius: theme.spacing(3 / 8),
      borderBottomLeftRadius: theme.spacing(3 / 8),
    },
    '& th:last-child': {
      borderTopRightRadius: theme.spacing(3 / 8),
      borderBottomRightRadius: theme.spacing(3 / 8),
    },
    '& th': {
      // fontWeight: 300,
      textAlign: 'left',
      // fontSize: theme.spacing(1.5),
      color: theme.palette.text.secondary
    }
  },
}));

const HeaderRow = ({ data, children }) => {
  const classes = useStyles();

  return (
    <thead>
      <tr className={classes.root}>
        {children}
      </tr>
    </thead>
  );
}

export default HeaderRow;