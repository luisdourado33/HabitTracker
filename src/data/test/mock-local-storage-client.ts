import { LocalStorageGetClient } from '../protocols/cache/local-storage-get-client';

export class LocalStorageGetClientSpy implements LocalStorageGetClient {
  key?: string;
  async get(key: string): Promise<void> {
    this.key = key;

    return Promise.resolve();
  }
}
