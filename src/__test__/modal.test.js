import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import renderer from 'react-test-renderer'
import { fromJS } from 'immutable'
import { Modal } from '../modal/containers/Modal.jsx'
import productsStub from '../stub/products.js'
import userStub from '../stub/user.js'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const functionMock = () => console.log('mock')

const initialState = fromJS({
  modal: {
    mode: 'history',
    history: productsStub,
    historyIndex: 1,
    loadingHistory: false,
    showMessage: false
  }
})

const store = mockStore(initialState)

test('Modal renders', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Modal
        user={fromJS(userStub)}
        mode="history"
        handleModal={functionMock}
        updateSelectedValue={functionMock}
        addPoints={functionMock}
        showMessage={false}
      />
    </Provider>,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
