/**
 * Created by ptmind on 2016/1/18.
 */
var gulp=require('gulp');
var flatten = require('gulp-flatten');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
gulp.task('components-build', function () {
    return gulp.src(['public/bower_components/**/sea.js','public/bower_components/**/sockjs.js'])
        .pipe(flatten())
        //.pipe(uglify())
        //.pipe(rename({suffix: ".min"}))
        .pipe(rev())
        .pipe(gulp.dest( function (a) {
            if(a.isBuffer()){
                console.log(a.path);
            }
            return './public_pro/js/com';
        }))
        .pipe(rev.manifest({path:'rev-manifest-components.json'}))
        .pipe(gulp.dest('./rev'));
});