import { fromJS } from 'immutable'
import actionTypes from '../constants/action-types.js'

const {
  UPDATE_USER,
  UPDATE_LOADING,
  UPDATE_USER_POINTS
} = actionTypes

const initialState = fromJS({
  loading: true,
  user: {},
  message: ''
})

function user (state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER: {
      let { user } = action.payload
      return state.merge(user)
    }
    case UPDATE_LOADING: {
      const { loading } = action.payload
      return state.set('loading', loading)
    }
    case UPDATE_USER_POINTS: {
      const { points } = action.payload
      return state.set('points', state.get('points') + points)
    }
    default:
      return state
  }
}

export default user
