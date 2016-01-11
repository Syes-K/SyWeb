/**
 * Created by ptmind on 2016/1/11.
 */

var route = require('./route');
module.exports= function (httpServer) {
   var user= route(httpServer,'/user');
    user.on('/test', function (conn,msg) {
        conn.write(JSON.stringify({method:msg.method,content:msg.content}));
    });
};