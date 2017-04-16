import path from 'path'
import webpack from 'webpack' // eslint-disable-line

import conf from './src/conf/conf'

const { env, port, publicPath } = conf
const devPort = port - 1

const src = path.resolve(__dirname, './src')
const lib = path.resolve(__dirname, './node_modules')

const dst = path.resolve(__dirname, '../../public/static/assets')

const development = {
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: devPort,
    https: false,
    compress: true,
    historyApiFallback: { disableDotRule: true },
    proxy: { '/': { target: `http://localhost:${port}/`, secure: false } },
  },
  context: `${src}`,
  resolve: { extensions: ['.js', '.jsx'], modules: [path.resolve(__dirname, '../src'), lib] },
  output: { publicPath: `${publicPath}/static/assets/`, filename: '[name]/[name].js', path: dst },
  externals: {
  },
  entry: {
    index: [`${src}/web/index.js`],
    common: ['react-router-dom'],
  },
  module: {
    rules: [{
      include: src,
      test: /\.jsx?$/,
      use: [{ loader: 'babel-loader', options: { presets: [['env', { modules: false }], 'stage-0', 'react'] } }],
    }],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(env || 'development') }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'common', filename: '[name]/[name].js', minChunks: Infinity }),
  ],
}

const production = Object.assign({}, development, {
  devtool: 'source-map',
  devServer: undefined,
})

module.exports = Object.assign({}, { development }, { production })[env]
