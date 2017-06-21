import React from 'react'
import katex from 'katex'

export default ({ children, tex, display }: { children: string, tex: string, display: string }) =>
  <div
    style={{ display: `${display || 'block'}` }}
    dangerouslySetInnerHTML={{ __html: katex.renderToString(children || tex) }} // eslint-disable-line
  />
