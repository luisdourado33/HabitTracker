export type LocalStorageParams = {
  key: string;
  value?: any;
};

export interface LocalStorageGetClient {
  get(params: LocalStorageParams): Promise<any>;
}
