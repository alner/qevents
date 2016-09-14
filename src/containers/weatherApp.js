import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import WeatherApp from '../components/weatherApp'
import * as actions from '../actions'

export default connect(
  (storeState) => ({
    ...storeState.weatherApp
  }),
  (dispatch) => bindActionCreators(actions, dispatch)
)(WeatherApp)
