import { SetStorage, GetStorage } from './index';

export interface StorageClient {
  set: (key: string, value: any) => SetStorage;
  get: (key: string) => GetStorage;
}
