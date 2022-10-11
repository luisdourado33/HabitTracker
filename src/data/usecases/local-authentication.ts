import { Authentication, IAuthentication } from '@/domain/usecases';
import { LocalStorageClient } from '@/data/protocols/cache';

export class LocalAuthentication implements IAuthentication {
  constructor(
    private readonly localStorageClient: LocalStorageClient<string>,
  ) {}

  async auth(params: LocalAuthenticationNamespace.Params): Promise<string> {
    const localResponse = await this.localStorageClient.get(params.emailKey);

    return localResponse;
  }
}

export namespace LocalAuthenticationNamespace {
  export type Params = Authentication.Params;
  export type Model = Authentication.Model;
}
