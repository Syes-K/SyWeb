/**
 * Created by ptmind on 2016/1/11.
 */
define(function (require, exports, module) {
    function createRoute(prefix) {
        //var sockjs=require('sockjs');
        var _routeMap = {};
        var route = new SockJS(prefix);
        route.onopen = function (e) {

        };
        route.onclose = function (e) {

        };
        route.onmessage = function (e) {
            if (e.data) {
                var obj = JSON.parse(e.data);
                if (obj.method && _routeMap[obj.method]) {
                    _routeMap[obj.method](obj, e);
                }
            }
        };
        return {
            on: function (method, callback) {
                _routeMap[method] = callback;
            },
            send: function (method,content) {
                route.send(JSON.stringify({method:method,content:content}));
            }
        }
    }
    exports.createRoute=createRoute;
});