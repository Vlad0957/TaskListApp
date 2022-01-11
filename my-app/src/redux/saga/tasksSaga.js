import { takeEvery, call, put } from 'redux-saga/effects';
import {
  ADD_TASK, SORT_BY_PARAM, CHANGE_TASK,
} from '../actions/type';
import { addFetchTasks, addAnswer } from '../actions/actions';

export function* tasksSagaWatcher1() {
  yield takeEvery(ADD_TASK, sagaWorkerAddTask);
}
export function* tasksSagaWatcher2() {
  yield takeEvery(SORT_BY_PARAM, sagaWorkerSortField);
}

export function* tasksSagaWatcher3() {
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
