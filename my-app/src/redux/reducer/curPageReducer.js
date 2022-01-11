import {
 SORT_PARAM_ADD,
} from '../actions/type';

const initialState = {
  field: 'sort_field',
  direct: 'sort_direction',
  pageNum: '',
}
export const curPageReducer = (state = initialState, action) => {
switch (action.type) {
  case SORT_PARAM_ADD:
    return {
      
      
        field: action.payload.field,
        direct: action.payload.direct,
        pageNum: action.payload.pageNum,
      
    };

  default:
    return state;
}
};
