import React from 'react'
import { ProductsList } from '../content/components/ProductsList.jsx'
import productsStub from '../stub/products.js'
import renderer from 'react-test-renderer'

const selectedItem = '123123'
const selected = true
const products = []
const coins = 123
const info = productsStub[0]
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
