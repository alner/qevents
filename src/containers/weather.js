import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Weather from '../components/weather'
import * as actions from '../actions/index'

function mapStoreStateToProps(state) {
  return {
    weather: state.weather
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStoreStateToProps, mapDispatchToProps)(Weather)
