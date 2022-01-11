import { takeEvery, call, put } from "redux-saga/effects";
import { USER_DATA } from '../actions/type'
import { authUserToken } from '../actions/actionsUser';
import { addAnswer } from '../actions/actionsTasks';

export function* userSagaWatcher(){
  yield takeEvery(USER_DATA, sagaWorkerUserAuth)
}
function* sagaWorkerUserAuth(data) {
  const response = yield call(userAuthor, data);

  if (response.status == 'ok') {
    yield put(authUserToken({
      payload: response,
    }));
  } else if (response.status == 'error') {
    yield put(addAnswer(
      {
        status: response.status,
        message: response.message.password,
      },
    ));
  }
}

async function userAuthor(data) {
  const formData = new FormData();
  formData.append('username', data.payload.username);
  formData.append('password', data.payload.password);
  const response = await fetch(`${data.payload.URL}/login?developer=Vlad`, {
    method: 'POST',
    body: formData,
  });

  const res = response.json();

  return res;
}
