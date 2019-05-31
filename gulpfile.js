var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var gls = require('gulp-live-server');

gulp.task('default', [
  'docs'
]);

gulp.task('sass', function () {
  return gulp.src([
    './src/navbar-fixed-right.scss',
    './src/navbar-fixed-left.scss'
  ])
    .pipe(sass({
        outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('dist'))
    .pipe(cleanCSS())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('docs', ['sass'], function () {
  return gulp.src([
    './dist/*.min.css'
  ])
    .pipe(gulp.dest('docs'))
});

gulp.task('watch', function () {
  gulp.watch('./src/*.scss', [
    'docs'
  ]);
});

gulp.task('serve', function() {
  var server = gls.static(['./docs/']);
  server.start();
});
