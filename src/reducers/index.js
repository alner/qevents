import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import phraseReducer from './phrase'
import weather from './weather'
import weatherApp from './weatherApp'

export default combineReducers({
    word: phraseReducer,
    routing: routerReducer,
    weather,
    weatherApp
})
