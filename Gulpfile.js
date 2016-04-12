var gulp = require('gulp'),
  less = require('gulp-less'),
  watch = require('gulp-watch-less');

gulp.task('watch', function () {
  gulp.watch('less/**/*.less', ['default', 'copy'])
});

gulp.task('default', function () {
  return gulp.src('less/main.less')
    .pipe(less())
    .pipe(gulp.dest('.'))
});

gulp.task('copy', function () {
  return gulp
    .src('main.css')
    .pipe(gulp.dest('/Users/Kristian/Dropbox/'));
})