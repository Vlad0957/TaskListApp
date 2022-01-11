import {
   USER_DATA, USER_TOKEN, DELETE_USER
} from './type';

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
