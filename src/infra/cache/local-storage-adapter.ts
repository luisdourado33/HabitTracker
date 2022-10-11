import { LocalStorageClient } from '@/data/protocols/cache';

import AsyncStorage from '@react-native-async-storage/async-storage';

export class LocalStorageAdapter implements LocalStorageClient {
  async get(key: string): Promise<any> {
    const response = await AsyncStorage.getItem(key);
    return response;
  }

  async set(key: string, value: any): Promise<any> {
    const response = await AsyncStorage.setItem(key, value);
    return response;
  }
}
