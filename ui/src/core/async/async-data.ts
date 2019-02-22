class PendingData {
  isReady(): this is ReadyData<any> {
    return false;
  }
}

class ReadyData<T> {
  constructor(public readonly payload: T) {}

  isReady(): this is ReadyData<T> {
    return true;
  }
}

export function pendingData(): PendingData {
  return new PendingData();
}

export function readyData<T>(data: T): ReadyData<T> {
  return new ReadyData(data);
}

export type AsyncData<T> = ReadyData<T> | PendingData;
