import { LocalHabitModel } from '../../models';

export interface SetStorage {
  set: (key: string, value: any) => Promise<LocalHabitModel>;
}
