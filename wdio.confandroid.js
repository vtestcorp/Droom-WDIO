const video = require('wdio-video-reporter');
const allure = require('@wdio/allure-reporter')
const { addFeature } = require('@wdio/allure-reporter').default

exports.config = {
    runner : 'local',
    port : 4723,
    host : 'localhost',
    path : '/wd/hub',
    loglevel : 'info',
    framework : 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 80000,
    },
    maxInstances : 1,
    services: ['appium'],
    specs: [
        './test/Android/*.js'
    ],
    capabilities: [{
        "platformName":"Android",
        "automationName":"UiAutomator2",
        "appPackage":"in.droom",
        "appActivity":"in.droom.activity.MainActivity",
        "autoGrantPermissions":"true",
        "app":"./Droom.apk"
    }],
    waitforTimeout: 60000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    reporters: [
        // [video, {
        //     saveAllVideos: true,       // If true, also saves videos for successful test cases
        //     videoSlowdownMultiplier: 40,
        //      // Higher to get slower videos, lower for faster videos [Value 1-100]
        //   }],
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
           allure.addFeature(suite.name+" for Android");
           allure.addDescription("generating Allure reports " + suite.name +" for Android");
       },
    

}
