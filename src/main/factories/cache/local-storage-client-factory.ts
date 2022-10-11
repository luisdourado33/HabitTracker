import { LocalStorageClient } from '../../../data/protocols/cache';
import { LocalStorageClientAdapter } from '../../../infra/protocols/cache';

export const makeLocalStorageClientFactory = (): LocalStorageClient =>
  new LocalStorageClientAdapter();
