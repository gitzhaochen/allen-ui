const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    vendor: ['vue']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  output: {
    filename: '[name].dll.js',
    path: path.join(process.cwd(), 'dist'),
    library: '_dll_[name]'
  },
  plugins: [
    new CleanWebpackPlugin(), //clean dist
    new webpack.DllPlugin({
      name: '_dll_[name]',
      path: path.join(__dirname, 'dist', '[name].manifest.json')
    })
  ]
}
