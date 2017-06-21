const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const conf = require('./src/conf/conf')

const { env, port, publicPath } = conf
const devPort = port - 1

const src = path.resolve(__dirname, './src')
const lib = path.resolve(__dirname, './node_modules')
const dst = path.resolve(__dirname, './public/static/assets/')

const development = {
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: devPort,
    https: false,
    compress: true,
    proxy: { '/': { target: `http://localhost:${port}/`, secure: false } },
  },
  context: `${src}`,
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, './src'), lib],
  },
  output: {
    publicPath: `${publicPath}/static/assets/`,
    filename: '[name]/[name].js',
    path: dst,
  },
  externals: {},
  entry: {
    index: [`${src}/index`],
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        include: [src, lib],
        use: env === 'production'
          ? ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  plugins: () => [
                    autoprefixer,
                  ],
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          })
          : [
            {
              loader: 'style-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: () => [
                  autoprefixer,
                ],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
      },
      {
        include: src,
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          name: '[path][name].[ext]',
        },
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
      filename: '[name]/[name].js',
      minChunks: Infinity,
    }),
    new ExtractTextPlugin('[name]/[name].css'),
  ],
}

const production = Object.assign({}, development, {
  devtool: 'source-map',
  devServer: undefined,
})

module.exports = Object.assign({}, { development }, { production })[env]
