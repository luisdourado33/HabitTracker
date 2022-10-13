import { LocalStorageClient } from '../../data/protocols/cache';

import AsyncStorage from '@react-native-async-storage/async-storage';

export class LocalStorageAdapter implements LocalStorageClient {
  name = 'LocalStorageAdapter';
  async get(key: string): Promise<any> {
    const response = await AsyncStorage.getItem(key);
    console.log(`[${this.name}] getting ${key} from AsyncStorage`);

    return response;
  }

  async set(key: string, value: any): Promise<void> {
    const response = await AsyncStorage.setItem(key, value);
    console.log(`[${this.name}] saving item in AsyncStorage`);
    return response;
  }
}
