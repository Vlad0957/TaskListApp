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
  users: [],
}
const sagaMiddleware = createSagaMiddleware()
const mainStore = createStore(
  reducerTask,
  preloadedState, 
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
  
)
sagaMiddleware.run(sagaWatcher)
export default mainStore
