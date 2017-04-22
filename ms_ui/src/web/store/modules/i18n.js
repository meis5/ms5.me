// Constants
// --------------------------------------------------
export const UPDATE_LOCALE = 'UPDATE_LOCALE'

// Actions
// --------------------------------------------------
export const updateLocale = locale => ({
  type: UPDATE_LOCALE,
  request: { method: 'post', url: '/api/updateLocale', data: { locale } },
})

// Reducer
// --------------------------------------------------
export default (state = {}, action) => {
  switch (action.type) {
    case `${UPDATE_LOCALE}_SUCCESS`:
      return { ...state, locale: action.payload.locale, [action.payload.locale]: action.payload.value }
    default:
      return state
  }
}
