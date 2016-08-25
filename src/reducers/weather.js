import * as constants from '../constants'

export default function weather(state = {}, action) {
  // FETCH_WEATHER, WEATHER_FETCHED
  if(action.type === constants.WEATHER_FETCHED) {
    return action.data;
  }
  return state;
}
