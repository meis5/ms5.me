const env = process.env.NODE_ENV || 'development'

const development = {
  env,
  port: 4000,
  publicPath: 'http://localhost:3999',
  resourcesPath: 'cdn.bootcss.com',
}

const production = Object.assign({}, development, {
  port: 3000,
  publicPath: '',
})

export default { development, production }[env]
