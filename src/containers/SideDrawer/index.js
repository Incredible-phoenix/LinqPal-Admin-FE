
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import { sidebarItems } from 'utils/links/pages';
import SideDrawerList from './SideDrawerList';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: theme.custom.layout.drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: theme.custom.layout.drawerWidth,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.sideDrawer,
  },
  header: {
    display: 'flex',
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  appTitle: {
    marginLeft: theme.spacing(3)
  }
}));

const SideDrawer = ({ history, isOpenSidebar }) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Drawer
      variant='persistent'
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
      anchor='left'
      open={isOpenSidebar}>
      <SideDrawerList
        history={history}
        menuItems={sidebarItems}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex} />
    </Drawer>
  );
};

export default withRouter(SideDrawer);
