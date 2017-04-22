// Constants
// --------------------------------------------------
export const UPDATE_LOADING = 'UPDATE_LOADING'

// Actions
// --------------------------------------------------
export const updateLoading = ratio => ({
  type: UPDATE_LOADING,
  payload: ratio,
})

// Reducer
// --------------------------------------------------
export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_LOADING:
      return { ...state, loading: action.payload }
    default:
      return state
  }
}
