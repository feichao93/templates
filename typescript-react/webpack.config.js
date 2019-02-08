const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'normalize.css',
    '@blueprintjs/core/lib/css/blueprint.css',
    path.resolve(__dirname, 'src/main.tsx'),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(styl|css)$/,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.ya?ml$/,
        use: ['json-loader', 'yaml-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],

  devServer: {
    contentBase: __dirname,
    hot: true,
  },
}
