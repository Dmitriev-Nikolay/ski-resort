import { Visitor } from './../visitors/interfaces';
import { AddInstructor, Instructor } from './interfaces';

export enum InstructorsActionTypes {
  INSTRUCTORS_REQUEST = 'INSTRUCTORS_REQUEST',
  INSTRUCTORS_SUCCESS = 'INSTRUCTORS_SUCCESS',
  INSTRUCTORS_ERROR = 'INSTRUCTORS_ERROR',

  INSTRUCTORS_PHOTO_SUCCESS = 'INSTRUCTORS_PHOTO_SUCCESS',

  INSTRUCTOR_REMOVE_REQUEST = 'INSTRUCTOR_REMOVE_REQUEST',
  INSTRUCTOR_REMOVE_SUCCESS = 'INSTRUCTOR_REMOVE_SUCCESS',
  INSTRUCTOR_REMOVE_ERROR = 'INSTRUCTOR_REMOVE_ERROR',

  INSTRUCTOR_ADD_REQUEST = 'INSTRUCTOR_ADD_REQUEST',
  INSTRUCTOR_ADD_SUCCESS = 'INSTRUCTOR_ADD_SUCCESS',
  INSTRUCTOR_ADD_ERROR = 'INSTRUCTOR_ADD_ERROR',

  INSTRUCTOR_EDIT_REQUEST = 'INSTRUCTOR_EDIT_REQUEST',
  INSTRUCTOR_EDIT_SUCCESS = 'INSTRUCTOR_EDIT_SUCCESS',
  INSTRUCTOR_EDIT_ERROR = 'INSTRUCTOR_EDIT_ERROR',

  INSTRUCTOR_ALL_VISITORS_REQUEST = 'INSTRUCTOR_ALL_VISITORS_REQUEST',
  INSTRUCTOR_ALL_VISITORS_SUCCESS = 'INSTRUCTOR_ALL_VISITORS_SUCCESS',
  INSTRUCTOR_ALL_VISITORS_ERROR = 'INSTRUCTOR_ALL_VISITORS_ERROR',

  ALL_VISITORS_FOR_INSTRUCTOR_REQUEST = 'ALL_VISITORS_FOR_INSTRUCTOR_REQUEST',
  ALL_VISITORS_FOR_INSTRUCTOR_SUCCESS = 'ALL_VISITORS_FOR_INSTRUCTOR_SUCCESS',
  ALL_VISITORS_FOR_INSTRUCTOR_ERROR = 'ALL_VISITORS_FOR_INSTRUCTOR_ERROR',
};

// INSTRUCTORS

export interface InstructorsRequest {
  type: InstructorsActionTypes.INSTRUCTORS_REQUEST;
  page: number;
  limit: number;
  search: string;
};

export interface InstructorsSuccess {
  type: InstructorsActionTypes.INSTRUCTORS_SUCCESS;
  instructors: Instructor[];
  total: number;
};

export interface InstructorssPhotoSuccess {
  type: InstructorsActionTypes.INSTRUCTORS_PHOTO_SUCCESS;
  payload: string[];
};

export interface InstructorsError {
  type: InstructorsActionTypes.INSTRUCTORS_ERROR;
  payload: string;
};

// REMOVE CURRENT INSTRUCTOR

export interface InstructorRemoveRequest {
  type: InstructorsActionTypes.INSTRUCTOR_REMOVE_REQUEST;
  id: number;
  limit: number;
};

export interface InstructorRemoveSuccess {
  type: InstructorsActionTypes.INSTRUCTOR_REMOVE_SUCCESS;
};

export interface InstructorRemoveError {
  type: InstructorsActionTypes.INSTRUCTOR_REMOVE_ERROR;
  payload: string;
};

// ADD INSTRUCTOR

export interface InstructorAddRequest {
  type: InstructorsActionTypes.INSTRUCTOR_ADD_REQUEST;
  instructor: AddInstructor;
  limit: number;
  visitorsId: number[];
};

export interface InstructorAddSuccess {
  type: InstructorsActionTypes.INSTRUCTOR_ADD_SUCCESS;
};

export interface InstructorAddError {
  type: InstructorsActionTypes.INSTRUCTOR_ADD_ERROR;
  payload: string;
};

// EDIT INSTRUCTOR

export interface InstructorEditRequest {
  type: InstructorsActionTypes.INSTRUCTOR_EDIT_REQUEST;
  instructor: Instructor;
  limit: number;
  visitorsId: number[];
};

export interface InstructorEditSuccess {
  type: InstructorsActionTypes.INSTRUCTOR_EDIT_SUCCESS;
};

export interface InstructorEditError {
  type: InstructorsActionTypes.INSTRUCTOR_EDIT_ERROR;
  payload: string;
};

// GET ALL INSTRUCTOR VISITORS

export interface InstructorAllVisitorsRequest {
  type: InstructorsActionTypes.INSTRUCTOR_ALL_VISITORS_REQUEST;
  id: number;
};

export interface InstructorAllVisitorsSuccess {
  type: InstructorsActionTypes.INSTRUCTOR_ALL_VISITORS_SUCCESS;
  allInstructorVisitors: Visitor[];
};

export interface InstructorAllVisitorsError {
  type: InstructorsActionTypes.INSTRUCTOR_ALL_VISITORS_ERROR;
  payload: string;
};

// GET ALL INSTRUCTOR VISITORS

export interface InstructorAllVisitorsRequest {
  type: InstructorsActionTypes.INSTRUCTOR_ALL_VISITORS_REQUEST;
  id: number;
};

export interface InstructorAllVisitorsSuccess {
  type: InstructorsActionTypes.INSTRUCTOR_ALL_VISITORS_SUCCESS;
  allInstructorVisitors: Visitor[];
};

export interface InstructorAllVisitorsError {
  type: InstructorsActionTypes.INSTRUCTOR_ALL_VISITORS_ERROR;
  payload: string;
};

// GET ALL VISITORS FOR INSTRUCTOR

export interface AllVisitorsForInstructorRequest {
  type: InstructorsActionTypes.ALL_VISITORS_FOR_INSTRUCTOR_REQUEST;
};

export interface AllVisitorsForInstructorSuccess {
  type: InstructorsActionTypes.ALL_VISITORS_FOR_INSTRUCTOR_SUCCESS;
  allVisitorsForInstructor: Visitor[];
  allVisitorsPhotoForInstructor: string[];
};

export interface AllVisitorsForInstructorError {
  type: InstructorsActionTypes.ALL_VISITORS_FOR_INSTRUCTOR_ERROR;
  payload: string;
};

export type InstructorsActions =
  InstructorsRequest
  | InstructorsSuccess
  | InstructorssPhotoSuccess
  | InstructorsError
  | InstructorRemoveRequest
  | InstructorRemoveSuccess
  | InstructorRemoveError
  | InstructorAddRequest
  | InstructorAddSuccess
  | InstructorAddError
  | InstructorEditRequest
  | InstructorEditSuccess
  | InstructorEditError
  | InstructorAllVisitorsRequest
  | InstructorAllVisitorsSuccess
  | InstructorAllVisitorsError
  | AllVisitorsForInstructorRequest
  | AllVisitorsForInstructorSuccess
  | AllVisitorsForInstructorError;