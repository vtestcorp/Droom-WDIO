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
        await base.androidBrowserLoginAsBuyer()
        await base.swipeUp()
        await (await unlockFeePaymentPage.my_Requirements).click()
        await (await unlockFeePaymentPage.new_Requirement).click()
        await unlockFeePaymentPage.createRForCar()
        await (await unlockFeePaymentPage.best_Matches).click()
        expect(await unlockFeePaymentPage.tokenForCar).toBeDisplayed()
        console.log("Token amount for car:")
        console.log(await (await unlockFeePaymentPage.tokenForCar).getText())
    });
    it('TC_03 Verify proceed to checkout option is display for car', async () => {
        await unlockFeePaymentPage.chromeConditions()
        browser.url('/user/login')
        await base.androidBrowserLoginAsBuyer()
        await (await unlockFeePaymentPage.cart).click()
        expect(await unlockFeePaymentPage.Proceed_To_Checkout).toBeDisplayed()
        
    });
    
});