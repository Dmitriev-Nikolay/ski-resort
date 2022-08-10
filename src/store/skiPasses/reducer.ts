import { SkiPassesActionTypes } from './types'
import { SkiPassesState } from './interfaces'
import { SkiPassesActions } from './types'

const initialState: SkiPassesState = {
  skiPasses: [],
  isLoading: false,
  error: '',
  total: 0,
  page: 1,
  limit: 0,
  search: 0,
  isRemoveCurrentSkiPass: false,
  errorRemove: '',
  isAddSkiPass: false,
  errorAdd: '',
  isEditCurrentSkiPass: false,
  errorEdit: '',
  assignedVisitorForCard: null,
  isLoadingAssignedVisitorForCard: false,
  errorAssignedVisitorForCard: '',
  allVisitorsForSkiPasses: [],
  allVisitorsPhotoForSkiPasses: [],
  isGetAllVisitors: false,
  errorAllVisitors: '',
};

const skiPasses = (state = initialState, action: SkiPassesActions) => {
  switch (action.type) {
    case SkiPassesActionTypes.SKIPASSES_REQUEST:
      return {
        ...state,
        isLoading: true,
        page: action.page,
        limit: action.limit,
        search: action.search,
      };
    case SkiPassesActionTypes.SKIPASSES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        skiPasses: action.skiPasses,
        total: action.total,
        // search: 0,
      };
    case SkiPassesActionTypes.SKIPASSES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case SkiPassesActionTypes.SKIPASS_REMOVE_REQUEST:
      return {
        ...state,
        isRemoveCurrentSkiPass: false,
      };
    case SkiPassesActionTypes.SKIPASS_REMOVE_SUCCESS:
      return {
        ...state,
        isRemoveCurrentSkiPass: true,
      };
    case SkiPassesActionTypes.SKIPASS_REMOVE_ERROR:
      return {
        ...state,
        errorRemove: action.payload,
      };
    case SkiPassesActionTypes.SKIPASS_ADD_REQUEST:
      return {
        ...state,
        isAddSkiPass: false,
      };
    case SkiPassesActionTypes.SKIPASS_ADD_SUCCESS:
      return {
        ...state,
        isAddSkiPass: true,
        allVisitorsForSkiPasses: [],
        allVisitorsPhotoForSkiPasses: [],
      };
    case SkiPassesActionTypes.SKIPASS_ADD_ERROR:
      return {
        ...state,
        errorAdd: action.payload,
      };
    case SkiPassesActionTypes.SKIPASS_EDIT_REQUEST:
      return {
        ...state,
        isEditSkiPass: false,
      };
    case SkiPassesActionTypes.SKIPASS_EDIT_SUCCESS:
      return {
        ...state,
        isEditSkiPass: true,
      };
    case SkiPassesActionTypes.SKIPASS_EDIT_ERROR:
      return {
        ...state,
        errorEdit: action.payload,
      };
    case SkiPassesActionTypes.SKIPASS_ASSIGNED_VISITOR_REQUEST:
      return {
        ...state,
        isLoadingAssignedVisitorForCard: true,
        assignedVisitorForCard: null,
      };
    case SkiPassesActionTypes.SKIPASS_ASSIGNED_VISITOR_SUCCESS:
      return {
        ...state,
        isLoadingAssignedVisitorForCard: false,
        assignedVisitorForCard: action.assignedVisitorForCard,
      };
    case SkiPassesActionTypes.SKIPASS_ASSIGNED_VISITOR_ERROR:
      return {
        ...state,
        errorAssignedVisitorForCard: action.payload,
      };
    case SkiPassesActionTypes.SKIPASS_ALL_VISITORS_REQUEST:
      return {
        ...state,
        isGetAllVisitors: true,
        allVisitorsForSkiPasses: [],
        allVisitorsPhotoForSkiPasses: [],
      };
    case SkiPassesActionTypes.SKIPASS_ALL_VISITORS_SUCCESS:
      return {
        ...state,
        isGetAllVisitors: false,
        allVisitorsForSkiPasses: action.allVisitorsForSkiPasses,
        allVisitorsPhotoForSkiPasses: action.allVisitorsPhotoForSkiPasses,
      };
    case SkiPassesActionTypes.SKIPASS_ALL_VISITORS_ERROR:
      return {
        ...state,
        errorAllVisitors: action.payload,
      };
    default:
      return state;
  };
};

export default skiPasses;