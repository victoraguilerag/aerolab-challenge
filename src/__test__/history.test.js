import React from 'react'
import { History } from '../modal/components/History.jsx'
import renderer from 'react-test-renderer'
import { fromJS } from 'immutable'
import productsStub from '../stub/products.js'

const functionMock = () => console.log('function mock');
const products = fromJS(productsStub)

test('History renders', () => {
  const component = renderer.create(
    <History
      fetchHistory={functionMock}
      previousHistoryItem={functionMock}
      nextHistoryItem={functionMock}
      history={products}
      historyIndex={1}
      loadingHistory={false}
    />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
