/*
 * Super Task Runner
 */

(function () {
    'use strict';

    var gulp = require('gulp'),
        connect = require('gulp-connect'),
        open = require('gulp-open'),
        karma = require('gulp-karma');

    gulp.task('default', ['connect', 'open']);

    gulp.task('connect', function () {
        return connect.server({
            root: 'client',
            port: 8888
        })

    });

    gulp.task('open', function () {
        gulp.src('client/index.html')
            .pipe(open('', {url: 'http://localhost:8888'}));
    });

    gulp.task('test:unit', function () {
        return gulp.src('./client/app_test.js, ./client/**/*_test.js')
            .pipe(karma({
                configFile: './client/karma.conf.js',
                action: 'run',
                singleRun: true,
                port: 8889
            }))
            .on('error', function (err) {
                throw err;
            })
    })

})();