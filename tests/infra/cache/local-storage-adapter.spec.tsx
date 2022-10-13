import { LocalStorageAdapter } from '@/infra/cache';
import { makeLocalStorageAdapter } from '@/main/factories/cache/local-storage-adapter-factory';

import { faker } from '@faker-js/faker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const makeSut = (): LocalStorageAdapter => makeLocalStorageAdapter();

describe('LocalStorageAdapter', () => {
  test('Should call LocalStorageAdapterGet with correct key', async () => {
    const sut = makeSut();
    const key = faker.random.word();

    await sut.get(key);

    expect(AsyncStorage.getItem).toBeCalledWith(key);
  });
});
