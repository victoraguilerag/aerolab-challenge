import React from 'react'
import { History } from '../modal/components/History.jsx'
import renderer from 'react-test-renderer'
import productsStub from '../stub/products.js'

const functionMock = () => console.log('function mock');

test('History renders', () => {
  const component = renderer.create(
    <History
      fetchHistory={functionMock}
      previousHistoryItem={functionMock}
      nextHistoryItem={functionMock}
      history={productsStub}
      historyIndex={1}
      loadingHistory={false}
    />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
