import { all, call, fork, put, select, take, takeLatest } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'connected-react-router';

import AxiosDefault from '../../services/axios';
import * as actions from './actions';
import { Visitor } from './interfaces';
import { visitorsEndpoints, visitorsParams } from './requests';
import { Instructor } from './../instructors/interfaces';
import { instructorsEndpoints } from '../instructors/requests';
import { SkiPass } from './../skiPasses/interfaces';
import { skiPassesEndpoints } from '../skiPasses/requests';
import { allVisitors } from './selectors';
import {
  VisitorsActionTypes,
  VisitorsRequest,
  VisitorRemoveRequest,
  VisitorAddRequest,
  VisitorEditRequest
} from './types';
import {
  LIMIT_ON_PAGE_PEOPLE,
  LIMIT_ON_PREVIEW_PEOPLE,
  BASE64_IMAGE
} from '../constants';

/**
 * 
 * @methods WORKERS 
 */

function* loadVisitors({ page, limit, search }: VisitorsRequest) {
  try {
    const visitors: Visitor[] = yield call(AxiosDefault.get, visitorsEndpoints.allQuery(search), visitorsParams.allQuery(page, limit));
    const totalVisitors: number = yield call(AxiosDefault.get, visitorsEndpoints.quantity(search));
    const visitorsPhotoNoBase: string[] = yield all(visitors.map(visitor => {
      if (visitor.photo) {
        return call(AxiosDefault.get, visitorsEndpoints.img(visitor.id));
      }
      return '';
    }));
    const visitorsPhoto = visitorsPhotoNoBase.map(photo => photo ? BASE64_IMAGE + photo : '');
    yield put(actions.visitorsPhotosSuccess(visitorsPhoto));
    yield put(actions.visitorsSuccess(visitors, totalVisitors));
  } catch (error: any) {
    yield put(actions.visitorsError(error));
  };
};

function* loadVisitorsOnRoute(): unknown {
  while (true) {
    const action = yield take(LOCATION_CHANGE);
    if (action.payload.location.pathname.endsWith('/')) {
      yield put(actions.visitorsRequest(1, LIMIT_ON_PREVIEW_PEOPLE, ''));
    }
    if (action.payload.location.pathname.endsWith('visitor')) {
      yield put(actions.visitorsRequest(1, LIMIT_ON_PAGE_PEOPLE, ''));
    }
  }
};

function* removeCurrentVisitor({ id, limit }: VisitorRemoveRequest) {
  try {
    yield call(AxiosDefault.delete, visitorsEndpoints.remove(id));
    yield put(actions.visitorRemoveSuccess());
    const { page, search, visitors } = yield select(allVisitors);
    if (visitors.length === 1 && page !== 1) {
      yield put(actions.visitorsRequest(page - 1, limit, search));
    } else {
      yield put(actions.visitorsRequest(page, limit, search));
    }
  } catch (error: any) {
    yield put(actions.visitorRemoveError(error));
  };
};

function* addVisitor({ visitor, limit, instructorId }: VisitorAddRequest) {
  try {
    yield call(AxiosDefault.post, visitorsEndpoints.create(), visitor);
    yield put(actions.visitorAddSuccess());
    // Находим из всего списка последнего
    const visitors: Visitor[] = yield call(AxiosDefault.get, visitorsEndpoints.all());
    const addedVisitorId = visitors[visitors.length - 1].id;
    // Добавляем посетителю выбранного тренера
    yield call(AxiosDefault.post, visitorsEndpoints.addCoach(), null, visitorsParams.addCoach(addedVisitorId, instructorId));
    const { page, search } = yield select(allVisitors);
    yield put(actions.visitorsRequest(page, limit, search));
  } catch (error: any) {
    yield put(actions.visitorAddError(error));
  };
};

function* editVisitor({ visitor, limit, instructorId, skiPassNumber }: VisitorEditRequest) {
  try {
    yield call(AxiosDefault.put, visitorsEndpoints.update(), visitor);
    yield put(actions.visitorEditSuccess());
    // Добавляем посетителю выбранного тренера и ски-пасс
    yield call(AxiosDefault.post, visitorsEndpoints.addCoach(), null, visitorsParams.addCoach(visitor.id, instructorId));
    yield call(AxiosDefault.post, visitorsEndpoints.addSkiPass(), null, visitorsParams.addSkiPass(visitor.id, skiPassNumber));
    const { page, search } = yield select(allVisitors);
    yield put(actions.visitorsRequest(page, limit, search));
  } catch (error: any) {
    yield put(actions.visitorEditError(error));
  };
};

function* loadAllInsctructorsForVisitor() {
  try {
    const instructors: Instructor[] = yield call(AxiosDefault.get, instructorsEndpoints.all());
    const visitors: Visitor[] = yield call(AxiosDefault.get, visitorsEndpoints.all());
    const skiPasses: SkiPass[] = yield call(AxiosDefault.get, skiPassesEndpoints.all());
    const skiPassesWithDesignatedVisitors = visitors.filter(visitor => visitor.skiPass).map(visitor => visitor.skiPass);
    const skiPassesWithoutDesignatedVisitors = skiPasses.filter(skiPassAll => !skiPassesWithDesignatedVisitors.some(skiPassWith => skiPassAll.number === skiPassWith?.number));
    const instructorsPhotoNoBase: string[] = yield all(instructors.map(instructor => {
      if (instructor.photo) {
        return call(AxiosDefault.get, instructorsEndpoints.img(instructor.id));
      }
      return '';
    }));
    const instructorsPhoto = instructorsPhotoNoBase.map(photo => photo ? BASE64_IMAGE + photo : '');
    yield put(actions.visitorAllInstructorsSuccess(instructors, instructorsPhoto, skiPassesWithoutDesignatedVisitors));
  } catch (error: any) {
    yield put(actions.visitorAllInstructorsError(error));
  };
};

/**
 * 
 * @methods WATCHERS
 */

export function* visitorsWatcher() {
  yield fork(loadVisitorsOnRoute);
  yield takeLatest(VisitorsActionTypes.VISITORS_REQUEST, loadVisitors);
  yield takeLatest(VisitorsActionTypes.VISITOR_REMOVE_REQUEST, removeCurrentVisitor);
  yield takeLatest(VisitorsActionTypes.VISITOR_ADD_REQUEST, addVisitor);
  yield takeLatest(VisitorsActionTypes.VISITOR_EDIT_REQUEST, editVisitor);
  yield takeLatest(VisitorsActionTypes.VISITOR_ALL_INSTRUCTORS_REQUEST, loadAllInsctructorsForVisitor);
};