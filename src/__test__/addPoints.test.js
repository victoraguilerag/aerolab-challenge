import React from 'react'
import { AddPoints } from '../modal/components/AddPoints.jsx'
import renderer from 'react-test-renderer'

const functionMock = () => console.log('function mock');

test('AddPoints renders', () => {
  const component = renderer.create(
    <AddPoints
      handleAddPoints={functionMock}
      handleValueSelected={functionMock}
      selectedValue={1000}
    />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
