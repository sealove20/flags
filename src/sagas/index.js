import axios from 'axios'
import { call, put } from 'redux-saga'

function * fetchCountriesFlags (action) {
  try {
    const flags = yield call(axios.get('https://restcountries.eu/rest/v2/all'))
    yield put({ type: 'COUNTRIES_FETCH_SUCCEEDED', countries: flags })
  } catch (e) {
    yield put({ type: 'COUNTRIES_FETCH_FAILED', message: e.message })
  }
}
