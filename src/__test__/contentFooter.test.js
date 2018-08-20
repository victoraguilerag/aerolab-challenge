import React from 'react'
import ContentFooter from '../content/components/ContentFooter.jsx'
import renderer from 'react-test-renderer'

const filters = []
const functionMock = () => console.log('mock')
const pageLength = 2
const productsLength = 16

test('Content Options renders', () => {
  const component = renderer.create(
    <ContentFooter
      prev={false}
      next={true}
      handlePreviousPage={functionMock}
      handleNextPage={functionMock}
      pageLength={pageLength}
      productsLength={productsLength}
    />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});
