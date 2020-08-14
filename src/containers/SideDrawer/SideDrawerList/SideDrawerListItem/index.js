
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import DotIcon from 'components/Icons/DotIcon';
import ArrowDownIcon from 'components/Icons/ArrowDownIcon';
import ArrowUpIcon from 'components/Icons/ArrowUpIcon';
import clsx from 'clsx';
import { useAuth } from 'utils/hooks';

const useStyles = makeStyles(theme => ({
  listItem: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: theme.spacing(2, 3),
  },
  selectedItem: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.background.selectedMenu,
  },
  menuIcon: {
    minWidth: theme.spacing(5),
    color: theme.palette.primary.contrastText,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 400
  },
  subItem: {
    color: theme.palette.text.inactiveSubMenu,
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
  },
  unselectedsubItem: {
    color: theme.palette.text.inactiveSubMenu,
  },
  selectedSubItem: {
    color: theme.palette.primary.contrastText,
  },
  subItemDot: {
    transform: 'scale(0.5)',
    marginLeft: theme.spacing(5),
  },
  signOut: {
    marginTop: 'auto',
    marginBottom: theme.spacing(2)
  },
  signOutColor: {
    color: theme.palette.error.main,
  }
}));

const SideDrawerListItem = ({ history, item, selected, onClick, isSignOut, permissions }) => {
  const classes = useStyles();
  const { logOutHandler } = useAuth();

  const clickHandler = () => {
    onClick();
    if (item.subItems.length === 0 && item.link) {
      navTo(item.link);
    }
  }

  const navTo = link => {
    if (isSignOut) {
      logOutHandler();
    }
    history.push(link);
  }

  return (
    <>
      <ListItem
        button
        className={clsx(classes.listItem, selected && classes.selectedItem, isSignOut && classes.signOut)}
        onClick={clickHandler}>
        <ListItemIcon className={classes.menuIcon}>
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={item.title}
          classes={{
            primary: classes.itemTitle
          }}
          className={isSignOut && classes.signOutColor} />
        {item.subItems.length > 0 &&
          (selected ?
            <ArrowUpIcon /> :
            <ArrowDownIcon />)
        }
      </ListItem>
      {item.subItems.length > 0 &&
        <Collapse
          className={clsx(selected && classes.selectedItem)}
          in={selected}
          timeout='auto'
          unmountOnExit>
          <List component='div' disablePadding>
            {item.subItems.map((subItem, index) => {
              const isCurrentMenu = subItem.link === history.location.pathname;
              // const visible = role === ROLE_TYPES.SUPER_ADMIN || !subItem.roles;
              const visible = permissions.some(item => (subItem.permissions || []).includes(item));
              if (!visible) {
                return null;
              }
              return (
                <ListItem
                  className={clsx(classes.subItem, isCurrentMenu && classes.selectedSubItem)}
                  key={`${subItem.subTitle}-${index}`}
                  button
                  onClick={() => navTo(subItem.link)}>
                  <ListItemIcon>
                    <DotIcon
                      className={clsx(classes.subItemDot,
                        isCurrentMenu && classes.selectedSubItem,
                        !isCurrentMenu && classes.unselectedsubItem)} />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemTitle
                    }}>
                    {subItem.subTitle}
                  </ListItemText>
                </ListItem>
              );
            }
            )}
          </List>
        </Collapse>
      }
    </>
  );
}

export default SideDrawerListItem;