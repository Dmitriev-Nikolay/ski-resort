import { ValuesSkiPassForAddEdit } from '../components/SkiPass/SkiPassAddForm/SkiPassAddForm';
import { ValuesVisitorForAdd } from '../components/Visitor/VisitorAddForm/VisitorAddForm';
import { ValuesVisitorForEdit } from '../components/Visitor/VisitorEditForm/VisitorEditForm';
import { ValuesInstructorForAdd } from '../components/Instructor/InstructorAddForm/InstructorAddForm';
import { ValuesInstructorForEdit } from '../components/Instructor/InstructorEditForm/InstructorEditForm';

type Values = ValuesVisitorForAdd | ValuesInstructorForAdd | ValuesSkiPassForAddEdit | ValuesVisitorForEdit | ValuesInstructorForEdit;

const isValidValues = (values: Values): boolean => {
  for (let value in values) {
    if (values[value] === null || values[value] === '') {
      return false;
    }
  }
  return true;
};

export const checkForm = (isValid: boolean, values: Values): boolean => {
  return isValid && isValidValues(values);
};