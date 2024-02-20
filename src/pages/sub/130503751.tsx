export default `
打包文件引入配置打包分析插件
<pre>
<code>
const BAP = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
if (process.env.NODE_ENV === 'production') {
    module.exports = {
        devtool: 'none',
        plugins: [new BAP()]
    }
}
...
打包后会打开一个新的页面展示打包结果大小分析
我们可以根据情况把其中的包用cdn在index.html中进行引入，而不是通过打包工具打入
这样当其他项目使用这些到时就会用缓存的包文件，而不用再通过网络获取
比如这样
module.exports = {
    devtool: 'none',
    plugins: [new BAP()],
    externals: {
        vue: 'Vue',
        vuex: 'Vuex',
        'vue-router': "VueRouter",
        axios: 'axios'
    }
}
在index.html中
通过script标签进行引入相应的包
</code>
</pre>


`