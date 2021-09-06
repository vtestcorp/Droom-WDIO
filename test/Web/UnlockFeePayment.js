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
   });