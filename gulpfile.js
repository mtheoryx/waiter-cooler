#!/usr/bin/env gulp
/*
 * Super Task Runner
 */

(function () {
    'use strict';

    var gulp = require('gulp'),
        connect = require('gulp-connect'),
        open = require('gulp-open'),
        karma = require('gulp-karma'),
        protractor = require("gulp-protractor").protractor,
        webdriver_standalone = require("gulp-protractor").webdriver_standalone,
        webdriver_update = require("gulp-protractor").webdriver_update;

    gulp.task('default', ['connect', 'open']);

    gulp.task('connect', function () {
        return connect.server({
            root: 'client',
            port: 8888
        })

    });

    gulp.task('test:unit:coverage', ['run:coverage'], function () {
       gulp.src('coverage/**/index.html')
           .pipe(open('', {url: 'http://localhost:8887'}))
    });

    gulp.task('open', function () {
        gulp.src('client/index.html')
            .pipe(open('', {url: 'http://localhost:8888'}));
    });

    gulp.task('run:coverage', function () {
       return connect.server({
           root: 'coverage',
           port: 8887
       })
    });

    //Client Unit Testing Tasks
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
    });

    //Selenium Tasks
    gulp.task('webdriver_update', webdriver_update);
    gulp.task('webdriver_standalone', ['webdriver_update'], webdriver_standalone);


    //E2E Tasks
    gulp.task('test:e2e', ['webdriver_update', 'connect'], function () {
        return gulp.src('./client/e2e/**/*_spec.js')
            .pipe(protractor({
                configFile: './client/e2e/protractor.config.js'
            }))
            .on('error', function () {
                connect.serverClose();
                process.exit(1)
            })
            .on('end', function () {
                connect.serverClose();
                process.exit(0)
            })

    })

})();