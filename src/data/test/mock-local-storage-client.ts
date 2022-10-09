import {
  LocalStorageGetClient,
  LocalStorageParams,
} from '../protocols/cache/local-storage-get-client';

export class LocalStorageGetClientSpy implements LocalStorageGetClient {
  key?: string;

  async get(params: LocalStorageParams): Promise<any> {
    this.key = params.key;
    return Promise.resolve();
  }
}
