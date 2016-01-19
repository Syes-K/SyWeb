/**
 * Created by ptmind on 2016/1/18.
 */
var gulp=require('gulp');
var flatten = require('gulp-flatten');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var clean = require('gulp-clean');
gulp.task('pro-revCollector',['components-build','public_build'],function () {
    return gulp.src(['./rev/*.json','public_pro/index.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('public_pro/'));
});
gulp.task('pro-clean',['pro-revCollector'],function () {
    return gulp.src('./rev',{read:false})
        .pipe(clean());
});
gulp.task('pro-build',['pro-revCollector','pro-clean'], function () {
});
