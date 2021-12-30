import {ADD_TASK} from './actions/type'
const initialState = {}
const reducerTask = (state = initialState, action) =>{

  switch(action.type){
    case ADD_TASK:
      return {
        ...state, tasks: [...state.tasks, action.payload]
      };
    default: 
    return state
  }
}

export default reducerTask
