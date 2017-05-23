export const LOADING_RATIO = 'LOADING_RATIO'

export const IS_MODAL_SHOW = 'IS_MODAL_SHOW'

export const IS_INFO_SHOW = 'IS_INFO_SHOW'
export const IS_SUCCESS_SHOW = 'IS_SUCCESS_SHOW'
export const IS_WARNING_SHOW = 'IS_WARNING_SHOW'
export const IS_DANGER_SHOW = 'IS_DANGER_SHOW'

export const load = () => ({
  type: LOADING_RATIO,
  payload: 0.4,
})

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_RATIO:
      return state
    case IS_MODAL_SHOW:
      return state
    default:
      return state
  }
}
