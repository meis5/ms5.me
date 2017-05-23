/* eslint import/no-extraneous-dependencies: off */
const path = require('path')
const webpack = require('webpack')
const webpackBundleAnalyzer = require('webpack-bundle-analyzer')

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const src = path.resolve(__dirname, './web')
const lib = path.resolve(__dirname, '../node_modules')
const dst = path.resolve(__dirname, './assets')

const development = {
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 9993,
    disableHostCheck: true,
    https: false,
    compress: true,
    proxy: {
      '/': {
        target: 'http://localhost:9994',
        secure: false,
      },
    },
  },
  context: `${src}`,
  entry: {
    index: [`${src}/index`],
    common: [`${src}/styles`],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [src, lib],
  },
  output: {
    publicPath: '/assets/',
    filename: 'js/[name]/[name].js',
    path: dst,
  },
  externals: {},
  module: {
    rules: [
      {
        include: src,
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', { modules: false }], 'stage-0', 'react'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env || 'development'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/[name]/[name].js',
      minChunks: Infinity,
    }),
  ],
}

if (env === 'production') {
  development.plugins.push(new webpackBundleAnalyzer.BundleAnalyzerPlugin())
}

const production = Object.assign({}, development, {
  devtool: 'source-map',
  devServer: undefined,
})

module.exports = Object.assign({}, { development }, { production })[env]
