import { LocalAuthentication } from '@/data/usecases';
import { makeLocalStorageAdapter } from '../cache/local-storage-adapter-factory';

export const makeLocalAuthentication = (): LocalAuthentication =>
  new LocalAuthentication(makeLocalStorageAdapter());
