import { UiActionTypes } from './types'
import { UiState } from './interfaces'
import { UiActions } from './types'
import { MOBILE_BREAKPOINTS } from '../constants'

const initialState: UiState = {
  isMobile: window.innerWidth <= MOBILE_BREAKPOINTS,
  width: window.innerWidth,
};

const ui = (state = initialState, action: UiActions) => {
  switch (action.type) {
    case UiActionTypes.RESIZE:
      return {
        ...state,
        isMobile: action.width <= MOBILE_BREAKPOINTS,
        width: action.width,
      };
    default:
      return state;
  };
};

export default ui;