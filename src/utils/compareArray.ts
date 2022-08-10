import { Instructor } from './../store/instructors/interfaces';

export const compareArray = (visitorsIds: number[], arr2: Instructor[]) => {
  const arr2ToNumber = arr2.map(obj => obj.id);
  return visitorsIds.length === arr2ToNumber.length && visitorsIds.every((id, i) => id === arr2ToNumber[i]);
};