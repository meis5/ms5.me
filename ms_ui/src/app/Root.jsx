// @flow
import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'

import createStore from '../web/store/createStore'
import Container from '../web/containers'

type Props = {
  state: any,
  location: string,
}

const context = {}

export default class Root extends PureComponent {
  props: Props

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
