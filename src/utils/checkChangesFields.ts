import { Visitor } from './../store/visitors/interfaces';
import { ValuesSkiPassForAddEdit } from '../components/SkiPass/SkiPassAddForm/SkiPassAddForm';
import { ValuesVisitorForAdd } from '../components/Visitor/VisitorAddForm/VisitorAddForm';
import { ValuesInstructorForAdd } from '../components/Instructor/InstructorAddForm/InstructorAddForm';

type Values = ValuesVisitorForAdd | ValuesInstructorForAdd | ValuesSkiPassForAddEdit;

export const checkChangesFields = (valuesForm: Values, currentItem: Visitor & {
  [key: string]: string;
}): boolean => {
  for (let value in valuesForm) {
    if (valuesForm[value] !== currentItem[value]) {
      return false;
    }
  }
  return true;
};