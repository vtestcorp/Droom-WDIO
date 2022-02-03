const video = require('wdio-video-reporter');
exports.config = {
    specs: [
        './test/Web/LoginViaPasswordTests.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 3,
    capabilities: [{
        maxInstances: 1,
        //
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            
            args: [ 
            '--disable-notifications',
            ]},
        
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://droom.in/',
    waitforTimeout: 15000,
    connectionRetryTimeout: 80000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: [
        [video, {
            saveAllVideos: true,       // If true, also saves videos for successful test cases
            videoSlowdownMultiplier: 40, // Higher to get slower videos, lower for faster videos [Value 1-100]
          }],
        ['spec', {
        symbols: {
            passed: '[PASS]',
            failed: '[FAIL]',
            skipped: '[SKIP]',
          },
          addConsoleLogs: true,

    }],'dot',
    ['allure', {
        outputDir: 'allure-results',
        addConsoleLogs: true,
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]
],

beforeSuite: function (suite) {
    global.allure = allure;
           allure.addFeature(suite.name+ "for Web");
           allure.addDescription("generating Allure reports " + suite.name + "for Web");
       },
           
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
     
     before: function (capabilities, specs) {
        browser.url('/');
        browser.maximizeWindow();
    
    },
   
}
