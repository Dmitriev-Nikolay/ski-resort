import { TRootState } from '../store';

export const allInstructors = (state: TRootState) => state.instructorsReducer;

export const instructors = (state: TRootState) => allInstructors(state).instructors;
export const isLoading = (state: TRootState) => allInstructors(state).isLoading;
export const instructorsPhoto = (state: TRootState) => allInstructors(state).instructorsPhoto;
export const totalInstructors = (state: TRootState) => allInstructors(state).total;
export const currentInstructorsPage = (state: TRootState) => allInstructors(state).page;
export const searchValueInstructors = (state: TRootState) => allInstructors(state).search;
export const isGetAllVisitors = (state: TRootState) => allInstructors(state).isGetAllVisitors;
export const allInstructorVisitors = (state: TRootState) => allInstructors(state).allInstructorVisitors;
export const isLoadingAllVisitorsForInstructor = (state: TRootState) => allInstructors(state).isLoadingAllVisitorsForInstructor;
export const allVisitorsForInstructor = (state: TRootState) => allInstructors(state).allVisitorsForInstructor;
export const allVisitorsPhotoForInstructor = (state: TRootState) => allInstructors(state).allVisitorsPhotoForInstructor;