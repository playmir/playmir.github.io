/* 今日新开传奇发布网 · 轻量交互 */
(function () {
  var btn = document.getElementById('navBtn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  var top = document.getElementById('toTop');
  if (top) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 320) { top.classList.add('show'); }
      else { top.classList.remove('show'); }
    }, { passive: true });
    top.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* 百度自动推送（可选）：填入你的站点 token 后自动推送当前页
     在百度搜索资源平台 -> 普通收录 -> API 提交 获取 token
  var BAIDU_TOKEN = '';
  if (BAIDU_TOKEN) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://data.zz.baidu.com/urls?site=https://playmir.github.io&token=' + BAIDU_TOKEN);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send(location.href);
  }
  */
})();
