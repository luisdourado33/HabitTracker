import { HabitModel } from '../models';

export interface AddHabit {
  add: (params: AddHabit.Params) => Promise<AddHabit.Model>;
}

export namespace AddHabit {
  export type Params = {
    title: String;
    goal: String;
    deadline: Date;
    isCompleted: boolean;
  };

  export type Model = HabitModel;
}
