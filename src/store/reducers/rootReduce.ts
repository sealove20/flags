import { combineReducers } from 'redux'
import countriesReducer from './countriesReducer/countriesReducer'

const rootReducer = combineReducers({
  countries: countriesReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
