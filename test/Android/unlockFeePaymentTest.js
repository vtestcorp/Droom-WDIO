const base = require("../../BaseClass/base");
const unlockFeePaymentPage = require("../../Pages/Android/unlockFeePaymentPage");

describe('Unlock Fee Payment', async () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
    });
    it('TC_01 verify the tokan amount for car is 999', async () => {
        await base.androidLoginAsBuyer()
        console.log("Buyer login successfully")
        await unlockFeePaymentPage.createReqiremenForCar()
        await (await unlockFeePaymentPage.BestMatche).click()
        console.log("Clicked on Best Matches")
        expect(await unlockFeePaymentPage.btn_pay_token_amount).toBeDisplayed()
        await (await unlockFeePaymentPage.btn_pay_token_amount).click()
        console.log("Clicked on Pay token amount")
        expect(await unlockFeePaymentPage.token_amount_for_car).toBeDisplayed()
        console.log('Token amount for car is displayed ')
    });
    it('TC_03 Verify proceed to checkout option is display for car', async () => {
        await base.androidLoginAsBuyer()
        console.log("Buyer login successfully")
        await (await unlockFeePaymentPage.my_requirement).click()
        console.log("Clicked on my requirement")
        await (await unlockFeePaymentPage.cart_menu_item).click()
        expect(await unlockFeePaymentPage.token_amount_for_car).toBeDisplayed()
        console.log('Token amount for car is displayed ')
        expect(await unlockFeePaymentPage.proceed_to_checkout).toBeDisplayed()
        console.log('Process to checkount button displayed')
    });
    it('TC_05 Verify the functionality after click on proceed to checkout button for car', async () => {
        await base.androidLoginAsBuyer()
        console.log("Buyer login successfully")
        await (await unlockFeePaymentPage.my_requirement).click()
        console.log("Clicked on my requirement")
        await (await unlockFeePaymentPage.cart_menu_item).click()
        await (await unlockFeePaymentPage.proceed_to_checkout).click()
        expect(await unlockFeePaymentPage.proceed_to_checkout).toBeClickable()
        expect(await unlockFeePaymentPage.Email).toBeDisplayed()
        console.log('Email address displayed')
        expect(await unlockFeePaymentPage.Phone).toBeDisplayed()
        console.log('Phone Number displayed')
        expect(await unlockFeePaymentPage.Order).toBeDisplayed()
        console.log('Order Summary displayed')
        expect(await unlockFeePaymentPage.Price).toBeDisplayed()
        console.log('Price Breakup displayed')
        expect(await unlockFeePaymentPage.Address).toBeDisplayed()
        console.log('Continue To Address displayed')
        expect(await unlockFeePaymentPage.img_custom_logo).toBeDisplayed()
        console.log('Droom logo displayed')
        expect(await unlockFeePaymentPage.screen_title).toBeDisplayed()
        console.log('page title displayed')
        expect(await unlockFeePaymentPage.txtViewForEdit).toBeDisplayed()
        console.log('edit Button displayed')
    });
    it('TC_02 verify the tokan amount for bike is 499', async () => {
        await base.androidLoginAsBuyer()
        console.log("Buyer login successfully")
        await unlockFeePaymentPage.createReqiremenForBike()
        await (await unlockFeePaymentPage.BestMatche).click()
        console.log("Clicked on Best Matches")
        expect(await unlockFeePaymentPage.btn_pay_token_amount).toBeDisplayed()
        await (await unlockFeePaymentPage.btn_pay_token_amount).click()
        console.log("Clicked on Pay token amount")
        expect(await unlockFeePaymentPage.token_amount_for_bike).toBeDisplayed()
        console.log('Token amount for bike is displayed ')

    });
    it('TC_04 Verify proceed to checkout option is display for bike', async () => {
        await base.androidLoginAsBuyer()
        console.log("Buyer login successfully")
        await (await unlockFeePaymentPage.my_requirement).click()
        console.log("Clicked on my requirement")
        await (await unlockFeePaymentPage.cart_menu_item).click()
        expect(await unlockFeePaymentPage.token_amount_for_bike).toBeDisplayed()
        console.log('Token amount for bike is displayed ')
        expect(await unlockFeePaymentPage.proceed_to_checkout).toBeDisplayed()
        console.log('Process to checkount button displayed')

    });
    it('TC_06 Verify the functionality after click on proceed to checkout button for bike', async () => {
        await base.androidLoginAsBuyer()
        console.log("Buyer login successfully")
        await (await unlockFeePaymentPage.my_requirement).click()
        console.log("Clicked on my requirement")
        await (await unlockFeePaymentPage.cart_menu_item).click()
        expect(await unlockFeePaymentPage.proceed_to_checkout).toBeDisplayed()
        console.log('Process to checkount button displayed')
        await (await unlockFeePaymentPage.proceed_to_checkout).click()
        expect(await unlockFeePaymentPage.proceed_to_checkout).toBeClickable()
        expect(await unlockFeePaymentPage.Email).toBeDisplayed()
        console.log('Email address displayed')
        expect(await unlockFeePaymentPage.Phone).toBeDisplayed()
        console.log('Phone Number displayed')
        expect(await unlockFeePaymentPage.Order).toBeDisplayed()
        console.log('Order Summary displayed')
        expect(await unlockFeePaymentPage.Price).toBeDisplayed()
        console.log('Price Breakup displayed')
        expect(await unlockFeePaymentPage.Address).toBeDisplayed()
        console.log('Continue To Address displayed')
        expect(await unlockFeePaymentPage.img_custom_logo).toBeDisplayed()
        console.log('Droom logo displayed')
        expect(await unlockFeePaymentPage.screen_title).toBeDisplayed()
        console.log('page title displayed')
        expect(await unlockFeePaymentPage.txtViewForEdit).toBeDisplayed()
        console.log('edit Button displayed')
        await (await unlockFeePaymentPage.txtViewForEdit).click()
        await unlockFeePaymentPage.removeFromCart()
    });
    it('TC_08 Verify Address Tab After click on payment', async () => {
        await base.androidLoginAsBuyer()
        console.log("Buyer login successfully")
        await unlockFeePaymentPage.createReqiremenForCar()
        await (await unlockFeePaymentPage.BestMatche).click()
        console.log("Clicked on Best Matches")
        await (await unlockFeePaymentPage.btn_pay_token_amount).click()
        await (await unlockFeePaymentPage.proceed_to_checkout).click()
        console.log("Clicked on proceed to checkout")
        expect(await unlockFeePaymentPage.proceed_to_checkout).toBeClickable()
        await (await unlockFeePaymentPage.Address).click()
        console.log("Clicked on Address")
        expect(await unlockFeePaymentPage.txtViewForName).toBeDisplayed()
        console.log('User name displayed')
        expect(await unlockFeePaymentPage.txtViewForAddress).toBeDisplayed()
        console.log(' User Address displayed')
        expect(await unlockFeePaymentPage.txtViewForPhone).toBeDisplayed()
        console.log('User phone number displayed')
        expect(await unlockFeePaymentPage.btnChangeAddAddress).toBeDisplayed()
        console.log('Edit Address Button  displayed')
        expect(await unlockFeePaymentPage.continue_To_Payment).toBeDisplayed()
        console.log('continue to payment Button  displayed')
    });
    it('TC_07 Verify Account Tab after clicking on Payment', async () => {
        await base.androidLoginAsBuyer()
        console.log("Buyer login successfully")
        await unlockFeePaymentPage.createReqiremenForCar()
        await (await unlockFeePaymentPage.BestMatche).click()
        console.log("Clicked on Best Matches")
        await (await unlockFeePaymentPage.btn_pay_token_amount).click()
        console.log("Clicked on pay token amount")
        await (await unlockFeePaymentPage.proceed_to_checkout).click()
        console.log("Clicked on proceed to checkout")
        await (await unlockFeePaymentPage.Address).click()
        console.log("Clicked on Address")
        await (await unlockFeePaymentPage.continue_To_Payment).click()
        console.log("Clicked on continue to payment")
        expect(await unlockFeePaymentPage.UPI).toBeDisplayed()
        console.log('Paytm UPI Droom Recommended - Fast & Secured option displayed')
        expect(await unlockFeePaymentPage.debit_Card).toBeDisplayed()
        console.log('Debit Card option displayed')
        expect(await unlockFeePaymentPage.credit_Card).toBeDisplayed()
        console.log('Pay Via Credit Card option displayed')
        expect(await unlockFeePaymentPage.net_Banking).toBeDisplayed()
        console.log('Net Banking option displayed')
        expect(await unlockFeePaymentPage.cash_Card).toBeDisplayed()
        console.log('Cash Card option displayed')
    });
});