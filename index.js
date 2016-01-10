/**
 * Created by ln on 2016/1/10.
 */
var static =require('node-static');
var http = require('http');
var fileServer = new static.Server('./public',{cache:3600});//cache 3600 hours
var httpServer= http.createServer();
httpServer.addListener('request', function (req,res) {
    fileServer.serve(req,res);
    console.log(req.headers)
});

httpServer.listen(3000);