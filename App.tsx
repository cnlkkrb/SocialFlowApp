import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/theme/theme';

import { useAtom } from 'jotai';
import { loggedInAtom } from './src/utils/atom';
import SignInNavigator from './src/navigations/sign-in-navigator';
import NotSignInNavigator from './src/navigations/not-sign-in-navigator';


const App = () => {
  const [loggedIn, setLoggedIn] = useAtom(loggedInAtom);
  return (
    <>
      {loggedIn ? <SignInNavigator /> : <NotSignInNavigator />}
    </>
  );
};

const AppRoot = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

export default AppRoot;
