import {FETCH_TASKS, CLEAR_STATE, USER_TOKEN, DELETE_USER, ADD_ANSWER} from './actions/type'
const initialState = {}
const reducerTask = (state = initialState, action) =>{

  switch(action.type){
    case CLEAR_STATE:
      return {
        ...state, page: [{
          num: '',
          tasks: [],
        }],
        
      };
      case FETCH_TASKS:
        return {
          ...state, page: [...state.page, {
            num: action.payload.num, 
            tasks: [...action.payload.payload.message.tasks]
          }]
        }
      case USER_TOKEN:
        return {
          ...state, user: {
            name:'',
            email: '',
            token: action.payload.payload.message.token
          }
        }
      case DELETE_USER:
      return {
          ...state, user: {
            name:'',
            email: '',
            token: ''
          }
        }
      case ADD_ANSWER:
      return {
          ...state, answer: {
            status: action.payload.payload.status,
            message: action.payload.payload.message,
          }
        }
        
    default: 
    return state
  }
}

export default reducerTask
