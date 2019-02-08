const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'

  return {
    context: __dirname,
    entry: './src/main.tsx',

    output: {
      path: path.join(__dirname, 'build'),
      filename: isProduction ? '[name].[chunkhash:6].js' : '[name].js',
    },

    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },

    module: {
      rules: [
        { test: /\.tsx?$/, loaders: ['ts-loader'] },
        { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
        { test: /\.styl$/, loaders: ['style-loader', 'css-loader', 'stylus-loader'] },
        { test: /\.ya?ml$/, loaders: ['json-loader', 'yaml-loader'] },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'TITLE OF THE HTML PAGE',
        template: 'src/index.html',
      }),
      new webpack.DefinePlugin({
        'node.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
      }),
      new webpack.ProvidePlugin({
        Snabbdom: 'snabbdom-pragma',
      }),
    ].concat(
      isProduction
        ? []
        : [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
    ),

    devServer: {
      port: 8080,
      hot: true,
    },
  }
}
