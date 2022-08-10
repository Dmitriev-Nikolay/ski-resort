import { TRootState } from '../store';

export const allVisitors = (state: TRootState) => state.visitorsReducer;

export const visitors = (state: TRootState) => allVisitors(state).visitors;
export const isLoading = (state: TRootState) => allVisitors(state).isLoading;
export const visitorsPhoto = (state: TRootState) => allVisitors(state).visitorsPhoto;
export const totalVisitors = (state: TRootState) => allVisitors(state).total;
export const currentVisitorsPage = (state: TRootState) => allVisitors(state).page;
export const searchValueVisitors = (state: TRootState) => allVisitors(state).search;
export const isLoadingAllInstructors = (state: TRootState) => allVisitors(state).isLoadingAllInstructors;
export const allInstructorsForVisitors = (state: TRootState) => allVisitors(state).allInstructorsForVisitors;
export const allInstructorsPhotoForVisitor = (state: TRootState) => allVisitors(state).allInstructorsPhotoForVisitor;
export const allSkiPassesForVisitors = (state: TRootState) => allVisitors(state).allSkiPassesForVisitors;