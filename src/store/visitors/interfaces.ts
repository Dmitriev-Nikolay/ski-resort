import { Instructor } from '../instructors/interfaces';
import { SkiPass } from '../skiPasses/interfaces';

export interface Visitor {
  id: number;
  fullname?: string | null;
  dateOfBirth?: string | null;
  skiPass?: SkiPass | null;
  coach?: Instructor | null;
  dateOfVisit?: string | null;
  photo?: string | null;
  sportType?: string | null;
};

export interface AddVisitor {
  fullname: string;
  dateOfBirth: string;
  skiPassExpirationTime: string;
  sportType: string;
  photo?: string | null;
};

export interface VisitorsState {
  visitors: Visitor[];
  visitorsPhoto: string[];
  isLoading: boolean;
  error: string;
  total: number;
  page: number;
  limit: number;
  search: string;
  isRemoveCurrentVisitor: boolean;
  errorRemove: string;
  isAddVisitor: boolean;
  errorAdd: string;
  isEditVisitor: boolean;
  errorEdit: string;
  allInstructorsForVisitors: Instructor[];
  allInstructorsPhotoForVisitor: string[];
  allSkiPassesForVisitors: SkiPass[];
  isLoadingAllInstructors: boolean,
  errorAllInstructors: string,
};