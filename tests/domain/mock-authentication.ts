import { Authentication } from '../../src/domain/usecases';

import { faker } from '@faker-js/faker';

export const mockAuthenticationParams = (): Authentication.Params => ({
  key: faker.random.word(),
});

export const mockAuthenticationModel = (): Authentication.Model =>
  faker.random.word();

export class LocalAuthenticationSpy implements Authentication {
  account = mockAuthenticationModel();
  params = mockAuthenticationModel();

  async auth(params: Authentication.Params): Promise<Authentication.Model> {
    this.params = params.key;
    return this.account;
  }
}
