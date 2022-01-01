import {takeEvery, put, call} from 'redux-saga/effects'
import {REQUEST_TASKS, ADD_TASK, SORT_BY_PARAM} from '../actions/type';
import { addFetchTasks, sortByParam } from '../actions/actions';



export default function* sagaWatcher(){
  yield takeEvery(REQUEST_TASKS, sagaWorker)
  yield takeEvery(ADD_TASK, sagaWorkerAddTask)
  yield takeEvery(SORT_BY_PARAM, sagaWorkerSortField)
}

function* sagaWorker(data){
  console.log(data.payload.i)
const payload =  yield call(fetchTasks, data)
yield put(addFetchTasks({
  payload, num: data.payload.i
}))
}

function* sagaWorkerAddTask(data){
  console.log(data.payload.text)

  const response = yield call(createNewTask, data)
  console.log(response)
  
  }

  function* sagaWorkerSortField(data){
    console.log(data.payload)
    const payload = yield call(sortByField, data)
  console.log(payload)
  yield put(addFetchTasks({
    payload, num: data.payload.num
  }))

  }

  async function sortByField(data){
    console.log('SortField request', data.payload)
    const response = await fetch(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Vlad&sort_field=${data.payload.value.field}&sort_direction=${data.payload.value.direction}&page=${data.payload.num}`)
  let res = response.json()
    return res
  }

async function fetchTasks(num){
  console.log('Fetch request', num.payload.i)
  const response = await fetch(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Vlad&page=${num.payload.i}`)
  let res = response.json()
  console.log(res)
  return res
}

async function createNewTask(payload){
  console.log('addFetchTasks ', payload.payload.text)
  let form = new FormData()
  form.append("username", payload.payload.username)
  form.append("email", payload.payload.email)
  form.append("text", payload.payload.text)
  console.log(form)
  const response = await fetch('https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=Vlad', {
    method: 'POST',
    body: form,
  });

  let res = response.json()
  console.log(res)
  return res
}


