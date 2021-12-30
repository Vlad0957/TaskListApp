import {ADD_TASK, FETCH_TASKS} from './actions/type'
const initialState = {}
const reducerTask = (state = initialState, action) =>{

  switch(action.type){
    case ADD_TASK:
      return {
        ...state, tasks: [...state.tasks, action.payload]
      };
      case FETCH_TASKS:
        return {
          ...state, tasks: [...state.tasks, ...action.payload.payload.message.tasks]
        }
    default: 
    return state
  }
}

export default reducerTask
