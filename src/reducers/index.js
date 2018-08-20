const initialState = {
  loading: true,
  products: [],
  limit: 16,
  page: 1,
  filters: [
    'Most recent',
    'Lowest price',
    'Highest price'
  ],
  filter: 'Most recent',
  selectedItem: '',
  user: {},
  modal: false,
  modalMode: 'history',
  history: [],
  historyIndex: 0,
  loadingHistory: false,
  selectedValue: 1000,
  showMessage: false,
  message: ''
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_USER': {
      let { user } = action.payload
      return {
        ...state,
        user
      }
    }
    case 'UPDATE_PRODUCTS': {
      let { products } = action.payload
      products = products.map((product, index) => {
        product.order = index
        return product
      })
      const pages = Math.ceil(products.length / state.limit)
      return {
        ...state,
        products,
        pages
      }
    }
    case 'UPDATE_FILTER': {
      const { filter } = action.payload
      return {
        ...state,
        filter,
        page: 1
      }
    }
    case 'PREVIOUS_PAGE': {
      return {
        ...state,
        page: state.page - 1
      }
    }
    case 'NEXT_PAGE': {
      return {
        ...state,
        page: state.page + 1
      }
    }
    case 'UPDATE_SELECTED': {
      const { id: selectedItem } = action.payload
      return {
        ...state,
        selectedItem
      }
    }
    case 'UPDATE_MODAL': {
      const { mode } = action.payload
      return {
        ...state,
        modal: !state.modal,
        modalMode: mode
      }
    }
    case 'UPDATE_LOADING': {
      const { loading } = action.payload
      return {
        ...state,
        loading
      }
    }
    case 'UPDATE_HISTORY': {
      const { history } = action.payload
      return {
        ...state,
        history
      }
    }
    case 'UPDATE_LOADING_HISTORY': {
      const { loadingHistory } = action.payload
      return {
        ...state,
        loadingHistory
      }
    }
    case 'PREVIOUS_HISTORY_ITEM': {
      if (state.historyIndex - 1 >= 0) {
        return {
          ...state,
          historyIndex: state.historyIndex - 1
        }
      } else {
        return state
      }
    }
    case 'NEXT_HISTORY_ITEM': {
      if (state.historyIndex + 1 <= state.history.length) {
        return {
          ...state,
          historyIndex: state.historyIndex + 1
        }
      } else {
        return state
      }
    }
    case 'UPDATE_SELECTED_VALUE': {
      const { selectedValue } = action.payload
      return {
        ...state,
        selectedValue
      }
    }
    case 'UPDATE_USER_POINTS': {
      const { points } = action.payload
      return {
        ...state,
        user: {
          ...state.user,
          points
        }
      }
    }
    case 'TOGGLE_MESSAGE': {
      const message = (action.payload.message) ? action.payload.message : state.message
      return {
        ...state,
        showMessage: !state.showMessage,
        message
      }
    }
    default:
      return state
  }
}

export default reducer
