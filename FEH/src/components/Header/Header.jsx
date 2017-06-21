import React from 'react'
import {Link} from 'react-router-dom'

export default () => (
  <div className="header">
    <div className="container">
      <div className="clearfix">
        <div className="header-navbar float-right">
          <span>Signed in as <a href="">Member</a></span>
          <span>&#x02192;&nbsp;<a href="">Signed out</a></span>
        </div>
      </div>
      <div className="clearfix">
        <div className="float-right">
          <Link className="header-tab-nav" to="/dashboard">Dashboard</Link>
          <Link className="header-tab-nav" to="/cruise">My Cruise</Link>
          <Link className="header-tab-nav" to="/">Agents</Link>
          <Link className="header-tab-nav" to="/help">Help</Link>
        </div>
      </div>
    </div>
  </div>
)
