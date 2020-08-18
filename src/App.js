
import 'typeface-roboto';
import React, { Suspense, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';

import theme from 'styles/theme';
import Layout from 'hoc/Layout';
import { AppContext } from 'contexts';
import { PAGES, sidebarItems } from 'utils/links/pages';
import { useAuth } from './utils/hooks';

const DELAY_TIME = 100;

const SignIn = loadable(() => pMinDelay(import('containers/Auth/SignIn'), DELAY_TIME));
const ForgotPassword = loadable(() => pMinDelay(import('containers/Auth/ForgotPassword'), DELAY_TIME));
const ResetPassword = loadable(() => pMinDelay(import('containers/Auth/ResetPassword'), DELAY_TIME));
const SignOut = loadable(() => pMinDelay(import('containers/Auth/SignOut'), DELAY_TIME));
const Home = loadable(() => pMinDelay(import('containers/Home'), DELAY_TIME));
const Dashboard = loadable(() => pMinDelay(import('containers/Dashboard'), DELAY_TIME));
const Users = loadable(() => pMinDelay(import('containers/Users'), DELAY_TIME));

const App = () => {
  const { isLoggedIn } = useAuth();
  const [isOpenSidebar, setOpenSidebar] = useState(true);
  const [loadingInfo, setLoading] = useState(false); // setLoading(true or false) or setLoading({label: 'Please wait'})

  let sidebarSubItems = [];
  sidebarItems.forEach((sidebarItem) => {
    if (sidebarItem.link) {
      sidebarSubItems = [...sidebarSubItems, sidebarItem];
    }
    if (sidebarItem.subItems) {
      sidebarSubItems = [...sidebarSubItems, sidebarItem.subItems];
    }
  });

  return (
    <AppContext.Provider
      value={{
        isOpenSidebar,
        setOpenSidebar,
        loadingInfo,
        setLoading,
      }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route render={() => (
              isLoggedIn ?
                <Layout>
                  <Switch>
                    <Route exact path={PAGES.DASHBOARD} component={Dashboard} />
                    <Route exact path={PAGES.USERS} component={Users} />
                    <Route exact path={PAGES.HOME} component={Home} />
                    <Redirect to={PAGES.HOME} />
                  </Switch>
                </Layout> :
                <Switch>
                  <Route exact path={PAGES.SIGN_IN} component={SignIn} />
                  <Route exact path={PAGES.FORGOT_PASSWORD} component={ForgotPassword} />
                  <Route exact path={PAGES.RESET_PASSWORD} component={ResetPassword} />
                  <Route exact path={PAGES.SIGN_OUT} component={SignOut} />
                  <Redirect to={PAGES.SIGN_IN} />
                </Switch>
            )} />
          </Switch>
        </Suspense>
      </ThemeProvider>
    </AppContext.Provider>
  )
};

export default App;
