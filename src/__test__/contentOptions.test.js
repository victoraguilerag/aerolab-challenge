import React from 'react'
import ContentOptions from '../content/components/ContentOptions.jsx'
import renderer from 'react-test-renderer'
import { fromJS } from 'immutable'

const filters = fromJS(['Most recent', 'Lowest price', 'Highest price'])
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
