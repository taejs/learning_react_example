import {put, takeEvery, all} from 'redux-saga/effects';
const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* incrementAsync(count) {
  yield delay(1000);
  yield put({type : 'INCREMENT'})
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

function* helloSaga() {
  console.log('hello sagas!');
}

// notice how we only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}