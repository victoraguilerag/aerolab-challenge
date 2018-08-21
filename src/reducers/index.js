import user from './user'
import products from './products'
import modal from './modal'
import message from './message'

import { combineReducers } from 'redux-immutable'

const rootReducer = combineReducers({
  user,
  products,
  modal,
  message
})

export default rootReducer
