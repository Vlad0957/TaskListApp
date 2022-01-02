import {ADD_TASK, REQUEST_TASKS, FETCH_TASKS, SORT_BY_PARAM, CLEAR_STATE, USER_DATA, USER_TOKEN} from './type'

export const addNewTask = (payload) =>({
payload,
type: ADD_TASK,

})

export const fetchTasks = (payload)=>({
  type: REQUEST_TASKS,
  payload: payload,

})

export const addFetchTasks = (payload) =>{

console.log(payload.payload.message.tasks)
  return {
  payload,
  type: FETCH_TASKS,
  
  }
}

export const sortByParam = (payload)=>{

return {
payload, 
type: SORT_BY_PARAM
}
}
export const clearState = ()=>{
  return {
    type: CLEAR_STATE
  }
}

export const userAuth = (payload) => {
  return{
payload, 
type: USER_DATA
  }
}
export const authUserToken = (payload)=>{
  return {
    payload,
    type: USER_TOKEN
  }

}


