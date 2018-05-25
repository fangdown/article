(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{206:function(n,s,a){"use strict";a.r(s);var t=a(0),p=Object(t.a)({},function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"content"},[this._ssrNode('<h3 id="抽取css失效了？"><a href="#抽取css失效了？" aria-hidden="true" class="header-anchor">#</a> 抽取css失效了？</h3><p>在webpack4中生产模式中要对公共css进行抽取成独立文件，\n配置如下</p><div class="language-javascript extra-class"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getUseLessModules</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'css-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        importLoaders<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        modules<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        outside<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// localIdentName: \'[path]___[name]__[local]___[hash:base64:5]\',</span>\n        localIdentName<span class="token punctuation">:</span> <span class="token string">\'[name]__[local]___[hash:base64:5]\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'postcss-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// Necessary for external CSS imports to work</span>\n        <span class="token comment">// https://github.com/facebookincubator/create-react-app/issues/2677</span>\n        ident<span class="token punctuation">:</span> <span class="token string">\'postcss\'</span><span class="token punctuation">,</span>\n        plugins<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>\n          <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'postcss-flexbugs-fixes\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          <span class="token function">autoprefixer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            browsers<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n              <span class="token string">\'&gt;1%\'</span><span class="token punctuation">,</span>\n              <span class="token string">\'last 4 versions\'</span><span class="token punctuation">,</span>\n              <span class="token string">\'Firefox ESR\'</span><span class="token punctuation">,</span>\n              <span class="token string">\'not ie &lt; 9\'</span><span class="token punctuation">,</span> <span class="token comment">// React doesn\'t support IE8 anyway</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            flexbox<span class="token punctuation">:</span> <span class="token string">\'no-2009\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> <span class="token string">\'less-loader\'</span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// modifyVars: theme,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// module中配置</span>\n  <span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/(\\.less|\\.css)$/</span><span class="token punctuation">,</span>\n      include<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>paths<span class="token punctuation">.</span>appSrc<span class="token punctuation">,</span> <span class="token string">\'main/\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>paths<span class="token punctuation">.</span>appSrc<span class="token punctuation">,</span> <span class="token string">\'modules/\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token comment">// &quot;style&quot; loader turns CSS into JS modules that inject &lt;style&gt; tags.</span>\n        require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'style-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token comment">//  MiniCssExtractPlugin.loader, 这段加了反而不会出现对模块化css编译</span>\n      <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">getUseLessModules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n\n</code></pre></div><p>MiniCssExtractPlugin.loader加了这段，模块化css失效，取消则编译成功\n估计是还不支持吧！</p>')])},[],!1,null,null,null);s.default=p.exports}}]);