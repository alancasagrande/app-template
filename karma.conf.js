// based on http://kentor.me/posts/testing-react-and-flux-applications-with-karma-and-webpack
var webpackConfig = require('./webpack.config');
webpackConfig.devtool = 'inline-source-map';

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      'spec/tests.bundle.js'
    ],
    frameworks: ['mocha', 'chai-sinon'],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-spec-reporter',
      'karma-chai-sinon'
    ],
    preprocessors: {
      'spec/tests.bundle.js': ['webpack', 'sourcemap']
    },
    singleRun: true,
    reporters: ['spec'],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  });
};
