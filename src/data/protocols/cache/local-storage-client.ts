export interface LocalStorageClient<T = any> {
  get(key: string): Promise<T>;
}
