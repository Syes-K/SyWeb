/**
 * Created by ptmind on 2016/1/15.
 */
var gulp=require('gulp');
require('./gulp_tasks/ipconfig');//ipconfig ����: ��̨��ӡ ������ip��Ϣ
require('./gulp_tasks/components_build');//������������
require('./gulp_tasks/public_build');//���뾲̬��Դ
require('./gulp_tasks/pro_build');//���뾲̬��Դ
gulp.task('default',['pro-build'], function () {
    require('./gulp_tasks/start');
});