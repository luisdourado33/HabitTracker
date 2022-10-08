export interface LocalStorageGetClient {
  get(key: string): Promise<void>;
}
