import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import { composeWithDevTools } from '@redux-devtools/extension';


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware()
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)