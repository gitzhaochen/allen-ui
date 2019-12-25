const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const common = require('./webpack.common.js')
const getEntrys = require('./component.js')
const options = merge(common, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  entry: getEntrys(path.join(process.cwd(), './packages')),
  output: {
    path: path.join(process.cwd(), './lib'),
    filename: '[name].js',
    library: 'allen-ui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          'sass-loader'
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          MiniCssPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          'stylus-loader',
          {
            loader: 'style-resources-loader',
            options: {
              patterns: [
                path.join(process.cwd(), 'src/assets/stylus/variable.styl'),
                path.join(process.cwd(), 'src/assets/stylus/mixin.styl')
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
  optimization: {
    minimizer: [
      new TerserPlugin({
        exclude: /\.min\.js$/, // 过滤掉以".min.js"结尾的文件，我们认为这个后缀本身就是已经压缩好的代码，没必要进行二次压缩
        cache: true,
        parallel: true, // 开启并行压缩，充分利用cpu
        sourceMap: false,
        extractComments: false, // 移除注释
        terserOptions: {
          compress: {
            drop_debugger: true
            // drop_console: true
          }
        }
      }),
      // 用于优化css文件

      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessorOptions: {
          safe: true,
          autoprefixer: { disable: true }, //
          mergeLonghand: false,
          discardComments: {
            removeAll: true // 移除注释
          }
        },
        canPrint: true
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), //clean dist
    new MiniCssPlugin({
      filename: 'theme-chalk/[name].css'
    }),
    // Reduces bundles total size
    new webpack.NamedModulesPlugin(),
    new webpack.HashedModuleIdsPlugin() //only update files which has changed
  ],
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
})
module.exports = options
