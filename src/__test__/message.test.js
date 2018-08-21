import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import { fromJS } from 'immutable'
import Message from '../message/components/Message.jsx'
import productsStub from '../stub/products.js'

const mockStore = configureStore()
const initialState = fromJS({
  message: {
    message: 'Message displayed'
  }
})

const store = mockStore(initialState)

test('Message renders', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Message  />
    </Provider>,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
