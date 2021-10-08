
const { swipeUp } = require("../../BaseClass/base");
const base = require("../../BaseClass/base");
const unlockFeePaymentPage = require("../../Pages/Androidbrowser/unlockFeePaymentPage");

describe('Unlock fee payments', async () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
    });
    it('TC_01 Verify the token amount for car is 999', async () => {
        await unlockFeePaymentPage.chromeConditions()
        browser.url('/user/login')
        await unlockFeePaymentPage.loginAsBuyer()
        await base.swipeUp()
        await (await unlockFeePaymentPage.my_Requirements).click()
        await (await unlockFeePaymentPage.new_Requirement).click()
        await unlockFeePaymentPage.createRForCar()
        await (await unlockFeePaymentPage.best_Matches).click()
        expect(await unlockFeePaymentPage.tokenForCar).toBeDisplayed()
        console.log("Token amount for car:")
        console.log(await (await unlockFeePaymentPage.tokenForCar).getText())
    });
});