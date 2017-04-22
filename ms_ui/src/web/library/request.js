import axios from 'axios'

export default axios.create({
  // `onUploadProgress` allows handling of progress events for uploads
  onUploadProgress: function (progressEvent) {
    console.log(progressEvent)
    // Do whatever you want with the native progress event
  },

  // `onDownloadProgress` allows handling of progress events for downloads
  onDownloadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
    console.log(progressEvent)
  },

})
