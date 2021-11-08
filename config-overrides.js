const { override, fixBabelImports } = require('customize-cra')
const ArcoWebpackPlugin = require("@arco-design/webpack-plugin");
module.exports = override({
  plugins: [
    new ArcoWebpackPlugin()
  ]
})