exports.config = {
    runner : 'local',
    port : 4728,
    host : 'localhost',
    path : '/wd/hub',
    loglevel : 'info',
    framework : 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 80000,
    },
    maxInstances : 1,
    
    services: ['selenium-standalone','appium'],
    specs: [
        './test/iOS/**/LoginWithPasswordTest.js',
    ],
    /*appium: {
        args: {
            defaultCapabilities: JSON.stringify({
                platformVersion: '14',
                deviceName: 'iPhone 6s',
                platformName: 'iOS',
                showIosLog: true,
                nativeInstrumentsLib: true,
            })
        }
    },*/
    capabilities: [{
    maxInstances: 1,
    "platformName": "iOS",
  "deviceName": "iPhone 6s",
  "platformVersion": "14.5.1",
  "app": "/Users/apple/Downloads/DroomApp.ipa",
  "udid": "d179cb05cdb31945cc0ec2e6ba0d3044ff2fd41a",
  "appActivity": "in.droom.activity.MainActivity",
  "automationName": "XCUITest",
  "noReset": true   
    }],
    waitforTimeout: 15000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    reporters: [
        
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
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]
],



}