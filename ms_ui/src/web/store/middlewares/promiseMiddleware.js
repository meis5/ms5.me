import axios from 'axios'

import { updateLoading } from '../modules/app'

export default function promiseMiddleware({ dispatch, getState }) {
  return next => action => {
    const { type, payload, request, ...rest } = action

    if (!request) {
      return next(action)
    }

    const REQUEST = type
    const SUCCESS = `${REQUEST}_SUCCESS`
    const FAILURE = `${REQUEST}_FAILURE`

    next({ ...rest, type: REQUEST })

    const { method = 'get', url, data } = request

    axios[method](url, data, {
      onUploadProgress: progressEvent => {
        const { loaded, total } = progressEvent
        dispatch(updateLoading(loaded / total))
      },
      onDownloadProgress: progressEvent => {
        const { loaded, total } = progressEvent
        dispatch(updateLoading(loaded / total))
      },
    }).then(
      res => {
        return next({ ...rest, payload: res.data, type: SUCCESS })
      },
    ).catch(error => next({ ...rest, type: FAILURE, payload: error }))
  }
}
