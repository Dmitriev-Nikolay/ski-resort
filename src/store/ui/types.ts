export enum UiActionTypes {
  RESIZE = 'RESIZE',
};

export interface UiResize {
  type: UiActionTypes.RESIZE;
  width: number;
};

export type UiActions = UiResize;