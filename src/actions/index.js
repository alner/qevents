import fetch from 'isomorphic-fetch'
import * as constants from '../constants'
import * as api from '../api'

export function setKeyword(word) {
  return {
    type: constants.SET_KEYWORD,
    word
  }
}

export function fetchWeatherForCity(city) {
  return dispatch => {
    api.getWeatherByCity(city)
      .then(data => dispatch(weatherFetched(data)))
  }
}

export function weatherFetched(data) {
  return {
    type: constants.WEATHER_FETCHED,
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
