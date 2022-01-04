import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import sagaWatcher from './saga/sagas';
import reducerTask from './reducer';

const preloadedState = {
  page: [{
    num: '',
    tasks: [],
    total_count: '',
  }],
  user: {
    name: '',
    email: '',
    token: '',
  },
  currentPage: {
    field: 'sort_field',
    direct: 'sort_direction',
    pageNum: '',
  },
  answer: {
    status: '',
    message: {

    },

  },
  // URL: 'https://uxcandy.com/~shapoval/test-task-backend/v2',
  loading: false,
};
const sagaMiddleware = createSagaMiddleware();
const mainStore = createStore(
  reducerTask,
  preloadedState,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),

);
sagaMiddleware.run(sagaWatcher);
export default mainStore;
