import { VisitorsActionTypes } from './types'
import { VisitorsState } from './interfaces'
import { VisitorsActions } from './types'

const initialState: VisitorsState = {
  visitors: [],
  visitorsPhoto: [],
  isLoading: false,
  error: '',
  total: 0,
  page: 1,
  limit: 0,
  search: '',
  isRemoveCurrentVisitor: false,
  errorRemove: '',
  isAddVisitor: false,
  errorAdd: '',
  isEditVisitor: false,
  errorEdit: '',
  allInstructorsForVisitors: [],
  allInstructorsPhotoForVisitor: [],
  allSkiPassesForVisitors: [],
  isLoadingAllInstructors: false,
  errorAllInstructors: '',
};

const visitors = (state = initialState, action: VisitorsActions) => {
  switch (action.type) {
    case VisitorsActionTypes.VISITORS_REQUEST:
      return {
        ...state,
        isLoading: true,
        page: action.page,
        limit: action.limit,
        search: action.search,
      };
    case VisitorsActionTypes.VISITORS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        visitors: action.visitors,
        total: action.total,
        // search: '',
      };
    case VisitorsActionTypes.VISITORS_PHOTO_SUCCESS:
      return {
        ...state,
        visitorsPhoto: action.payload,
      };
    case VisitorsActionTypes.VISITORS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case VisitorsActionTypes.VISITOR_REMOVE_REQUEST:
      return {
        ...state,
        isRemoveCurrentVisitor: false,
      };
    case VisitorsActionTypes.VISITOR_REMOVE_SUCCESS:
      return {
        ...state,
        isRemoveCurrentVisitor: true,
      };
    case VisitorsActionTypes.VISITOR_REMOVE_ERROR:
      return {
        ...state,
        errorRemove: action.payload,
      };
    case VisitorsActionTypes.VISITOR_ADD_REQUEST:
      return {
        ...state,
        isAddVisitor: false,
      };
    case VisitorsActionTypes.VISITOR_ADD_SUCCESS:
      return {
        ...state,
        isAddVisitor: true,
        allInstructorsForVisitors: [],
        allInstructorsPhotoForVisitor: [],
        allSkiPassesForVisitors: [],
      };
    case VisitorsActionTypes.VISITOR_ADD_ERROR:
      return {
        ...state,
        errorAdd: action.payload,
      };
    case VisitorsActionTypes.VISITOR_EDIT_REQUEST:
      return {
        ...state,
        isEditVisitor: false,
      };
    case VisitorsActionTypes.VISITOR_EDIT_SUCCESS:
      return {
        ...state,
        isEditVisitor: true,
        allInstructorsForVisitors: [],
        allInstructorsPhotoForVisitor: [],
        allSkiPassesForVisitors: [],
      };
    case VisitorsActionTypes.VISITOR_EDIT_ERROR:
      return {
        ...state,
        errorEdit: action.payload,
      };
    case VisitorsActionTypes.VISITOR_ALL_INSTRUCTORS_REQUEST:
      return {
        ...state,
        isLoadingAllInstructors: true,
        allInstructorsForVisitors: [],
        allInstructorsPhotoForVisitor: [],
        allSkiPassesForVisitors: [],
      };
    case VisitorsActionTypes.VISITOR_ALL_INSTRUCTORS_SUCCESS:
      return {
        ...state,
        isLoadingAllInstructors: false,
        allInstructorsForVisitors: action.allInstructorsForVisitors,
        allInstructorsPhotoForVisitor: action.allInstructorsPhotoForVisitor,
        allSkiPassesForVisitors: action.allSkiPassesForVisitors,
      };
    case VisitorsActionTypes.VISITOR_ALL_INSTRUCTORS_ERROR:
      return {
        ...state,
        errorAllInstructors: action.payload,
      };
    default:
      return state;
  };
};

export default visitors;