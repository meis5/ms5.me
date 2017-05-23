import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import createReducer from './reducers'

export default (initialState = {}) => {
  const middleware = [
    thunkMiddleware,
  ]

  const enhancers = []
  if (process.env.NODE_ENV === 'development') {
  }

  const store = createStore(
    createReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  )
  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      /* eslint global-require: 0 */
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}
