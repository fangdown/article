(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{280:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/libin-1/p/7098468.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),s("OutboundLink")],1)])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"css实现正方形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css实现正方形","aria-hidden":"true"}},[this._v("#")]),this._v(" css实现正方形")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"css3vm单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css3vm单位","aria-hidden":"true"}},[this._v("#")]),this._v(" css3vm单位")])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("CSS3 中新增了一组相对于可视区域百分比的长度单位vw、vh、vmin、vmax。其中vw是相对于视口宽度百分比的单位，1vw = 1% viewport width，vh是相对于视口高度百分比的单位，1vh = 1% viewport height；vmin是相对当前视口宽高中较小的一个的百分比单位，同理 vmax是相对当前视口宽高中较大的一个的百分比单位")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("  #square{\n    width: 30%;\n    height: 30vw;\n    background-color: red;\n  }\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("square"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("内容"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"设置垂直方向的padding撑开容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置垂直方向的padding撑开容器","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置垂直方向的padding撑开容器")])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("由于margin/padding的百分比数值相对于父元素计算的，所以将垂直方向的一个padding设置为于宽度相同大小的百分比就可以制作出自适应正方形了;\n内容要占据高度，所以把内容高度设置为0")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("  #square{\n    width: 30%;\n    height:0;\n    padding-bottom: 30%;\n    background-color: red;\n    overflow:hidden;\n  }\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("square"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("内容"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"设置伪类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置伪类","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置伪类")])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("用一个子元素撑开content部分的高度，从而使max-height属性生效。首先需要设置伪元素，其内容为空，margin-top设置为100%。"),a("br"),this._v("\n但要注意，若使用垂直方向上的margin撑开父元素，仅仅设置伪元素是不够的，这涉及到margin collapse外边距合并的概念，由于容器与伪元素在垂直方向发生了外边距合并，所以撑开父元素高度并没有出现，解决方法是在父元素上触发BFC：设置overflow:hidden。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[this._v("  #square{\n    width: 30%;\n  }\n  #square:after{\n    content: '';\n    display: block;\n    margin-top: 100%;\n  }\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"延伸-bfc是什么，怎么样才是bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#延伸-bfc是什么，怎么样才是bfc","aria-hidden":"true"}},[this._v("#")]),this._v(" 延伸 BFC是什么，怎么样才是BFC")])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("怎么创建BFC")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",[a("li",[this._v("float的值不是none")]),a("li",[this._v("position的值不是static或者relative")]),a("li",[this._v("display的值是inline-block、tabel-cell、flex")]),a("li",[this._v("overflow的值不是visible")])])}],!1,null,null,null);a.default=n.exports}}]);