import { AccountModel } from '@/domain/models';
import { Authentication, IAuthentication } from '@/domain/usecases';
import { LocalStorageClient } from '@/data/protocols/cache';

export class LocalAuthentication implements IAuthentication {
  constructor(
    private readonly localStorageClient: LocalStorageClient<AccountModel>,
  ) {}

  async auth(
    params: LocalAuthenticationNamespace.Params,
  ): Promise<LocalAuthenticationNamespace.Model> {
    const localResponse = await this.localStorageClient.request({
      method: 'get',
      key: params.emailKey,
    });

    return localResponse;
  }
}

export namespace LocalAuthenticationNamespace {
  export type Params = Authentication.Params;
  export type Model = Authentication.Model;
}
