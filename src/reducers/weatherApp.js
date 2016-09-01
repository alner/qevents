import { WEATHER_FETCHING, WEATHER_FETCHED, WEATHER_SET_STATE } from '../constants'

const DEFAULT_STATE = {
  items: []
}

export default function weatherApp(state = DEFAULT_STATE, action) {
  console.log('weatherApp', action)
  switch(action.type) {
    case WEATHER_SET_STATE:
      return action.state
      break;
    case WEATHER_FETCHING:
      console.log(`Fetching for ${action.place}: ${action}`)
      return Object.assign({}, state, {
        items: state.items.map(item =>
          item.place === action.place ?
            Object.assign({}, item, { isFetching: true }) :
            item
        )
      })
      break;
    case WEATHER_FETCHED:
      console.log(`Fetched for ${action.place}: ${action}`)
      return Object.assign({}, state, {
              items: state.items.map(item =>
                item.place === action.place ?
                  Object.assign({}, item, {
                    isFetching: false,
                    data: action.data }) :
                  item
              )
            })
      break;
    default:
      return state
  }
}
