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
        './test/iOS/**/LoginWithPassword.js'
    ],
    appium: {
        args: {
            defaultCapabilities: JSON.stringify({
                platformVersion: '14',
                deviceName: 'iPhone 6s',
                platformName: 'iOS',
                showIosLog: true,
                nativeInstrumentsLib: true,
            })
        }
    },
    capabilities: [{
    maxInstances: 1,
    //"appium:browserName": 'safari',
    "appium:appiumVersion" : '1.21.0',
    "appium:deviceName" : 'iPhone 6s',
    "appium:platformVersion" : '14',
    "appium:platformName" : 'iOS'    
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