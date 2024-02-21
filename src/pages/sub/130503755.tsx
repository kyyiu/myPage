export default `
# 冻结对象提升代码效率
<blockquote>
vue2中会对数据进行深度遍历的响应式绑定,这个过程对于只需要展示的内容是无意义的，比如纯列表，纯表格
</blockquote>
<blockquote>
对于不需要响应式的数据，这时就可以使用Object.freeze将其冻结防止深度遍历绑定响应式
</blockquote>
<pre>
<code>
data() {
    return {
        d: []
    }
},
methods: {
    load() {
        this.d = Object.freeze(this.foo)
    },
    foo() {
        return [很多数据]
    }
}
</code>
</pre>
`