(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{317:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"react-fiber机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-fiber机制","aria-hidden":"true"}},[t._v("#")]),t._v(" react-fiber机制")]),s("p",[t._v("在v16版本中引入了fiber机制")]),s("h3",{attrs:{id:"为什么引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么引入","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么引入")]),s("p",[t._v("如果有一个很复杂的复合组件，当最上册的state发生变化，造成调用栈会很长，若中间又有复杂的操作，就可能导致长时间阻塞主线程，带领不友好的用户体验")]),s("h3",{attrs:{id:"fiber有什么好处"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fiber有什么好处","aria-hidden":"true"}},[t._v("#")]),t._v(" fiber有什么好处")]),s("p",[t._v("fiber本质上是一个虚拟的堆栈帧，新的调度器会按照优先级自由调度这些帧，从而将之前的同步渲染变成异步渲染，在不影响用户体验的情况下分段计算更新。"),s("br"),t._v("\n如何区分优先级： 对于动画这种实时性很高的东西，也就是16ms必须渲染一次保证不卡顿的情况下，react会在16ms内暂停一下更新，返回来继续渲染动画。")]),s("h3",{attrs:{id:"fiber-实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fiber-实现","aria-hidden":"true"}},[t._v("#")]),t._v(" fiber 实现")]),s("p",[t._v("带来了2个新的api，getDerivedStateFromProps（替换componentWillReciveProps）,getSnapshotBeforUpdate(用于替换componentWillUpdate)\n异步渲染有2个阶段，Reconcilition阶段和commit阶段，前者是可以被打断的，后者不能暂停.\nReconcilition阶段有：")]),s("ol",[s("li",[t._v("componentWillMount")]),s("li",[t._v("componentWillReciveProps")]),s("li",[t._v("shouldComponentUpdate")]),s("li",[t._v("componentWillUpdate\ncommit阶段有：")]),s("li",[t._v("componentDidMount")]),s("li",[t._v("componentDidUpdate")]),s("li",[t._v("componentWillUnmount")])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExampleComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDerivedStateFromProps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nextProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" preState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("preState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someMirroredValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" nextProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          derivedData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("computeDerivedState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          someMirroredValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nextProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someValue\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// v16版本生命周期使用建议")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExampleComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于初始化 state")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于替换 `componentWillReceiveProps` ，该函数会在初始化和 `update` 时被调用")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因为该函数是静态函数，所以取不到 `this`")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果需要对比 `prevProps` 需要单独在 `state` 中维护")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDerivedStateFromProps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nextProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prevState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断是否需要更新组件，多用于组件性能优化")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shouldComponentUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nextProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件挂载后调用")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以在该函数中进行请求或者订阅")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidMount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于获得最新的 DOM 数据")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSnapshotBeforeUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件即将销毁")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以在此处移除订阅，定时器等等")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillUnmount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件销毁后调用")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidUnMount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件更新后调用")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 渲染组件函数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以下函数不建议使用")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UNSAFE_componentWillMount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UNSAFE_componentWillUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nextProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UNSAFE_componentWillReceiveProps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nextProps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);n.default=e.exports}}]);