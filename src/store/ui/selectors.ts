import { TRootState } from '../store';

export const allUi= (state: TRootState) => state.uiReducer;

export const isMobile = (state: TRootState) => allUi(state).isMobile;
export const width = (state: TRootState) => allUi(state).width;