import React from 'react'
import Filter from '../content/components/Filter.jsx'
import renderer from 'react-test-renderer'

test('Filter renders', () => {
  const component = renderer.create(
    <Filter
      handleFilterChange={()=>console.log('handle filter change')}
      active={true}
      label="Test label"
    />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
