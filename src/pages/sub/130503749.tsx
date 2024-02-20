export default `
# canvas清晰度的问题
# 概念
## 原始尺寸
<blockquote>
图片原本的尺寸大小
可以通过图片元素的naturalHeight naturalWidth获取
canvas.width 设置的就是canvas的原始尺寸
</blockquote>

## 样式尺寸
<blockquote>
就是我们平常写的css
</blockquote>

## 缩放比例
<blockquote>
界面的缩放比例，近大远小
可通过devicePixelRatio属性获取
</blockquote>

<blockquote>
结论: 原始尺寸 = 样式尺寸 * 缩放比例
保持这个等式成立，即可保证图片，canvas显示清晰
</blockquote>

# 例子
<blockquote>
原始尺寸为200 200的canvas
样式尺寸为200 200的canvas
缩放比例为10的界面
此时画出来的图像就会不清晰
</blockquote>
<blockquote>
这时我们可以把原始尺寸更新成2000 2000就可以了
如果需要画的内容也随着界面缩放变化，相应的线宽度半径等属性也乘上对应的缩放比例即可
</blockquote>
`