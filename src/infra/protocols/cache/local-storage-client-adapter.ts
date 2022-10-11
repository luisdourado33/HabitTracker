import { LocalStorageClient } from '../../../data/protocols/cache';

import AsyncStorage from '@react-native-async-storage/async-storage';

export class LocalStorageClientAdapter implements LocalStorageClient {
  async get(key: string): Promise<any> {
    const request = await AsyncStorage.getItem(key);
    if (!request) return false;
    return request;
  }
}
