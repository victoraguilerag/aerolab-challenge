import React from 'react'
import { Provider } from 'react-redux'
import Content from '../content/containers/Content.jsx'
import productsStub from '../stub/products.js'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'

const mockStore = configureStore()
const functionMock = () => console.log('mock')
const coins = 123
const handleModal = functionMock

const initialState = {
  selectedItem: '123123',
  limit: 16,
  filters: [],
  filter: 'filter',
  products: productsStub,
  page: 1
}

const store = mockStore(initialState)

test('Content renders', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Content coins={coins} handleModal={handleModal}/>
    </Provider>,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
