import {
  SkiPassesActionTypes,
  SkiPassesRequest,
  SkiPassesSuccess,
  SkiPassesError,
  SkiPassRemoveRequest,
  SkiPassRemoveSuccess,
  SkiPassRemoveError,
  SkiPassAddRequest,
  SkiPassAddSuccess,
  SkiPassAddError,
  SkiPassEditRequest,
  SkiPassEditSuccess,
  SkiPassEditError,
  SkiPassAssignedVisitorRequest,
  SkiPassAssignedVisitorSuccess,
  SkiPassAssignedVisitorError,
  SkiPassAllVisitorsRequest,
  SkiPassAllVisitorsSuccess,
  SkiPassAllVisitorsError,
} from './types';
import { AddSkiPass, SkiPass } from './interfaces';
import { Visitor } from '../visitors/interfaces';

// SKIPASSES

export const skiPassesRequest = (page: number, limit: number, search: number): SkiPassesRequest => ({
  type: SkiPassesActionTypes.SKIPASSES_REQUEST,
  page,
  limit,
  search,
});

export const skiPassesSuccess = (skiPasses: SkiPass[], total: number): SkiPassesSuccess => ({
  type: SkiPassesActionTypes.SKIPASSES_SUCCESS,
  skiPasses,
  total,
});

export const skiPassesError = (error: string): SkiPassesError => ({
  type: SkiPassesActionTypes.SKIPASSES_ERROR,
  payload: error,
});

// REMOVE CURRENT SKIPASS

export const skiPassRemoveRequest = (number: number, limit: number): SkiPassRemoveRequest => ({
  type: SkiPassesActionTypes.SKIPASS_REMOVE_REQUEST,
  number,
  limit,
});

export const skiPassRemoveSuccess = (): SkiPassRemoveSuccess => ({
  type: SkiPassesActionTypes.SKIPASS_REMOVE_SUCCESS,
});

export const skiPassRemoveError = (errorRemove: string): SkiPassRemoveError => ({
  type: SkiPassesActionTypes.SKIPASS_REMOVE_ERROR,
  payload: errorRemove,
});

// ADD SKIPASS

export const skiPassAddRequest = (skiPass: AddSkiPass, limit: number, visitorId: number): SkiPassAddRequest => ({
  type: SkiPassesActionTypes.SKIPASS_ADD_REQUEST,
  skiPass,
  limit,
  visitorId,
});

export const skiPassAddSuccess = (): SkiPassAddSuccess => ({
  type: SkiPassesActionTypes.SKIPASS_ADD_SUCCESS,
});

export const skiPassAddError = (errorAdd: string): SkiPassAddError => ({
  type: SkiPassesActionTypes.SKIPASS_ADD_ERROR,
  payload: errorAdd,
});

// EDIT SKIPASS

export const skiPassEditRequest = (skiPass: SkiPass, limit: number, visitorId: number, idFromTransfer?: number): SkiPassEditRequest => ({
  type: SkiPassesActionTypes.SKIPASS_EDIT_REQUEST,
  skiPass,
  limit,
  visitorId,
  idFromTransfer,
});

export const skiPassEditSuccess = (): SkiPassEditSuccess => ({
  type: SkiPassesActionTypes.SKIPASS_EDIT_SUCCESS,
});

export const skiPassEditError = (errorEdit: string): SkiPassEditError => ({
  type: SkiPassesActionTypes.SKIPASS_EDIT_ERROR,
  payload: errorEdit,
});

// GET ASSIGNED VISITOR

export const skiPassAssignedVisitorRequest = (skiPassNumber: number): SkiPassAssignedVisitorRequest => ({
  type: SkiPassesActionTypes.SKIPASS_ASSIGNED_VISITOR_REQUEST,
  skiPassNumber,
});

export const skiPassAssignedVisitorSuccess = (assignedVisitorForCard: Visitor): SkiPassAssignedVisitorSuccess => ({
  type: SkiPassesActionTypes.SKIPASS_ASSIGNED_VISITOR_SUCCESS,
  assignedVisitorForCard,
});

export const skiPassAssignedVisitorError = (errorAssignedVisitor: string): SkiPassAssignedVisitorError => ({
  type: SkiPassesActionTypes.SKIPASS_ASSIGNED_VISITOR_ERROR,
  payload: errorAssignedVisitor,
});

// GET ALL SKIPASS VISITORS

export const skiPassAllVisitorsRequest = (skiPassNumber?: number): SkiPassAllVisitorsRequest => ({
  type: SkiPassesActionTypes.SKIPASS_ALL_VISITORS_REQUEST,
  skiPassNumber,
});

export const skiPassAllVisitorsSuccess = (allVisitorsForSkiPasses: Visitor[], allVisitorsPhotoForSkiPasses: string[]): SkiPassAllVisitorsSuccess => ({
  type: SkiPassesActionTypes.SKIPASS_ALL_VISITORS_SUCCESS,
  allVisitorsForSkiPasses,
  allVisitorsPhotoForSkiPasses,
});

export const skiPassAllVisitorsError = (errorAllVisitors: string): SkiPassAllVisitorsError => ({
  type: SkiPassesActionTypes.SKIPASS_ALL_VISITORS_ERROR,
  payload: errorAllVisitors,
});