import { LocalStorageGetClientSpy } from '../../test/mock-local-storage-client';
import { LocalAuthentication } from './local-authentication';

import { faker } from '@faker-js/faker';

type SutTypes = {
  sut: LocalAuthentication;
  localGetClientSpy: LocalStorageGetClientSpy;
};

// factory
const makeSut = (key: string = faker.random.word()): SutTypes => {
  const localGetClientSpy = new LocalStorageGetClientSpy();
  const sut = new LocalAuthentication(key, localGetClientSpy);

  return { sut, localGetClientSpy };
};

describe('LocalAuthentication', () => {
  test('Should call LocalStorageGetClient with a specific key', async () => {
    const key = '@user_email';
    const { sut, localGetClientSpy } = makeSut(key);
    await sut.auth();
    expect(localGetClientSpy.key).toBe(key);
  });
});
