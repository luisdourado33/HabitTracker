import { AddHabit } from '../../domain/usecases';
import { StorageClient } from '../protocols/cache';

export class LocalAddHabit implements AddHabit {
  constructor(
    private readonly key: string,
    private readonly localClient: StorageClient,
  ) {}

  async add(params: AddHabit.Params): Promise<AddHabit.Model | any> {
    const localResponse = await this.localClient.set(this.key, params);
    return localResponse;
  }
}
