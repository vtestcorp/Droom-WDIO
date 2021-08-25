exports.config = {

    runner : 'local',
    port : 4724,
    host : 'localhost',
    path : '/wd/hub',
    loglevel : 'info',
    framework : 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 80000,
    },
    maxInstances : 1,
    services: ['selenium-standalone'],
    specs: [
        './test/Android/**/LoginWithPassword.js'
    ],
    capabilities: [{
        "platformName":"Android",
        "automationName":"UiAutomator2",
        "appPackage":"in.droom",
        "appActivity":"in.droom.activity.MainActivity",
        "autoGrantPermissions":"true"
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