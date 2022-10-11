export interface Authentication {
  auth(params: Authentication.Params): Promise<Authentication.Model>;
}

export namespace Authentication {
  export type Params = {
    key: string;
  };

  export type Model = string;
}
