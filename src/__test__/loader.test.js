import React from 'react'
import Loader from '../commons/components/Loader.jsx'
import renderer from 'react-test-renderer'

test('Loader renders', () => {
  const component = renderer.create(
    <Loader type="Puff" />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
