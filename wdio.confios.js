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
    specs: [
        './test/Android/**/LoginWithPassword.js'
    ],
    capabilities: [{
        "platformName":"iOS",
        "automationName":"UiAutomator2",
        "appPackage":"in.droom",
        "appActivity":"in.droom.activity.MainActivity"
    }]


}