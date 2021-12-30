import {ADD_TASK, REQUEST_TASKS, FETCH_TASKS} from './type'

export const addNewTask = (payload) =>({
payload,
type: ADD_TASK,

})

export const fetchTasks = ()=>({
  type: REQUEST_TASKS,
})

export const addFetchTasks = (payload) =>{

console.log(payload.payload.message.tasks)
  return {
  payload,
  type: FETCH_TASKS,
  
  }
}
  
