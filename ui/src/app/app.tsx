import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { yellow, lime } from '@material-ui/core/colors';

import { useCurrentUser } from '@/core/auth';
import { useForcedDelay, AsyncRender } from '@/core/async';
import { LoginPage } from '@/features/auth/login-page';
import { SplashScreen } from '@/features/splash-screen';
import { UserDashboard } from '@/features/user-dashboard';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lime['A400'],
    },
    secondary: {
      main: yellow[500],
    },
    type: 'dark',
  },
  typography: {
    useNextVariants: true,
  },
});

function App() {
  let asyncUser = useCurrentUser();
  asyncUser = useForcedDelay(asyncUser, 1000);

  return (
    <MuiThemeProvider theme={theme}>
      <AsyncRender
        asyncData={asyncUser}
        whenReady={(user) => {
          const isLoggedIn = Boolean(user);
          if (isLoggedIn) {
            return <UserDashboard />;
          }
          return <LoginPage />;
        }}
        whenPending={() => <SplashScreen />}
      />
    </MuiThemeProvider>
  );
}

export default App;
