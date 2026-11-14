今日新开传奇发布网 —— 静态站说明
域名：https://playmir.github.io
============================================

一、上传方式
1. 把本目录下所有文件（与 index.html 同级）整体上传到 GitHub 仓库 playmir.github.io 的根目录。
2. 仓库 Settings -> Pages，Source 选 Deploy from a branch，分支 main，目录 / (root)。
3. 等待 1-2 分钟，访问 https://playmir.github.io 即可。
4. 需自定义域名时，在根目录放 CNAME 文件，内容写你的域名（一行）。

二、图片替换（重要）
站内 10 张配图已用占位图，文件名固定为 pic1.jpg ~ pic10.jpg（126×126 像素）。
请直接用你自己的图片覆盖同名文件，尺寸保持 126×126，格式 jpg，即可全站生效，无需改代码。
- pic1~pic6  首页“今日新开区服”六张卡片
- pic7~pic9  列表页 / 文章页配图轮换
- pic10      侧栏“每日一荐”
如需改对应关系，在 HTML 里搜索 pic 即可替换文件名。

三、SEO 与收录（按顺序做）
1. 百度搜索资源平台 https://ziyuan.baidu.com 添加站点 playmir.github.io，验证方式选“文件验证”，
   把下载的 html 验证文件放到本目录根下（与 index.html 同级）。
2. 提交 sitemap：资源提交 -> 普通收录 -> sitemap，填 https://playmir.github.io/sitemap.xml
3. 主动推送（收录最快）：资源提交 -> 普通收录 -> API 提交，拿到 token 后执行：
   curl -H 'Content-Type:text/plain' --data-binary @urls.txt    "http://data.zz.baidu.com/urls?site=https://playmir.github.io&token=你的token"
   urls.txt 每行一个完整 URL（可从 sitemap.xml 里复制 loc）。
4. 360 站长平台 https://zhanzhang.so.com 提交站点与 sitemap。
5. 必应站长 https://www.bing.com/webmasters 添加站点，可直接导入百度/谷歌的 sitemap。
6. 建议每更新一批文章，就重新提交一次 sitemap 并推送新增 URL。

四、日常维护
- 开服表在 index.html 与 kb.html 中，按“今日/明日/本周”分组，直接改表格行即可。
- 新增文章：复制同栏目任意一篇 html，改 title/keywords/description/canonical/h1/正文，
  文件名沿用“栏目缩写-序号.html”（如 jr-21.html），再把链接加到栏目页与 map.html、sitemap.xml。
- 文章结构建议保持：H1 唯一、每 300 字一个小标题（H2）、结尾带相关推荐内链。

五、目录结构（全部平铺，无子目录）
index.html  jr.html  kb.html  bb.html  gl.html  zx.html  about.html  map.html  404.html
jr-1.html ~ jr-20.html    今日新开传奇
kb-1.html ~ kb-20.html    传奇开服表
bb-1.html ~ bb-20.html    传奇版本库
gl-1.html ~ gl-20.html    传奇攻略
zx-1.html ~ zx-20.html    传奇资讯
style.css  script.js  favicon.svg  robots.txt  sitemap.xml
pic1.jpg ~ pic10.jpg（126×126 配图，自行替换）
