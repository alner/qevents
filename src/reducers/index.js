import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import phraseReducer from './phrase'

export default combineReducers({
    word: phraseReducer,
    routing: routerReducer
})
