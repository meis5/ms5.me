import React from 'react'
import { render } from 'react-dom'

const root = document.getElementById('root')

export default Component => {
  render(<Component />, root)
}
