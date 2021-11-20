const { override, fixBabelImports, addWebpackPlugin, addWebpackAlias} = require('customize-cra')
const { plugins } = require('pretty-format')
const path = require('path')
const ArcoWebpackPlugin = require("@arco-design/webpack-plugin");
module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  fixBabelImports({

  }),
  addWebpackPlugin(
    new ArcoWebpackPlugin()
  )
)