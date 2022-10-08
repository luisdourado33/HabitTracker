import { LocalStorageGetClient } from '../../protocols/cache/local-storage-get-client';
import { LocalAuthentication } from './local-authentication';

describe('LocalAuthentication', () => {
  test('Should call LocalStorageClient with a specific key', async () => {
    class LocalStorageGetClientSpy implements LocalStorageGetClient {
      key?: string;
      async get(key: string): Promise<void> {
        this.key = key;

        return Promise.resolve();
      }
    }

    const key = '@user_email';
    const localGetClientSpy = new LocalStorageGetClientSpy();
    const sut = new LocalAuthentication(key, localGetClientSpy);
    await sut.auth();
    expect(localGetClientSpy.key).toBe(key);
  });
});
