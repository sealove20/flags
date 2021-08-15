import { all, call, put, takeLatest } from 'redux-saga/effects'
import { get } from '@/repository/countries'

import { fetchCountriesFailure, fetchCountriesSuccess } from '@/store/actions/countriesActions/countriesActions'
import { countriesTypes } from '@/store/ActionTypes/countriesTypes'

function * fetchCountriesSaga () {
  try {
    const response = yield call(get)
    yield put(
      fetchCountriesSuccess({
        countries: response.data
      })
    )
  } catch (e) {
    yield put(
      fetchCountriesFailure({
        error: e.message
      })
    )
  }
}

function * countriesSaga () {
  yield all([takeLatest(countriesTypes.FETCH_COUNTRIES_REQUEST, fetchCountriesSaga)])
}

export default countriesSaga
