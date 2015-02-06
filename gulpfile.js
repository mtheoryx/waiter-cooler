/*
 * Super Task Runner
 */

(function () {
    'use strict';

    var gulp = require('gulp'),
        connect = require('gulp-connect'),
        open = require('gulp-open');

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

})();