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
            req.session.userid=id;
            res.redirect('/');
        }else{
            res.render('login',{failInfo:'无效的id和密码'});
        }
    });
}