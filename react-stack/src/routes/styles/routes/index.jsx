import React from 'react'
import { Route } from 'react-router-dom'

import homeRoute from './home'
import colorsRoute from './colors'
import plateRoute from './plates'
import lightThemeRoute from './light-theme'
import darkenThemeRoute from './dark-theme'
import typographyRoute from './typography'

export default props => (
  <div>
    <Route exact path="/styles" component={homeRoute} />
    <Route path="/styles/colors" component={colorsRoute} />
    <Route path="/styles/plates" component={plateRoute} />
    <Route path="/styles/light-theme" component={lightThemeRoute} />
    <Route path="/styles/dark-theme" component={darkenThemeRoute} />
    <Route path="/styles/typography" component={typographyRoute} />
  </div>
)
