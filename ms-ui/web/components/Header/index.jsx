import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends PureComponent {
  render() {
    return (
      <div className="header">
        <div className="ctn fl jc-b">
          <div>
            <Link to="/">首页</Link>
            <Link to="/styles">样式</Link>
            <Link to="/elements">元素</Link>
            <Link to="/components">组件</Link>
          </div>
          <div>
            <Link to="/about">关于</Link>
            <a href="/">Github</a>
            <a href="https://ms5.me">ms5.me</a>
          </div>
        </div>
      </div>
    )
  }
}
