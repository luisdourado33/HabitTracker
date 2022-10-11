export type LocalStorageRequest = {
  method: LocalStorageMethod;
  key: string;
  value?: any;
};

export interface LocalStorageClient<T = any> {
  request(params: LocalStorageRequest): Promise<T>;
}

export type LocalStorageMethod = 'get' | 'set';
