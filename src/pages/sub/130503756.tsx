export default `
# react 重构 fiber的目的
为了实现异步可中断的更新

# 例子

## 在react15中

<pre>
<code>
x初始值为1
h 1*x /h
h 2*x /h
当x更新为2时
经过diff算法同步更新为
h 2 /h
h 4 /h
但如果在更新第2个h时中断了
界面就会出现
h 2 /h
h 2 /h
这种bug一般的结果，所以需要重构
</code>
</pre>

## 在react16中
<pre>
<code>
15中raect有协调器和渲染器两个模块
16中新增了一个调度器
上面的内容变成了
调度器根据优先级处理更新内容，给到协调器
协调器在内存中实现虚拟dom的构建
完成后给到渲染器进行渲染
这样即使中断，也不会在页面上出现错误的结果
</code>
</pre>
`