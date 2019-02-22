import React from 'react';
import { AsyncData, pendingData } from './async-data';

export function useForcedDelay<T>(
  asyncData: AsyncData<T>,
  delay: number
): AsyncData<T> {
  const [complete, setComplete] = React.useState(false);

  let timeout: number | undefined = undefined;

  React.useEffect(() => {
    if (asyncData.isReady()) {
      return;
    }

    if (timeout !== undefined) {
      window.clearTimeout(timeout);
    }

    timeout = window.setTimeout(() => {
      setComplete(true);
      timeout = undefined;
    }, delay);
  }, [asyncData]);

  return complete ? asyncData : pendingData();
}
