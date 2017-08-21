import React, { PropTypes, PureComponent } from 'react'
import cn from 'classnames'

export default class Breakdown extends PureComponent {
  static propTypes = {
    breakdown: PropTypes.object,
    styles: PropTypes.object,
  }

  static defaultProps = {
    breakdown: {
      label: 'Please Call',
      price: '',
    },
    styles: {},
  }

  render() {
    const { label, price } = this.props.breakdown
    if (label || price) {
      const { styles } = this.props
      return (
        <span className={cn(styles.separated, styles.priceColumn)}>
          {label &&
            <span data-test-id="availability-label" className={styles.priceLabel}>{label}</span>
          }
          {price &&
            <span data-test-id="availability-price" className={styles.price}>{price}</span>
          }
      </span>
      )
    }
    return null
  }
}
