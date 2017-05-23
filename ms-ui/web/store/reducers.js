import { combineReducers } from 'redux'

import app from './modules/app'

const rootReducer = asyncReducers => combineReducers({
  app,
  ...asyncReducers,
})

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return
  /* eslint no-param-reassign: off */
  store.asyncReducers[key] = reducer
  store.replaceReducer(rootReducer(store.asyncReducers))
}

export default rootReducer
