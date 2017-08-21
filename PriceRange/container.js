import { connect } from 'react-redux'
import PriceRange from './components/PriceRange'
import Breakdown from './components/Breakdown'
import priceRangeSelector from './selectors/priceRange'
import priceRangeBreakdownSelector from './selectors/breakdown'

const mapStateToPropsRange = (state, props) => ({
  text: priceRangeSelector(props.priceRange)(state),
})

export const range = connect(mapStateToPropsRange)(PriceRange)

const mapStateToPropsBreakdown = (state, props) => ({
  breakdown: priceRangeBreakdownSelector(props.breakdowns)(state),
})

export const breakdown = connect(mapStateToPropsBreakdown)(Breakdown)
