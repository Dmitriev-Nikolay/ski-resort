import {
  VisitorsActionTypes,
  VisitorsRequest,
  VisitorsSuccess,
  VisitorsError,
  VisitorsPhotoSuccess,
  VisitorRemoveRequest,
  VisitorRemoveSuccess,
  VisitorRemoveError,
  VisitorAddRequest,
  VisitorAddSuccess,
  VisitorAddError,
  VisitorEditRequest,
  VisitorEditSuccess,
  VisitorEditError,
  VisitorAllInstructorsRequest,
  VisitorAllInstructorsSuccess,
  VisitorAllInstructorsError,
} from './types';
import { AddVisitor, Visitor } from './interfaces';
import { Instructor } from './../instructors/interfaces';
import { SkiPass } from './../skiPasses/interfaces';

// VISITORS

export const visitorsRequest = (page: number, limit: number, search: string): VisitorsRequest => ({
  type: VisitorsActionTypes.VISITORS_REQUEST,
  page,
  limit,
  search,
});

export const visitorsSuccess = (visitors: Visitor[], total: number): VisitorsSuccess => ({
  type: VisitorsActionTypes.VISITORS_SUCCESS,
  visitors,
  total,
});

export const visitorsPhotosSuccess = (visitorsPhoto: string[]): VisitorsPhotoSuccess => ({
  type: VisitorsActionTypes.VISITORS_PHOTO_SUCCESS,
  payload: visitorsPhoto,
});

export const visitorsError = (error: string): VisitorsError => ({
  type: VisitorsActionTypes.VISITORS_ERROR,
  payload: error,
});

// REMOVE CURRENT VISITOR

export const visitorRemoveRequest = (id: number, limit: number): VisitorRemoveRequest => ({
  type: VisitorsActionTypes.VISITOR_REMOVE_REQUEST,
  id,
  limit,
});

export const visitorRemoveSuccess = (): VisitorRemoveSuccess => ({
  type: VisitorsActionTypes.VISITOR_REMOVE_SUCCESS,
});

export const visitorRemoveError = (errorRemove: string): VisitorRemoveError => ({
  type: VisitorsActionTypes.VISITOR_REMOVE_ERROR,
  payload: errorRemove,
});

// ADD VISITOR

export const visitorAddRequest = (visitor: AddVisitor, limit: number, instructorId: number): VisitorAddRequest => ({
  type: VisitorsActionTypes.VISITOR_ADD_REQUEST,
  visitor,
  limit,
  instructorId,
});

export const visitorAddSuccess = (): VisitorAddSuccess => ({
  type: VisitorsActionTypes.VISITOR_ADD_SUCCESS,
});

export const visitorAddError = (errorAdd: string): VisitorAddError => ({
  type: VisitorsActionTypes.VISITOR_ADD_ERROR,
  payload: errorAdd,
});

// EDIT VISITOR

export const visitorEditRequest = (visitor: Visitor, limit: number, instructorId: number, skiPassNumber: number): VisitorEditRequest => ({
  type: VisitorsActionTypes.VISITOR_EDIT_REQUEST,
  visitor,
  limit,
  instructorId,
  skiPassNumber,
});

export const visitorEditSuccess = (): VisitorEditSuccess => ({
  type: VisitorsActionTypes.VISITOR_EDIT_SUCCESS,
});

export const visitorEditError = (errorAdd: string): VisitorEditError => ({
  type: VisitorsActionTypes.VISITOR_EDIT_ERROR,
  payload: errorAdd,
});

// GET ALL INSTRUCTOR VISITORS

export const visitorAllInstructorsRequest = (): VisitorAllInstructorsRequest => ({
  type: VisitorsActionTypes.VISITOR_ALL_INSTRUCTORS_REQUEST,
});

export const visitorAllInstructorsSuccess = (allInstructorsForVisitors: Instructor[], allInstructorsPhotoForVisitor: string[], allSkiPassesForVisitors: SkiPass[]): VisitorAllInstructorsSuccess => ({
  type: VisitorsActionTypes.VISITOR_ALL_INSTRUCTORS_SUCCESS,
  allInstructorsForVisitors,
  allInstructorsPhotoForVisitor,
  allSkiPassesForVisitors,
});

export const visitorAllInstructorsError = (errorAllInstructors: string): VisitorAllInstructorsError => ({
  type: VisitorsActionTypes.VISITOR_ALL_INSTRUCTORS_ERROR,
  payload: errorAllInstructors,
});