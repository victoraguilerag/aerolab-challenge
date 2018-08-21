import React from 'react'
import { ModalLayout } from '../modal/components/ModalLayout.jsx'
import renderer from 'react-test-renderer'
import { fromJS } from 'immutable'
import userStub from '../stub/user.js'

const functionMock = () => console.log('function mock');

test('Modal Layout renders', () => {
  const component = renderer.create(
    <ModalLayout
      handleModal={functionMock}
      user={fromJS(userStub)}
    >
      <div />
    </ModalLayout>,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
