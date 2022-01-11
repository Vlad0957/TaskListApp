import {
  USER_TOKEN, DELETE_USER,
} from '../actions/type';

const initialState = {
  name: '',
  email: '',
  token: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_TOKEN:
      return {
        name: '',
        email: '',
        token: action.payload.payload.message.token,
      };
    case DELETE_USER:
      return {
        name: '',
        email: '',
        token: '',
      };
    default:
      return state;
  }
};
