import fetch from 'isomorphic-fetch'
import * as constants from '../constants'
import * as api from '../api'

export function setKeyword(word) {
  return {
    type: constants.SET_KEYWORD,
    word
  }
}

export function weatherSetState(state) {
  return {
    type: constants.WEATHER_SET_STATE,
    state
  }
}

export function fetchWeatherForCity(city) {
  return dispatch => {
    dispatch(weatherFetching(city))
    api.getWeatherByCity(city)
      .then(data => dispatch(weatherFetched(data, city)))
  }
}

function weatherFetching(place) {
  return {
    type: constants.WEATHER_FETCHING,
    place
  }
}

function weatherFetched(data, place) {
  return {
    type: constants.WEATHER_FETCHED,
    place,
    data
  }
}

export function fetchPhrase(url) {
  return dispatch => {
    return fetch(url)
      .then(req => req.json())
      .then(json => dispatch(phraseFetched(json)));
  }
}

export function phraseFetched(json) {
  return {
    type: constants.PHRASE_FETCHED,
    json
  }
}
