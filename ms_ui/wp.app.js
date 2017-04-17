/* eslint import/no-extraneous-dependencies: off */
import path from 'path'
import webpack from 'webpack'

import conf from './src/conf/conf'

const { env } = conf

const src = path.resolve(__dirname, './src')
const lib = path.resolve(__dirname, './node_modules')
const dst = path.resolve(__dirname, './build')

export default {
  devtool: 'source-map',
  context: `${src}`,
  target: 'node',
  node: {
    __filename: true,
    __dirname: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, '../src'), lib],
  },
  output: {
    publicPath: '/',
    filename: '[name].js',
    path: dst,
  },
  externals: {},
  entry: {
    main: [`${src}/app/main.js`],
  },
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env || 'production'),
    }),
  ],
}
