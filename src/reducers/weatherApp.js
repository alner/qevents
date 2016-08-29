import { WEATHER_FETCHING, WEATHER_FETCHED } from '../constants'

const DEFAULT_STATE = {
  items: [
    {
      place: 'Barcelona'
    },
    {
      place: 'Kyiv'
    },
    {
      place: 'Istambul'
    }
  ]
}

export default function weatherApp(state = DEFAULT_STATE, action) {
  console.log('weatherApp', action)
  switch(action.type) {
    case WEATHER_FETCHING:
      console.log(`Fetching for ${action.place}`)
      break;
    case WEATHER_FETCHED:
      console.log(`Fetched for ${action.place}`)
      break;
    default:
      return state
  }
}
