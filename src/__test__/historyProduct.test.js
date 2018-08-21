import React from 'react'
import renderer from 'react-test-renderer'
import { fromJS } from 'immutable'
import { HistoryProduct } from '../modal/components/HistoryProduct.jsx'
import productsStub from '../stub/products.js'

const coins = 2000
const selected = true
const info = fromJS(productsStub[0])
const functionMock = () => console.log('mock')

test('Hitory Product renders', () => {
  const component = renderer.create(
    <HistoryProduct
      coins={coins}
      selected={selected}
      info={info}
      handleRedeemProduct={functionMock}
      handleModal={functionMock}
      handleProductClick={functionMock}
    />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
