import React, { PureComponent } from 'react'
import copy from 'copy-text-to-clipboard'

import Highlight from 'library/components/Highlight'

export default class Code extends PureComponent {
  handleCopy = () => {
    copy(this.props.children)
  }

  render() {
    const { lang, children } = this.props

    return (
      <div className="doc-code">
        <div className="doc-code-display" dangerouslySetInnerHTML={{ __html: children }} />
        <div style={{ position: 'relative' }}>
          <Highlight lang={lang}>{children}</Highlight>
          <button className="doc-btn-copy tc-hint" onClick={this.handleCopy}>Copy</button>
        </div>
      </div>
    )
  }
}
