import {
  FETCH_TASKS,
} from '../actions/type';

const initialState = {
  num: '',
  tasks: [],
  total_count: '',
  }
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        
          num: action.payload.num,
          tasks: [...action.payload.payload.message.tasks],
          total_count: action.payload.payload.message.total_task_count,
        
      };
      
    // case ADD_ANSWER:
    //   return {
    //     ...state,
    //     answer: {
    //       status: action.payload.status,
    //       message: action.payload.message,
    //     },
    //   };
    // case HIDE_ALERT:
    //   return {
    //     ...state,
    //     answer: {
    //       status: '',
    //       message: '',
    //     },
    //   };
    // case SORT_PARAM_ADD:
    //   return {
    //     ...state,
    //     currentPage: {
    //       field: action.payload.field,
    //       direct: action.payload.direct,
    //       pageNum: action.payload.pageNum,
    //     },
    //   };
    //   case USER_TOKEN:
    //   return {
    //     ...state,
    //     user: {
    //       name: '',
    //       email: '',
    //       token: action.payload.payload.message.token,
    //     },
    //   };
    // case DELETE_USER:
    //   return {
    //     ...state,
    //     user: {
    //       name: '',
    //       email: '',
    //       token: '',
    //     },
    //   };

    default:
      return state;
  }
};

export default taskReducer;
