'use strict';

var npm = loadNpmModules();
var gulp = npm.gulp;

/////////////////////////////////////////////////////////////////////////////////
//                   Main Tasks                                                //
/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// Default Task
gulp.task('default', listGulpTasks);
gulp.task('help', listGulpTasks);
gulp.task('test', runUnitTests);

//                                                                             //
/////////////////////////////////////////////////////////////////////////////////



function loadNpmModules() {
    return {
        gulp: require('gulp'),
        gulpUtil: require('gulp-util'),
        jasmineReporters: require('jasmine-reporters'),
        karma: require('karma'),
        karmaJasmine: require('karma-jasmine'),
        karmaChromeLauncher: require('karma-chrome-launcher'),
        karmaSpecReporter: require('karma-spec-reporter'),
        karmaWebpack: require('karma-webpack'),
        karmaSourcemapLoader: require('karma-sourcemap-loader'),
    };
}

function listGulpTasks(callback)
{
    npm.gulpUtil.log('_____________________________________________________________________________________________________________________________');
    npm.gulpUtil.log('');
    npm.gulpUtil.log(npm.gulpUtil.colors.magenta('Gulp Task      '), npm.gulpUtil.colors.yellow('Parameters'), npm.gulpUtil.colors.grey('Description'));
    npm.gulpUtil.log('');    
    npm.gulpUtil.log(npm.gulpUtil.colors.white('gulp'), npm.gulpUtil.colors.green('          '), npm.gulpUtil.colors.yellow('          '), npm.gulpUtil.colors.grey(''));
    npm.gulpUtil.log(npm.gulpUtil.colors.white('gulp'), npm.gulpUtil.colors.green('help      '), npm.gulpUtil.colors.yellow('          '), npm.gulpUtil.colors.grey('# lists all available gulp tasks.'));
    npm.gulpUtil.log(npm.gulpUtil.colors.white('gulp'), npm.gulpUtil.colors.green('test      '), npm.gulpUtil.colors.yellow('          '), npm.gulpUtil.colors.grey('# runs unit tests.'));
    npm.gulpUtil.log('');
    npm.gulpUtil.log('_____________________________________________________________________________________________________________________________');

    callback();
}

function runUnitTests(callback) {
    new npm.karma.Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, exitCode => {
        callback();
        process.exit(exitCode);
    }).start();
}

