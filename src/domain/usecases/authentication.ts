import { AccountModel } from '../models';

export interface Authentication {
  auth(params: Authentication.Params): Promise<void>;
}

export namespace Authentication {
  export type Params = {
    emailKey: string;
  };

  export type Model = AccountModel;
}
