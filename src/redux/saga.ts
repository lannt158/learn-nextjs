import { all, fork } from 'redux-saga/effects';
import { counterSaga } from '@/modules/counter';

export default function* rootSaga() {
    yield all([
      fork(counterSaga),
    ]);
  }