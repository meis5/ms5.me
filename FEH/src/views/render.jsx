import React from 'react'
import { renderToString } from 'react-dom/server'

import conf from 'conf/conf'
import Root from './Root.jsx'

const { env, publicPath, resourcesPath } = conf
const isDevelopment = env === 'development'

export default param => {
  const { state, location, title } = param
  const content = renderToString(<Root state={state} location={location} />)

  return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    ${isDevelopment ? '<!--' : ''}
    <link rel="stylesheet" href="${publicPath}/static/assets/common/common.css">
    <link rel="stylesheet" href="${publicPath}/static/assets/index/index.css">
    ${isDevelopment ? '-->' : ''}
</head>
<body>
    <div id="root">${content}</div>
</body>
<script>window.__PRELOADED_STATE__ = ${JSON.stringify(state)}</script>
<script src="${publicPath}/static/assets/common/common.js"></script>
<script src="${publicPath}/static/assets/index/index.js"></script>
</html>
`
}
