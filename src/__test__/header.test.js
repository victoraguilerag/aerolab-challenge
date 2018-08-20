import React from 'react'
import Header from '../header/components/Header.jsx'
import renderer from 'react-test-renderer'

const functionMock = () => console.log('mock')
const user = {
  name: 'Patricio Estrella',
  points: 2000
}

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
