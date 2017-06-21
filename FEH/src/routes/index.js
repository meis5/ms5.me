import React from 'react'
import { Route } from 'react-router-dom'

import Header from '../components/Header'

import dashboard from './dashboard'
import cruise from './cruise'
import agents from './agents'
import help from './help'

export default () => (
  <div>
    <Header />
    <Route exact path="/" component={agents} />
    <Route path="/dashboard" component={dashboard} />
    <Route path="/cruise" component={cruise} />
    <Route path="/help" component={help} />
  </div>
)
