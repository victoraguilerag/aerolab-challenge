import { fromJS } from 'immutable'
import actionTypes from '../constants/action-types.js'

const {
  UPDATE_PRODUCTS,
  UPDATE_FILTER,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  UPDATE_SELECTED
} = actionTypes

const initialState = fromJS({
  products: [],
  limit: 16,
  page: 1,
  filters: [
    'Most recent',
    'Lowest price',
    'Highest price'
  ],
  filter: 'Most recent',
  selectedItem: ''
})

function products (state = initialState, action) {
  switch (action.type) {
    case UPDATE_PRODUCTS: {
      let { products } = action.payload
      products = products.map((product, index) => {
        product.order = index
        return product
      })
      const pages = Math.ceil(products.length / state.limit)
      return state.merge({
        products: products,
        pages: pages
      })
    }
    case UPDATE_FILTER: {
      const { filter } = action.payload
      return state.merge({
        filter,
        page: 1
      })
    }
    case PREVIOUS_PAGE: {
      const page = state.get('page') - 1
      return state.set('page', page)
    }
    case NEXT_PAGE: {
      const page = state.get('page') + 1
      return state.set('page', page)
    }
    case UPDATE_SELECTED: {
      const { id: selectedItem } = action.payload
      return state.set('selectedItem', selectedItem)
    }
    default:
      return state
  }
}

export default products
