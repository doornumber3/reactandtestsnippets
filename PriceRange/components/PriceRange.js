import React, { PropTypes, PureComponent } from 'react'

export default class PriceRange extends PureComponent {
  static propTypes = {
    text: PropTypes.string,
  }

  static defaultProps = {
    text: 'Please Call',
  }

  render() {
    return (
      <span>
        { this.props.text }
      </span>
    )
  }
}

