import { createSelector } from 'reselect'
import { activeFeatureValueSelector } from 'apps/shared/Features'

const priceRangeVariants = {
  priceRangeV1: 'priceRangeV1',
  priceRangeV2: 'priceRangeV2',
}

export default (breakdown = {}) => createSelector(
  activeFeatureValueSelector(priceRangeVariants, 'priceRange'),
  variant => breakdown[variant]
)
