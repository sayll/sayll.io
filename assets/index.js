(function () {
    var OriginTitle = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            document.title = '(つェ⊂) 我藏好了哦~~';
            clearTimeout(titleTime);
        } else {
            document.title = '(*´∇｀*) 被你发现啦~~' + OriginTitle;
            titleTime = setTimeout(function () {
                document.title = OriginTitle;
            }, 2000);
        }
    });

    //取消默认的浏览器自带右键 很重要！！
    window.oncontextmenu=function(e){
        e.preventDefault();
    }
})()