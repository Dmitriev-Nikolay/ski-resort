import { UiActionTypes, UiResize } from './types';

export const resize = (width: number): UiResize => ({
  type: UiActionTypes.RESIZE,
  width,
});