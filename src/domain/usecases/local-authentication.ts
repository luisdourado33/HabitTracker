import { AccountModel } from '../models';

export interface ILocalAuthentication {
  auth(params: LocalAuthentication.Params): LocalAuthentication.Model;
}

export namespace LocalAuthentication {
  export type Params = {
    emailKey: string;
  };

  export type Model = AccountModel;
}
