import { takeEvery, put, call } from 'redux-saga/effects';
import {
  REQUEST_TASKS, ADD_TASK, SORT_BY_PARAM, USER_DATA, CHANGE_TASK,
} from '../actions/type';
import { addFetchTasks, authUserToken, addAnswer } from '../actions/actions';

const URL = 'https://uxcandy.com/~shapoval/test-task-backend/v2';

export default function* sagaWatcher() {
  yield takeEvery(REQUEST_TASKS, sagaWorker);
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

function* sagaWorker(data) {
  const payload = yield call(fetchTasks, data);

  if (payload.message.tasks.length > 0) {
    yield put(addFetchTasks({
      payload, num: data.payload.i,
    }));
  }
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
  const response = await fetch(`${URL}/edit/${data.payload.payload.id}?developer=Vlad`, {
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
  const response = await fetch(`${URL}/login?developer=Vlad`, {
    method: 'POST',
    body: formData,
  });

  const res = response.json();

  return res;
}

async function sortByField(data) {
  const response = await fetch(`${URL}/?developer=Vlad&sort_field=${data.payload.value.field}&sort_direction=${data.payload.value.direction}&page=${data.payload.num}`);
  const res = response.json();
  return res;
}

async function fetchTasks(num) {
  const response = await fetch(`${URL}/?developer=Vlad&page=${num.payload.i}`);
  const res = response.json();

  return res;
}

async function createNewTask(payload) {
  const form = new FormData();
  form.append('username', payload.payload.username);
  form.append('email', payload.payload.email);
  form.append('text', payload.payload.text);

  const response = await fetch(`${URL}/create?developer=Vlad`, {
    method: 'POST',
    body: form,
  });

  const res = response.json();

  return res;
}
