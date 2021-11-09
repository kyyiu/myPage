const { override, fixBabelImports, addWebpackPlugin} = require('customize-cra')
const { plugins } = require('pretty-format')
const ArcoWebpackPlugin = require("@arco-design/webpack-plugin");
module.exports = override(
  fixBabelImports({

  }),
  addWebpackPlugin(
    new ArcoWebpackPlugin
  )
)