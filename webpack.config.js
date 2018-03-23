const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.yml$/,
        loaders: [ 'json-loader', 'yaml-loader' ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}