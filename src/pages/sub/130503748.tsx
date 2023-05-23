export default `
// 例子
<pre>
<code>
function foo() {
	if (a) {
		if (b) {
			if (c) {
				doSomething()
			} else {
				doElse()
			}
		} else {
			doElse()
		}
	} else {
		doElse()
	}
}
</code>
</pre>
// 优化后
<pre>
<code>
function foo() {

	if (!a) {
		doElse()
		return
	}
	if (!b) {
		doElse()
		return
	}
	if (!c) {
		doElse()
		return
	}
	doSomething()
}
</code>
</pre>`