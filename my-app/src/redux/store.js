import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import sagaWatcher from '../redux/saga/sagas'
import reducerTask from './reducer'


const preloadedState = {
  page: [{
    num: '',
    tasks: [],
  }],
  user: {
    name: '',
    email:'',
    token: '',
  },
  currentPage: {
    field: '',
    direct: '',
    pageNum: '',
  },
  answer: {
    status: '',
    message: {

    }
    
  },

  loading: false
}
const sagaMiddleware = createSagaMiddleware()
const mainStore = createStore(
  reducerTask,
  preloadedState, 
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
  
)
sagaMiddleware.run(sagaWatcher)
export default mainStore
