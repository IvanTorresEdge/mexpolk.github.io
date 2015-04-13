var gulp       = require('gulp'),
    browserify = require('gulp-browserify'),
    connect    = require('gulp-connect'),
    react      = require('gulp-react'),
    reactify   = require('reactify'),
    sass       = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify     = require('gulp-uglify'),
    util       = require('gulp-util');

gulp.task('assets', function() {
  gulp.src('src/css/site.scss')
    .on('error', util.log)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('dist/css'));

  gulp.src('src/js/site.jsx')
    .on('error', util.log)
    .pipe(sourcemaps.init())
    .pipe(react())
    .pipe(browserify({
      transform: [reactify]
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('dist/js'));

  gulp.src('./node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('default', ['assets', 'server', 'watch']);

gulp.task('server', function () {
  connect.server({livereload: false, port: 7000});
});

gulp.task('watch', function () {
  gulp.watch(['gulpfile.js', 'src/**/*', 'index.html'], ['assets']);
});
