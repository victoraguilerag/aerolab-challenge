import React from 'react'
import { ModalLayout } from '../modal/components/ModalLayout.jsx'
import renderer from 'react-test-renderer'
import userStub from '../stub/user.js'

const functionMock = () => console.log('function mock');

test('Modal Layout renders', () => {
  const component = renderer.create(
    <ModalLayout
      handleModal={functionMock}
      user={userStub}
    >
      <div />
    </ModalLayout>,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
