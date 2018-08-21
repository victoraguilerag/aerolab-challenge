import { fromJS } from 'immutable'
import actionTypes from '../constants/action-types.js'

const {
  TOGGLE_MESSAGE
} = actionTypes

const initialState = fromJS({
  showMessage: false,
  message: ''
})

function message (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MESSAGE: {
      const message = (action.payload.message) ? action.payload.message : state.message
      return state.merge({
        showMessage: !state.get('showMessage'),
        message
      })
    }
    default:
      return state
  }
}

export default message
