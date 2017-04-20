import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import HomeRoute from './home'
import StylesRoute from './styles'
import ElementsRoute from './elements'
import ComponentsRoute from './components'

export default class Router extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/styles">Styles</Link></li>
          <li><Link to="/elements">Elements</Link></li>
          <li><Link to="/components">Components</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component={HomeRoute} />
        <Route exact path="/" component={StylesRoute} />
        <Route path="/about" component={ElementsRoute} />
        <Route exact path="/" component={ComponentsRoute} />
      </div>
    )
  }
}
