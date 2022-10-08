import { LocalStorageGetClientSpy } from '../../test/mock-local-storage-client';
import { LocalAuthentication } from './local-authentication';

describe('LocalAuthentication', () => {
  test('Should call LocalStorageClient with a specific key', async () => {
    const key = '@user_email';
    const localGetClientSpy = new LocalStorageGetClientSpy();
    const sut = new LocalAuthentication(key, localGetClientSpy);
    await sut.auth();
    expect(localGetClientSpy.key).toBe(key);
  });
});
