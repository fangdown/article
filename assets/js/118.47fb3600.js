(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{362:function(t,a,e){"use strict";e.r(a);var r=e(0),s=Object(r.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h2",{attrs:{id:"性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 性能优化")]),e("h3",{attrs:{id:"资源压缩合并，减少http请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#资源压缩合并，减少http请求","aria-hidden":"true"}},[t._v("#")]),t._v(" 资源压缩合并，减少http请求")]),e("ol",[e("li",[t._v("gzip压缩")]),e("li",[t._v("图片压缩")]),e("li",[t._v("base64")])]),e("h3",{attrs:{id:"非核心代码异步加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#非核心代码异步加载","aria-hidden":"true"}},[t._v("#")]),t._v(" 非核心代码异步加载")]),e("ol",[e("li",[t._v("async")]),e("li",[t._v("defer")]),e("li",[t._v("动态script")]),e("li",[t._v("懒加载")])]),e("h3",{attrs:{id:"浏览器缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器缓存")]),e("ol",[e("li",[t._v("强缓存")])]),e("ul",[e("li",[t._v("Expires 绝对时间")]),e("li",[t._v("cache-control： no-store | no-cache\nExpires发的是服务器时间，但是比对的时候是用浏览器本地时间，所以会有差异，不准确\ncache-control优先级别高")])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("协商缓存")])]),e("ul",[e("li",[t._v("last-modified/if-modify-since")]),e("li",[t._v("etag/if-none-match\nlast-modified 存在时间改了内容没有改的问题及1s内有多次更改，时间还是不变的问题\netag 文件内容变化即改变hash字符串，缺点是服务器集群容易发生混乱")])]),e("h3",{attrs:{id:"cdn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cdn","aria-hidden":"true"}},[t._v("#")]),t._v(" cdn")]),e("ol",[e("li",[t._v("动静态内容域名分离")]),e("li",[t._v("header头选项配置建议")])]),e("ul",[e("li",[t._v("connection: keep-alive")]),e("li",[t._v("Vary:Accept-Encoding,User-Agent")])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("避免使用重定向")]),e("li",[t._v("4个左右域名交叉")])]),e("h3",{attrs:{id:"dns预解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns预解析","aria-hidden":"true"}},[t._v("#")]),t._v(" dns预解析")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<meta http-equiv="x-dns-prefetch-control" content="on">\n<link rel="dns-prefetch" rel="http://a.com" />\n')])])]),e("h3",{attrs:{id:"并行加速数控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#并行加速数控制","aria-hidden":"true"}},[t._v("#")]),t._v(" 并行加速数控制")]),e("p",[t._v("6个以内")])])}],!1,null,null,null);a.default=s.exports}}]);