var gulp       = require('gulp'),
    browserify = require('gulp-browserify'),
    connect    = require('gulp-connect'),
    sass       = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify     = require('gulp-uglify'),
    util       = require('gulp-util');

gulp.task('assets', function() {
    gulp.src('src/css/index.scss')
        .on('error', util.log)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload());

    gulp.src('src/js/index.js')
        .on('error', util.log)
        .pipe(sourcemaps.init())
        .pipe(browserify())
        .pipe(uglify())
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());

    gulp.src('./node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('default', ['assets', 'server', 'watch']);

gulp.task('server', function () {
    connect.server({livereload: true, port: 7000});
});

gulp.task('watch', function () {
    gulp.watch(['gulpfile.js', 'src/**/*', 'index.html'], ['assets']);
});

