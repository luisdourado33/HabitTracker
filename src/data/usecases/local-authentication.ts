<<<<<<< HEAD
import { Authentication, IAuthentication } from '@/domain/usecases';
import { LocalStorageClient } from '@/data/protocols/cache';

export class LocalAuthentication implements IAuthentication {
  constructor(
    private readonly localStorageClient: LocalStorageClient<string>,
  ) {}

  async auth(params: LocalAuthenticationNamespace.Params): Promise<void> {
    await this.localStorageClient.set('current_user', params.emailKey);
  }
}

export namespace LocalAuthenticationNamespace {
  export type Params = Authentication.Params;
  export type Model = Authentication.Model;
}
=======
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
>>>>>>> ced8277c568615ab3005e5ae1135a81cc2faca56
