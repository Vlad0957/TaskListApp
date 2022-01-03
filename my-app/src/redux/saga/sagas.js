import {takeEvery, put, call} from 'redux-saga/effects'
import {REQUEST_TASKS, ADD_TASK, SORT_BY_PARAM, USER_DATA, CHANGE_TASK} from '../actions/type';
import { addFetchTasks, sortByParam, authUserToken, addAnswer } from '../actions/actions';



export default function* sagaWatcher(){
  yield takeEvery(REQUEST_TASKS, sagaWorker)
  yield takeEvery(ADD_TASK, sagaWorkerAddTask)
  yield takeEvery(SORT_BY_PARAM, sagaWorkerSortField)
  yield takeEvery(USER_DATA, sagaWorkerUserAuth)
  yield takeEvery(CHANGE_TASK, sagaWorkerChangeTask)
}


function* sagaWorkerChangeTask(data){
console.log(data, 'dataChange')
const response = yield call(changeTask, data)
console.log(response, 'CHANGE_TASKS')
yield put(addAnswer(
  {
    status: response.status,
    message: 'Successfully edited'
  }
))
}

function* sagaWorker(data){
  console.log(data.payload.i)
const payload =  yield call(fetchTasks, data)
console.log(payload, 'FETCH_TASKS')
if(payload.message.tasks.length>0){
  yield put(addFetchTasks({
    payload, num: data.payload.i
  }))

}
}

function* sagaWorkerAddTask(data){
  console.log(data.payload.text)

  const response = yield call(createNewTask, data)
  console.log(response, 'ADD-TASK_NEW')
  yield put(addAnswer(
    {
      message: 'Task created',
      status: response.status,
    }
  ))

  
  }

  function* sagaWorkerSortField(data){
    console.log(data.payload)
    const payload = yield call(sortByField, data)
  console.log(payload)
  if(payload.message.tasks.length>0){
    yield put(addFetchTasks({
      payload, num: data.payload.num
    }))

  }

  }

  function* sagaWorkerUserAuth(data){
    console.log(data.payload, 'useAuth')
    const response = yield call(userAuthor, data)
    console.log(response, 'responseToken!!!!')
    if(response.status == 'ok'){
      yield put(authUserToken({
      payload: response
    }))
    } else if(response.status == 'error') {
      yield put(addAnswer(
        {status: response.status,
          message: response.message.password,
        }
      ))
    }
    
  }
  async function changeTask(data){
    let formData = new FormData()
    formData.append('token',  data.payload.payload.token)
    formData.append('text',  data.payload.payload.text)
    formData.append('status',  data.payload.payload.status)
    const response = await fetch(`https://uxcandy.com/~shapoval/test-task-backend/v2/edit/${data.payload.payload.id}?developer=Vlad`, {
      method: 'POST',
      body: formData
    })
   
    const res = response.json()
    return res
  }
  async function userAuthor(data){

    let formData = new FormData()
    formData.append('username',  data.payload.username)
    formData.append('password',  data.payload.password)
    const response = await fetch('https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=Vlad', {
      method: 'POST',
      body: formData
    })
    // console.log(response.json())
    const res = response.json()
  
    return res
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


