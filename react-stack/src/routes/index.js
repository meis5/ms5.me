import React from 'react'
import { Route } from 'react-router-dom'

import styles from 'library/styles'

import Header from '../components/Header'

import HomeRoute from './home'
// import StylesRoute from './styles'
import ElementsRoute from './elements'
import ComponentsRoute from './components'

export default () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <Header />
    <Route exact path="/" component={HomeRoute} />
    <Route path="/styles" component={HomeRoute} />
    <Route path="/elements" component={ElementsRoute} />
    <Route path="/components" component={ComponentsRoute} />
  </div>
)
