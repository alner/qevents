import fetch from 'isomorphic-fetch'
import * as constants from '../constants'

export function setKeyword(word) {
  return {
    type: constants.SET_KEYWORD,
    word
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
