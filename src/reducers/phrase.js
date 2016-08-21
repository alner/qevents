import * as constants from '../constants'

export default function phrase(state = 'Hello world!', action) {
  console.log('Phrase reducer', action)
  if(action.type === constants.SET_KEYWORD) {
    return action.word
  }
  return state
}
