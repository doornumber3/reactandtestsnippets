import React from 'react'
import { Provider } from 'react-redux'
import { createMockStore } from 'mocks'
import { expect, mount } from 'utils'
import { Breakdown } from 'apps/shared/PriceRange'

describe('Breakdown', () => {
  const props = {
    breakdowns: {
      priceRange: { label: '', price: '$1000–$2000' },
      priceRangeV1: { label: '', price: '$1,000 and up' },
      priceRangeV2: { label: '', price: '$1,000+' },
    },
  }

  const getWrapper = state => (
    mount(
      <Provider store={state}>
        <Breakdown {...props} />
      </Provider>
    )
  )

  it('displays Please Call label if no breakdown is provided', () => {
    const state = createMockStore({
      features: {},
    })
    const wrapper = mount(
      <Provider store={state}>
        <Breakdown />
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
    const expected = '<span data-test-id="availability-price">$1000–$2000</span>'
    expect(wrapper.html()).to.contain(expected)
  })

  it('displays price range variant 1', () => {
    const state = createMockStore({
      features: {
        priceRangeV1: true,
      },
    })
    const wrapper = getWrapper(state)
    const expected = '<span data-test-id="availability-price">$1,000 and up</span>'
    expect(wrapper.html()).to.contain(expected)
  })

  it('displays price range variant 2', () => {
    const state = createMockStore({
      features: {
        priceRangeV2: true,
      },
    })
    const wrapper = getWrapper(state)
    const expected = '<span data-test-id="availability-price">$1,000+</span>'
    expect(wrapper.html()).to.contain(expected)
  })
})
