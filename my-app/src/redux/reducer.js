import {
  FETCH_TASKS, CLEAR_STATE, USER_TOKEN, DELETE_USER, ADD_ANSWER, HIDE_ALERT, SORT_PARAM_ADD,
} from './actions/type';

const initialState = {};
const reducerTask = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_STATE:
      return {
        ...state,
        page: {
          num: '',
          tasks: [],
        },

      };
    case FETCH_TASKS:
      return {
        ...state,
        page: {
          num: action.payload.num,
          tasks: [...action.payload.payload.message.tasks],
          total_count: action.payload.payload.message.total_task_count,
        },
      };
    case USER_TOKEN:
      return {
        ...state,
        user: {
          name: '',
          email: '',
          token: action.payload.payload.message.token,
        },
      };
    case DELETE_USER:
      return {
        ...state,
        user: {
          name: '',
          email: '',
          token: '',
        },
      };
    case ADD_ANSWER:
      return {
        ...state,
        answer: {
          status: action.payload.status,
          message: action.payload.message,
        },
      };
    case HIDE_ALERT:
      return {
        ...state,
        answer: {
          status: '',
          message: '',
        },
      };
    case SORT_PARAM_ADD:
      return {
        ...state,
        currentPage: {
          field: action.payload.field,
          direct: action.payload.direct,
          pageNum: action.payload.pageNum,
        },
      };

    default:
      return state;
  }
};

export default reducerTask;
