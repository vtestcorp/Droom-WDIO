const base = require("../../BaseClass/base");
const checkHistoryPage = require("../../Pages/Androidbrowser/checkHistoryPage");


describe('Check History', async () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
    });
    it('TC_01 Verify the Check History Functionality', async () => {
        await checkHistoryPage.chromeConditions()
        browser.url('/history/premium-reports')
        await (await checkHistoryPage.per).waitForDisplayed({ timeout: 10000 })
        console.log("Premium Certificate Displayed")
        expect(await checkHistoryPage.Check_any_Vehicle).toBeDisplayed()
        console.log("Check any Vehicle's History Online! option displayed")
        expect(await checkHistoryPage.vehicle_reg_no).toBeDisplayed()
        console.log("vehicle_reg_no displayed")
        expect(await checkHistoryPage.gold).toBeDisplayed()
        console.log("Get History Certificate - Gold @ Rs.49 displayed")
    });
    it('TC_03 Verify the Premium Certificate on History', async () => {
        await checkHistoryPage.chromeConditions()
        browser.url('/history/premium-reports')
        await (await checkHistoryPage.per).waitForDisplayed({ timeout: 10000 })
        console.log("Premium Certificate Displayed")
        expect(await checkHistoryPage.Check_any_Vehicle).toBeDisplayed()
        console.log("Check any Vehicle's History Online! option display")
        expect(await checkHistoryPage.vehicle_reg_no).toBeDisplayed()
        console.log("vehicle_reg_no displayed")
        expect(await checkHistoryPage.gold).toBeDisplayed()
        console.log("Get History Certificate - Gold @ Rs.49 displayed")
        expect(await checkHistoryPage.platinum).toBeDisplayed()
        console.log("Get History Certificate - Platinum @ Rs.149")
    });
});