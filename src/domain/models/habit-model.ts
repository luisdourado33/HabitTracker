import { CategoryEnum } from '../enums/category-enum';

export type HabitModel = {
  title: String;
  goal: String;
  category: CategoryEnum;
  deadline: Date;
};
