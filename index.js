/**
 * Created by ln on 2016/1/10.
 */

var httpServer=  require('http').createServer();
var fileServer = new require('node-static').Server('./public',{cache:3600});//cache 3600 hours
var user = require('./server/user');
//��̬��Դ������
httpServer.addListener('request', function (req,res) {
    fileServer.serve(req,res);
});

// ����web socket ���� ��api ǰ׺��
user(httpServer);

httpServer.listen(3000);