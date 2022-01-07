import {
  ADD_TASK, REQUEST_TASKS, FETCH_TASKS, SORT_BY_PARAM, USER_DATA, USER_TOKEN, DELETE_USER, CHANGE_TASK, ADD_ANSWER, HIDE_ALERT, SORT_PARAM_ADD,
} from './type';

export const addNewTask = (payload) => ({
  payload,
  type: ADD_TASK,

});

export const fetchTasks = (payload) => ({
  type: REQUEST_TASKS,
  payload,

});

export const addFetchTasks = (payload) => {
  
  return {
    payload,
    type: FETCH_TASKS,

  };
};

export const sortByParam = (payload) => ({
  payload,
  type: SORT_BY_PARAM,
});

export const userAuth = (payload) => ({
  payload,
  type: USER_DATA,
});
export const authUserToken = (payload) => ({
  payload,
  type: USER_TOKEN,
});
export const deleteUser = () => ({

  type: DELETE_USER,
});
export const changeTask = (payload) => ({
  type: CHANGE_TASK,
  payload,
});
export const addAnswer = (payload) => ({
  type: ADD_ANSWER,
  payload,
});
export const hideAlert = () => ({
  type: HIDE_ALERT,
});
export const sortParamAdd = (payload) => ({
  type: SORT_PARAM_ADD,
  payload,
});
