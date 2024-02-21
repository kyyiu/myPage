export default `
# useEffect
<blockquote>
beforeMutation阶段
调度flushPassiveEffects
</blockquote>
<blockquote>
mutation阶段
无操作
</blockquote>
<blockquote>
layout阶段
注册destroy和create函数即回调返回值和回调
</blockquote>
<blockquote>
commit阶段完成后
执行flushPassiveEffects
内部执行注册的回调
</blockquote>

# useLayoutEffect
<blockquote>
mutation阶段
执行destroy
</blockquote>
<blockquote>
layout阶段
执行create
</blockquote>

# 例子
<pre>
<code>
const [c, sc] = useState(0)
useLayoutEffect(() => {
    if (c===0) {
        const now = performance.now()
        while(performance.now() - now < 100){}
        sc(math.random())
    }
}, [c])
return div onClick={() => sc(0)} {c} /div

使用useLayoutEffect就不会看到界面出现0，
而useEffect有时就会看到0变随机值，
因为useLayoutEffect这个过程都是同步执行的，不会出现0的中间状态
而useEffect是异步调用的，会出现0的中间状态
</code>
</pre>
`