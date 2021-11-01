const base = require("../../BaseClass/base");
const checkHistoryPage = require("../../Pages/Androidbrowser/checkHistoryPage");

describe('Check History', async () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
    });
    it('TC_01 Verify the Check History Functionality', async () => {
         browser.url('/')
        await checkHistoryPage.traverseToHistory()
        expect (await checkHistoryPage.heading).toBeDisplayed()
        console.log("Check History page is Displayed")
        console.log(await (await checkHistoryPage.heading).getText())
        console.log("Check any Vehicle's History Online! option displayed")
        expect(await checkHistoryPage.vehicle_reg_no).toBeDisplayed()
        console.log("vehicle_reg_no displayed")
        expect(await checkHistoryPage.gold).toBeDisplayed()
        console.log("Get History Certificate - Gold @ Rs.49 displayed")
        expect(await checkHistoryPage.platinum).toBeDisplayed()
        console.log(await (await checkHistoryPage.platinum).getText())

    });
    it('TC_03 Verify the Premium Certificate on History', async () => {
        browser.url('/')
        await checkHistoryPage.traverseToHistory()
        expect (await checkHistoryPage.heading).toBeDisplayed()
        console.log("Check History page is Displayed")
        expect(await checkHistoryPage.vehicle_reg_no).toBeDisplayed()
        console.log("vehicle_reg_no displayed")
        expect(await checkHistoryPage.gold).toBeDisplayed()
        console.log("Get History Certificate - Gold @ Rs.49 displayed")
        expect(await checkHistoryPage.platinum).toBeDisplayed()
        console.log("Get History Certificate - Platinum @ Rs.149")
        await base.swipeUp()
        await (await checkHistoryPage.goldCertificate).waitForDisplayed({ timeout: 10000 })
        console.log("Gold Certificate Displayed")
        expect(await checkHistoryPage.platinumCertificate).toBeDisplayed()
        console.log("Platinum certificate id displayed")
    });
    it('TC_05 Verify the "View Sample Vehicle History Certificate" link is functional', async () => {
       browser.url('/')
        await checkHistoryPage.traverseToHistory()
        expect (await checkHistoryPage.heading).toBeDisplayed()
        console.log("Check History page is Displayed")
        await (await checkHistoryPage.per).waitForDisplayed({ timeout: 10000 })
        console.log("Premium Certificate Displayed")
        await base.swipeUp()
        expect(await checkHistoryPage.Sample_Report).toBeDisplayed()
        console.log("view Smaple report link displayed")
    });
    it('TC_06 Verify the Home Option is functional on History page', async () => {
        browser.url('/')
        await checkHistoryPage.traverseToHistory()
        expect (await checkHistoryPage.heading).toBeDisplayed()
        console.log("Check History page is Displayed")
        await (await checkHistoryPage.home).click()
        console.log("clicked on Home link on History page")
        await (await checkHistoryPage.createReq).waitForDisplayed({ timeout: 10000 })
        expect (await checkHistoryPage.createReq).toBeDisplayed()
        console.log("Create Requirement on Home page is displayed")
    });
});
