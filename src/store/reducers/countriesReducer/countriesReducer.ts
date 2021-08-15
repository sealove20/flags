import { countriesTypes } from '@/store/ActionTypes/countriesTypes'

import { CountriesActions, CountriesState } from '@/store/types/types'

const initialState: CountriesState = {
  pending: false,
  countries: [],
  error: null
}

export default (action: CountriesActions, state = initialState) => {
  switch (action.type) {
    case countriesTypes.FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        peding: true
      }
    case countriesTypes.FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        pending: false,
        countries: action.payload.countries,
        error: null
      }
    case countriesTypes.FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        pending: false,
        countries: [],
        error: action.payload.error
      }
    default:
      return {
        ...state
      }
  }
}
