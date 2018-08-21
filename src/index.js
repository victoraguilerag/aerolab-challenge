import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { Map as map } from 'immutable'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
