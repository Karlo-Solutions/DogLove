'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var shell = require('gulp-shell');
var exec = require('gulp-exec');
var ngHtml2Js = require("gulp-ng-html2js");
var minifyHtml = require("gulp-minify-html");
var connect = require("gulp-connect");

gulp.task('connect', function() {
    connect.server({
        port: 3002,
        livereload: true
    });
});

gulp.task('styles', function () {
    gulp.src(['./assets/**/*.scss', './app/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(minifycss())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('compress', function () {

    gulp.src(['./app/**/*.js', './views/**/*.js'])
        //.pipe(exec('jsdoc views/ js/ -c conf.json -r'))
        .pipe(uglify({mangle: false}))
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
    gulp.src("./app/**/*.html")
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(ngHtml2Js({
            moduleName: "app.views",
            prefix: "app/"
        }))
        .pipe(concat("partials.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/partials"));
});

gulp.task('default',['connect'], function () {
    gulp.watch('./app/**/*.html', ['html']);
    gulp.watch('./assets/sass/**/*.scss', ['styles']);
    gulp.watch('./app/**/*.scss', ['styles']);
    gulp.watch('./app/**/*.js', ['compress']);
    //gulp.watch('./views/**/*.js', ['compress']);
});



