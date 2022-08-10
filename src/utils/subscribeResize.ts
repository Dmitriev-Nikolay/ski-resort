import debounce from "lodash/debounce";
import store from '../store/store';
import { resize } from '../store/ui/actions';

const handleSubscribe = (): void => {
  store.dispatch(resize(window.innerWidth));
};

const optimalSubscribe = debounce(handleSubscribe, 100);

export const onSubscribeResize = (): void => {
  window.addEventListener('resize', optimalSubscribe);
};

export const offSubscribeResize = (): void => {
  window.removeEventListener('resize', optimalSubscribe);
};
