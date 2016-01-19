/**
 * Created by ptmind on 2016/1/18.
 */
var gulp=require('gulp');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var replace =  require('gulp-replace');
gulp.task('public_html', function () {
  return  gulp.src(['./public/**/*.html'])
        .pipe(replace('bower_components/sockjs-client/dist/sockjs.js','js/com/sockjs.js'))
        .pipe(replace('bower_components/seajs/dist/sea-debug.js','js/com/sea.js'))
        .pipe(gulp.dest('./public_pro'));
});
gulp.task('public_js', function () {
    return gulp.src(['./public/js/**/*.js'])
        //.pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('./public_pro/js'))
        .pipe(rev.manifest({path:'rev-manifest-public.json'}))
        .pipe(gulp.dest('./rev'));
});
gulp.task('public_build',['public_html','public_js'], function () {

});