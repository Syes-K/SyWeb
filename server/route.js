/**
 * Created by ptmind on 2016/1/11.
 */
module.exports = function (httpServer, prefix) {
    var __route = {};
    var sockjs = require('sockjs');
    //var sockServer = sockjs.createServer({sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js'});
    //var sockServer = sockjs.createServer({sockjs_url: '/bower_components/sockjs-client/dist/sockjs.js'});
    var sockServer = sockjs.createServer();
    sockServer.on('connection', function (conn) {
        conn.on('data', function (data) {
            var msg = JSON.parse(data);
            if (msg.method && __route[msg.method]) {
                __route[msg.method](conn, msg);
            }else{
                conn.write(JSON.stringify({method:msg.method,error:'404',content:'error method'}));
            }
            //conn.write(JSON.stringify({path:msg.path,content:msg.content}));
        });
        conn.on('close', function () {

        })
    });
    sockServer.installHandlers(httpServer, {prefix: prefix})
    return {
        on: function (method, callback) {
            __route[method] = callback;
        }
    }
}