const env = process.env.NODE_ENV || 'development'

const development = {
  env,
  port: 9993,
  publicPath: 'http://localhost:9992',
  resourcesPath: '',
}

const production = Object.assign({}, development, {
  port: 9993,
  publicPath: '//fycdn.fengyun.cc/static/ttd2/assets',
  resourcesPath: '//fycdn.fengyun.cc/static/ttd2/resources',
})

module.exports = { development, production }[env]
