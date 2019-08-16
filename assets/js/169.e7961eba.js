(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{293:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),a("p",[t._v("什么是HTTP劫持呢，大多数情况是运营商HTTP劫持，当我们使用HTTP请求请求一个网站页面的时候，网络运营商会在正常的数据流中插入精心设计的网络数据报文，让客户端（通常是浏览器）展示“错误”的数据，通常是一些弹窗，宣传性广告或者直接显示某网站的内容，大家应该都有遇到过。")]),t._m(3),a("p",[t._v("DNS 劫持就是通过劫持了 DNS 服务器，通过某些手段取得某域名的解析记录控制权，进而修改此域名的解析结果，导致对该域名的访问由原IP地址转入到修改后的指定IP，其结果就是对特定的网址不能访问或访问的是假网址，从而实现窃取资料或者破坏原有正常服务的目的。")]),a("p",[t._v("DNS 劫持比之 HTTP 劫持 更加过分，简单说就是我们请求的是 http://www.a.com/index.html ，直接被重定向了 http://www.b.com/index.html")]),t._m(4),a("p",[t._v("XSS指的是攻击者利用漏洞，向 Web 页面中注入恶意代码，当用户浏览该页之时，注入的代码会被执行，从而达到攻击的特殊目的。")]),a("p",[t._v("关于这些攻击如何生成，攻击者如何注入恶意代码到页面中本文不做讨论，只要知道如 HTTP 劫持 和 XSS 最终都是恶意代码在客户端，通常也就是用户浏览器端执行，本文将讨论的就是假设注入已经存在，如何利用 Javascript 进行行之有效的前端防护。")]),t._m(5),a("p",[t._v("先来说说我们的页面被嵌入了 iframe 的情况。也就是，网络运营商为了尽可能地减少植入广告对原有网站页面的影响，通常会通过把原有网站页面放置到一个和原页面相同大小的 iframe 里面去，那么就可以通过这个 iframe 来隔离广告代码对原有页面的影响。\n避免被嵌套 window.self 与 window.top")]),t._m(6),t._m(7),t._m(8),a("p",[t._v("最常规的手段是在页面 URL 中设置一个参数，例如 http://www.example.com/index.html?iframe_hijack_redirected=1 ，其中 iframe_hijack_redirected=1 表示页面已经被劫持过了，就不再嵌套 iframe 了")]),t._m(9),t._m(10),t._m(11),a("p",[t._v("我们假设注入已经发生，那么有没有办法拦截这些内联事件与内联脚本的执行呢？")]),a("p",[t._v("对于上面列出的 (1) (5) ，这种需要用户点击或者执行某种事件之后才执行的脚本，我们是有办法进行防御的。")]),t._m(12),a("p",[t._v("XSS 跨站脚本的精髓不在于“跨站”，在于“脚本”。")]),t._m(13),t._m(14),a("p",[t._v("听起来很困难啊，什么意思呢。就是在脚本执行前发现这个可疑脚本，并且销毁它使之不能执行内部代码。")]),a("p",[t._v("所以我们需要用到一些高级 API ，能够在页面加载时对生成的节点进行检测。")]),t._m(15),a("p",[t._v("MutationObserver 是 HTML5 新增的 API，功能很强大，给开发者们提供了一种能在某个范围内的 DOM 树发生变化时作出适当反应的能力。")]),a("p",[t._v("说的很玄乎，大概的意思就是能够监测到页面 DOM 树的变换，并作出反应。")]),a("p",[t._v("MutationObserver() 该构造函数用来实例化一个新的Mutation观察者对象。")]),t._m(16),t._m(17),a("p",[t._v("要拦截这类动态生成的脚本，且拦截时机要在它插入 DOM 树中，执行之前，本来是可以监听 Mutation Events 中的 DOMNodeInserted 事件的。")]),t._m(18),t._m(19),t._m(20),t._m(21),a("p",[t._v("在动态脚本插入执行前，监听 DOM 树的变化拦截它行不通，脚本仍然会执行。")]),a("p",[t._v("那么我们需要向上寻找，在脚本插入 DOM 树前的捕获它，那就是创建脚本时这个时机。")]),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),a("p",[t._v("最后再简单谈谈 HTTPS 与 CSP。其实防御劫持最好的方法还是从后端入手，前端能做的实在太少。而且由于源码的暴露，攻击者很容易绕过我们的防御手段。")]),t._m(28),a("p",[t._v("CSP 即是 Content Security Policy，翻译为内容安全策略。这个规范与内容安全有关，主要是用来定义页面可以加载哪些资源，减少 XSS 的发生。")]),t._m(29),a("p",[t._v("能够实施 HTTP 劫持的根本原因，是 HTTP 协议没有办法对通信对方的身份进行校验以及对数据完整性进行校验。如果能解决这个问题，则劫持将无法轻易发生。")]),a("p",[t._v("HTTPS，是 HTTP over SSL 的意思。SSL 协议是 Netscape 在 1995 年首次提出的用于解决传输层安全问题的网络协议，其核心是基于公钥密码学理论实现了对服务器身份认证、数据的私密性保护以及对数据完整性的校验等功能。\n"),a("a",{attrs:{href:"http://www.cnblogs.com/coco1s/p/5777260.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript防http劫持与XSS"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"http-防劫持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-防劫持","aria-hidden":"true"}},[this._v("#")]),this._v(" http-防劫持")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"http劫持、dns劫持与xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http劫持、dns劫持与xss","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP劫持、DNS劫持与XSS")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"http劫持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http劫持","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP劫持")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"dns劫持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns劫持","aria-hidden":"true"}},[this._v("#")]),this._v(" DNS劫持")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"xss跨站脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss跨站脚本","aria-hidden":"true"}},[this._v("#")]),this._v(" XSS跨站脚本")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"页面被嵌入-iframe-中，重定向-iframe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面被嵌入-iframe-中，重定向-iframe","aria-hidden":"true"}},[this._v("#")]),this._v(" 页面被嵌入 iframe 中，重定向 iframe")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 我们的正常页面")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父级页面重定向")]),t._v("\n  top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"使用白名单放行正常-iframe-嵌套"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用白名单放行正常-iframe-嵌套","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用白名单放行正常 iframe 嵌套")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"更改-url-参数绕过运营商标记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更改-url-参数绕过运营商标记","aria-hidden":"true"}},[this._v("#")]),this._v(" 更改 URL 参数绕过运营商标记")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"内联事件及内联脚本拦截"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内联事件及内联脚本拦截","aria-hidden":"true"}},[this._v("#")]),this._v(" 内联事件及内联脚本拦截")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a href"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javascript:alert(1)"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("iframe src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javascript:alert(1)"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("img src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x'")]),t._v(" onerror"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alert(1)"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("video src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x'")]),t._v(" onerror"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alert(1)"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("video"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div onclick"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alert(1)"')]),t._v(" onmouseover"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alert(2)"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("除去一些未列出来的非常少见生僻的注入方式，大部分都是 "),s("code",[this._v("javascript:...")]),this._v("及内联事件 on*。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"静态脚本拦截"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态脚本拦截","aria-hidden":"true"}},[this._v("#")]),this._v(" 静态脚本拦截")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("通常而言，攻击者或者运营商会向页面中注入一个"),s("code",[this._v("<script>")]),this._v("脚本，具体操作都在脚本中实现，这种劫持方式只需要注入一次，有改动的话不需要每次都重新注入。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们假定现在页面上被注入了一个"),s("code",[this._v('<script src="http://attack.com/xss.js">')]),this._v("脚本，我们的目标就是拦截这个脚本的执行。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"mutationobserver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mutationobserver","aria-hidden":"true"}},[this._v("#")]),this._v(" MutationObserver")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"使用白名单对-src-进行匹配过滤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用白名单对-src-进行匹配过滤","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用白名单对 src 进行匹配过滤")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"动态脚本拦截"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态脚本拦截","aria-hidden":"true"}},[this._v("#")]),this._v(" 动态脚本拦截")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"mutation-events-与-domnodeinserted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mutation-events-与-domnodeinserted","aria-hidden":"true"}},[this._v("#")]),this._v(" Mutation Events 与 DOMNodeInserted")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"重写-setattribute-与-document-write"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重写-setattribute-与-document-write","aria-hidden":"true"}},[this._v("#")]),this._v(" 重写 setAttribute 与 document.write")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"重写原生-element-prototype-setattribute-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重写原生-element-prototype-setattribute-方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 重写原生 Element.prototype.setAttribute 方法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" script "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/javascript'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.example.com/xss/c.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'body'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"重写嵌套-iframe-内的-element-prototype-setattribute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重写嵌套-iframe-内的-element-prototype-setattribute","aria-hidden":"true"}},[this._v("#")]),this._v(" 重写嵌套 iframe 内的 Element.prototype.setAttribute")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"重写-document-write"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重写-document-write","aria-hidden":"true"}},[this._v("#")]),this._v(" 重写 document.write")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resetDocumentWrite")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("window")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" old_write "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("write")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("blackListMatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keywordBlackList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'拦截可疑模块:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用原始接口")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("old_write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"建立拦截上报"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立拦截上报","aria-hidden":"true"}},[this._v("#")]),this._v(" 建立拦截上报")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* 自定义上报 -- 替换页面中的 console.log()\n* @param  {[String]} name  [拦截类型]\n* @param  {[String]} value [拦截值]\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hijackReport")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" img "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   hijackName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   hijackValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   curDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上报")]),t._v("\n img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.reportServer.com/report/?msg='")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" hijackName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&value='")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" hijackValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&time='")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" curDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"https-与-csp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https-与-csp","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTPS 与 CSP")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"csp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csp","aria-hidden":"true"}},[this._v("#")]),this._v(" CSP")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTPS")])}],!1,null,null,null);s.default=r.exports}}]);