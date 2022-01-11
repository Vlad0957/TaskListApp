import {
  FETCH_TASKS,
} from '../actions/type';

const initialState = {
  num: '',
  tasks: [],
  total_count: '',
};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        num: action.payload.num,
        tasks: [...action.payload.payload.message.tasks],
        total_count: action.payload.payload.message.total_task_count,
      };

    default:
      return state;
  }
};

export default taskReducer;
