import {combineReducers} from 'redux'
import loggedReducer from './logReducer'

const allreducers=combineReducers({
    log:loggedReducer
})

export default allreducers