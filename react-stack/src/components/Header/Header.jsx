import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div className="navbar">
    <div className="ctn">
      <ul className="navbar-nav">
        <li className="navbar-brand"><Link to="/"><span className="icon-plum-o" /></Link></li>
        <li><Link to="/">Home</Link></li>
        <li>
          <Link to="/styles">Colors</Link>
          <ul>
            <li><Link to="/styles/colors">Colors</Link></li>
            <li><Link to="/styles/plates">Color plates</Link></li>
            <li><Link to="/styles/light-theme">Light theme</Link></li>
            <li><Link to="/styles/typography">Typography</Link></li>
          </ul>
        </li>
        <li><Link to="/elements">Elements</Link></li>
        <li><Link to="/components">Components</Link></li>
      </ul>
      <ul className="navbar-nav">
        <li><input type="search" /></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/styles">Styles</Link></li>
        <li><Link to="/elements">Elements</Link></li>
        <li><Link to="/components">Components</Link></li>
      </ul>
    </div>
  </div>
)
