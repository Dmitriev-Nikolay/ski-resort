import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from "history";

import loginReducer from './login/reducer';
import visitorsReducer from './visitors/reducer';
import instructorsReducer from './instructors/reducer';
import skiPassesReducer from './skiPasses/reducer';
import uiReducer from './ui/reducer';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  loginReducer,
  visitorsReducer,
  instructorsReducer,
  skiPassesReducer,
  uiReducer,
});

export default rootReducer;
