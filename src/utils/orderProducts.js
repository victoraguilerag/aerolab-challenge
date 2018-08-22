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
    case 'Backwards': {
      let aux = []
      console.log(products.length)
      for (let i = products.length - 1; i >= 0; i--) {
        aux.push(products[i])
        console.log(aux)
      }
      return fromJS(aux)
    }
    default:
      return fromJS(products)
  }
}

export default orderProducts
