import { AsyncData } from '@/core/async';

export interface User {
  id: string;
}

export type AsyncUser = AsyncData<User | undefined>;
