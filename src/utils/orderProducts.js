import { fromJS } from 'immutable'

const orderProducts = (products, filter) => {
  products = products.toJS()
  switch (filter) {
    case 'Most recent': {
      let aux = []
      for (let i = 0; i <= products.length; i++) {
        for (let j = i + 1; j < products.length; j++) {
          if (products[i].order > products[j].order) {
            aux = products[i]
            products[i] = products[j]
            products[j] = aux
          }
        }
      }
      return fromJS(products)
    }
    case 'Lowest price': {
      let aux
      for (let i = 0; i <= products.length; i++) {
        for (let j = i + 1; j < products.length; j++) {
          if (products[i].cost > products[j].cost) {
            aux = products[i]
            products[i] = products[j]
            products[j] = aux
          }
        }
      }
      return fromJS(products)
    }
    case 'Highest price': {
      let aux
      for (let i = 0; i <= products.length; i++) {
        for (let j = i + 1; j < products.length; j++) {
          if (products[i].cost < products[j].cost) {
            aux = products[i]
            products[i] = products[j]
            products[j] = aux
          }
        }
      }
      return fromJS(products)
    }
    default:
      return fromJS(products)
  }
}

export default orderProducts
