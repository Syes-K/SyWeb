/**
 * Created by ptmind on 2016/1/12.
 */

module.exports= function (app) {
    app.get('/login', function (req,res) {
        res.render('login',{failInfo:''});
    });
    app.post('/login', function (req,res) {
        var id= req.body.id;
        var pw = req.body.password;
        if(id==pw){
            var userSessionId=guid();
            res.cookie('userSessionId',userSessionId);
            res.redirect('/');
        }else{
            res.render('login',{failInfo:'无效的id和密码'});
        }
    });
}

function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}