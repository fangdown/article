(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{252:function(t,e,n){"use strict";n.r(e);var s=n(0),i=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),n("ul",[n("li",[t._v("登录阿里云--\x3e产品与服务--\x3e安全--\x3e SSL证书，购买证书，下单支付")]),n("li",[t._v("在未签发列表中，每一行后面有个申请按钮，点击，按要求填写表单，申请待审核")]),n("li",[t._v("审核过后（2个小时左右），已签发列表后有下载证书到本地，"),n("a",{attrs:{href:"https://help.aliyun.com/document_detail/98728.html?spm=5176.2020520163.0.0.14d6AGgpAGgpoO",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细官方操作文档"),n("OutboundLink")],1)])]),t._m(9),n("ul",[n("li",[t._v("如遇到nginx:[emerg]unknown directive ssl错误提示，则说明需要配置ssl模块（坑位，没有装的有， 装过的就没有了， 可通过./nginx -V 查看）"),n("a",{attrs:{href:"https://blog.csdn.net/weixin_38111957/article/details/81283121",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),n("OutboundLink")],1)])]),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),n("p",[t._v("以前觉得使用https配置很难，或者说不知道怎么配，很神秘， 今天自己动手实践了一次，觉得一下子就豁然开朗了，所以动手实践很重要。")]),n("p",[t._v("要点：")]),t._m(19)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"https升级记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#https升级记录","aria-hidden":"true"}},[this._v("#")]),this._v(" https升级记录")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("现在https越来越流行，使用场景和范围越来越广，要求越来要高， 如小程序的接口必须是https接口。升级项目中的http协议到https协议，已经迫不及待！")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"前置条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前置条件","aria-hidden":"true"}},[this._v("#")]),this._v(" 前置条件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("现有的http网站")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("centos 7")]),e("li",[this._v("nginx （目录 /usr/local/nginx）")]),e("li",[this._v("nginx （下载目录 /root/tool/nginx）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("阿里云 SSL证书")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("可以免费申请20个证书")]),e("li",[this._v("证书和域名一一对应（子域名也是单独一个）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"升级步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#升级步骤","aria-hidden":"true"}},[this._v("#")]),this._v(" 升级步骤")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("购买SSL证书")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("配置nginx")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("[root@VM_0_4_centos nginx]# ./sbin/nginx -V \nnginx version: nginx/1.12.0\nbuilt by gcc 4.8.5 20150623 (Red Hat 4.8.5-36) (GCC) \nbuilt with OpenSSL 1.0.2k-fips  26 Jan 2017\nTLS SNI support enabled\nconfigure arguments: --with-http_ssl_module\n# 已有ssl模块\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("安装ssl模块\n进入下载目录下")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("./configure --with-http_ssl_module  //重新添加这个ssl模块")]),e("li",[this._v("make")]),e("li",[this._v("cp /usr/local/nginx/sbin/nginx /usr/local/nginx/sbin/nginx.bak")]),e("li",[this._v("cp objs/nginx /usr/local/nginx/sbin/nginx")]),e("li",[this._v("再次执行 ./sbin/nginx -V ，查看是否安装成功， 如果没有安装成功， 把这几个命令重复几次")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("配置443端口")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("server {\n    listen 443;\n    server_name api.fangdown.cn;\n    ssl on;\n    ssl_certificate ../cert/2612540_api.fangdown.cn.pem;\n    ssl_certificate_key ../cert/2612540_api.fangdown.cn.key;\n\n    ssl_session_cache    shared:SSL:1m;\n    ssl_session_timeout  5m;\n\n    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;  #使用此加密套件。\n    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;   #使用该协议进行配置。\n    ssl_prefer_server_ciphers  on;\n\n    location / {\n      proxy_pass http://127.0.0.1:11000; # 这里可以继续http\n      index index.html index.htm;\n    }\n  }\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("重启Nginx服务")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("./nginx -t # 检查一下语法是否有误\n./nginx -s reload\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("到这里为止，如果不出意外，已经可以正常访问https项目了")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("阿里云提供了免费证书及文档说明（很棒，不然得到处找免费证书）")]),e("li",[this._v("Nginx配置里增加ssl模块，然后把ssl证书配置正确")])])}],!1,null,null,null);e.default=i.exports}}]);