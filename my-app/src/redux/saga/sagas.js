import {takeEvery, put, call} from 'redux-saga/effects'

import {REQUEST_TASKS} from '../actions/type';
import { addFetchTasks } from '../actions/actions';

export default function* sagaWatcher(){
  yield takeEvery(REQUEST_TASKS, sagaWorker)
}

function* sagaWorker(){
const payload =  yield call(fetchTasks)
yield put(addFetchTasks({
  payload
}))
}

async function fetchTasks(){
  console.log('Fetch request')
  const response = await fetch('https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Vlad')
  let res = response.json()
  console.log(res)
  return res
}
