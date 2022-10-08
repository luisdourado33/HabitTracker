import { HabitModel } from '../models/habit-model';

export type HabitParams = {};

export interface Habits {
  add(params: HabitParams): Promise<HabitModel>;
}
