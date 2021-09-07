const Base = require('../../BaseClass/base')
const UnlockFeePayment = require('../../Pages/Web/UnlockFeePaymentPage')
const LoginWithPasswordPage = require('../../Pages/Web/LoginViaPasswordPage')
describe("Unlock Fee Payment", () => {
    it("TC_01 Verify The Tokan Amount For Car Is 999", async () => {
        await Base.loginAsBuyer()
        await UnlockFeePayment.submitRequirements()
        await UnlockFeePayment.SelectCarCondition()
        await UnlockFeePayment.selectCurrentLocation()
        await UnlockFeePayment.enterYourVehicleDetails()
        await UnlockFeePayment.selectCar()
        await UnlockFeePayment.basicDetailsDisplay()
        await UnlockFeePayment.lastStepforcomplete()
        await (await UnlockFeePayment.submitAndView).click()
        await (await UnlockFeePayment.bestMatches).click()
        expect(await UnlockFeePayment.carpayButton).toBeDisplayed()
        console.log(await (await UnlockFeePayment.carpayButton).getText())
        console.log("Application shows Best Match Unlock Fee(999) for car")
        await LoginWithPasswordPage.logout()
    });
    it("TC_02 Verify The Tokan Amount For Bike Is 499", async () => {
        await Base.loginAsBuyer()
        await UnlockFeePayment.submitRequirements()
        await UnlockFeePayment.SelectBikeCondition()
        await UnlockFeePayment.selectCurrentLocation()
        await UnlockFeePayment.enterYourVehicleDetails()
        await UnlockFeePayment.selectBike()
        await (await UnlockFeePayment.submitAndView).click()
        await (await UnlockFeePayment.bestMatches).click()
        expect(await UnlockFeePayment.bikepayButton).toBeDisplayed()
        console.log(await (await UnlockFeePayment.bikepayButton).getText())
        console.log("Application shows Best Match Unlock Fee(499) for Bike")
        await LoginWithPasswordPage.logout()
    });

    it("TC_03 Verify Proceed To Checkout Option Is Display For Car", async () => {
        await Base.loginAsBuyer()
        await UnlockFeePayment.submitRequirements()
        await UnlockFeePayment.SelectCarCondition()
        await UnlockFeePayment.selectCurrentLocationForMatch()
        await UnlockFeePayment.enterYourVehicleDetails()
        await UnlockFeePayment.selectCarForBestMatch()
        await UnlockFeePayment.basicDetailsDisplay()
        await UnlockFeePayment.lastStepforcomplete()
        await (await UnlockFeePayment.submitAndView).click()
        await (await UnlockFeePayment.clickOnMatch).click()
        await browser.switchWindow('Honda City Car for Sale')
        await (await UnlockFeePayment.payFeeButton).waitForDisplayed({ timeout: 5000 })
        await (await UnlockFeePayment.payFeeButton).scrollIntoView()
        expect(await UnlockFeePayment.payFeeButton).toBeDisplayed()
        console.log(await (await UnlockFeePayment.payFeeButton).isClickable())
        console.log("Application shows Pay (1) Best Match Unlock Fee Button")
        await (await UnlockFeePayment.payFeeButton).click()
        await (await UnlockFeePayment.Congratulations).waitForDisplayed({ timeout: 5000 })
        expect(await UnlockFeePayment.Congratulations).toBeDisplayed()
        await (await UnlockFeePayment.sucessMsg).waitForDisplayed({ timeout: 5000 })
        expect(await UnlockFeePayment.sucessMsg).toBeDisplayed()
        console.log("Application shows Congratulations Item has been successfully added to the cart")
        expect(await UnlockFeePayment.checkoutBtn).toBeDisplayed()
        console.log("Application shows Checkout Now Button")
        await (await UnlockFeePayment.checkoutBtn).click()
        expect(await UnlockFeePayment.proceedTocheckout).toBeDisplayed()
        console.log("Application shows Proceed To Checkout Option is display for car")

    });

    it("TC_05 Verify The Functionality After Click On Proceed To Checkout Button For Car", async () => {
        console.log(await (await UnlockFeePayment.proceedTocheckout).isClickable())
        await (await UnlockFeePayment.proceedTocheckout).click()
        expect(await UnlockFeePayment.accountTab).toBeDisplayed()
        console.log(await (await UnlockFeePayment.accountTab).getText())
        expect(await UnlockFeePayment.addressTab).toBeDisplayed()
        console.log(await (await UnlockFeePayment.addressTab).getText())
        expect(await UnlockFeePayment.paymentTab).toBeDisplayed()
        console.log(await (await UnlockFeePayment.paymentTab).getText())
        expect(await UnlockFeePayment.thankyouTab).toBeDisplayed()
        console.log(await (await UnlockFeePayment.thankyouTab).getText())
    });

    it("TC_07 Verify Account Tab After Click On Payment", async () => {
        expect(await UnlockFeePayment.name).toBeDisplayed()
        console.log(await (await UnlockFeePayment.name).getText())
        expect(await UnlockFeePayment.email).toBeDisplayed()
        console.log(await (await UnlockFeePayment.email).getText())
        expect(await UnlockFeePayment.continueToAddress).toBeDisplayed()
        console.log(await (await UnlockFeePayment.continueToAddress).isClickable())
        console.log("Application shows Continue To Address Button")
    });
    it("TC_08 Verify Address Tab After click on payment ", async () => {
        console.log(await (await UnlockFeePayment.continueToAddress).isClickable())
        await (await UnlockFeePayment.continueToAddress).click()
        expect(await UnlockFeePayment.addressTab).toBeDisplayed()
        console.log("Application shows Address Tab")
        expect(await UnlockFeePayment.editAddress).toBeDisplayed()
        expect(await UnlockFeePayment.deleteAddress).toBeDisplayed()
        console.log("Edit And Delete Address Options Displayed")
        await LoginWithPasswordPage.logout()
    });
    it("TC_04 Verify Proceed To Checkout Option Is Display For Bike", async () => {
        await Base.loginAsBuyer()
        await UnlockFeePayment.submitRequirements()
        await UnlockFeePayment.SelectBikeCondition()
        await UnlockFeePayment.selectCurrentLocation()
        await UnlockFeePayment.enterYourVehicleDetails()
        await UnlockFeePayment.selectBikeForBestMatch()
        await UnlockFeePayment.basicDetailsDisplay()
        await UnlockFeePayment.lastStepforcomplete()
        await (await UnlockFeePayment.submitAndView).click()
        await (await UnlockFeePayment.bikeMatch).waitForDisplayed({ timeout: 5000 })
        await (await UnlockFeePayment.bikeMatch).click()
        console.log("Application shows Best Match Unlock Fee(499) for Bike")
        await browser.switchWindow('Bajaj Pulsar Rs Bike for sale in Pune')
        await (await UnlockFeePayment.payFeeButton).waitForDisplayed({ timeout: 5000 })
        await (await UnlockFeePayment.payFeeButton).scrollIntoView()
        expect(await UnlockFeePayment.payFeeButton).toBeDisplayed()
        console.log(await (await UnlockFeePayment.payFeeButton).isClickable())
        console.log("Application shows Pay (1) Best Match Unlock Fee Button")
        await (await UnlockFeePayment.payFeeButton).click()
        await (await UnlockFeePayment.Congratulations).waitForDisplayed({ timeout: 5000 })
        expect(await UnlockFeePayment.Congratulations).toBeDisplayed()
        await (await UnlockFeePayment.sucessMsg).waitForDisplayed({ timeout: 5000 })
        expect(await UnlockFeePayment.sucessMsg).toBeDisplayed()
        console.log("Application shows Congratulations Item has been successfully added to the cart")
        expect(await UnlockFeePayment.checkoutBtn).toBeDisplayed()
        console.log("Application shows Checkout Now Button")
        await (await UnlockFeePayment.sucessMsg).waitForDisplayed({ timeout: 3000 })
        await (await UnlockFeePayment.checkoutBtn).click()
        expect(await UnlockFeePayment.proceedTocheckout).toBeDisplayed()
        console.log("Application shows Proceed To Checkout Option is display for car")
    });
    it("TC_05 Verify The Functionality After Click On Proceed To Checkout Button For Bike   ", async () => {
        console.log(await (await UnlockFeePayment.proceedTocheckout).isClickable())
        await (await UnlockFeePayment.proceedTocheckout).click()
        expect(await UnlockFeePayment.accountTab).toBeDisplayed()
        console.log(await (await UnlockFeePayment.accountTab).getText())
        expect(await UnlockFeePayment.addressTab).toBeDisplayed()
        console.log(await (await UnlockFeePayment.addressTab).getText())
        expect(await UnlockFeePayment.paymentTab).toBeDisplayed()
        console.log(await (await UnlockFeePayment.paymentTab).getText())
        expect(await UnlockFeePayment.thankyouTab).toBeDisplayed()
        console.log(await (await UnlockFeePayment.thankyouTab).getText())
        await LoginWithPasswordPage.logout()
    });
});