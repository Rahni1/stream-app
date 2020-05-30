import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'

import streamsReducer from './streamsReducer'


export default combineReducers({
    // dummy reducer to make redux app work
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer
})