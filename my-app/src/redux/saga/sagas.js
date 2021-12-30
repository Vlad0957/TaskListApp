import {takeEvery, put, call} from 'redux-saga/effects'
import {REQUEST_TASKS, ADD_TASK} from '../actions/type';
import { addFetchTasks } from '../actions/actions';



export default function* sagaWatcher(){
  yield takeEvery(REQUEST_TASKS, sagaWorker)
  yield takeEvery(ADD_TASK, sagaWorkerAddTask)
}

function* sagaWorker(){

const payload =  yield call(fetchTasks)
yield put(addFetchTasks({
  payload
}))
}

function* sagaWorkerAddTask(data){
  console.log(data.payload.text)

  const payload = yield call(createNewTask, data)
  console.log(payload)
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

async function createNewTask(payload){
  console.log('addFetchTasks ', payload.payload)
  const response = await fetch('https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Vlad/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: payload.payload.username,
      email: payload.payload.email,
      text: payload.payload.text
    }),
  });
  // console.log(response.json())
  let res = response.json()
  console.log(res)
  return res
}


