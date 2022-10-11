export interface LocalStorageClient<T = any> {
  get(key: string): Promise<T>;
  set(key: string, value: any): Promise<void>;
}
