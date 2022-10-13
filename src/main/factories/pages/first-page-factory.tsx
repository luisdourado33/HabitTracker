import React from 'react';

import FirstPage from '../../../presentation/pages/first-page';

import { makeLocalStorageAdapter } from '../cache/local-storage-adapter-factory';
import { makeLocalAuthentication } from '../usecases/local-authentication-factory';

export const makeFirstPage: React.FC = () => {
  return (
    <FirstPage
      localAuthentication={makeLocalAuthentication()}
      localStorage={makeLocalStorageAdapter()}
    />
  );
};
