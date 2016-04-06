"use strict";

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssbeautify = require('gulp-cssbeautify');


gulp.task('css', function() {
    gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssbeautify())
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch('scss/style.scss', ['css']);
});


// default
gulp.task('default', ['watch']);