import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import sagaWatcher from './saga/sagas';
import rootReducer from './reducer/rootReducer';


const sagaMiddleware = createSagaMiddleware();
const mainStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),

);

sagaMiddleware.run(sagaWatcher);
export default mainStore;
