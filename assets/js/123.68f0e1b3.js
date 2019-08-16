(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{370:function(t,i,e){"use strict";e.r(i);var s=e(0),n=Object(s.a)({},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),e("p",[e("a",{attrs:{href:"http://www.cnblogs.com/lhb25/p/inside-block-formatting-ontext.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("BFC 神奇背后的原理-示例"),e("OutboundLink")],1)])])},[function(){var t=this.$createElement,i=this._self._c||t;return i("h2",{attrs:{id:"css盒模型"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#css盒模型","aria-hidden":"true"}},[this._v("#")]),this._v(" css盒模型")])},function(){var t=this.$createElement,i=this._self._c||t;return i("h3",{attrs:{id:"谈谈你对css盒模型的认识"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#谈谈你对css盒模型的认识","aria-hidden":"true"}},[this._v("#")]),this._v(" 谈谈你对CSS盒模型的认识")])},function(){var t=this.$createElement,i=this._self._c||t;return i("ul",[i("li",[i("p",[this._v("基本概念：标准模型+IE模型")])]),i("li",[i("p",[this._v("标准模型和IE模型的区别")])]),i("li",[i("p",[this._v("CSS 如何设置这两种模型：box-sizing")])]),i("li",[i("p",[this._v("js如何获取盒模型对应的宽和高\ndom.style.width/height --只能获取内联样式的值\ndom.currentStyle.width\nwindow.getComputedStyle(dom).width\ndom.getBoundingClientRect().width")])]),i("li",[i("p",[this._v("实例题（根据盒模型解释边距重叠）")])]),i("li",[i("p",[this._v("BFC(边距重叠解决方案)")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("ol",[i("li",[this._v("BFC的基本概念\nBlock Formatting Context ，块级格式化上下文")]),i("li",[this._v("BFC的原理")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("ul",[i("li",[i("p",[this._v("内部的box会在垂直方向，一个接一个的放置")])]),i("li",[i("p",[this._v("计算bfc高度的时候，浮动元素也会参与计算")])]),i("li",[i("p",[this._v("bfc的区域不会与浮动区域的box重叠\n-box垂直方向的距离由margin决定，属于同一个bfc的两个相邻box的margin会发生重叠")])]),i("li",[i("p",[this._v("每个元素的margin box的左边，与包含块border box的左边相接触（对于从做往右的格式化，否则相反")])]),i("li",[i("p",[this._v("bfc是一个页面上的独立的容器，外面的元素不会影响bfc里的元素，反过来，里面的也不会影响外面的")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("ol",{attrs:{start:"3"}},[i("li",[this._v("如何创建BFC")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("ul",[i("li",[this._v("float 不为none")]),i("li",[this._v("position是absolute和fixed")]),i("li",[this._v("display:flex inline-block/ table-cell")]),i("li",[this._v("overflow不为visible")]),i("li",[this._v("根元素")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("ol",{attrs:{start:"4"}},[i("li",[this._v("BFC的使用场景")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("ul",[i("li",[this._v("自适应两栏布局")]),i("li",[this._v("清除内部浮动")]),i("li",[this._v("防止垂直margin重叠")])])}],!1,null,null,null);i.default=n.exports}}]);