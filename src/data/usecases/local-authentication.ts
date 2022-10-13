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
