import React from 'react';
import clsx from 'clsx';
import Typograhpy from '@material-ui/core/Typography';
import ArrowDownIcon from 'components/Icons/ArrowDownIcon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    // width: 372,
    height: theme.spacing(4.5),
    display: 'flex',
    userSelect: 'none',
    '& > div': {
      borderRadius: theme.spacing(3 / 8)
    }
  },
  prev: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.spacing(4.5),
    height: '100%',
    background: theme.palette.primary.light
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.primary.light,
    margin: `0px ${theme.spacing(3)}px`,
  },
  arrowLeft: {
    transform: 'rotate(90deg) scale(1.5)'
  },
  arrowRight: {
    transform: 'rotate(-90deg) scale(1.5)'
  },
  firstLast: {
    cursor: 'pointer',
    padding: `0px ${theme.spacing(2.5)}px`,
  },
  disabled: {
    color: theme.palette.text.secondary
  },
  pageNumber: {
    padding: `0px ${theme.spacing(1)}px`,
    cursor: 'pointer'
  }
}));

const disabledColor = '#555E7F';

const Paginator = ({ totalPages = 1, currentPage = 1, setCurrentPage }) => {
  const classes = useStyles();
  const firstPage = currentPage - 2 <= 0 ? 1 : currentPage - 2;
  let visiblePages = [firstPage, firstPage + 1, firstPage + 2, firstPage + 3, firstPage + 4];
  if (firstPage + 4 > totalPages) {
    visiblePages = visiblePages.map(page => page - (firstPage + 4 - totalPages));
  }
  visiblePages = visiblePages.filter(item => item > 0);

  const changePageHandler = page => () => {
    setCurrentPage(page);
  };

  return (
    <div className={classes.root}>
      <div className={classes.prev} onClick={changePageHandler(currentPage === 1 ? 1 : currentPage - 1)}>
        <ArrowDownIcon className={classes.arrowLeft} color={currentPage === 1 && disabledColor}/>
      </div>

      <div className={classes.main}>
        <Typograhpy
          variant='caption'
          className={clsx(classes.firstLast, currentPage === 1 && classes.disabled)}
          onClick={changePageHandler(1)}>
          First
        </Typograhpy>
        {visiblePages.map(page => (
          <Typograhpy
            key={page}
            variant='caption'
            className={clsx(classes.pageNumber, page !== currentPage && classes.disabled)}
            onClick={changePageHandler(page)}>
            {page}
          </Typograhpy>
        ))}
        <Typograhpy
          variant='caption'
          className={clsx(classes.firstLast, currentPage === totalPages && classes.disabled)}
          onClick={changePageHandler(totalPages)}>
          Last
        </Typograhpy>
      </div>

      <div className={classes.prev} onClick={changePageHandler(Math.min(currentPage + 1, totalPages))}>
        <ArrowDownIcon className={classes.arrowRight} color={currentPage === totalPages && disabledColor} />
      </div>
    </div>
  );
}

export default Paginator;