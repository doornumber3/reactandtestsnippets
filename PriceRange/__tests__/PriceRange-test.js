import React from 'react'
import { Provider } from 'react-redux'
import { createMockStore } from 'mocks'
import { expect, mount } from 'utils'
import { PriceRange } from 'apps/shared/PriceRange'

describe('PriceRange', () => {
  const props = {
    priceRange: {
      low: '1000',
      high: '2000',
      display: '$1000 - $2000',
      displayV1: '$1,000 and up',
      displayV2: '$1,000 +',
    },
  }

  const getWrapper = state => (
    mount(
      <Provider store={state}>
        <PriceRange {...props} />
      </Provider>
    )
  )

  it('displays Please Call if no display info is provided', () => {
    const state = createMockStore({
      features: {},
    })
    const wrapper = mount(
      <Provider store={state}>
        <PriceRange />
      </Provider>
    )
    const expected = 'Please Call'
    const actual = wrapper.text()
    expect(expected).to.eql(actual)
  })

  it('displays default price range variant', () => {
    const state = createMockStore({
      features: {},
    })
    const wrapper = getWrapper(state)
    const expected = '$1000 - $2000'
    const actual = wrapper.text()
    expect(expected).to.eql(actual)
  })

  it('displays price range variant 1', () => {
    const state = createMockStore({
      features: {
        priceRangeV1: true,
      },
    })
    const wrapper = getWrapper(state)
    const expected = '$1,000 and up'
    const actual = wrapper.text()
    expect(expected).to.eql(actual)
  })

  it('displays price range variant 2', () => {
    const state = createMockStore({
      features: {
        priceRangeV2: true,
      },
    })
    const wrapper = getWrapper(state)
    const expected = '$1,000 +'
    const actual = wrapper.text()
    expect(expected).to.eql(actual)
  })
})
