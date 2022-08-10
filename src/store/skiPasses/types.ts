import { Visitor } from '../visitors/interfaces';
import { SkiPass, AddSkiPass } from './interfaces';

export enum SkiPassesActionTypes {
  SKIPASSES_REQUEST = 'SKIPASSES_REQUEST',
  SKIPASSES_SUCCESS = 'SKIPASSES_SUCCESS',
  SKIPASSES_ERROR = 'SKIPASSES_ERROR',

  SKIPASS_REMOVE_REQUEST = 'SKIPASS_REMOVE_REQUEST',
  SKIPASS_REMOVE_SUCCESS = 'SKIPASS_REMOVE_SUCCESS',
  SKIPASS_REMOVE_ERROR = 'SKIPASS_REMOVE_ERROR',

  SKIPASS_ADD_REQUEST = 'SKIPASS_ADD_REQUEST',
  SKIPASS_ADD_SUCCESS = 'SKIPASS_ADD_SUCCESS',
  SKIPASS_ADD_ERROR = 'SKIPASS_ADD_ERROR',

  SKIPASS_EDIT_REQUEST = 'SKIPASS_EDIT_REQUEST',
  SKIPASS_EDIT_SUCCESS = 'SKIPASS_EDIT_SUCCESS',
  SKIPASS_EDIT_ERROR = 'SKIPASS_EDIT_ERROR',

  SKIPASS_ASSIGNED_VISITOR_REQUEST = 'SKIPASS_ASSIGNED_VISITOR_REQUEST',
  SKIPASS_ASSIGNED_VISITOR_SUCCESS = 'SKIPASS_ASSIGNED_VISITOR_SUCCESS',
  SKIPASS_ASSIGNED_VISITOR_ERROR = 'SKIPASS_ASSIGNED_VISITOR_ERROR',

  SKIPASS_ALL_VISITORS_REQUEST = 'SKIPASS_ALL_VISITORS_REQUEST',
  SKIPASS_ALL_VISITORS_SUCCESS = 'SKIPASS_ALL_VISITORS_SUCCESS',
  SKIPASS_ALL_VISITORS_ERROR = 'SKIPASS_ALL_VISITORS_ERROR',
};

// SKIPASSES

export interface SkiPassesRequest {
  type: SkiPassesActionTypes.SKIPASSES_REQUEST;
  page: number;
  limit: number;
  search: number;
};

export interface SkiPassesSuccess {
  type: SkiPassesActionTypes.SKIPASSES_SUCCESS;
  skiPasses: SkiPass[];
  total: number;
};

export interface SkiPassesError {
  type: SkiPassesActionTypes.SKIPASSES_ERROR;
  payload: string;
};

// REMOVE CURRENT SKIPASS

export interface SkiPassRemoveRequest {
  type: SkiPassesActionTypes.SKIPASS_REMOVE_REQUEST;
  number: number;
  limit: number;
};

export interface SkiPassRemoveSuccess {
  type: SkiPassesActionTypes.SKIPASS_REMOVE_SUCCESS;
};

export interface SkiPassRemoveError {
  type: SkiPassesActionTypes.SKIPASS_REMOVE_ERROR;
  payload: string;
};

// ADD SKIPASS

export interface SkiPassAddRequest {
  type: SkiPassesActionTypes.SKIPASS_ADD_REQUEST;
  skiPass: AddSkiPass;
  limit: number;
  visitorId: number;
};

export interface SkiPassAddSuccess {
  type: SkiPassesActionTypes.SKIPASS_ADD_SUCCESS;
};

export interface SkiPassAddError {
  type: SkiPassesActionTypes.SKIPASS_ADD_ERROR;
  payload: string;
};

// EDIT SKIPASS

export interface SkiPassEditRequest {
  type: SkiPassesActionTypes.SKIPASS_EDIT_REQUEST;
  skiPass: SkiPass;
  limit: number;
  visitorId: number;
  idFromTransfer?: number;
};

export interface SkiPassEditSuccess {
  type: SkiPassesActionTypes.SKIPASS_EDIT_SUCCESS;
};

export interface SkiPassEditError {
  type: SkiPassesActionTypes.SKIPASS_EDIT_ERROR;
  payload: string;
};

// GET ASSIGNED VISITOR

export interface SkiPassAssignedVisitorRequest {
  type: SkiPassesActionTypes.SKIPASS_ASSIGNED_VISITOR_REQUEST;
  skiPassNumber: number;
};

export interface SkiPassAssignedVisitorSuccess {
  type: SkiPassesActionTypes.SKIPASS_ASSIGNED_VISITOR_SUCCESS;
  assignedVisitorForCard: Visitor,
};

export interface SkiPassAssignedVisitorError {
  type: SkiPassesActionTypes.SKIPASS_ASSIGNED_VISITOR_ERROR;
  payload: string;
};

// GET ALL SKIPASS VISITORS

export interface SkiPassAllVisitorsRequest {
  type: SkiPassesActionTypes.SKIPASS_ALL_VISITORS_REQUEST;
  skiPassNumber?: number,
};

export interface SkiPassAllVisitorsSuccess {
  type: SkiPassesActionTypes.SKIPASS_ALL_VISITORS_SUCCESS;
  allVisitorsForSkiPasses: Visitor[];
  allVisitorsPhotoForSkiPasses: string[];
};

export interface SkiPassAllVisitorsError {
  type: SkiPassesActionTypes.SKIPASS_ALL_VISITORS_ERROR;
  payload: string;
};

export type SkiPassesActions =
  SkiPassesRequest
  | SkiPassesSuccess
  | SkiPassesError
  | SkiPassRemoveRequest
  | SkiPassRemoveSuccess
  | SkiPassRemoveError
  | SkiPassAddRequest
  | SkiPassAddSuccess
  | SkiPassAddError
  | SkiPassEditRequest
  | SkiPassEditSuccess
  | SkiPassEditError
  | SkiPassAssignedVisitorRequest
  | SkiPassAssignedVisitorSuccess
  | SkiPassAssignedVisitorError
  | SkiPassAllVisitorsRequest
  | SkiPassAllVisitorsSuccess
  | SkiPassAllVisitorsError;

