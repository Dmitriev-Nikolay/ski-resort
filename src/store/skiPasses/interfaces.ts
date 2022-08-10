import { Visitor } from '../visitors/interfaces';

export interface SkiPass {
  number: number;
  expirationTime: string;
  price: number;
};

export interface AddSkiPass {
  expirationTime: string;
  price: number;
};

export interface SkiPassesState {
  skiPasses: SkiPass[];
  isLoading: boolean;
  error: string;
  total: number;
  page: number;
  limit: number;
  search: number;
  isRemoveCurrentSkiPass: boolean;
  errorRemove: string;
  isAddSkiPass: boolean;
  errorAdd: string;
  isEditCurrentSkiPass: boolean;
  errorEdit: string;
  assignedVisitorForCard: Visitor | null;
  isLoadingAssignedVisitorForCard: boolean;
  errorAssignedVisitorForCard: string;
  allVisitorsForSkiPasses: Visitor[];
  allVisitorsPhotoForSkiPasses: string[];
  isGetAllVisitors: boolean;
  errorAllVisitors: string;
};