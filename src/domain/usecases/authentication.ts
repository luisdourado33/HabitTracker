import { AccountModel } from '../models';

export interface IAuthentication {
  auth(params: Authentication.Params): Promise<Authentication.Model>;
}

export namespace Authentication {
  export type Params = {
    emailKey: string;
  };

  export type Model = AccountModel;
}
