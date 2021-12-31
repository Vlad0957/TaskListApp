import {ADD_TASK, FETCH_TASKS, CLEAR_STATE} from './actions/type'
const initialState = {}
const reducerTask = (state = initialState, action) =>{

  switch(action.type){
    case CLEAR_STATE:
      return {
        page: [{
          num: '',
          tasks: [],
        }],
        users: [],
      };
      case FETCH_TASKS:
        return {
          ...state, page: [...state.page, {num: action.payload.num, tasks: [...action.payload.payload.message.tasks]}]
        }
    default: 
    return state
  }
}

export default reducerTask
