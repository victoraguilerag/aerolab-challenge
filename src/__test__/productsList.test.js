import React from 'react'
import { ProductsList } from '../content/components/ProductsList.jsx'
import renderer from 'react-test-renderer'
import { fromJS } from 'immutable'
import productsStub from '../stub/products.js'

const selectedItem = '123123'
const selected = true
const products = fromJS([])
const coins = 123
const info = fromJS(productsStub[0])
const functionMock = () => console.log('mock')

test('Product List renders', () => {
  const component = renderer.create(
    <ProductsList
      selectedItem={selectedItem}
      updateSelectedItem={functionMock}
      redeemProduct={functionMock}
      products={products}
      coins={coins}
      handleModal={functionMock}
    />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
