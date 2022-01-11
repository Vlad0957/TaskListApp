import { all, fork } from 'redux-saga/effects';
import { tasksSagaWatcher1, tasksSagaWatcher2, tasksSagaWatcher3 } from './tasksSaga'
import { userSagaWatcher } from './userSaga'


export default function* sagaWatcher() {

  yield all([
    fork(tasksSagaWatcher1),
    fork(tasksSagaWatcher2),
    fork(tasksSagaWatcher3),
    fork(userSagaWatcher)
  ])
}



