import { HabitModel } from '../../../src/domain/models';

import { faker } from '@faker-js/faker';

export const mockHabitModel = (): HabitModel => ({
  title: faker.random.words(),
  goal: faker.random.words(),
  deadline: faker.date.future(),
  isCompleted: faker.datatype.boolean(),
});
