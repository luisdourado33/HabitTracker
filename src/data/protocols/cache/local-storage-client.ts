export interface LocalStorageClient<T = any> {
  get(key: string): Promise<T>;
<<<<<<< HEAD
  set(key: string, value: any): Promise<void>;
=======
>>>>>>> ced8277c568615ab3005e5ae1135a81cc2faca56
}
