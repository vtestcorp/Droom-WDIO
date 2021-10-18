const { allow } = require("../../BaseClass/base");
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
    it('TC_05 Verify the functionality after click on proceed to checkout button for car', async () => {
        await unlockFeePaymentPage.chromeConditions()
        browser.url('/user/login')
        await base.androidBrowserLoginAsBuyer()
        await (await unlockFeePaymentPage.cart).click()
        expect(await unlockFeePaymentPage.Proceed_To_Checkout).toBeDisplayed()
        await (await unlockFeePaymentPage.Proceed_To_Checkout).click()
        expect(await unlockFeePaymentPage.name).toBeDisplayed()
        console.log("User Name displayed")
        expect(await unlockFeePaymentPage.mob_number).toBeDisplayed()
        console.log("Mobile Number Name displayed")
        expect(await unlockFeePaymentPage.Address).toBeDisplayed()
        console.log("Address displayed")
        expect(await unlockFeePaymentPage.Edit).toBeDisplayed()
        console.log("Edit button displayed")
        expect(await unlockFeePaymentPage.Remove).toBeDisplayed()
        console.log("Remove button displayed")
        
    })
    it('TC_07 Verify Account Tab after click on Payment', async () => {
        await unlockFeePaymentPage.chromeConditions()
        browser.url('/user/login')
        await base.androidBrowserLoginAsBuyer()
        await (await unlockFeePaymentPage.cart).click()
        expect(await unlockFeePaymentPage.Proceed_To_Checkout).toBeDisplayed()
        await (await unlockFeePaymentPage.Proceed_To_Checkout).click()
        expect(await unlockFeePaymentPage.name).toBeDisplayed()
        console.log("User Name displayed")
        expect(await unlockFeePaymentPage.mob_number).toBeDisplayed()
        console.log("Mobile Number Name displayed")
        expect(await unlockFeePaymentPage.Address).toBeDisplayed()
        console.log("Address displayed")
        expect(await unlockFeePaymentPage.Edit).toBeDisplayed()
        console.log("Edit button displayed")
        expect(await unlockFeePaymentPage.Remove).toBeDisplayed()
        console.log("Remove button displayed")
        await base.swipeUp()
        await (await unlockFeePaymentPage.Proceed_To_Checkout).click()
        await (await unlockFeePaymentPage.diliver_Address).click()
        expect(await unlockFeePaymentPage.UPI).toBeDisplayed()
        console.log("UPI option displayed")
        expect(await unlockFeePaymentPage.Debit_Card).toBeDisplayed()
        console.log("Debit Card option displayed")
        expect(await unlockFeePaymentPage.net_Banking).toBeDisplayed()
        console.log("Net Banking option displayed")
        expect(await unlockFeePaymentPage.credit_card).toBeDisplayed()
        console.log("Pay Via Credit Card option displayed")
        await unlockFeePaymentPage.swipeUp1()
        expect(await unlockFeePaymentPage.Paytm).toBeDisplayed()
        console.log("Paytm option displayed")
        expect(await unlockFeePaymentPage.Cash_Card).toBeDisplayed()
        console.log("PaytmCash Card option displayed")
        
    });;
    
});