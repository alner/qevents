import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Hello from 'components/hello'
import * as actions from 'actions/index'

function mapStoreStateToProps(state) {
  return {
    word: state.word
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStoreStateToProps, mapDispatchToProps)(Hello)
