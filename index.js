/**
 * Created by ln on 2016/1/10.
 */

var httpServer=  require('http').createServer();
var nodeStatic=  require('node-static');
var fileServer = new nodeStatic.Server('./public_pro',{cache:3600});//cache 3600 hours
var user = require('./socket/routes/user');
//静态资源服务器
httpServer.addListener('request', function (req,res) {
    fileServer.serve(req,res);
});

// 开启web socket 连接 【api 前缀】
user(httpServer);

httpServer.listen(3000);