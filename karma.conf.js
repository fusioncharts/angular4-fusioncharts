// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular/cli'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-safari-launcher'),
            require('karma-ie-launcher'),
            require('karma-firefox-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage'),
            require('@angular/cli/plugins/karma')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageReporter: {
            type: 'text'
        },
        angularCli: {
            environment: 'dev'
        },
        reporters: ['coverage', 'progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome', 'Firefox'],
        singleRun: true
    });
};
