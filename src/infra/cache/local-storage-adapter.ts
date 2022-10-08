import { GetStorage, SetStorage } from '../../data/protocols/cache';

import AsyncStorage from '@react-native-async-storage/async-storage';

export class LocalStorageAdapter implements GetStorage, SetStorage {
  async set(key: string, value: any): Promise<any> {
    if (value) {
      try {
        await AsyncStorage.setItem(key, value);
      } catch (error) {
        //
      }
    }
  }

  async get(key: string): Promise<any> {
    try {
      const res = await AsyncStorage.getItem(key);
      return res;
    } catch (error) {
      //
    }
  }
}
