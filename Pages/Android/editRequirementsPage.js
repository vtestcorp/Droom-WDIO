const base = require("../../BaseClass/base");

class EditRequirements {
    get myRequirementsOpt() { return base.getByText("My Requirements") }
    get requirement() { return base.getByResourceIdNText("in.droom:id/txt_my_matches_count", "(269)") }
    get totalReqLbl() { return base.getByResourceId("in.droom:id/txt_total_req") }
    get searchMyLocationBtn() { return base.getByResourceId("in.droom:id/openAutoComplete") }
    get searchMyLocationTxt() { return base.getByResourceId("in.droom:id/places_autocomplete_search_bar") }
    get txt_edit() { return base.getByResourceId("in.droom:id/txt_edit") }
    get detectLocationTV() { return base.getByResourceId("in.droom:id/detectLocationTV") }
    get nextBtn() { return base.getByResourceId("in.droom:id/button4") }
    get selectManually() { return base.getByResourceId("in.droom:id/selectManuallyTV") }
    get sp_buy_make() { return base.getByResourceId('in.droom:id/sp_buy_make') }
    get sp_buy_model() { return base.getByResourceId('in.droom:id/sp_buy_model') }
    get sp_buy_year() { return base.getByResourceId('in.droom:id/sp_buy_year') }
    get sp_buy_trim() { return base.getByResourceId('in.droom:id/sp_buy_trim') }
    get trim_make() { return base.getByText('Acura') }
    get trim_model() { return base.getByText('TLX') }
    get trim_year() { return base.getByText('2018') }
    get trim() { return base.getByText('BASE') }
    get nextBtn1() { return base.getByResourceId('in.droom:id/buttonNxt') }
    get priceRangeSlider() { return base.getByResourceId('in.droom:id/priceRangeSlider') }
    get nextBtn2() { return base.getByResourceId('in.droom:id/btn_step_no_six_next') }
    get Matches() { return base.getByText('Submit & View all Matches') }
    get colorIndex() { return base.getByResourceIdNIndex('in.droom:id/parentLayout', '1') }
    get viewRequirements() { return base.getByResourceId('in.droom:id/viewRequirements') }
    get txt_more() { return base.getByResourceId('in.droom:id/txt_more') }
    get color() { return base.getByText('Blue') }
    get insurance_toggle() { return base.getByResourceId('in.droom:id/insurance_toggle') }
    get loan_toggle() { return base.getByResourceId('in.droom:id/loan_toggle') }
    get radio_not_decided() { return base.getByResourceId('in.droom:id/radio_not_decided') }
    get insurance() { return base.getByText('insurance') }
    get loan() { return base.getByText('loan') }
    get not_decided() { return base.getByText('not decided') }
    get makeModel() { return base.getByResourceId('in.droom:id/makeModelTV') }
    async selectLocation() {
        await (await this.detectLocationTV).click()
        await browser.pause(3000)
    }
    async scrollBuget() {
        const { width, height } = await driver.getWindowRect()
        await browser.touchPerform([
            { action: 'press', options: { x: 75, y: 404 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: 300, y: 404 } },
            { action: 'release' }
        ]);
    }
}
module.exports = new EditRequirements()