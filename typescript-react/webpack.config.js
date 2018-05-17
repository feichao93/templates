const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/main.tsx'),
  output: {
    publicPath: '/public',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['react-hot-loader/babel'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
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
  devServer: {
    contentBase: __dirname,
    hot: true,
  },
}
