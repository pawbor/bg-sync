import { AsyncData } from '@/core/async';

export type AsyncUser = AsyncData<User | undefined>;

export interface User {
  id: string;
}
