export default `
# 模块自动导入 - vite为例
<pre>

<code>
...
import AutoImp from 'unplugin-auto-import/vite'
export default defineConfig({
    plugins: [
        vue(),
        AutoImp({
            imports: ['vue', 'vue-router'], // 自动引入的包
            dirs: ['./src/api'], // 自己的函数从哪里找
            dts: './src/xxx.d.ts' // 使用ts需要配置一个文件，会把相应的type、引入这个文件，防止其他文件中找不到相应的类型
        })
    ]
})
</code>
</pre>
`