const base = require("../../BaseClass/base");
const unlockFeePaymentPage = require("../../Pages/Android/unlockFeePaymentPage");

describe('Requirements Verification', async () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
    });
    it('Tc_01 verify the tokan amount for car is 999', async () => {
        await base.androidLoginAsBuyer()
        await unlockFeePaymentPage.createReqiremenForCar()
        await (await unlockFeePaymentPage.BestMatche).click()
        expect(await unlockFeePaymentPage.btn_pay_token_amount).toBeDisplayed()
        await (await unlockFeePaymentPage.btn_pay_token_amount).click()
        expect(await unlockFeePaymentPage.token_amount_for_car).toBeDisplayed()
        console.log('Token amount for car is displayed ')
    });
    it('Tc_03 Verify proceed to checkout option is display for car', async () => {
        await base.androidLoginAsBuyer()
        await (await unlockFeePaymentPage.my_requirement).click()
        await (await unlockFeePaymentPage.cart_menu_item).click()
        expect(await unlockFeePaymentPage.token_amount_for_car).toBeDisplayed()
        console.log('Token amount for car is displayed ')
        expect(await unlockFeePaymentPage.proceed_to_checkout).toBeDisplayed()
        console.log('Process to checkount button displayed')
    });
    it('TC_05 Verify the functionality after click on proceed to checkout button for car', async () => {
        await base.androidLoginAsBuyer()
        await (await unlockFeePaymentPage.my_requirement).click()
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
        await unlockFeePaymentPage.createReqiremenForBike()
        await (await unlockFeePaymentPage.BestMatche).click()
        expect(await unlockFeePaymentPage.btn_pay_token_amount).toBeDisplayed()
        await (await unlockFeePaymentPage.btn_pay_token_amount).click()
        expect(await unlockFeePaymentPage.token_amount_for_bike).toBeDisplayed()
        console.log('Token amount for bike is displayed ')
        await (await unlockFeePaymentPage.remove_from_cart).click()
        await (await unlockFeePaymentPage.okBtn).click()
    });
    it('TC_04 Verify proceed to checkout option is display for bike', async () => {
        await base.androidLoginAsBuyer()
        await (await unlockFeePaymentPage.my_requirement).click()
        await (await unlockFeePaymentPage.cart_menu_item).click()
        expect(await unlockFeePaymentPage.token_amount_for_bike).toBeDisplayed()
        console.log('Token amount for bike is displayed ')
        expect(await unlockFeePaymentPage.proceed_to_checkout).toBeDisplayed()
        console.log('Process to checkount button displayed')
        await (await unlockFeePaymentPage.remove_from_cart).click()
        await (await unlockFeePaymentPage.okBtn).click()
    });
    it('TC_06 Verify the functionality after click on proceed to checkout button for bike', async () => {
        await base.androidLoginAsBuyer()
        await (await unlockFeePaymentPage.my_requirement).click()
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
    });
});