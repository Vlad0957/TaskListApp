import {
  ADD_ANSWER, HIDE_ALERT
} from '../actions/type';

const initialState = {
  status: '',
  message: {

  },

}

export const answReducer = (state = initialState, action)=> {

  switch (action.type) {
  
    case ADD_ANSWER:
      return {
        
       
          status: action.payload.status,
          message: action.payload.message,
        
      };
      case HIDE_ALERT:
        return {
          
          
            status: '',
            message: '',
        
        };
        default:
      return state;
  
  }
}



