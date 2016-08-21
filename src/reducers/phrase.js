export default function phrase(state = 'Hello world!', action) {
  console.log('Phrase reducer', action)
  if(action.type === 'SET_PHRASE') {
    return action.phrase
  }
  return state
}
