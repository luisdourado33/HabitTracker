import { Authentication } from '../../domain/usecases';
import { LocalStorageClient } from '../protocols/cache';

import { EmptyValueError } from '../errors';

export class LocalAuthentication implements Authentication {
  constructor(
    private readonly localStorageClient: LocalStorageClient<Authentication.Model>,
  ) {}

  async auth(params: Authentication.Params): Promise<Authentication.Model> {
    const cachedUser = await this.localStorageClient.get(params.key);

    if (cachedUser == null) {
      throw new EmptyValueError();
    }

    return cachedUser;
  }
}
