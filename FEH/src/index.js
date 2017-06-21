import render from './render'

import Root from './Root'

render(Root)

if (module.hot) {
  module.hot.accept('./Root', () => render(Root))
}
