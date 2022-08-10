import { SkiPass } from '../skiPasses/interfaces';
import { Visitor } from '../visitors/interfaces';

export interface Instructor {
  id: number;
  fullname?: string | null;
  skiPass?: SkiPass | null;
  category?: string | null;
  sportType?: string | null;
  workExperience?: string | null;
  dateOfBirth?: string | null;
  sex?: string | null;
  photo?: string | null;
};

export interface AddInstructor {
  fullname: string;
  dateOfBirth: string;
  category: string;
  sportType: string;
  workExperience: string;
  sex: string;
  photo?: string | null;
};

export interface InstructorsState {
  instructors: Instructor[],
  instructorsPhoto: string[],
  isLoading: boolean,
  error: string,
  total: number,
  page: number,
  limit: number,
  search: string,
  isRemoveCurrentInstructor: boolean;
  errorRemove: string;
  isAddInstructor: boolean;
  errorAdd: string;
  isEditInstructor: boolean;
  errorEdit: string;
  allInstructorVisitors: Visitor[];
  isGetAllVisitors: boolean;
  errorAllVisitors: string;
  allVisitorsForInstructor: Visitor[];
  allVisitorsPhotoForInstructor: string[];
  isLoadingAllVisitorsForInstructor: boolean;
  errorallVisitorsForInstructor: string;
};