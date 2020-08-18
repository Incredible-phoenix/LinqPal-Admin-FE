import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from 'contexts';
import clsx from 'clsx';

import SideDrawer from 'containers/SideDrawer';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    body: {
        display: 'flex',
        backgroundColor: theme.palette.background.default
    },
    main: {
        flexGrow: 1,
        marginTop: theme.custom.layout.topAppBarHeight,
        minHeight: `calc(100vh - ${theme.custom.layout.topAppBarHeight}px)`,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -theme.custom.layout.drawerWidth,
    },
    mainShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

const Layout = ({ children }) => {
    const classes = useStyles();
    const { isOpenSidebar, setOpenSidebar } = useContext(AppContext);

    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <SideDrawer
                    isOpenSidebar={isOpenSidebar}
                    setOpenSidebar={setOpenSidebar} />
                <main
                    className={clsx(classes.main, {
                        [classes.mainShift]: isOpenSidebar,
                    })}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;