import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends PureComponent {
  render() {
    const i18nMessage = this.props.data
    return (
      <div className="navbar">
        <div className="ctn fl jc-b">
          <div className="fl ai-c">
            <a className="brand fl" href="http://ms5.me">
              <img src="http://ms5mepub.oss-cn-shanghai.aliyuncs.com/static/ms_ui/assets/img/photo.jpg" alt="" />
              <div className="fl fl-r jc-c" style={{ flexFlow: 'column' }}>
                <div>梅花</div>
                <div>meis</div>
              </div>
            </a>
            <Link to="/">{i18nMessage.home}</Link>
            <Link to="/styles">{i18nMessage.style}</Link>
            <Link to="/elements">{i18nMessage.element}</Link>
            <Link to="/components">{i18nMessage.component}</Link>
          </div>
          <div className="fl ai-c">
            <Link to="/about">关于</Link>
            <a href="/">Github</a>
            <a href="https://ms5.me">ms5.me</a>
          </div>
        </div>
      </div>
    )
  }
}
