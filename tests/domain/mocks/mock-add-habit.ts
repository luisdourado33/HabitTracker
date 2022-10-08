import { AddHabit } from '../../../src/domain/usecases/add-habit';
import { mockHabitModel } from './mock-habit';

import { faker } from '@faker-js/faker';

export const mockAddHabitParams = (): AddHabit.Params => ({
  title: faker.random.words(),
  goal: faker.random.words(),
  deadline: faker.date.future(),
  isCompleted: faker.datatype.boolean(),
});

export const mockAddHabitModel = (): AddHabit.Model => mockHabitModel();

export class AddHabitSpy implements AddHabit {
  habit = mockAddHabitModel();
  params = mockAddHabitParams();

  async add(params: AddHabit.Params): Promise<AddHabit.Model> {
    this.params = params;
    return this.habit;
  }
}
