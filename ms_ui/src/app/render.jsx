import React from 'react'
import { renderToString } from 'react-dom/server'

import conf from '../conf/conf'
import Root from './Root'

const { publicPath } = conf

export default param => {
  const { state, location, title } = param
  const content = renderToString(<Root state={state} location={location} />)

  return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="//cdn.bootcss.com/normalize/5.0.0/normalize.min.css" rel="stylesheet" />
    <link href="//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
</head>
<body>
    <div id="root">${content}</div>
</body>
<script>window.__PRELOADED_STATE__ = ${JSON.stringify(state)}</script>
<script src='//cdn.bootcss.com/react/15.5.4/react-with-addons.min.js'></script>
<script src='//cdn.bootcss.com/react/15.5.4/react-dom.min.js'></script>
<script src='//cdn.bootcss.com/redux/3.6.0/redux.min.js'></script>
<script src='//cdn.bootcss.com/react-redux/5.0.4/react-redux.min.js'></script>
<script src='//cdn.bootcss.com/immutable/4.0.0-rc.2/immutable.min.js'></script>
<script src='//cdn.bootcss.com/seamless-immutable/7.1.2/seamless-immutable.production.min.js'></script>
<script src='//unpkg.com/react-router-dom@4.1.1/umd/react-router-dom.min.js'></script>
<script src="${publicPath}/common/common.js"></script>
<script src="${publicPath}/index/index.js"></script>
</html>
`
}
