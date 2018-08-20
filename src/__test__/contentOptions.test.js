import React from 'react'
import ContentOptions from '../content/components/ContentOptions.jsx'
import renderer from 'react-test-renderer'

const filters = []
const functionMock = () => console.log('mock')
const pageLength = 2
const productsLength = 16

test('Content Options renders', () => {
  const component = renderer.create(
    <ContentOptions
      filters={filters}
      prev={false}
      next={true}
      handlePreviousPage={functionMock}
      handleNextPage={functionMock}
      pageLength={pageLength}
      productsLength={productsLength}
      handleFilterChange={functionMock}
      activeFilter="active filter"
    />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
