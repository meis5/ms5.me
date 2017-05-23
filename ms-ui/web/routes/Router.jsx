import React, { PureComponent } from 'react'
import { Route, Link } from 'react-router-dom'

import styles from '../styles'
import Header from '../components/Header'


import HomeRoute from './home'
import StylesRoute from './styles'
import ElementsRoute from './elements'
import ComponentsRoute from './components'

export default class Router extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/">Homedddddddsfsf</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={HomeRoute} />
        <Route exact path="/styles" component={StylesRoute} />
        <Route path="/about" component={ElementsRoute} />
      </div>
    )
  }
}
