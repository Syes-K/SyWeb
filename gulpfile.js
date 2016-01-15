/**
 * Created by ptmind on 2016/1/15.
 */
var gulp=require('gulp');
var flatten = require('gulp-flatten');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
gulp.task('default', function () {
    console.log('this is first gulp 1');
    gulp.src(['public/bower_components/**/sea.js','public/bower_components/**/sockjs.js'])
        .pipe(flatten())
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest( function (a) {
            if(a.isBuffer()){
                console.log(a.path);
            }
            return './public/js/lib';
        }));
});