import { all, call, fork, put, select, take, takeLatest } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'connected-react-router';

import AxiosDefault from '../../services/axios';
import * as actions from './actions';
import { Instructor } from './interfaces';
import { instructorsEndpoints, instructorsParams } from './requests';
import { Visitor } from './../visitors/interfaces';
import { visitorsEndpoints, visitorsParams } from '../visitors/requests';
import { allInstructors } from './selectors';
import {
  InstructorsActionTypes,
  InstructorsRequest,
  InstructorRemoveRequest,
  InstructorAddRequest,
  InstructorAllVisitorsRequest,
  InstructorEditRequest
} from './types';
import {
  LIMIT_ON_PAGE_PEOPLE,
  LIMIT_ON_PREVIEW_PEOPLE,
  BASE64_IMAGE,
} from '../constants';

/**
 * 
 * @methods WORKERS 
 */

function* loadInstructors({ page, limit, search }: InstructorsRequest) {
  try {
    const instructors: Instructor[] = yield call(AxiosDefault.get, instructorsEndpoints.allQuery(search), instructorsParams.allQuery(page, limit));
    const totalInstructors: number = yield call(AxiosDefault.get, instructorsEndpoints.quantity(search));
    const instructorsPhotoNoBase: string[] = yield all(instructors.map(instructor => {
      if (instructor.photo) {
        return call(AxiosDefault.get, instructorsEndpoints.img(instructor.id));
      }
      return '';
    }));
    const instructorsPhoto = instructorsPhotoNoBase.map(photo => photo ? BASE64_IMAGE + photo : '');
    yield put(actions.instructorsPhotosSuccess(instructorsPhoto));
    yield put(actions.instructorsSuccess(instructors, totalInstructors));
  } catch (error: any) {
    yield put(actions.instructorsError(error));
  };
};

function* loadInstructorsOnRoute(): unknown {
  while (true) {
    const action = yield take(LOCATION_CHANGE);
    if (action.payload.location.pathname.endsWith('/')) {
      yield put(actions.instructorsRequest(1, LIMIT_ON_PREVIEW_PEOPLE, ''));
    }
    if (action.payload.location.pathname.endsWith('coach')) {
      yield put(actions.instructorsRequest(1, LIMIT_ON_PAGE_PEOPLE, ''));
    }
  }
};

function* getAllInstructorVisits({ id }: InstructorAllVisitorsRequest) {
  try {
    const allInstructorVisitors: Visitor[] = yield call(AxiosDefault.get, instructorsEndpoints.allVisitors(id));
    yield put(actions.instructorAllVisitorsSuccess(allInstructorVisitors));
  } catch (error: any) {
    yield put(actions.instructorAllVisitorsError(error));
  };
};

function* removeCurrentInstructor({ id, limit }: InstructorRemoveRequest) {
  try {
    yield call(AxiosDefault.delete, instructorsEndpoints.remove(id));
    yield put(actions.instructorRemoveSuccess());
    const { page, search, instructors } = yield select(allInstructors);
    if (instructors.length === 1 && page !== 1) {
      yield put(actions.instructorsRequest(page - 1, limit, search));
    } else {
      yield put(actions.instructorsRequest(page, limit, search));
    }
  } catch (error: any) {
    yield put(actions.instructorRemoveError(error));
  };
};

function* addInstructor({ instructor, limit, visitorsId }: InstructorAddRequest) {
  try {
    yield call(AxiosDefault.post, instructorsEndpoints.create(), instructor);
    yield put(actions.instructorAddSuccess());
    // Находим из всего списка последнего
    const instructors: Instructor[] = yield call(AxiosDefault.get, instructorsEndpoints.all());
    const addedInstructorId = instructors[instructors.length - 1].id;
    // Добавляем посетителям выбранного тренера
    for (let i = 0; i < visitorsId.length; i++) {
      yield call(AxiosDefault.post, visitorsEndpoints.addCoach(), null, visitorsParams.addCoach(visitorsId[i], addedInstructorId));
    };
    const { page, search } = yield select(allInstructors);
    yield put(actions.instructorsRequest(page, limit, search));
  } catch (error: any) {
    yield put(actions.instructorAddError(error));
  };
};

function* editInstructor({ instructor, limit, visitorsId }: InstructorEditRequest) {
  try {
    yield call(AxiosDefault.put, instructorsEndpoints.update(), instructor);
    yield put(actions.instructorEditSuccess());
    // Добавляем посетителям выбранного тренера
    for (let i = 0; i < visitorsId.length; i++) {
      yield call(AxiosDefault.post, visitorsEndpoints.addCoach(), null, visitorsParams.addCoach(visitorsId[i], instructor.id));
    };
    const { page, search } = yield select(allInstructors);
    yield put(actions.instructorsRequest(page, limit, search));
  } catch (error: any) {
    yield put(actions.instructorEditError(error));
  };
};

function* loadAllVisitorsForInstructor() {
  try {
    const visitors: Visitor[] = yield call(AxiosDefault.get, visitorsEndpoints.all());
    const visitorWithoutInstructor = visitors.filter((visitor) => !visitor.coach); // Берем только без тренеров
    const visitorsPhotoNoBase: string[] = yield all(visitorWithoutInstructor.map(visitor => {
      if (visitor.photo) {
        return call(AxiosDefault.get, visitorsEndpoints.img(visitor.id));
      }
      return '';
    }));
    const visitorsPhoto = visitorsPhotoNoBase.map(photo => photo ? BASE64_IMAGE + photo : '');
    yield put(actions.visitorAllInstructorsSuccess(visitorWithoutInstructor, visitorsPhoto));
  } catch (error: any) {
    yield put(actions.visitorAllInstructorsError(error));
  };
};

/**
 * 
 * @methods WATCHERS
 */

export function* instructorsWatcher() {
  yield fork(loadInstructorsOnRoute);
  yield takeLatest(InstructorsActionTypes.INSTRUCTORS_REQUEST, loadInstructors);
  yield takeLatest(InstructorsActionTypes.INSTRUCTOR_REMOVE_REQUEST, removeCurrentInstructor);
  yield takeLatest(InstructorsActionTypes.INSTRUCTOR_ADD_REQUEST, addInstructor);
  yield takeLatest(InstructorsActionTypes.INSTRUCTOR_EDIT_REQUEST, editInstructor);
  yield takeLatest(InstructorsActionTypes.INSTRUCTOR_ALL_VISITORS_REQUEST, getAllInstructorVisits);
  yield takeLatest(InstructorsActionTypes.ALL_VISITORS_FOR_INSTRUCTOR_REQUEST, loadAllVisitorsForInstructor);
};