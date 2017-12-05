'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      // {
      //   test: /\.sass$|.scss$/,
      //   loader: 'sass-loader',
      //   options: {
      //     modues: true,
      //     localIdentName: `__[name]__[local]___[hash:base64:5]`,
      //   }
      // },
      {
        test: /\.css$|.sass$|.scss$/,
        use: ExtractTextPlugin.extract({ // used to create a new file an dnot inline into the html output
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                // if css modiles are not used, this must be set to false or no styles will be processed
                modules: true,
                // specify our naming convention, this will out put
                // filename__selectorName__5characterRandomString
                localIdentName: `__[name]__[local]___[hash:base64:5]`,
                // only minimize in prod to improve readability while in dev
                minimize: true,
                importLoaders: 1,
              },
            },
            // apply post css-rules; this improves browser compatability by add prefixes etc
            { loader: 'postcss-loader' },
            // convert sass to css
            { loader: 'sass-loader' },
          ],
        }),
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    // create html file
    // this creates a index.html doc with all project files added. 
    // Can bes used as a preview/direct link if included in hte live upload
    // all of the entries on this object are accessible to the ejs template
    // new HTMLWebpackPlugin({
    //   title: 'vue sandbox',
    //   // template: path.join(__dirname, '/src/preview.html'),
    //   filename: 'index.html',
    //   inject: 'body',
    // }),
    // setup extract css into it's own file, not inline in html
    new ExtractTextPlugin({
      filename: 'css_file',
      allChunks: true,
    }),
  ],
  // vue: {
  //   scss: 'style!css!scss!sass',
  //   sass: 'style!css!scss!sass',
  // },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
