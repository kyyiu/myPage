const { override, fixBabelImports, addWebpackPlugin, addWebpackAlias, addLessLoader} = require('customize-cra')
const { plugins } = require('pretty-format')
const path = require('path')
const ArcoWebpackPlugin = require("@arco-design/webpack-plugin");
module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@img': path.resolve(__dirname, 'src/static/images'),
    '@component': path.resolve(__dirname, 'src/components')
  }),
  fixBabelImports({

  }),
  addWebpackPlugin(
    new ArcoWebpackPlugin()
  ),
  addLessLoader({
    lessOptions: {
       javascriptEnabled: true,
       localIdentName: '[local]--[hash:base64:5]'
    }
  }),
)