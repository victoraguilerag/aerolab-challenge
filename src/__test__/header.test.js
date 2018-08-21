import React from 'react'
import renderer from 'react-test-renderer'
import { fromJS } from 'immutable'
import Header from '../header/components/Header.jsx'


const functionMock = () => console.log('mock')
const user = fromJS({
  name: 'Patricio Estrella',
  points: 2000
})

test('Header renders', () => {
  const component = renderer.create(
    <Header
      handleModal={functionMock}
      user={user}
    />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
