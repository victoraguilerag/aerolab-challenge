import React from 'react'
import Banner from '../banner/components/Banner.jsx'
import renderer from 'react-test-renderer'

test('Banner renders', () => {
  const component = renderer.create(
    <Banner section="Electronics" />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
