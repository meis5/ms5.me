import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'

import createStore from 'store/createStore'
import Container from 'containers'

const context = {}

export default class Root extends PureComponent {
  render() {
    const { state, location } = this.props
    return (
      <Provider store={createStore(state)}>
        <StaticRouter context={context} location={location}>
          <Container />
        </StaticRouter>
      </Provider>
    )
  }
}
