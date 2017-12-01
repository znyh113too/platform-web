<template>
<div>
<h2>接入概述</h2>
<p>接入布比开发者平台，开发者需要按照如下步骤完成：</p>
<ol>
<li>注册申请成为开发者</li>
<li>添加应用</li>
<li>获取应用token</li>
<li>按照各个服务的开发文档进行接口调用</li>
</ol>
<p>下面详细介绍这4个步骤。</p>
<h3>第一步：注册申请成为开发者</h3>
<p>进入布比开发者平台注册页面，填写必填信息。审核通过后，即可使用邮箱和密码登录开发者平台。审核时间一般在1-2个工作日。</p>
<h3>第二步：添加应用</h3>
<p>开发者平台中所有的服务接口都依托于应用，用户需申请应用，才可使用开发者平台提供的服务。</p>
<p>在“我的应用”界面，点击“添加应用”，填写必填信息，点击“提交”，系统会分发一对appId和appSecret。appSecret是用户获取token、调用接口的密钥，开发者需妥善保管。</p>
<h3>第三步：获取应用token</h3>
<p>token是应用的全局唯一接口调用凭据，应用调用各接口时都需使用token。</p>
<p><strong>接口调用说明</strong></p>
<p>http请求方式：GET</p>
<p><a href="http://dev-gateway.bubi.cn/manage/apptoken/token?appId=%7BappId%7D&amp;appSecret=%7BappSecret%7D" rel="nofollow">http://dev-gateway.bubi.cn/manage/apptoken/token?appId={appId}&amp;appSecret={appSecret}</a></p>
<p><strong>参数说明</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>是否必填</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>appId</td>
<td>是</td>
<td>第三方用户唯一凭证</td>
</tr>
<tr>
<td>appSecret</td>
<td>是</td>
<td>第三方用户唯一凭证密钥</td>
</tr></tbody></table>
<p><strong>返回说明</strong></p>
<p>正常情况下，平台会返回下述JSON数据包给应用：</p>
<div class="highlight highlight-source-java"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>meta<span class="pl-pds">"</span></span><span class="pl-k">:</span> {
    <span class="pl-s"><span class="pl-pds">"</span>code<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">0</span>,
    <span class="pl-s"><span class="pl-pds">"</span>message<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>success<span class="pl-pds">"</span></span>
  },
  <span class="pl-s"><span class="pl-pds">"</span>data<span class="pl-pds">"</span></span><span class="pl-k">:</span> {
    <span class="pl-s"><span class="pl-pds">"</span>accessToken<span class="pl-pds">"</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">"</span>accessToken<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>expiresIn<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>7200<span class="pl-pds">"</span></span>
  }
}</pre></div>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>meta</td>
<td>调用是否成功的标识，若成功，code为0，message为success</td>
</tr>
<tr>
<td>accessToken</td>
<td>获取到的凭证</td>
</tr>
<tr>
<td>expiresIn</td>
<td>凭证有效时间，单位：秒</td>
</tr></tbody></table>
<p>错误时平台会返回错误码等信息，JSON数据包示例如下（该示例为appId不存在）:</p>
<div class="highlight highlight-source-java"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>meta<span class="pl-pds">"</span></span><span class="pl-k">:</span> {
    <span class="pl-s"><span class="pl-pds">"</span>code<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">101010</span>,
    <span class="pl-s"><span class="pl-pds">"</span>message<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>appId不存在<span class="pl-pds">"</span></span>
  },
  <span class="pl-s"><span class="pl-pds">"</span>data<span class="pl-pds">"</span></span><span class="pl-k">:</span> {}
}</pre></div>
<p><strong>错误码说明</strong></p>
<table>
<thead>
<tr>
<th>返回码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>系统错误</td>
</tr>
<tr>
<td>0</td>
<td>请求成功</td>
</tr>
<tr>
<td>101001</td>
<td>app_secret有误</td>
</tr>
<tr>
<td>101503</td>
<td>token有误</td>
</tr>
<tr>
<td>101004</td>
<td>token已过期</td>
</tr>
<tr>
<td>101010</td>
<td>appId不存在</td>
</tr></tbody></table>
<p>需注意的是，token的有效期只有两个小时，建议应用开发者使用中控服务器统一获取和刷新access_token，不应该各自去刷新，否则容易造成冲突。应提前刷新，以免token过期导致报错。</p>
<h3>第四步：调用接口</h3>
<p>获取access_token后，请将access_token放到请求头部，按照接口文档调用相关服务的接口。</p>
<p>例如，调用实名服务的getCompany接口：<br>
<a href="https://camo.githubusercontent.com/f3da02050b1b172ad93270935fd59f8fcc655991/687474703a2f2f7777332e73696e61696d672e636e2f6c617267652f303036306c6d37546c7931666d306268306138696d6a33306b6b3036777765702e6a7067" target="_blank"><img src="https://camo.githubusercontent.com/f3da02050b1b172ad93270935fd59f8fcc655991/687474703a2f2f7777332e73696e61696d672e636e2f6c617267652f303036306c6d37546c7931666d306268306138696d6a33306b6b3036777765702e6a7067" alt="" data-canonical-src="http://ww3.sinaimg.cn/large/0060lm7Tly1fm0bh0a8imj30kk06wwep.jpg" style="max-width:100%;"></a></p>

</div>
</template>
<script>

export default {
  data() {
    return {
    }
  }
}
</script>

<style scoped>

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
}

/* BODY
=============================================================================*/

body {
  font-family: Helvetica, arial, freesans, clean, sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #333;
  background-color: #fff;
  padding: 20px;
  max-width: 960px;
  margin: 0 auto;
}

body>*:first-child {
  margin-top: 0 !important;
}

body>*:last-child {
  margin-bottom: 0 !important;
}

/* BLOCKS
=============================================================================*/

p, blockquote, ul, ol, dl, table, pre {
  margin: 15px 0;
}

/* HEADERS
=============================================================================*/

h1, h2, h3, h4, h5, h6 {
  margin: 20px 0 10px;
  padding: 0;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
}

h1 tt, h1 code, h2 tt, h2 code, h3 tt, h3 code, h4 tt, h4 code, h5 tt, h5 code, h6 tt, h6 code {
  font-size: inherit;
}

h1 {
  font-size: 28px;
  color: #000;
}

h2 {
  font-size: 24px;
  border-bottom: 1px solid #ccc;
  color: #000;
}

h3 {
  font-size: 18px;
}

h4 {
  font-size: 16px;
}

h5 {
  font-size: 14px;
}

h6 {
  color: #777;
  font-size: 14px;
}

body>h2:first-child, body>h1:first-child, body>h1:first-child+h2, body>h3:first-child, body>h4:first-child, body>h5:first-child, body>h6:first-child {
  margin-top: 0;
  padding-top: 0;
}

a:first-child h1, a:first-child h2, a:first-child h3, a:first-child h4, a:first-child h5, a:first-child h6 {
  margin-top: 0;
  padding-top: 0;
}

h1+p, h2+p, h3+p, h4+p, h5+p, h6+p {
  margin-top: 10px;
}

/* LINKS
=============================================================================*/

a {
  color: #4183C4;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* LISTS
=============================================================================*/

ul, ol {
  padding-left: 30px;
}

ul li > :first-child, 
ol li > :first-child, 
ul li ul:first-of-type, 
ol li ol:first-of-type, 
ul li ol:first-of-type, 
ol li ul:first-of-type {
  margin-top: 0px;
}

ul ul, ul ol, ol ol, ol ul {
  margin-bottom: 0;
}

dl {
  padding: 0;
}

dl dt {
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  padding: 0;
  margin: 15px 0 5px;
}

dl dt:first-child {
  padding: 0;
}

dl dt>:first-child {
  margin-top: 0px;
}

dl dt>:last-child {
  margin-bottom: 0px;
}

dl dd {
  margin: 0 0 15px;
  padding: 0 15px;
}

dl dd>:first-child {
  margin-top: 0px;
}

dl dd>:last-child {
  margin-bottom: 0px;
}

/* CODE
=============================================================================*/

pre, code, tt {
  font-size: 12px;
  font-family: Consolas, "Liberation Mono", Courier, monospace;
}

code, tt {
  margin: 0 0px;
  padding: 0px 0px;
  white-space: nowrap;
  border: 1px solid #eaeaea;
  background-color: #f8f8f8;
  border-radius: 3px;
}

pre>code {
  margin: 0;
  padding: 0;
  white-space: pre;
  border: none;
  background: transparent;
}

pre {
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  font-size: 13px;
  line-height: 19px;
  overflow: auto;
  padding: 6px 10px;
  border-radius: 3px;
}

pre code, pre tt {
  background-color: transparent;
  border: none;
}

kbd {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    background-color: #DDDDDD;
    background-image: linear-gradient(#F1F1F1, #DDDDDD);
    background-repeat: repeat-x;
    border-color: #DDDDDD #CCCCCC #CCCCCC #DDDDDD;
    border-image: none;
    border-radius: 2px 2px 2px 2px;
    border-style: solid;
    border-width: 1px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    line-height: 10px;
    padding: 1px 4px;
}

/* QUOTES
=============================================================================*/

blockquote {
  border-left: 4px solid #DDD;
  padding: 0 15px;
  color: #777;
}

blockquote>:first-child {
  margin-top: 0px;
}

blockquote>:last-child {
  margin-bottom: 0px;
}

/* HORIZONTAL RULES
=============================================================================*/

hr {
  clear: both;
  margin: 15px 0;
  height: 0px;
  overflow: hidden;
  border: none;
  background: transparent;
  border-bottom: 4px solid #ddd;
  padding: 0;
}

/* TABLES
=============================================================================*/

table th {
  font-weight: bold;
}

table th, table td {
  border: 1px solid #ccc;
  padding: 6px 13px;
}

table tr {
  border-top: 1px solid #ccc;
  background-color: #fff;
}

table tr:nth-child(2n) {
  background-color: #f8f8f8;
}

/* IMAGES
=============================================================================*/

img {
  max-width: 100%
}
</style>
<style type="text/css">
.highlight  { background: #ffffff; }
.highlight .c { color: #999988; font-style: italic } /* Comment */
.highlight .err { color: #a61717; background-color: #e3d2d2 } /* Error */
.highlight .k { font-weight: bold } /* Keyword */
.highlight .o { font-weight: bold } /* Operator */
.highlight .cm { color: #999988; font-style: italic } /* Comment.Multiline */
.highlight .cp { color: #999999; font-weight: bold } /* Comment.Preproc */
.highlight .c1 { color: #999988; font-style: italic } /* Comment.Single */
.highlight .cs { color: #999999; font-weight: bold; font-style: italic } /* Comment.Special */
.highlight .gd { color: #000000; background-color: #ffdddd } /* Generic.Deleted */
.highlight .gd .x { color: #000000; background-color: #ffaaaa } /* Generic.Deleted.Specific */
.highlight .ge { font-style: italic } /* Generic.Emph */
.highlight .gr { color: #aa0000 } /* Generic.Error */
.highlight .gh { color: #999999 } /* Generic.Heading */
.highlight .gi { color: #000000; background-color: #ddffdd } /* Generic.Inserted */
.highlight .gi .x { color: #000000; background-color: #aaffaa } /* Generic.Inserted.Specific */
.highlight .go { color: #888888 } /* Generic.Output */
.highlight .gp { color: #555555 } /* Generic.Prompt */
.highlight .gs { font-weight: bold } /* Generic.Strong */
.highlight .gu { color: #aaaaaa } /* Generic.Subheading */
.highlight .gt { color: #aa0000 } /* Generic.Traceback */
.highlight .kc { font-weight: bold } /* Keyword.Constant */
.highlight .kd { font-weight: bold } /* Keyword.Declaration */
.highlight .kp { font-weight: bold } /* Keyword.Pseudo */
.highlight .kr { font-weight: bold } /* Keyword.Reserved */
.highlight .kt { color: #445588; font-weight: bold } /* Keyword.Type */
.highlight .m { color: #009999 } /* Literal.Number */
.highlight .s { color: #d14 } /* Literal.String */
.highlight .na { color: #008080 } /* Name.Attribute */
.highlight .nb { color: #0086B3 } /* Name.Builtin */
.highlight .nc { color: #445588; font-weight: bold } /* Name.Class */
.highlight .no { color: #008080 } /* Name.Constant */
.highlight .ni { color: #800080 } /* Name.Entity */
.highlight .ne { color: #990000; font-weight: bold } /* Name.Exception */
.highlight .nf { color: #990000; font-weight: bold } /* Name.Function */
.highlight .nn { color: #555555 } /* Name.Namespace */
.highlight .nt { color: #000080 } /* Name.Tag */
.highlight .nv { color: #008080 } /* Name.Variable */
.highlight .ow { font-weight: bold } /* Operator.Word */
.highlight .w { color: #bbbbbb } /* Text.Whitespace */
.highlight .mf { color: #009999 } /* Literal.Number.Float */
.highlight .mh { color: #009999 } /* Literal.Number.Hex */
.highlight .mi { color: #009999 } /* Literal.Number.Integer */
.highlight .mo { color: #009999 } /* Literal.Number.Oct */
.highlight .sb { color: #d14 } /* Literal.String.Backtick */
.highlight .sc { color: #d14 } /* Literal.String.Char */
.highlight .sd { color: #d14 } /* Literal.String.Doc */
.highlight .s2 { color: #d14 } /* Literal.String.Double */
.highlight .se { color: #d14 } /* Literal.String.Escape */
.highlight .sh { color: #d14 } /* Literal.String.Heredoc */
.highlight .si { color: #d14 } /* Literal.String.Interpol */
.highlight .sx { color: #d14 } /* Literal.String.Other */
.highlight .sr { color: #009926 } /* Literal.String.Regex */
.highlight .s1 { color: #d14 } /* Literal.String.Single */
.highlight .ss { color: #990073 } /* Literal.String.Symbol */
.highlight .bp { color: #999999 } /* Name.Builtin.Pseudo */
.highlight .vc { color: #008080 } /* Name.Variable.Class */
.highlight .vg { color: #008080 } /* Name.Variable.Global */
.highlight .vi { color: #008080 } /* Name.Variable.Instance */
.highlight .il { color: #009999 } /* Literal.Number.Integer.Long */
.pl-c {
    color: #969896;
}

.pl-c1,.pl-mdh,.pl-mm,.pl-mp,.pl-mr,.pl-s1 .pl-v,.pl-s3,.pl-sc,.pl-sv {
    color: #0086b3;
}

.pl-e,.pl-en {
    color: #795da3;
}

.pl-s1 .pl-s2,.pl-smi,.pl-smp,.pl-stj,.pl-vo,.pl-vpf {
    color: #333;
}

.pl-ent {
    color: #63a35c;
}

.pl-k,.pl-s,.pl-st {
    color: #a71d5d;
}

.pl-pds,.pl-s1,.pl-s1 .pl-pse .pl-s2,.pl-sr,.pl-sr .pl-cce,.pl-sr .pl-sra,.pl-sr .pl-sre,.pl-src,.pl-v {
    color: #df5000;
}

.pl-id {
    color: #b52a1d;
}

.pl-ii {
    background-color: #b52a1d;
    color: #f8f8f8;
}

.pl-sr .pl-cce {
    color: #63a35c;
    font-weight: bold;
}

.pl-ml {
    color: #693a17;
}

.pl-mh,.pl-mh .pl-en,.pl-ms {
    color: #1d3e81;
    font-weight: bold;
}

.pl-mq {
    color: #008080;
}

.pl-mi {
    color: #333;
    font-style: italic;
}

.pl-mb {
    color: #333;
    font-weight: bold;
}

.pl-md,.pl-mdhf {
    background-color: #ffecec;
    color: #bd2c00;
}

.pl-mdht,.pl-mi1 {
    background-color: #eaffea;
    color: #55a532;
}

.pl-mdr {
    color: #795da3;
    font-weight: bold;
}

.pl-mo {
    color: #1d3e81;
}
.task-list {
padding-left:10px;
margin-bottom:0;
}

.task-list li {
    margin-left: 20px;
}

.task-list-item {
list-style-type:none;
padding-left:10px;
}

.task-list-item label {
font-weight:400;
}

.task-list-item.enabled label {
cursor:pointer;
}

.task-list-item+.task-list-item {
margin-top:3px;
}

.task-list-item-checkbox {
display:inline-block;
margin-left:-20px;
margin-right:3px;
vertical-align:1px;
}
</style>

