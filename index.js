/**
 * Created by ln on 2016/1/10.
 */

var httpServer=  require('http').createServer();
var nodeStatic=  require('node-static');
var fileServer = new nodeStatic.Server('./public_pro',{cache:3600});//cache 3600 hours
var user = require('./socket/routes/user');
//��̬��Դ������
httpServer.addListener('request', function (req,res) {
    fileServer.serve(req,res);
});

// ����web socket ���� ��api ǰ׺��
user(httpServer);

httpServer.listen(3000);