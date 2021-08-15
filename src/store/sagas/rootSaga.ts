import { all, fork } from 'redux-saga/effects'
import countriesSaga from './countriesSaga/countriesSaga'

export function * rootSaga () {
  yield all([fork(countriesSaga)])
}
