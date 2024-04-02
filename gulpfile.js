'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
sass.compiler = require('node-sass')

gulp.task('default', watchSass)
gulp.task('sass', compileSass)

function compileSass() {
    return gulp
        .src('./*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./'));
  };

function watchSass(){
gulp.watch('./*.scss', compileSass)
}