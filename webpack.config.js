const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rulesForStyles = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}

const rulesForJavaScript = {
  test: /\.js$/,
  loader: 'babel-loader',
  options: {
    presets: [['@babel/preset-react', { runtime: 'automatic' }]]
  }
}

const rules = [rulesForJavaScript, rulesForStyles]

module.exports = (_env, argv) => {
  const { mode } = argv
  const isProduction = mode === 'production'
  return {
    entry: './src/index.js',
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build')
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    module: { rules },
    devServer: {
      open: true,
      port: 3000,
      liveReload: true,
      compress: true
    },
    devtool: 'source-map'
  }
}
