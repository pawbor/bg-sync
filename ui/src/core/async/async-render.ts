import { AsyncData } from './async-data';

export interface AsyncRenderProps<T> {
  asyncData: AsyncData<T>;
  whenReady: (payload: T) => JSX.Element;
  whenPending: () => JSX.Element;
}

export function AsyncRender<T>(props: AsyncRenderProps<T>) {
  const { asyncData, whenReady, whenPending } = props;

  return asyncData.isReady() ? whenReady(asyncData.payload) : whenPending();
}
