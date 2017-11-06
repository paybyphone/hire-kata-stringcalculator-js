module.exports = function (config) {

    config.set({

        frameworks: ['jasmine','jasmine-matchers'],
        
        files: [
            'src/main_test.js',
        ],
        
        preprocessors: {
            'src/main_test.js': ['webpack', 'sourcemap']
        },

        reporters: ['spec'],

        plugins: [
            'karma-jasmine',
            'karma-jasmine-matchers',
            'karma-spec-reporter',
            'karma-chrome-launcher',
            'karma-webpack',
            'karma-sourcemap-loader',
        ],

        webpack: {
            devtool: 'inline-source-map'
        },

        browsers: ['ChromeHeadless']

    });

}