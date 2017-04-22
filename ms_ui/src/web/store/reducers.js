import { combineReducers } from 'redux'

import app from './modules/app'
import i18n from './modules/i18n'

const rootReducer = asyncReducers => combineReducers({
  app,
  i18n,
  ...asyncReducers,
})

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return
  /* eslint no-param-reassign: off */
  store.asyncReducers[key] = reducer
  store.replaceReducer(rootReducer(store.asyncReducers))
}

export default rootReducer
