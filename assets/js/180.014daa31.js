(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{257:function(t,s,e){"use strict";e.r(s);var r=e(0),a=Object(r.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),e("ol",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/yisimo/article/details/80341615",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何在git push之后删除node_modules和dist"),e("OutboundLink")],1)])]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),e("ol",{attrs:{start:"6"}},[e("li",[e("p",[t._v("git commit -m 和 -am的区别\n简要区别： 已经提交过的文件，修改了，可以使用am一起，如果文件没有add过，则不能用am\n"),e("a",{attrs:{href:"https://www.cnblogs.com/xiaohuochai/p/6664451.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("区别"),e("OutboundLink")],1)])]),t._m(10)]),t._m(11),t._m(12),e("ul",[e("li",[t._v("ssh")]),e("li",[t._v("ssh-keygen -t rsa连续按回车键三次（注意：千万不要输入密码！")]),e("li",[t._v("cd .ssh/")]),e("li",[t._v("cat id_rsa.pub\n"),e("a",{attrs:{href:"https://blog.csdn.net/gulingfengze/article/details/69665223",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),e("OutboundLink")],1)])]),t._m(13),t._m(14),e("ol",{attrs:{start:"11"}},[e("li",[e("p",[t._v("mac显示分支\n"),e("a",{attrs:{href:"https://www.jianshu.com/p/9f64abc94d45",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),e("OutboundLink")],1)])]),t._m(15)]),t._m(16),t._m(17),t._m(18)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"git知识分享"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git知识分享","aria-hidden":"true"}},[this._v("#")]),this._v(" git知识分享")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("  git rm "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("cached "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  git add "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  git commit "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'remove node_modules and dist'")]),t._v("\n  git push origin master\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("使用淘宝npm的命令")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("  临时：npm "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("registry https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("registry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("npm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org install express    \n  永久：npm config "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" registry https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("registry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("npm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org\n  安装cnpm： npm install "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g cnpm "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("registry"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("registry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("npm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org\n\n  删除代理\n  npm config "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" registry\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("更新某个包")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("   查看版本 npm view vuepress versions  \n   更新该版本 npm update vuepress\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"4"}},[s("li",[this._v("更新npm")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("  npm install -g npm\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"5"}},[s("li",[this._v("git stash 暂存恢复和文件误删恢复")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("  git commit提交文件，服务器返回本地文件有修改。\n\n  1、git stash :暂存本地代码\n\n  2、git pull origin develop : 获取远程分支代码\n\n  3、git stash pop:恢复之前暂存的文件\n\n  git 误删文件和恢复指令\n\n  1、git  fsck --lost-found :查看最近移除的文件.\n\n  2、git show  '误删编号'：查看删除文件内容\n\n  3、git merge ‘误删编号’： 本地合并误删的文件内容\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("git 打标签")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("创建 git tag version (-light)")]),s("li",[this._v('创建附注标签 git tag -a v0.1.0 -m "release 0.1.0 version"')]),s("li",[this._v("查看标签 git tag , git show version")]),s("li",[this._v("删除标签 git tag -d version")]),s("li",[this._v("补打标签 git tag -a v0.1.0 49e0cd22f6bd9510fe65084e023d9c4316b446a6（commitId）")]),s("li",[this._v("发布标签 git push origin version")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"8"}},[s("li",[this._v("配置sshkey到github")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"9"}},[s("li",[s("p",[this._v("取消git初始化\nrm -rf .git")])]),s("li",[s("p",[this._v("git子模块")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("git clone http://172.20.8.45/erp-frontend/base.git --recursive （recursive如果有子目录 会带下来）")]),s("li",[this._v("cd base")]),s("li",[this._v("git submodule add -b dev http://172.20.8.45/erp-frontend/ecms.git src/ecms （关键步骤，添加子模块）")]),s("li",[this._v("git submodule foreach git pull origin dev （更新子模块）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("比较分支")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("-w 忽略空格导致的差异\ngit diff prod..dev -w")]),s("li",[this._v("比较两个文件\ngit diff prod..dev -w xx/xxx/xxx.jsx")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"13"}},[s("li",[this._v("忽略空格merge")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("git merge -Xignore-all-space origin/prod（当前在dev分支）")])])}],!1,null,null,null);s.default=a.exports}}]);