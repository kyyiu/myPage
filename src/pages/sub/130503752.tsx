export default `
# defineProperty
<blockquote>
在vue2中是通过defineProperty方法来实现的数据属性监听
过程是通过某个组件提供的data进行深度比例设置相应的set和get实现
这样就会出现一旦完成监听，数据上新增或者删除属性就不能知道了
所以vue2不能监听属性的新增删除
</blockquote>

# Proxy
<blockquote>
vue3中使用Proxy直接监听根数据对象，
也不用去遍历监听，而是在访问到复杂属性时再用Proxy去监听一次
从性能上就优化了很多，而Proxy又能监听到访问修改的属性，即使没有
</blockquote>
<blockquote>
所以proxy比defineProperty要好
</blockquote>
`