import { all, call, fork, put, select, take, takeLatest } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'connected-react-router';

import AxiosDefault from '../../services/axios';
import * as actions from './actions';
import { Visitor } from '../visitors/interfaces';
import { visitorsEndpoints, visitorsParams } from '../visitors/requests';
import { SkiPass } from './interfaces';
import { skiPassesEndpoints, skiPassesParams } from './requests';
import { allSkiPasses } from './selectors';
import {
  SkiPassesActionTypes,
  SkiPassesRequest,
  SkiPassRemoveRequest,
  SkiPassAddRequest,
  SkiPassEditRequest,
  SkiPassAllVisitorsRequest,
  SkiPassAssignedVisitorRequest,
} from './types';
import {
  BASE64_IMAGE,
  LIMIT_ON_PAGE_SKI_PASS,
  LIMIT_ON_PREVIEW_SKI_PASS,
} from '../constants';

/**
 * 
 * @methods WORKERS 
 */

function* loadSkiPasses({ page, limit, search }: SkiPassesRequest) {
  try {
    const skiPasses: SkiPass[] = yield call(AxiosDefault.get, skiPassesEndpoints.allQuery(search), skiPassesParams.allQuery(page, limit));
    const totalSkiPasses: number = yield call(AxiosDefault.get, skiPassesEndpoints.quantity(search));
    yield put(actions.skiPassesSuccess(skiPasses, totalSkiPasses));
  } catch (error: any) {
    yield put(actions.skiPassesError(error));
  };
};

function* loadSkiPassesOnRoute(): unknown {
  while (true) {
    const action = yield take(LOCATION_CHANGE);
    if (action.payload.location.pathname.endsWith('/')) {
      yield put(actions.skiPassesRequest(1, LIMIT_ON_PREVIEW_SKI_PASS, 0));
    }
    if (action.payload.location.pathname.endsWith('skipass')) {
      yield put(actions.skiPassesRequest(1, LIMIT_ON_PAGE_SKI_PASS, 0));
    }
  }
};

function* removeCurrentSkiPass({ number, limit }: SkiPassRemoveRequest) {
  try {
    yield call(AxiosDefault.delete, skiPassesEndpoints.remove(number));
    yield put(actions.skiPassRemoveSuccess());
    const { page, search, skiPasses } = yield select(allSkiPasses);
    if (skiPasses.length === 1 && page !== 1) {
      yield put(actions.skiPassesRequest(page - 1, limit, search));
    } else {
      yield put(actions.skiPassesRequest(page, limit, search));
    }
  } catch (error: any) {
    yield put(actions.skiPassRemoveError(error));
  };
};

function* addSkiPass({ skiPass, limit, visitorId }: SkiPassAddRequest) {
  try {
    yield call(AxiosDefault.post, skiPassesEndpoints.create(), skiPass);
    yield put(actions.skiPassAddSuccess());
    // Находим из всего списка последний
    const skiPasses: SkiPass[] = yield call(AxiosDefault.get, skiPassesEndpoints.all());
    const addedSkiPassNumber = skiPasses[skiPasses.length - 1].number;
    // Добавляем его посетителю
    yield call(AxiosDefault.post, visitorsEndpoints.addSkiPass(), null, visitorsParams.addSkiPass(visitorId, addedSkiPassNumber));
    const { page, search } = yield select(allSkiPasses);
    yield put(actions.skiPassesRequest(page, limit, search));
  } catch (error: any) {
    yield put(actions.skiPassAddError(error));
  };
};

function* editSkiPass({ skiPass, limit, visitorId, idFromTransfer }: SkiPassEditRequest) {
  try {
    yield call(AxiosDefault.put, skiPassesEndpoints.update(), skiPass);
    yield put(actions.skiPassEditSuccess());
    // Меняем местами у посетителей
    if (idFromTransfer) {
      yield call(AxiosDefault.put, visitorsEndpoints.transferSkiPass(), null, visitorsParams.transferSkiPass(idFromTransfer, visitorId));
    }
    // Добавляем его посетителю
    yield call(AxiosDefault.post, visitorsEndpoints.addSkiPass(), null, visitorsParams.addSkiPass(visitorId, skiPass.number));
    const { page, search } = yield select(allSkiPasses);
    yield put(actions.skiPassesRequest(page, limit, search));
  } catch (error: any) {
    yield put(actions.skiPassAddError(error));
  };
};

function* viewAssignedVisitor({ skiPassNumber }: SkiPassAssignedVisitorRequest) {
  try {
    const assignedVisitor: Visitor[] = yield call(AxiosDefault.get, skiPassesEndpoints.assignedVisitor(skiPassNumber));
    if (assignedVisitor) {
      yield put(actions.skiPassAssignedVisitorSuccess(assignedVisitor[0]));
    }
  } catch (error: any) {
    yield put(actions.skiPassAssignedVisitorError(error));
  };
};

function* loadAllVisitorsForSkiPass({ skiPassNumber }: SkiPassAllVisitorsRequest) {
  try {
    const visitors: Visitor[] = yield call(AxiosDefault.get, visitorsEndpoints.all());
    const visitorWithoutSkiPasses = visitors.filter((visitor) => !visitor.skiPass);  // Берем только без ски-пассов
    // Условие для формы редактирования
    if (skiPassNumber) {
      const assignedVisitors: Visitor[] = yield call(AxiosDefault.get, skiPassesEndpoints.assignedVisitor(skiPassNumber));
      const assignedVisitor: Visitor = assignedVisitors[0];
      // Если есть назначенный, то добавляем его в массив
      if (assignedVisitor) {
        const visitorWithoutSkiPasses = visitors.filter((visitor) => visitor.id === assignedVisitor.id || !visitor.skiPass);  // Берем только без ски-пассов + уже назначенный
        const visitorsPhotoNoBase: string[] = yield all(visitorWithoutSkiPasses.map(visitor => {
          if (visitor.photo) {
            return call(AxiosDefault.get, visitorsEndpoints.img(visitor.id));
          }
          return '';
        }));
        const visitorsPhoto = visitorsPhotoNoBase.map(photo => photo ? BASE64_IMAGE + photo : '');
        yield put(actions.skiPassAssignedVisitorSuccess(assignedVisitor));
        yield put(actions.skiPassAllVisitorsSuccess(visitorWithoutSkiPasses, visitorsPhoto));
        // Или берем только список без ски-пассов
      } else {
        const visitorsPhotoNoBase: string[] = yield all(visitorWithoutSkiPasses.map(visitor => {
          if (visitor.photo) {
            return call(AxiosDefault.get, visitorsEndpoints.img(visitor.id));
          }
          return '';
        }));
        const visitorsPhoto = visitorsPhotoNoBase.map(photo => photo ? BASE64_IMAGE + photo : '');
        yield put(actions.skiPassAllVisitorsSuccess(visitorWithoutSkiPasses, visitorsPhoto));
      }
      // Условие для формы добавления
    } else {
      const visitorsPhotoNoBase: string[] = yield all(visitorWithoutSkiPasses.map(visitor => {
        if (visitor.photo) {
          return call(AxiosDefault.get, visitorsEndpoints.img(visitor.id));
        }
        return '';
      }));
      const visitorsPhoto = visitorsPhotoNoBase.map(photo => photo ? BASE64_IMAGE + photo : '');
      yield put(actions.skiPassAllVisitorsSuccess(visitorWithoutSkiPasses, visitorsPhoto));
    }
  } catch (error: any) {
    yield put(actions.skiPassAllVisitorsError(error));
  };
};

/**
 * 
 * @methods WATCHERS
 */

export function* skiPassesWatcher() {
  yield fork(loadSkiPassesOnRoute);
  yield takeLatest(SkiPassesActionTypes.SKIPASSES_REQUEST, loadSkiPasses);
  yield takeLatest(SkiPassesActionTypes.SKIPASS_REMOVE_REQUEST, removeCurrentSkiPass);
  yield takeLatest(SkiPassesActionTypes.SKIPASS_ADD_REQUEST, addSkiPass);
  yield takeLatest(SkiPassesActionTypes.SKIPASS_EDIT_REQUEST, editSkiPass);
  yield takeLatest(SkiPassesActionTypes.SKIPASS_ASSIGNED_VISITOR_REQUEST, viewAssignedVisitor);
  yield takeLatest(SkiPassesActionTypes.SKIPASS_ALL_VISITORS_REQUEST, loadAllVisitorsForSkiPass);
};