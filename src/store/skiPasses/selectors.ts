import { TRootState } from '../store';

export const allSkiPasses = (state: TRootState) => state.skiPassesReducer;

export const skiPasses = (state: TRootState) => allSkiPasses(state).skiPasses;
export const isLoading = (state: TRootState) => allSkiPasses(state).isLoading;
export const totalSkiPasses = (state: TRootState) => allSkiPasses(state).total;
export const currentSkiPassesPage = (state: TRootState) => allSkiPasses(state).page;
export const searchValueSkiPasses = (state: TRootState) => allSkiPasses(state).search;
export const isLoadingAssignedVisitorForCard = (state: TRootState) => allSkiPasses(state).isLoadingAssignedVisitorForCard;
export const assignedVisitorForCard = (state: TRootState) => allSkiPasses(state).assignedVisitorForCard;
export const isGetAllVisitors = (state: TRootState) => allSkiPasses(state).isGetAllVisitors;
export const allVisitorsForSkiPasses = (state: TRootState) => allSkiPasses(state).allVisitorsForSkiPasses;
export const allVisitorsPhotoForSkiPasses = (state: TRootState) => allSkiPasses(state).allVisitorsPhotoForSkiPasses;
export const isAddSkiPass = (state: TRootState) => allSkiPasses(state).isAddSkiPass;