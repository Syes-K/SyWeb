/**
 * Created by ptmind on 2016/1/15.
 */
var gulp=require('gulp');
require('./gulp_tasks/ipconfig');//ipconfig 任务: 后台打印 服务器ip信息
require('./gulp_tasks/components_build');//编译第三方组件
require('./gulp_tasks/public_build');//编译静态资源
require('./gulp_tasks/pro_build');//编译静态资源
gulp.task('default',['pro-build'], function () {
    require('./gulp_tasks/start');
});