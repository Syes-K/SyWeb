/**
 * Created by ptmind on 2016/1/11.
 */
define(function (require, exports, module) {
    var _input = document.getElementById('txt1');
    var content1 = document.getElementById('content1');
    var r = require('route');
    var user = r.createRoute('/user');
    user.on('test', function (result) {
        showMsg('[ ] message:', result);
    });
    user.on('Close', function (result) {
        showMsg('[ ] Close:', result);
    });
    user.on('Error', function (result) {
        showMsg('[ ] Error:', result);
    });
    user.on('Open', function (result) {
        showMsg('[ ] Open:', result);
    });
    document.getElementById('form1').addEventListener('submit', function (e) {
        user.send('test', _input.value);
        showMsg('[ ] sending', {content: _input.value, method: 'test'});
        _input.value = '';
        e.preventDefault();
    })
    var showMsg = function (m, p) {
        p = (p === undefined) ? '' : JSON.stringify(p);
        content1.innerHTML += ( '<code>' + m + ' ' + p + '</code>');
        content1.innerHTML += ("<br/>");
        content1.scrollTop += 10000;
    };
});