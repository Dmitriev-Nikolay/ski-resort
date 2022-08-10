import { AddVisitor, Visitor } from './interfaces';
import { Instructor } from './../instructors/interfaces';
import { SkiPass } from './../skiPasses/interfaces';

export enum VisitorsActionTypes {
  VISITORS_REQUEST = 'VISITORS_REQUEST',
  VISITORS_SUCCESS = 'VISITORS_SUCCESS',
  VISITORS_ERROR = 'VISITORS_ERROR',

  VISITORS_PHOTO_SUCCESS = 'VISITORS_PHOTO_SUCCESS',

  VISITOR_REMOVE_REQUEST = 'VISITOR_REMOVE_REQUEST',
  VISITOR_REMOVE_SUCCESS = 'VISITOR_REMOVE_SUCCESS',
  VISITOR_REMOVE_ERROR = 'VISITOR_REMOVE_ERROR',

  VISITOR_ADD_REQUEST = 'VISITOR_ADD_REQUEST',
  VISITOR_ADD_SUCCESS = 'VISITOR_ADD_SUCCESS',
  VISITOR_ADD_ERROR = 'VISITOR_ADD_ERROR',
  
  VISITOR_EDIT_REQUEST = 'VISITOR_EDIT_REQUEST',
  VISITOR_EDIT_SUCCESS = 'VISITOR_EDIT_SUCCESS',
  VISITOR_EDIT_ERROR = 'VISITOR_EDIT_ERROR',

  VISITOR_ALL_INSTRUCTORS_REQUEST = 'VISITOR_ALL_INSTRUCTORS_REQUEST',
  VISITOR_ALL_INSTRUCTORS_SUCCESS = 'VISITOR_ALL_INSTRUCTORS_SUCCESS',
  VISITOR_ALL_INSTRUCTORS_ERROR = 'VISITOR_ALL_INSTRUCTORS_ERROR',
};

// VISITORS

export interface VisitorsRequest {
  type: VisitorsActionTypes.VISITORS_REQUEST;
  page: number;
  limit: number;
  search: string;
};

export interface VisitorsSuccess {
  type: VisitorsActionTypes.VISITORS_SUCCESS;
  visitors: Visitor[];
  total: number;
};

export interface VisitorsPhotoSuccess {
  type: VisitorsActionTypes.VISITORS_PHOTO_SUCCESS;
  payload: string[];
};

export interface VisitorsError {
  type: VisitorsActionTypes.VISITORS_ERROR;
  payload: string;
};

// REMOVE CURRENT VISITOR

export interface VisitorRemoveRequest {
  type: VisitorsActionTypes.VISITOR_REMOVE_REQUEST;
  id: number;
  limit: number;
};

export interface VisitorRemoveSuccess {
  type: VisitorsActionTypes.VISITOR_REMOVE_SUCCESS;
};

export interface VisitorRemoveError {
  type: VisitorsActionTypes.VISITOR_REMOVE_ERROR;
  payload: string;
};

// ADD VISITOR

export interface VisitorAddRequest {
  type: VisitorsActionTypes.VISITOR_ADD_REQUEST;
  visitor: AddVisitor;
  limit: number;
  instructorId: number;
};

export interface VisitorAddSuccess {
  type: VisitorsActionTypes.VISITOR_ADD_SUCCESS;
};

export interface VisitorAddError {
  type: VisitorsActionTypes.VISITOR_ADD_ERROR;
  payload: string;
};

// EDIT VISITOR

export interface VisitorEditRequest {
  type: VisitorsActionTypes.VISITOR_EDIT_REQUEST;
  visitor: Visitor;
  limit: number;
  instructorId: number;
  skiPassNumber: number;
};

export interface VisitorEditSuccess {
  type: VisitorsActionTypes.VISITOR_EDIT_SUCCESS;
};

export interface VisitorEditError {
  type: VisitorsActionTypes.VISITOR_EDIT_ERROR;
  payload: string;
};

// GET ALL VISITOR INSTRUCTORS

export interface VisitorAllInstructorsRequest {
  type: VisitorsActionTypes.VISITOR_ALL_INSTRUCTORS_REQUEST;
};

export interface VisitorAllInstructorsSuccess {
  type: VisitorsActionTypes.VISITOR_ALL_INSTRUCTORS_SUCCESS;
  allInstructorsForVisitors: Instructor[];
  allInstructorsPhotoForVisitor: string[];
  allSkiPassesForVisitors: SkiPass[];
};

export interface VisitorAllInstructorsError {
  type: VisitorsActionTypes.VISITOR_ALL_INSTRUCTORS_ERROR;
  payload: string;
};

export type VisitorsActions =
  VisitorsRequest
  | VisitorsSuccess
  | VisitorsPhotoSuccess
  | VisitorsError
  | VisitorRemoveRequest
  | VisitorRemoveSuccess
  | VisitorRemoveError
  | VisitorAddRequest
  | VisitorAddSuccess
  | VisitorAddError
  | VisitorEditRequest
  | VisitorEditSuccess
  | VisitorEditError
  | VisitorAllInstructorsRequest
  | VisitorAllInstructorsSuccess
  | VisitorAllInstructorsError;