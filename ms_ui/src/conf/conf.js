const env = process.env.NODE_ENV || 'development'

const development = {
  env,
  port: 9995,
  publicPath: 'http://localhost:9994',
  resourcesPath: 'cdn.bootcss.com',
}

const production = Object.assign({}, development, {
  port: 9995,
  publicPath: '//pbc.ms5.me/static/ms_ui/assets',
})

export default { development, production }[env]
