<<<<<<< HEAD
import { AccountModel } from '../models';

export interface Authentication {
  auth(params: Authentication.Params): Promise<void>;
=======
export interface Authentication {
  auth(params: Authentication.Params): Promise<Authentication.Model>;
>>>>>>> ced8277c568615ab3005e5ae1135a81cc2faca56
}

export namespace Authentication {
  export type Params = {
<<<<<<< HEAD
    emailKey: string;
  };

  export type Model = AccountModel;
=======
    key: string;
  };

  export type Model = string;
>>>>>>> ced8277c568615ab3005e5ae1135a81cc2faca56
}
