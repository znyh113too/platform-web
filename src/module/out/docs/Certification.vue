<template>
<div>

<h2>实名接口文档</h2>
<h3>1. checkIsAuth</h3>
<p><strong>接口说明</strong></p>
<p>验证企业是否实名</p>
<p><strong>接口调用说明</strong></p>
<p>http请求方式：POST</p>
<p><a href="http://dev-gateway.bubi.cn/api/auth/principal/checkIsAuth" rel="nofollow">http://dev-gateway.bubi.cn/api/auth/principal/checkIsAuth</a></p>
<p><strong>请求数据示例</strong></p>
<div class="highlight highlight-source-java"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>company<span class="pl-pds">"</span></span><span class="pl-k">:</span> {
    <span class="pl-s"><span class="pl-pds">"</span>certificate<span class="pl-pds">"</span></span><span class="pl-k">:</span> {
      <span class="pl-s"><span class="pl-pds">"</span>type<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">31</span>,
      <span class="pl-s"><span class="pl-pds">"</span>value<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>827635617123124312<span class="pl-pds">"</span></span>
    },
    <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>测试企业<span class="pl-pds">"</span></span>
  },
  <span class="pl-s"><span class="pl-pds">"</span>signed<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>signed<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>sourceData<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>sourceData<span class="pl-pds">"</span></span>
}</pre></div>
<p><strong>参数说明</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>是否必填</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>Integer</td>
<td>是</td>
<td>证件类型</td>
</tr>
<tr>
<td>value</td>
<td>String</td>
<td>是</td>
<td>证件号码</td>
</tr>
<tr>
<td>name</td>
<td>String</td>
<td>是</td>
<td>企业名称</td>
</tr>
<tr>
<td>signed</td>
<td>String</td>
<td>是</td>
<td>企业key的签名</td>
</tr>
<tr>
<td>sourceData</td>
<td>String</td>
<td>是</td>
<td>签名原文，base64格式</td>
</tr></tbody></table>
<p><strong>成功返回的JSON数据</strong></p>
<div class="highlight highlight-source-java"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>meta<span class="pl-pds">"</span></span><span class="pl-k">:</span> {
    <span class="pl-s"><span class="pl-pds">"</span>code<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">0</span>,
    <span class="pl-s"><span class="pl-pds">"</span>message<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>success<span class="pl-pds">"</span></span>
  },
  <span class="pl-s"><span class="pl-pds">"</span>data<span class="pl-pds">"</span></span><span class="pl-k">:</span> {
    <span class="pl-s"><span class="pl-pds">"</span>result<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">true</span>
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
<td>result</td>
<td>企业是否已实名的标识</td>
</tr></tbody></table>
<p><strong>失败返回的JSON数据</strong></p>
<div class="highlight highlight-source-java"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>meta<span class="pl-pds">"</span></span><span class="pl-k">:</span> {
    <span class="pl-s"><span class="pl-pds">"</span>code<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">105035</span>,
    <span class="pl-s"><span class="pl-pds">"</span>message<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>企业名称与实名信息不匹配<span class="pl-pds">"</span></span>
  },
  <span class="pl-s"><span class="pl-pds">"</span>data<span class="pl-pds">"</span></span><span class="pl-k">:</span> {}
}</pre></div>
<p><strong>返回码说明</strong></p>
<table>
<thead>
<tr>
<th>返回码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>请求成功</td>
</tr>
<tr>
<td>1</td>
<td>系统错误</td>
</tr>
<tr>
<td>2</td>
<td>缺少参数</td>
</tr>
<tr>
<td>3</td>
<td>参数格式或类型有误</td>
</tr>
<tr>
<td>105034</td>
<td>证件类型和号码与cfca信息不符</td>
</tr>
<tr>
<td>105035</td>
<td>企业名称与实名信息不匹配</td>
</tr>
<tr>
<td>105037</td>
<td>证件号码格式不正确</td>
</tr>
<tr>
<td>105048</td>
<td>签名有误</td>
</tr>
<tr>
<td>105057</td>
<td>证书已过期</td>
</tr></tbody></table>
<h3>2. applyCfcaCertUseAllMsg</h3>
<p><strong>接口说明</strong></p>
<p>申请证书</p>
<p><strong>接口调用说明</strong></p>
<p>http请求方式：POST</p>
<p><a href="http://dev-gateway.bubi.cn/api/auth/cfca/applyCfcaCertUseAllMsg" rel="nofollow">http://dev-gateway.bubi.cn/api/auth/cfca/applyCfcaCertUseAllMsg</a></p>
<p><strong>请求数据示例</strong></p>
<div class="highlight highlight-source-java"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>address<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>北京<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>branchCode<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>678<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>certType<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>1<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>customerType<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">2</span>,
  <span class="pl-s"><span class="pl-pds">"</span>identNo<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>915100007118804386<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>identType<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">31</span>,
  <span class="pl-s"><span class="pl-pds">"</span>userName<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>易上集团有限责任公司<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>signed<span class="pl-pds">"</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">"</span>signed<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>sourceData<span class="pl-pds">"</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">"</span>sourceData<span class="pl-pds">"</span></span>
}</pre></div>
<p><strong>参数说明</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>是否必填</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>signed</td>
<td>String</td>
<td>是</td>
<td>原有证书签名</td>
</tr>
<tr>
<td>sourceData</td>
<td>String</td>
<td>是</td>
<td>签名原文，base64格式</td>
</tr>
<tr>
<td>certType</td>
<td>String</td>
<td>是</td>
<td>证书类型标识（复合证书证书类型用'-'连接，其中1：签名单证，2：双证，3-加密单证）：1:普通证书；2:高级证书；1-1:签名单证-签名单证；1-2:签名单证-双证；1-3:签名单证-加密单证；2-1：双证-签名单证；2-2：双证-双证；2-3：双证-加密单证；3-1：加密单证-签名单证；3-2：加密单证-双证；3-3：加密单证-加密单证</td>
</tr>
<tr>
<td>customerType</td>
<td>Integer</td>
<td>是</td>
<td>客户类型,个人-1 企业-2 服务器-3 设备证书-6 场景证书-7</td>
</tr>
<tr>
<td>userName</td>
<td>String</td>
<td>是</td>
<td>用户名</td>
</tr>
<tr>
<td>userNameInDn</td>
<td>String</td>
<td>否</td>
<td>用户别名</td>
</tr>
<tr>
<td>userIdent</td>
<td>String</td>
<td>否</td>
<td>用户标识</td>
</tr>
<tr>
<td>identType</td>
<td>Integer</td>
<td>是</td>
<td>证件类型</td>
</tr>
<tr>
<td>identNo</td>
<td>String</td>
<td>是</td>
<td>证件号码</td>
</tr>
<tr>
<td>keyAlg</td>
<td>String</td>
<td>否</td>
<td>密钥算法，默认RSA</td>
</tr>
<tr>
<td>keyLength</td>
<td>Integer</td>
<td>否</td>
<td>密钥长度，默认2048</td>
</tr>
<tr>
<td>branchCode</td>
<td>String</td>
<td>是</td>
<td>证书所属机构编码，若为总公司颁发，填写678；若为分公司颁发，按照约定的编码填写</td>
</tr>
<tr>
<td>email</td>
<td>String</td>
<td>否</td>
<td>邮箱</td>
</tr>
<tr>
<td>phoneNo</td>
<td>String</td>
<td>否</td>
<td>电话号码</td>
</tr>
<tr>
<td>address</td>
<td>String</td>
<td>否</td>
<td>企业地址</td>
</tr>
<tr>
<td>startTime</td>
<td>String</td>
<td>否</td>
<td>有效期起始时间 格式：yyyy-MM-dd HH:mm:ss，startTime为空时，证书起始时间为RA服务器当前时间，startTime不为空时，证书起始时间以startTime为准，startTime不能早于当前RA服务器时间超过1天</td>
</tr>
<tr>
<td>duration</td>
<td>Integer</td>
<td>否</td>
<td>有效期，默认单位月</td>
</tr>
<tr>
<td>endTime</td>
<td>String</td>
<td>否</td>
<td>有效期截止时间 格式：yyyy-MM-dd HH:mm:ss，endTime与duration同时非空时，证书截止时间以endTime为准，duration作为证书默认有效期记入数据库</td>
</tr>
<tr>
<td>addEmailExt</td>
<td>Integer</td>
<td>否</td>
<td>添加邮件主题备用名扩展域 0 否 1 是</td>
</tr>
<tr>
<td>addIdentNoExt</td>
<td>Integer</td>
<td>否</td>
<td>添加证件号码扩展域 0 否 1 是</td>
</tr>
<tr>
<td>selfExtValue</td>
<td>String</td>
<td>否</td>
<td>自定义扩展域值</td>
</tr>
<tr>
<td>domainName</td>
<td>String</td>
<td>否</td>
<td>域名</td>
</tr>
<tr>
<td>deviceIdentifier</td>
<td>String</td>
<td>否</td>
<td>设备标识，申请设备证书时必填</td>
</tr>
<tr>
<td>departmentNameInCert</td>
<td>String</td>
<td>否</td>
<td>部门名称</td>
</tr>
<tr>
<td>organizationNameInCert</td>
<td>String</td>
<td>否</td>
<td>组织机构名称，申请设备证书时必填</td>
</tr>
<tr>
<td>locality</td>
<td>String</td>
<td>否</td>
<td>营业地点所在省</td>
</tr>
<tr>
<td>country</td>
<td>String</td>
<td>否</td>
<td>国家</td>
</tr></tbody></table>
<p><strong>成功返回的JSON数据</strong></p>
<div class="highlight highlight-source-java"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>meta<span class="pl-pds">"</span></span><span class="pl-k">:</span> {
    <span class="pl-s"><span class="pl-pds">"</span>code<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">0</span>,
    <span class="pl-s"><span class="pl-pds">"</span>message<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>success<span class="pl-pds">"</span></span>
  },
  <span class="pl-s"><span class="pl-pds">"</span>data<span class="pl-pds">"</span></span><span class="pl-k">:</span> {
    <span class="pl-s"><span class="pl-pds">"</span>sequenceNo<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>11<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>subjectDn<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>CN=051@易上集团有限责任公司@N915100007118804386@11,OU=Organizational-1,OU=Local RA,O=CFCA TEST OCA1,C=CN<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>serialNo<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>1017975018<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>authCode<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>WYN94PAFR3<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>startTime<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>2017-11-30 22:10:56<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>endTime<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>2019-11-30 22:10:56<span class="pl-pds">"</span></span>
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
<td>sequenceNo</td>
<td>序号，代表使用同样的信息申请证书的次数</td>
</tr>
<tr>
<td>subjectDn</td>
<td>证书DN码</td>
</tr>
<tr>
<td>serialNo</td>
<td>序列号，对应证书下载时的证书序列号</td>
</tr>
<tr>
<td>authCode</td>
<td>授权码，对应证书下载时的授权码</td>
</tr>
<tr>
<td>startTime</td>
<td>有效期起始时间 格式：yyyy-MM-dd HH:mm:ss</td>
</tr>
<tr>
<td>endTime</td>
<td>有效期截止时间 格式：yyyy-MM-dd HH:mm:ss</td>
</tr></tbody></table>
<p><strong>失败返回的JSON数据</strong></p>
<div class="highlight highlight-source-java"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>meta<span class="pl-pds">"</span></span><span class="pl-k">:</span> {
    <span class="pl-s"><span class="pl-pds">"</span>code<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">105058</span>,
    <span class="pl-s"><span class="pl-pds">"</span>message<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>原有证书未实名<span class="pl-pds">"</span></span>
  },
  <span class="pl-s"><span class="pl-pds">"</span>data<span class="pl-pds">"</span></span><span class="pl-k">:</span> {}
}</pre></div>
<p><strong>返回码说明</strong></p>
<table>
<thead>
<tr>
<th>返回码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>请求成功</td>
</tr>
<tr>
<td>1</td>
<td>系统错误</td>
</tr>
<tr>
<td>2</td>
<td>缺少参数</td>
</tr>
<tr>
<td>3</td>
<td>参数格式或类型有误</td>
</tr>
<tr>
<td>105058</td>
<td>原有证书未实名</td>
</tr></tbody></table>
<h3>3. reapplyCfcaCert</h3>
<p><strong>接口说明</strong></p>
<p>两码重发接口。申请证书获得的两码在14天内有效，失效的两码可通过此接口再次获取授权码。</p>
<p><strong>接口调用说明</strong></p>
<p>http请求方式：POST</p>
<p><a href="http://dev-gateway.bubi.cn/api/auth/cfca/reapplyCfcaCert" rel="nofollow">http://dev-gateway.bubi.cn/api/auth/cfca/reapplyCfcaCert</a></p>
<p><strong>请求数据示例</strong></p>
<div class="highlight highlight-source-java"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>signed<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>signed<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>sourceData<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>sourceData<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>subjectDn<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>CN=051@易上集团有限责任公司@N915100007118804386@11,OU=Organizational-1,OU=Local RA,O=CFCA TEST OCA1,C=CN<span class="pl-pds">"</span></span>
}</pre></div>
<p><strong>参数说明</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>是否必填</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>String</td>
<td>是</td>
<td>企业名称</td>
</tr>
<tr>
<td>signed</td>
<td>String</td>
<td>是</td>
<td>原有证书签名</td>
</tr>
<tr>
<td>sourceData</td>
<td>String</td>
<td>是</td>
<td>签名原文，base64格式</td>
</tr>
<tr>
<td>subjectDn</td>
<td>String</td>
<td>是</td>
<td>证书的subjectDn</td>
</tr></tbody></table>
<p><strong>成功返回的JSON数据</strong></p>
<div class="highlight highlight-source-java"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>meta<span class="pl-pds">"</span></span><span class="pl-k">:</span> {
    <span class="pl-s"><span class="pl-pds">"</span>code<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">0</span>,
    <span class="pl-s"><span class="pl-pds">"</span>message<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>success<span class="pl-pds">"</span></span>
  },
  <span class="pl-s"><span class="pl-pds">"</span>data<span class="pl-pds">"</span></span><span class="pl-k">:</span> {
    <span class="pl-s"><span class="pl-pds">"</span>serialNo<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>1017975018<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>authCode<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>YSHTR5MMP7<span class="pl-pds">"</span></span>
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
<td>serialNo</td>
<td>序列号，重发的序列号与之前一致</td>
</tr>
<tr>
<td>authCode</td>
<td>新的授权码</td>
</tr></tbody></table>
<p><strong>失败返回的JSON数据</strong></p>
<div class="highlight highlight-source-java"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>meta<span class="pl-pds">"</span></span><span class="pl-k">:</span> {
    <span class="pl-s"><span class="pl-pds">"</span>code<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">105048</span>,
    <span class="pl-s"><span class="pl-pds">"</span>message<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>签名有误<span class="pl-pds">"</span></span>
  },
  <span class="pl-s"><span class="pl-pds">"</span>data<span class="pl-pds">"</span></span><span class="pl-k">:</span> {}
}</pre></div>
<p><strong>返回码说明</strong></p>
<table>
<thead>
<tr>
<th>返回码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>请求成功</td>
</tr>
<tr>
<td>1</td>
<td>系统错误</td>
</tr>
<tr>
<td>2</td>
<td>缺少参数</td>
</tr>
<tr>
<td>3</td>
<td>参数格式或类型有误</td>
</tr>
<tr>
<td>105048</td>
<td>签名有误</td>
</tr>
<tr>
<td>105058</td>
<td>原有证书未实名</td>
</tr>
<tr>
<td>105062</td>
<td>签名对应的企业未申请过该证书</td>
</tr></tbody></table>
<h3>4. addCfcaKey</h3>
<p><strong>接口说明</strong></p>
<p>添加证书接口。申请证书获得的两码，下载到ukey中，需调用此接口同步证书的信息到实名系统中。</p>
<p><strong>接口调用说明</strong></p>
<p>http请求方式：POST</p>
<p><a href="http://dev-gateway.bubi.cn/api/auth/cfca/addCfcaKey" rel="nofollow">http://dev-gateway.bubi.cn/api/auth/cfca/addCfcaKey</a></p>
<p><strong>请求数据示例</strong></p>
<div class="highlight highlight-source-java"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>signed<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>signed<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>sourceData<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>sourceData<span class="pl-pds">"</span></span>
}</pre></div>
<p><strong>参数说明</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>是否必填</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>signed</td>
<td>String</td>
<td>是</td>
<td>待添加的证书签名</td>
</tr>
<tr>
<td>sourceData</td>
<td>String</td>
<td>是</td>
<td>签名原文，base64格式</td>
</tr></tbody></table>
<p><strong>成功返回的JSON数据</strong></p>
<div class="highlight highlight-source-java"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>meta<span class="pl-pds">"</span></span><span class="pl-k">:</span> {
    <span class="pl-s"><span class="pl-pds">"</span>code<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">0</span>,
    <span class="pl-s"><span class="pl-pds">"</span>message<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>success<span class="pl-pds">"</span></span>
  },
  <span class="pl-s"><span class="pl-pds">"</span>data<span class="pl-pds">"</span></span><span class="pl-k">:</span> {
    <span class="pl-s"><span class="pl-pds">"</span>result<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">true</span>
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
<td>result</td>
<td>结果。调用成功，返回true</td>
</tr></tbody></table>
<p><strong>失败返回的JSON数据</strong></p>
<div class="highlight highlight-source-java"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>meta<span class="pl-pds">"</span></span><span class="pl-k">:</span> {
    <span class="pl-s"><span class="pl-pds">"</span>code<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">105068</span>,
    <span class="pl-s"><span class="pl-pds">"</span>message<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>该证书已存在<span class="pl-pds">"</span></span>
  },
  <span class="pl-s"><span class="pl-pds">"</span>data<span class="pl-pds">"</span></span><span class="pl-k">:</span> {}
}</pre></div>
<p><strong>返回码说明</strong></p>
<table>
<thead>
<tr>
<th>返回码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>请求成功</td>
</tr>
<tr>
<td>1</td>
<td>系统错误</td>
</tr>
<tr>
<td>2</td>
<td>缺少参数</td>
</tr>
<tr>
<td>3</td>
<td>参数格式或类型有误</td>
</tr>
<tr>
<td>105048</td>
<td>签名有误</td>
</tr>
<tr>
<td>105068</td>
<td>该证书已存在</td>
</tr>
<tr>
<td>105022</td>
<td>无效的证书</td>
</tr></tbody></table>
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