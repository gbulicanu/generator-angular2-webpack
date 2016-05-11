'use strict';

var SpecReporter = require('jasmine-spec-reporter');
var HtmlReporter = require('protractor-html-screenshot-reporter');

// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': process.env.PROTRACTOR_BROWSER || 'chrome'
  },

  framework: 'jasmine2',

  // Only works with Chrome and Firefox
  directConnect: true,

  baseUrl: 'http://localhost:8080/',

  specs: ['src/**/*.e2e-spec.js'],

  // Options to be passed to Jasmine-node
  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 30000
  },

  onPrepare: function() {
    // Add better console spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));

    // Reporter in html with a screenshot for each test.
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'reports/e2e/html'
    }));

    browser.ignoreSynchronization = true;
  },

  // Angular 2 configuration: tells Protractor to wait for any angular2 apps on the page instead of just the one
  // matching `rootEl`
  useAllAngular2AppRoots: true
};
