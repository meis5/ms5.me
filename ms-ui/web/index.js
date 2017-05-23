import render from './render'

import Root from './Root.jsx'

render(Root)

if (module.hot) {
  module.hot.accept('./Root.jsx', () => render(Root))
}
