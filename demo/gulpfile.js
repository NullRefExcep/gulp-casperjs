var gulp = require('gulp');
var casperJs = require('gulp-casperjs');
var gutil = require('gulp-util');

gulp.task('test', function () {
  gulp.src('./test.js')
    .pipe(casperJs().on('error', gutil.log)); 
});