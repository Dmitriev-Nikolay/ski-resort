import { all, spawn } from 'redux-saga/effects';

import { loginWatcher } from './login/sagas';
import { visitorsWatcher } from './visitors/sagas';
import { instructorsWatcher } from './instructors/sagas';
import { skiPassesWatcher } from './skiPasses/sagas';

export default function* rootSaga() {
  yield all([
    spawn(loginWatcher),
    spawn(visitorsWatcher),
    spawn(instructorsWatcher),
    spawn(skiPassesWatcher),
  ]);
};