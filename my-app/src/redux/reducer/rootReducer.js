import {combineReducers} from 'redux'
import {userReducer} from './userReducer'
import taskReducer from './taskReducer'
import {answReducer} from './answReducer'
import {curPageReducer} from './curPageReducer'
import {urlReducer} from './urlReducer'

const rootReducer = combineReducers({
  page: taskReducer,
  user: userReducer,
  currentPage: curPageReducer,
  answer: answReducer,
  URL: urlReducer

})

export default rootReducer
