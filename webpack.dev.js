const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const options = merge(common, {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: '[name].js'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader',
          {
            loader: 'style-resources-loader',
            options: {
              patterns: [
                path.resolve(__dirname, 'src/common/stylus/variable.styl'),
                path.resolve(__dirname, 'src/common/stylus/mixin.styl')
              ],
              injector: (source, resources) => {
                const combineAll = type =>
                  resources
                    .filter(({ file }) => file.includes(type))
                    .map(({ content }) => content)
                    .join('')

                return combineAll('variable') + combineAll('mixin') + source
              }
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 9999,
    historyApiFallback: true, // pass router to frontend rendor when url-api not found
    hot: true,
    overlay: {
      errors: true
    }
    // proxy: {
    //   //开发环境
    //   '/dev_server_url': {
    //     target: 'http://10.0.0.35:9613',
    //     pathRewrite: { '^/dev_server_url': '' },
    //     changeOrigin: true, //传递给后端正确的Host头 true:target host、 false为localhost
    //     secure: true //支持 https
    //   },
    // }
  },
  plugins: [
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: require('./dist/vendor.manifest.json')
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: 'body',
      hash: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
})
module.exports = options
