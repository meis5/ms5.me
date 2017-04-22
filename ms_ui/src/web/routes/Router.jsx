import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import styles from '../styles'
import Navbar from '../components/Navbar'

import HomeRoute from './home'
import StylesRoute from './styles'
import ElementsRoute from './elements'
import ComponentsRoute from './components'

export default class Router extends Component {
  render() {
    const navbarData = this.props.i18n.value.ui.navbar
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <Navbar data={navbarData} />
        <button
          onClick={() => {
            this.props.updateLocale('zh-CN')
          }}
        >中文
        </button>
        <button
          onClick={() => {
            this.props.updateLocale('en-US')
          }}
        >英文
        </button>
        <Route exact path="/" component={HomeRoute} />
        <Route exact path="/styles" component={StylesRoute} />
        <Route path="/elements" component={ElementsRoute} />
        <Route exact path="/components" component={ComponentsRoute} />
      </div>
    )
  }
}
