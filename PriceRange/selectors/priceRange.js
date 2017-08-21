import { createSelector } from 'reselect'
import { activeFeatureValueSelector } from 'apps/shared/Features'

const priceRangeVariants = {
  priceRangeV1: 'displayV1',
  priceRangeV2: 'displayV2',
}

export default (priceRange = {}) => createSelector(
  activeFeatureValueSelector(priceRangeVariants, 'display'),
  variant => priceRange[variant]
)
