import React from 'react';

import { useCurrentUser } from '@/core/auth';
import { useForcedDelay, AsyncRender } from '@/core/async';
import { Login } from '@/features/auth/login';
import { SplashScreen } from '@/features/splash-screen';
import { UserDashboard } from '@/features/user-dashboard';

function App() {
  let asyncUser = useCurrentUser();
  asyncUser = useForcedDelay(asyncUser, 1000);

  return <AsyncRender
    asyncData={asyncUser}
    whenReady={(user) => {
      const isLoggedIn = Boolean(user);
      if (isLoggedIn) {
        return <UserDashboard />;
      }
      return <Login />;
    }}
    whenPending={() => <SplashScreen />}
  />;
}

export default App;
