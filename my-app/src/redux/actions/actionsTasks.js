import {
  ADD_TASK, FETCH_TASKS, SORT_BY_PARAM, CHANGE_TASK, ADD_ANSWER, HIDE_ALERT, SORT_PARAM_ADD,
} from './type';

export const addNewTask = (payload) => ({
  payload,
  type: ADD_TASK,

});

export const addFetchTasks = (payload) => ({
  payload,
  type: FETCH_TASKS,

});

export const sortByParam = (payload) => ({
  payload,
  type: SORT_BY_PARAM,
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
