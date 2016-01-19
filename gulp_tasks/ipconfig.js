/**
 * Created by ptmind on 2016/1/18.
 */
var gulp=require('gulp');
var spawn = require('child_process').spawn;
var iconvLite= require('iconv-lite');
gulp.task('ipconfig', function () {
    ip = spawn('ipconfig',['/all']);
    ip.stdout.on('data',function (data) {
        console.log(iconvLite.decode(data,'gbk'));
    });
    ip.on('exit', function (code,signal) {
        console.log('Code:'+code+',Signal'+signal);
    });
});