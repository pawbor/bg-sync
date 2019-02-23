import firebase from 'firebase/app';
import React from 'react';

import { pendingData, readyData } from '@/core/async';

import { User, AsyncUser } from './types';

export function useCurrentUser() {
  const [user, setUser] = React.useState<AsyncUser>(pendingData);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((fUser) => {
      const readyUser = createReadyUser(fUser);
      setUser(readyUser);
    });
  }, []);

  return user;
}

function createReadyUser(fUser: firebase.User | null): AsyncUser {
  let user: User | undefined = undefined;
  if (fUser) {
    user = { id: fUser.uid };
  }
  return readyData(user);
}
