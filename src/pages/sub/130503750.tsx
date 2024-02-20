export default `
# 避免不必要的render

<blockquote>
    render的触发时机，简单来讲就是通过调用setState方法， 就会导致render，父组件一旦发生render渲染，子组件一定也会执行render渲染
</blockquote>
<blockquote>
    父组件渲染导致子组件渲染，子组件并没有发生任何改变，这时候就可以从避免无谓的渲染，具体实现的方式有如下：
</blockquote>
<blockquote>
    shouldComponentUpdate
</blockquote>
<blockquote>
    PureComponent
</blockquote>
<blockquote>
    React.memo
</blockquote>

# shouldComponentUpdate 

<blockquote>
    通过shouldComponentUpdate生命周期函数来比对 state和 props，确定是否要重新渲染
    默认情况下返回true表示重新渲染，如果不希望组件重新渲染，返回 false 即可
</blockquote>

# PureComponent组件 

<blockquote>
跟shouldComponentUpdate原理基本一致，通过对 props 和 state的浅比较结果来实现 shouldComponentUpdate这是react自动处理的
</blockquote>

# React.memo
<blockquote>
React.memo用来缓存组件的渲染，避免不必要的更新，其实也是一个高阶组件，与 PureComponent 十分类似。但不同的是， React.memo 只能用于函数组件
</blockquote>
<pre>
<code>
import { memo } from 'react';
function Button(props) {
  // Component code
}
export default memo(Button);
</code>
</pre>
如果需要深层次比较，这时候可以给memo第二个参数传递比较函数
<code>
<pre>
function arePropsEqual(prevProps, nextProps) {
    // your code
    return prevProps === nextProps;
  }
  export default memo(Button, arePropsEqual);
  </code>
</pre>
`