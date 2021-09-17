const base = require("../../BaseClass/base");

class UnlockFeePayments {
    get my_requirement() { return base.getByResourceId('in.droom:id/textview_my_requirement') }
    get addNewRequirement() { return base.getByResourceId('in.droom:id/addNewRequirement') }
    get detectLocation() { return base.getByResourceId('in.droom:id/detectLocationTV') }
    get car() { return base.getByResourceId('in.droom:id/carLayout') }
    get usedRadioButton() { return base.getByResourceId('in.droom:id/usedRadioButton') }
    get nextBtn() { return base.getByResourceId('in.droom:id/button4') }
    get search_view() { return base.getByResourceId('in.droom:id/search_view') }
    get selectManually() { return base.getByResourceId('in.droom:id/selectManuallyTV') }
    get sp_buy_make() { return base.getByResourceId('in.droom:id/sp_buy_make') }
    get sp_buy_model() { return base.getByResourceId('in.droom:id/sp_buy_model') }
    get sp_buy_year() { return base.getByResourceId('in.droom:id/sp_buy_year') }
    get sp_buy_trim() { return base.getByResourceId('in.droom:id/sp_buy_trim') }
    get trim_make() { return base.getByText('Acura') }
    get trim_model() { return base.getByText('TLX') }
    get trim_year() { return base.getByText('2018') }
    get trim() { return base.getByText('BASE') }
    get nextBtn1() { return base.getByResourceId('in.droom:id/buttonNxt') }
    get nextBtn2() { return base.getByResourceId('in.droom:id/btn_step_no_six_next') }
    get Matches() { return base.getByText('Submit & View all Matches') }
    get BestMatche() { return base.getByText('Best Match') }
    get four_wheeler() { return base.getByText('Best Match Unlock Fee - 4 Wheeler') }
    get token_amount_for_car() { return base.getByText('₹ 999') }
    get proceed_to_checkout() { return base.getByResourceId('in.droom:id/proceed_to_checkout') }
    get btn_pay_token_amount() { return base.getByResourceId('in.droom:id/btn_pay_token_amount') }
    get bike() { return base.getByResourceId('in.droom:id/bikeLayout') }
    get bike_make() { return base.getByText('BMW') }
    get bike_model() { return base.getByText('F 650 GS') }
    get bike_year() { return base.getByText('2009') }
    get bike_trim() { return base.getByText('798CC') }
    get token_amount_for_bike() { return base.getByText('₹ 499') }
    get remove_from_cart() { return base.getByResourceId('in.droom:id/remove_from_cart') }
    get okBtn() { return base.getByText('OK') }
    get Name() { return base.getByText('Name') }
    get Email() { return base.getByText('Email') }
    get Phone() { return base.getByText('Phone') }
    get Order() { return base.getByText('Order Summary') }
    get Price() { return base.getByText('Price Breakup') }
    get Address() { return base.getByText('Continue To Address') }
    get img_custom_logo() { return base.getByResourceId('in.droom:id/img_custom_logo') }
    get screen_title() { return base.getByResourceId('in.droom:id/screen_title') }
    get txtViewForEdit() { return base.getByResourceId('in.droom:id/txtViewForEdit') }
    get my_requirement() { return base.getByResourceId('in.droom:id/textview_my_requirement') }
    get cart_menu_item() { return base.getByResourceId('in.droom:id/cart_menu_item') }
    async createReqiremenForCar() {
        await (await this.my_requirement).click()
        await (await this.addNewRequirement).click()
        await (await this.detectLocation).click()
        await browser.pause(5000)
        await (await this.car).click()
        await (await this.usedRadioButton).click()
        await (await this.nextBtn).click()
        await (await this.selectManually).click()
        await (await this.sp_buy_make).click()
        await (await this.trim_make).click()
        await (await this.sp_buy_model).click()
        await (await this.trim_model).click()
        await (await this.sp_buy_year).click()
        await (await this.trim_year).click()
        await (await this.sp_buy_trim).click()
        await (await this.trim).click()
        await (await this.nextBtn1).click()
        await browser.pause(2000)
        await (await this.nextBtn).click()
        await (await this.nextBtn).click()
        await (await this.nextBtn2).click()
        await (await this.Matches).click()
    }
    async createReqiremenForBike() {
        await (await this.my_requirement).click()
        await (await this.addNewRequirement).click()
        await (await this.detectLocation).click()
        await browser.pause(5000)
        await (await this.bike).click()
        await (await this.usedRadioButton).click()
        await (await this.nextBtn).click()
        await (await this.selectManually).click()
        await (await this.sp_buy_make).click()
        await (await this.bike_make).click()
        await (await this.sp_buy_model).click()
        await (await this.bike_model).click()
        await (await this.sp_buy_year).click()
        await (await this.bike_year).click()
        await (await this.sp_buy_trim).click()
        await (await this.bike_trim).click()
        await (await this.nextBtn1).click()
        await browser.pause(2000)
        await (await this.nextBtn).click()
        await (await this.nextBtn).click()
        await (await this.nextBtn2).click()
        await (await this.Matches).click()
    }

}
module.exports = new UnlockFeePayments();