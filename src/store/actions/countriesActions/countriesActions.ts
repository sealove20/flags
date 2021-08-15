import { countriesTypes } from '@/store/ActionTypes/countriesTypes'

import {
  FetchCountriesFailure,
  FetchCountriesFailurePayload,
  FetchCountriesRequest,
  FetchCountriesSuccess,
  FetchCountriesSuccessPayload
} from '@/store/types/types'

export const fetchCountriesRequest = (): FetchCountriesRequest => ({
  type: countriesTypes.FETCH_COUNTRIES_REQUEST
})

export const fetchCountriesSuccess = (payload: FetchCountriesSuccessPayload): FetchCountriesSuccess => ({
  type: countriesTypes.FETCH_COUNTRIES_SUCCESS,
  payload
})

export const fetchCountriesFailure = (payload: FetchCountriesFailurePayload): FetchCountriesFailure => ({
  type: countriesTypes.FETCH_COUNTRIES_FAILURE,
  payload
})
