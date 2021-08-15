import { Country } from 'pages'
import { countriesTypes } from '../ActionTypes/countriesTypes'

export interface CountriesState {
  pending: boolean
  countries: Country[]
  error: string | null
}

export interface FetchCountriesSuccessPayload {
  countries: Country[]
}

export interface FetchCountriesFailurePayload {
  error: string
}

export interface FetchCountriesRequest {
  type: typeof countriesTypes.FETCH_COUNTRIES_REQUEST
}

export type FetchCountriesSuccess = {
  type: typeof countriesTypes.FETCH_COUNTRIES_SUCCESS
  payload: FetchCountriesSuccessPayload
}

export type FetchCountriesFailure = {
  type: typeof countriesTypes.FETCH_COUNTRIES_FAILURE
  payload: FetchCountriesFailurePayload
}

export type CountriesActions =
  | FetchCountriesRequest
  | FetchCountriesSuccess
  | FetchCountriesFailure
