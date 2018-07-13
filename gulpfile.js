var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
// var sass = require('gulp-sass');
// var plumber = require('gulp-plumber');
//  var postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');
gulp.task('sass', function () {
  var plugins = [
    autoprefixer({
      browsers: ['last 3 version', '>5%']
    })
  ];
  return gulp.src('./source/scss/**/*.scss')
    .pipe($.plumber())
    .pipe($.sass().on('error', $.sass.logError))
    //編譯完成
    .pipe($.postcss(plugins))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function () {
  gulp.watch('./source/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);