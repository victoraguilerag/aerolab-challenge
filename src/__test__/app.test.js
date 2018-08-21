import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import renderer from 'react-test-renderer'
import { fromJS } from 'immutable'
import App from '../App.js'
import productsStub from '../stub/products.js'
import userStub from '../stub/user.js'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const functionMock = () => console.log('mock')
const coins = 123

const initialState = fromJS({
  user: {
    user: userStub,
    loading: false
  },
  modal: {
    modal: true,
    modalMode: 'history',
    loadingHistory: false,
    historyIndex: 1,
    selectedItem: '',
    history: productsStub
  },
  message: {
    showMessage: false,
    message: 'Message Stub'
  },
  products: {
    products: productsStub,
    page: 1,
    filters: [],
    filter: 'Most Recent',
    limit: 15
  }
})

const store = mockStore(initialState)

test('App renders', () => {
  const component = renderer.create(
    <Provider store={store}>
      <App
      />
    </Provider>,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
