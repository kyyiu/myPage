export default `
<blockquote>
最近面试很多公司都问了浏览器的缓存机制，
跟大家一起分析一下
</blockquote>

# 缓存为了什么
<blockquote>
Chrome 官方给出的解释:
通过网络获取内容既速度缓慢又开销巨大。
较大的响应需要在客户端与服务器之间进行多次往返通信，
这会延迟浏览器获得和处理内容的时间，还会增加访问者的流量费用。
因此，缓存并重复利用之前获取的资源的能力成为性能优化的一个关键方面。
</blockquote>

# 缓存怎么实现
<blockquote>
通过请求和响应中的 Cache-Control、expires 等字段控制
</blockquote>

#  强缓存
<blockquote>
强缓存是利用 http 头中的 Expires 和 Cache-Control 两个字段来控制的
命中强缓存的情况下，返回的 HTTP 状态码也是 200

http1是通过expires实现
格式如下
Expires: Mon, 22 May 2023 10:21:46 GMT
可以看出Expires是一个确定的时间
对这个资源再次获取时,
浏览器就会先对比本地时间和 expires 的时间戳判断是否使用缓存.

由于时间戳是服务器给的，本地时间却来自客户端，
所以 expires 的工作机制存在一定问题
------------------------------------------------------------------
http1.1新增了Cache-Control
格式如下
Cache-Control: max-age=2592000
可以看出Cache-Control是一个时间段
(Cache-Control还有很多其他的配置项，
但是主要是max-age, 单位秒,表示资源可复用时间)
客户端会记录请求到资源的时间点，作为相对时间的起点，
从而确保参与计算的两个时间节点（起始时间和当前时间）都来源于客户端，
由此便能够实现更加精准的判断。
注意: 当 Cache-Control 与 expires 同时出现时，我们以 Cache-Control 为准。

还有两个常见的配置
no-store
表示永远都不要在客户端存储资源，永远都去原始服务器去获取资源。
no-cache
表示
可以在客户端存储资源，但是每次都必须去服务端做新鲜度校验,
也就是走所谓的协商缓存流程
</blockquote>

#  协商缓存
<blockquote>
如果强缓存过期了，或者一开始服务器给的Cache-Control 就为 no-cache
那么我们就需要进行协商缓存流程

浏览器向服务器去询问缓存的相关信息，
判断是重新发起请求，还是使用本地缓存的资源。

如果服务端提示缓存资源未改动（Not Modified），
资源会被重定向到浏览器缓存，状态码是 304
-----------------------------------------------------------------
协商缓存是利用 http 响应头中的Last-Modified 和 Etag  ，
还有请求头中的If-Modified-Since 和 if-None-Match实现的.

Last-Modified 是一个准确的时间，如果我们启用了协商缓存，
首次请求的 Response Headers 会返回：
Last-Modified: Fri, 19 May 2023 08:33:30 GMT

之后我们每次请求时，会带上一个叫 If-Modified-Since 的时间戳字段，
它的值就是上一次 response 返回给它的 last-modified 值
If-Modified-Since:  Fri, 19 May 2023 08:33:30 GMT

服务器会使用If-Modified-Since的值和这个资源最后的修改时间进行对比
变化了就会返回新资源,并给出新的Last-Modified

否则，返回 304 响应，重定向到缓存资源

Last-Modified 存在一些弊端
1. 我们编辑过内容，但是最终内容没有变化，依旧算修改过
2. If-Modified-Since 只能检查到以秒为最小计量单位的时间差

------------------------------------------------------------------
类似expires, Last-Modified 也出现了补丁Etag 
Etag 是由服务器为每个资源生成的唯一的标识字符串，
这个标识字符串是基于文件内容编码的，只要文件内容不同,etag就不同.
和 Last-Modified 类似，当首次请求时，响应头里获取到一个最初的标识符字符串
格式如下
Etag: "5a413bd823b2b6c7f667497fe4ccd3a0"
下一次请求时，请求头里就会带上一个值相同的、
名为 if-None-Match 的字符串供服务端比对了：
If-None-Match："5a413bd823b2b6c7f667497fe4ccd3a0"
剩下的流程也和Last-Modified的流程相似

Etag 的生成过程需要服务器额外付出开销，会影响服务端的性能
</blockquote>
`