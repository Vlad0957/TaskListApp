import { takeEvery, put, call } from 'redux-saga/effects';

import {
ADD_TASK, SORT_BY_PARAM, USER_DATA, CHANGE_TASK,
} from '../actions/type';
import { addFetchTasks, authUserToken, addAnswer } from '../actions/actions';

export default function* sagaWatcher() {
  yield takeEvery(ADD_TASK, sagaWorkerAddTask);
  yield takeEvery(SORT_BY_PARAM, sagaWorkerSortField);
  yield takeEvery(USER_DATA, sagaWorkerUserAuth);
  yield takeEvery(CHANGE_TASK, sagaWorkerChangeTask);
}

function* sagaWorkerChangeTask(data) {
  const response = yield call(changeTask, data);

  yield put(addAnswer(
    {
      status: response.status,
      message: 'Successfully edited',
    },
  ));
}

function* sagaWorkerAddTask(data) {
  const response = yield call(createNewTask, data);

  yield put(addAnswer(
    {
      message: 'Task created',
      status: response.status,
    },
  ));
}

function* sagaWorkerSortField(data) {
  const payload = yield call(sortByField, data);

  if (payload.message.tasks.length > 0) {
    yield put(addFetchTasks({
      payload, num: data.payload.num,
    }));
  }
}

function* sagaWorkerUserAuth(data) {
  const response = yield call(userAuthor, data);

  if (response.status == 'ok') {
    yield put(authUserToken({
      payload: response,
    }));
  } else if (response.status == 'error') {
    yield put(addAnswer(
      {
        status: response.status,
        message: response.message.password,
      },
    ));
  }
}
async function changeTask(data) {
  const formData = new FormData();
  formData.append('token', data.payload.payload.token);
  formData.append('text', data.payload.payload.text);
  formData.append('status', data.payload.payload.status);
  const response = await fetch(`${data.payload.payload.URL}/edit/${data.payload.payload.id}?developer=Vlad`, {
    method: 'POST',
    body: formData,
  });

  const res = response.json();
  return res;
}
async function userAuthor(data) {
  const formData = new FormData();
  formData.append('username', data.payload.username);
  formData.append('password', data.payload.password);
  const response = await fetch(`${data.payload.URL}/login?developer=Vlad`, {
    method: 'POST',
    body: formData,
  });

  const res = response.json();

  return res;
}

async function sortByField(data) {
  const response = await fetch(`${data.payload.URL}/?developer=Vlad&sort_field=${data.payload.value.field}&sort_direction=${data.payload.value.direction}&page=${data.payload.num}`);
  const res = response.json();
  return res;
}


async function createNewTask(data) {
  const form = new FormData();
  form.append('username', data.payload.username);
  form.append('email', data.payload.email);
  form.append('text', data.payload.text);

  const response = await fetch(`${data.payload.URL}/create?developer=Vlad`, {
    method: 'POST',
    body: form,
  });

  const res = response.json();

  return res;
}
