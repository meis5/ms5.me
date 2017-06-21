import React from 'react'

export default ({ lang = 'javascript', children, code }: { lang: string, children: string, code: string }) =>
  <pre>
    <code
      className={`hljs ${lang}`}
      dangerouslySetInnerHTML={{ __html: hljs.highlight(lang, children || code).value }} // eslint-disable-line
    />
  </pre>
