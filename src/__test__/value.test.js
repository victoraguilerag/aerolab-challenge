import React from 'react'
import { Value } from '../modal/components/Value.jsx'
import renderer from 'react-test-renderer'
import userStub from '../stub/user.js'

const functionMock = () => console.log('function mock');

test('Value renders', () => {
  const component = renderer.create(
    <Value
      value={1000}
      active={true}
      handleValueSelected={functionMock}
    />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
