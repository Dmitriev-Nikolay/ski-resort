import { InstructorsActionTypes } from './types'
import { InstructorsState } from './interfaces'
import { InstructorsActions } from './types'

const initialState: InstructorsState = {
  instructors: [],
  instructorsPhoto: [],
  isLoading: false,
  error: '',
  total: 0,
  page: 1,
  limit: 0,
  search: '',
  isRemoveCurrentInstructor: false,
  errorRemove: '',
  isAddInstructor: false,
  errorAdd: '',
  isEditInstructor: false,
  errorEdit: '',
  allInstructorVisitors: [],
  isGetAllVisitors: false,
  errorAllVisitors: '',
  allVisitorsForInstructor: [],
  allVisitorsPhotoForInstructor: [],
  isLoadingAllVisitorsForInstructor: false,
  errorallVisitorsForInstructor: '',
};

const instructors = (state = initialState, action: InstructorsActions) => {
  switch (action.type) {
    case InstructorsActionTypes.INSTRUCTORS_REQUEST:
      return {
        ...state,
        isLoading: true,
        page: action.page,
        limit: action.limit,
        search: action.search,
      };
    case InstructorsActionTypes.INSTRUCTORS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        instructors: action.instructors,
        total: action.total,
        // search: '',
      };
    case InstructorsActionTypes.INSTRUCTORS_PHOTO_SUCCESS:
      return {
        ...state,
        instructorsPhoto: action.payload,
      };
    case InstructorsActionTypes.INSTRUCTORS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case InstructorsActionTypes.INSTRUCTOR_REMOVE_REQUEST:
      return {
        ...state,
        isRemoveCurrentInstructor: false,
      };
    case InstructorsActionTypes.INSTRUCTOR_REMOVE_SUCCESS:
      return {
        ...state,
        isRemoveCurrentInstructor: true,
      };
    case InstructorsActionTypes.INSTRUCTOR_REMOVE_ERROR:
      return {
        ...state,
        errorRemove: action.payload,
      };
    case InstructorsActionTypes.INSTRUCTOR_ADD_REQUEST:
      return {
        ...state,
        isAddInstructor: false,
      };
    case InstructorsActionTypes.INSTRUCTOR_ADD_SUCCESS:
      return {
        ...state,
        isAddInstructor: true,
        allVisitorsForInstructor: [],
        allVisitorsPhotoForInstructor: [],
      };
    case InstructorsActionTypes.INSTRUCTOR_ADD_ERROR:
      return {
        ...state,
        errorAdd: action.payload,
      };
      case InstructorsActionTypes.INSTRUCTOR_EDIT_REQUEST:
      return {
        ...state,
        isEditInstructor: false,
      };
    case InstructorsActionTypes.INSTRUCTOR_EDIT_SUCCESS:
      return {
        ...state,
        isEditInstructor: true,
        allVisitorsForInstructor: [],
        allVisitorsPhotoForInstructor: [],
      };
    case InstructorsActionTypes.INSTRUCTOR_EDIT_ERROR:
      return {
        ...state,
        errorEdit: action.payload,
      };
    case InstructorsActionTypes.INSTRUCTOR_ALL_VISITORS_REQUEST:
      return {
        ...state,
        isGetAllVisitors: true,
        allInstructorVisitors: [],
      };
    case InstructorsActionTypes.INSTRUCTOR_ALL_VISITORS_SUCCESS:
      return {
        ...state,
        isGetAllVisitors: false,
        allInstructorVisitors: action.allInstructorVisitors,
      };
    case InstructorsActionTypes.INSTRUCTOR_ALL_VISITORS_ERROR:
      return {
        ...state,
        errorAllVisitors: action.payload,
      };
    case InstructorsActionTypes.ALL_VISITORS_FOR_INSTRUCTOR_REQUEST:
      return {
        ...state,
        isLoadingAllVisitorsForInstructor: true,
        allInstructorsForVisitors: [],
        allVisitorsPhotoForInstructor: [],
      };
    case InstructorsActionTypes.ALL_VISITORS_FOR_INSTRUCTOR_SUCCESS:
      return {
        ...state,
        isLoadingAllVisitorsForInstructor: false,
        allVisitorsForInstructor: action.allVisitorsForInstructor,
        allVisitorsPhotoForInstructor: action.allVisitorsPhotoForInstructor,
      };
    case InstructorsActionTypes.ALL_VISITORS_FOR_INSTRUCTOR_ERROR:
      return {
        ...state,
        errorallVisitorsForInstructor: action.payload,
      };
    default:
      return state;
  };
};

export default instructors;