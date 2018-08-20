import credentials from '../credentials/index.js'
import userStub from '../stub/user'
import productsStub from '../stub/products'

export const getUser = async () => {
  let user = await fetch('https://aerolab-challenge.now.sh/user/me', {
    method: 'GET',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${credentials}`
    }
  }).then(response => {
    return response.json()
  }, error => {
    console.log(error)
    return userStub
  })

  return user
}

export const getProducts = async () => {
  let productList = await fetch('https://aerolab-challenge.now.sh/products', {
    method: 'GET',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${credentials}`
    }
  }).then(response => {
    return response.json()
  }, error => {
    console.log(error)
    return productsStub
  })

  return productList
}

export const getHistory = async () => {
  let history = await fetch('https://aerolab-challenge.now.sh/user/history', {
    method: 'GET',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${credentials}`
    }
  }).then(response => {
    return response.json()
  }, error => {
    console.log(error)
    return productsStub
  })

  return history
}

export const postPoints = async (points) => {
  const addedPoints = await fetch('https://aerolab-challenge.now.sh/user/points', {
    method: 'POST',
    withCredentials: true,
    body: JSON.stringify({
      'amount': points
    }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${credentials}`
    }
  }).then(res => res.json(), error => {
    console.log(error)
    return error
  })

  return addedPoints
}

export const postProduct = async (id) => {
  const redeemedProduct = await fetch('https://aerolab-challenge.now.sh/redeem', {
    method: 'POST',
    withCredentials: true,
    body: JSON.stringify({
      'amount': {
        id
      }
    }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${credentials}`
    }
  }).then(res => res.json(), error => {
    console.log(error)
    return productsStub
  })

  return redeemedProduct
}
