import { LocalStorageGetClient } from '../../protocols/cache/local-storage-get-client';

export class LocalAuthentication {
  constructor(
    private readonly key: string,
    private readonly localClient: LocalStorageGetClient,
  ) {}

  async auth(): Promise<void> {
    await this.localClient.get(this.key);
  }
}
