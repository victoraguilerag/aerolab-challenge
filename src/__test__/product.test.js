import React from 'react'
import Product from '../content/components/Product.jsx'
import productsStub from '../stub/products.js'
import renderer from 'react-test-renderer'

const coins = 2000
const selected = true
const info = productsStub[0]
const functionMock = () => console.log('mock')

test('Product renders', () => {
  const component = renderer.create(
    <Product
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
