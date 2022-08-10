import {
  InstructorsActionTypes,
  InstructorsRequest,
  InstructorsSuccess,
  InstructorsError,
  InstructorssPhotoSuccess,
  InstructorRemoveRequest,
  InstructorRemoveSuccess,
  InstructorRemoveError,
  InstructorAddRequest,
  InstructorAddSuccess,
  InstructorAddError,
  InstructorEditRequest,
  InstructorEditSuccess,
  InstructorEditError,
  InstructorAllVisitorsRequest,
  InstructorAllVisitorsSuccess,
  InstructorAllVisitorsError,
  AllVisitorsForInstructorRequest,
  AllVisitorsForInstructorSuccess,
  AllVisitorsForInstructorError,
} from './types';
import { AddInstructor, Instructor } from './interfaces';
import { Visitor } from '../visitors/interfaces';

// INSTRUCTORS

export const instructorsRequest = (page: number, limit: number, search: string): InstructorsRequest => ({
  type: InstructorsActionTypes.INSTRUCTORS_REQUEST,
  page,
  limit,
  search,
});

export const instructorsSuccess = (instructors: Instructor[], total: number): InstructorsSuccess => ({
  type: InstructorsActionTypes.INSTRUCTORS_SUCCESS,
  instructors,
  total,
});

export const instructorsPhotosSuccess = (instructorsPhoto: string[]): InstructorssPhotoSuccess => ({
  type: InstructorsActionTypes.INSTRUCTORS_PHOTO_SUCCESS,
  payload: instructorsPhoto,
});

export const instructorsError = (error: string): InstructorsError => ({
  type: InstructorsActionTypes.INSTRUCTORS_ERROR,
  payload: error,
});

// REMOVE CURRENT INSTRUCTOR

export const instructorRemoveRequest = (id: number, limit: number): InstructorRemoveRequest => ({
  type: InstructorsActionTypes.INSTRUCTOR_REMOVE_REQUEST,
  id,
  limit,
});

export const instructorRemoveSuccess = (): InstructorRemoveSuccess => ({
  type: InstructorsActionTypes.INSTRUCTOR_REMOVE_SUCCESS,
});

export const instructorRemoveError = (errorRemove: string): InstructorRemoveError => ({
  type: InstructorsActionTypes.INSTRUCTOR_REMOVE_ERROR,
  payload: errorRemove,
});

// ADD INSTRUCTOR

export const instructorAddRequest = (instructor: AddInstructor, limit: number, visitorsId: number[]): InstructorAddRequest => ({
  type: InstructorsActionTypes.INSTRUCTOR_ADD_REQUEST,
  instructor,
  limit,
  visitorsId,
});

export const instructorAddSuccess = (): InstructorAddSuccess => ({
  type: InstructorsActionTypes.INSTRUCTOR_ADD_SUCCESS,
});

export const instructorAddError = (errorAdd: string): InstructorAddError => ({
  type: InstructorsActionTypes.INSTRUCTOR_ADD_ERROR,
  payload: errorAdd,
});

// EDIT INSTRUCTOR

export const instructorEditRequest = (instructor: Instructor, limit: number, visitorsId: number[]): InstructorEditRequest => ({
  type: InstructorsActionTypes.INSTRUCTOR_EDIT_REQUEST,
  instructor,
  limit,
  visitorsId,
});

export const instructorEditSuccess = (): InstructorEditSuccess => ({
  type: InstructorsActionTypes.INSTRUCTOR_EDIT_SUCCESS,
});

export const instructorEditError = (errorAdd: string): InstructorEditError => ({
  type: InstructorsActionTypes.INSTRUCTOR_EDIT_ERROR,
  payload: errorAdd,
});

// GET ALL INSTRUCTOR VISITORS

export const instructorAllVisitorsRequest = (id: number): InstructorAllVisitorsRequest => ({
  type: InstructorsActionTypes.INSTRUCTOR_ALL_VISITORS_REQUEST,
  id,
});

export const instructorAllVisitorsSuccess = (allInstructorVisitors: Visitor[],): InstructorAllVisitorsSuccess => ({
  type: InstructorsActionTypes.INSTRUCTOR_ALL_VISITORS_SUCCESS,
  allInstructorVisitors,
});

export const instructorAllVisitorsError = (errorAdd: string): InstructorAllVisitorsError => ({
  type: InstructorsActionTypes.INSTRUCTOR_ALL_VISITORS_ERROR,
  payload: errorAdd,
});

// GET ALL VISITORS FOR INSTRUCTOR

export const visitorAllInstructorsRequest = (): AllVisitorsForInstructorRequest => ({
  type: InstructorsActionTypes.ALL_VISITORS_FOR_INSTRUCTOR_REQUEST,
});

export const visitorAllInstructorsSuccess = (allVisitorsForInstructor: Visitor[], allVisitorsPhotoForInstructor: string[]): AllVisitorsForInstructorSuccess => ({
  type: InstructorsActionTypes.ALL_VISITORS_FOR_INSTRUCTOR_SUCCESS,
  allVisitorsForInstructor,
  allVisitorsPhotoForInstructor,
});

export const visitorAllInstructorsError = (errorallVisitorsForInstructor: string): AllVisitorsForInstructorError => ({
  type: InstructorsActionTypes.ALL_VISITORS_FOR_INSTRUCTOR_ERROR,
  payload: errorallVisitorsForInstructor,
});