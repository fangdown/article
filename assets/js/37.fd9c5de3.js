(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{231:function(e,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._m(1),e._m(2),n("p",[e._v("+-----------------------------------------------+\n|                 Length (24)                   |\n+---------------+---------------+---------------+\n|   Type (8)    |   Flags (8)   |\n+-+-------------+---------------+-------------------+\n|R|                 Stream Identifier (31)          |\n+=+=================================================+\n|                   Frame Payload (0...)        ...\n+---------------------------------------------------+\nlength：表示Frame Payload部分的长度，其FrameHeader固定为9字节共72比特\ntype：区分Frame Payload部分是HTTP Header还是HTTP Body\nFlags：8位，每一位都起标记作用，表示这个帧的类型\nR：保留位\nStream Identifier：帧流ID，当开始建立连接时，先发送一个Stream ID=0的流来最初始化工作，之后从1开始发送请求/响应。\n2. HTTP2.0中帧具有优先级\nHTTP2帧具有优先级，允许客户端提供排序思路，以让服务器优先处理一部分请求，仍然是以二进制帧的形式返回数据。每个Frame Header中都有一个表示此Frame的 Stream ID，通过stream ID表示可以使所有的请求和响应同时在一条TCP连接上进行，当流并发时，流会有优先级，图片的优先级低于css文件或者js文件的优先级，这样设计可使重要的文件先下载。")]),e._m(3),n("p",[e._v("总结")]),n("ul",[n("li",[e._v("HTTP1.0的缺陷")]),n("li",[e._v("每个请求都需单独建立连接（keep-alive能解决部分问题单不能交叉推送）")]),n("li",[e._v("每个请求和响应都需要完整的头信息")]),n("li",[e._v("数据未加密")]),n("li",[e._v("HTTP2.0的优势")]),n("li",[e._v("多路复用")]),n("li",[e._v("压缩头信息")]),n("li",[e._v("请求划分优先级")]),n("li",[e._v("支持服务器端主动推送\n"),n("a",{attrs:{href:"https://blog.csdn.net/u012657197/article/details/77877840",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考链接"),n("OutboundLink")],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"http2-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http2-0","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP2.0")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"http2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http2","aria-hidden":"true"}},[this._v("#")]),this._v(" http2")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("HTTP2.0的基本单位为二进制帧\nHTTP1.0利用文本与服务器交互，而HTTP2的基本协议单位为二进制帧流，每帧都有自己的类型旨在实现不同功能，然而HTTP1将继续存在，因此，HTTP2的二进制帧流需映射到HTTP1上以实现向下兼容。\nHTTP2.0这么多新特性就是因为底层数据格式的改变：")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"3"}},[t("li",[t("p",[this._v("HTTP2.0的多路复用\n浏览器对同一域名下的并发连接数量有限制，一般为6个，HTTP1中的Keep-Alive用于长连接而不必重新建立连接，然而keep-alive必须等本次请求彻底完成后才能发送下一个请求，而HTTP2的请求与响应以二进制帧的形式交错进行，只需建立一次连接，即一轮三次握手，实现多路复用。")])]),t("li",[t("p",[this._v("HTTP2.0压缩消息头\nHTTP1的消息头很大冗余，而HTTP2.0利用HPACK对消息头进行压缩传输，假设将常用的请求GET/index.html用1表示，POST/index.html用2表示，即是将消息头中的不同的部分分别用不用的索引进行表示，且会用哈夫曼编码压缩字符串，最后封装成frame。索引表分为动态索引和静态索引，动态索引表在客户端和服务器端共同维护，静态索引采用硬编码形式。")])]),t("li",[t("p",[this._v("HTTP2.0服务端推送\nHTTP2.0中服务器会主动将资源推送给客户端，例如把js和css文件主动推送给客户端而不用客户端解析HTML后请求再响应。")])]),t("li",[t("p",[this._v("HTTP2.0只适用于HTTPS的场景\nHTTPS是在HTTP和TCP之间增加了一层SSL，即secure socket layer，增加了数据安全传输及客户端和服务器端的身份验证，而HTTP2.0只适用于HTTPS的场景。")])])])}],!1,null,null,null);t.default=r.exports}}]);