import { getUser, getProducts, getHistory, postProduct, postPoints } from '../api'

export const fetchProductList = () => {
  return async (dispatch) => {
    const products = await getProducts()
    dispatch(updateProducts(products))
    dispatch(updateLoading(false))
  }
}

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch(updateLoading(true))
    const user = await getUser()
    dispatch(updateUser(user))
    dispatch(fetchProductList())
  }
}

export const fetchHistory = () => {
  return async (dispatch) => {
    dispatch(updateLoadingHistory(true))
    const history = await getHistory()
    dispatch(updateHistory(history))
    dispatch(updateLoadingHistory(false))
  }
}

export const redeemProduct = id => {
  return async (dispatch) => {
    console.log('reedeming product' + id)
    const reedemed = await postProduct(id)
    console.log(reedemed)
    dispatch(toggleMessage(reedemed.message))
    dispatch(updateModal('history'))
    setTimeout(() => dispatch(toggleMessage()), 4000)
  }
}

export const addPoints = () => {
  return async (dispatch) => {
    const addedPoints = await postPoints()
    console.log(addedPoints)
    dispatch(toggleMessage(addedPoints.message))
    dispatch(updateUserPoints(addedPoints['new Points']))
    setTimeout(() => {
      dispatch(toggleMessage())
    }, 4000)
  }
}

export const updateUserPoints = (points) => {
  return {
    type: 'UPDATE_USER_POINTS',
    payload: {
      points
    }
  }
}

export const updateUser = (user) => {
  return {
    type: 'UPDATE_USER',
    payload: {
      user
    }
  }
}

export const updateProducts = (products) => {
  return {
    type: 'UPDATE_PRODUCTS',
    payload: {
      products
    }
  }
}

export const updateFilter = (filter) => {
  return {
    type: 'UPDATE_FILTER',
    payload: {
      filter
    }
  }
}

export const previousPage = () => {
  return {
    type: 'PREVIOUS_PAGE'
  }
}

export const nextPage = () => {
  return {
    type: 'NEXT_PAGE'
  }
}

export const updateSelectedItem = id => {
  return {
    type: 'UPDATE_SELECTED',
    payload: {
      id
    }
  }
}

export const updateModal = mode => {
  console.log(mode)
  return {
    type: 'UPDATE_MODAL',
    payload: {
      mode
    }
  }
}

export const updateLoading = loading => {
  return {
    type: 'UPDATE_LOADING',
    payload: {
      loading
    }
  }
}

export const updateHistory = history => {
  return {
    type: 'UPDATE_HISTORY',
    payload: {
      history
    }
  }
}

export const updateLoadingHistory = loadingHistory => {
  return {
    type: 'UPDATE_LOADING_HISTORY',
    payload: {
      loadingHistory
    }
  }
}

export const previousHistoryItem = () => {
  return {
    type: 'PREVIOUS_HISTORY_ITEM'
  }
}

export const nextHistoryItem = () => {
  return {
    type: 'NEXT_HISTORY_ITEM'
  }
}

export const updateSelectedValue = selectedValue => {
  return {
    type: 'UPDATE_SELECTED_VALUE',
    payload: {
      selectedValue
    }
  }
}

export const toggleMessage = message => {
  return {
    type: 'TOGGLE_MESSAGE',
    payload: {
      message
    }
  }
}
