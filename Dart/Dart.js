/**
 * Created with JetBrains WebStorm.
 * User: pp
 * Date: 13-7-26
 * Time: 下午12:12
 * To change this template use File | Settings | File Templates.
 */
(function(){
    window.Dart = {};

    var scripts = [
        "Util.js",
        "Class.js",
        "evts.js",
        "Model.js",
        "Service.js",
        "Manager.js",
        "Widget.js"
    ];

    var location = getScriptLocation();
    var urls = [];
    for(var i = 0,l=scripts.length;i<l;i++){
        urls[i] =  "<script src='"+location+scripts[i]+ "'></script>";
    }

    if(urls.length>0){
        document.write(urls.join(""));
    }

    function getScriptLocation() {
        var r = new RegExp("(^|(.*?\\/))(Dart[^\\/]*?\\.js)(\\?|$)"),
            s = document.getElementsByTagName('script'),
            src, m, l = "";
        for(var i=0, len=s.length; i<len; i++) {
            src = s[i].getAttribute('src');
            if(src) {
                m = src.match(r);
                if(m) {
                    l = m[1];
                    break;
                }
            }
        }
        return l;
    }
})();