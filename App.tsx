import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/theme/theme';

import { useAtom } from 'jotai';
import { loggedInAtom, userDataAtom } from './src/utils/atom';
import SignInNavigator from './src/navigations/sign-in-navigator';
import NotSignInNavigator from './src/navigations/not-sign-in-navigator';
import { QueryClient, QueryClientProvider } from 'react-query';


const App = () => {
  const [loggedIn] = useAtom(loggedInAtom);
  const queryClient = new QueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>
      {loggedIn ? <SignInNavigator /> : <NotSignInNavigator />}
    </QueryClientProvider>
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
