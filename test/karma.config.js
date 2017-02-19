// Karma configuration
let isPhantomJSInstalled = false;
const webpackConfig = require('./webpack.config.test');

try {
    require.resolve('karma-phantomjs-launcher');
    isPhantomJSInstalled = true;
} catch (e) {

}

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'spec.config.js',
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'spec.config.js': ['webpack', 'sourcemap'],
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'true',
        },

        webpackServer: {
          noInfo: true, //please don’t spam the console when running in karma!
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['nyan', 'coverage-istanbul'],

        coverageIstanbulReporter: {
            reports: ['html', 'text'],
            dir: './test/coverage',
            fixWebpackSourcePaths: true,
            check: {

                global: {
                statements: 90,
                branches: 90,
                functions: 90,
                lines: 90,
                },
            },
              watermarks: {
                statements: [80, 100],
                functions: [80, 100],
                branches: [80, 100],
                lines: [80, 100],
            },
        },
        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [isPhantomJSInstalled ? 'PhantomJS' : 'Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,
        plugins: [
            'karma-webpack',
            'karma-sourcemap-loader',
            'karma-coverage-istanbul-reporter',
            'karma-nyan-reporter',
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
        ],
    });
};
