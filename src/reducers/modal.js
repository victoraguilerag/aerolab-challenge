import { fromJS } from 'immutable'
import actionTypes from '../constants/action-types.js'

const {
  UPDATE_MODAL,
  UPDATE_HISTORY,
  UPDATE_LOADING_HISTORY,
  PREVIOUS_HISTORY_ITEM,
  NEXT_HISTORY_ITEM,
  UPDATE_SELECTED_VALUE
} = actionTypes

const initialState = fromJS({
  modal: false,
  modalMode: 'history',
  history: [],
  historyIndex: 0,
  loadingHistory: false,
  selectedValue: 1000,
  showMessage: false,
  message: ''
})

function modal (state = initialState, action) {
  switch (action.type) {
    case UPDATE_MODAL: {
      const { mode } = action.payload
      return state.merge({
        modal: !state.get('modal'),
        modalMode: mode
      })
    }
    case UPDATE_HISTORY: {
      const { history } = action.payload
      return state.set('history', fromJS(history))
    }
    case UPDATE_LOADING_HISTORY: {
      const { loadingHistory } = action.payload
      return state.set('loadingHistory', loadingHistory)
    }
    case PREVIOUS_HISTORY_ITEM: {
      if (state.get('historyIndex') - 1 >= 0) {
        return state.set('historyIndex', state.get('historyIndex') - 1)
      } else {
        return state
      }
    }
    case NEXT_HISTORY_ITEM: {
      if (state.get('historyIndex') + 1 <= state.get('history').size) {
        return state.set('historyIndex', state.get('historyIndex') + 1)
      } else {
        return state
      }
    }
    case UPDATE_SELECTED_VALUE: {
      const { selectedValue } = action.payload
      return state.set('selectedValue', selectedValue)
    }
    default:
      return state
  }
}

export default modal
