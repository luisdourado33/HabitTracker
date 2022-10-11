export interface LocalAuthentication {
  auth(params: LocalAuthentication.Params): Promise<LocalAuthentication.Model>;
}

export namespace LocalAuthentication {
  export type Params = {
    key: string;
  };

  export type Model = string;
}
