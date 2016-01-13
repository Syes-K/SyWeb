/**
 * Created by ptmind on 2016/1/13.
 */
define(function (require, exports, module) {
    exports.getCookie= function (name) {
        var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
        if(arr != null){
            return decodeURI(arr[2]);
        }else{
            return null;
        }
    }
});