(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{304:function(t,e,n){"use strict";n.r(e);var r=n(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),n("p",[t._v("\b默认对浏览器能打开的直接打开了,找了n多方法均不可兼容，最后获得支持，得知可以更改nginx配置，解决")]),n("p",[t._v("解决方法：")]),t._m(3),t._m(4),t._m(5),n("p",[t._v("参考："),n("a",{attrs:{href:"https://www.cnblogs.com/zhuiluoyu/p/7085323.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("nginx作为下载文件服务器"),n("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"附件下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#附件下载","aria-hidden":"true"}},[this._v("#")]),this._v(" 附件下载")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("图片、pdf、文本等需要下载？")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 解决方案")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("设置nginx，设置返回头部")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\nlocation / {\n    #root   html;\n    #index  index.html index.htm;\n\n    if ($request_filename ~* ^.*?\\.(txt|doc|pdf|rar|gz|zip|docx|exe|xlsx|ppt|pptx)$){\n      add_header Content-Disposition:'attachment';\n    }\n}\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("核心思路： 设置response-header，告知浏览器作为附件下载， Content-Disposition下载文件标识，通过nginx批量设置简单快捷实用")])])}],!1,null,null,null);e.default=s.exports}}]);