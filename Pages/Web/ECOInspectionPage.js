const Base = require('../../BaseClass/base')

class ECO {
    get detectLocation() { return $('#detectMyLocation')}
    get shop_by_category() { return $('#nav_category_button') }
    get Inspection() { return $('//div[text()="Inspection"]') }
    get ECOHeading() { return $('//h1[@class="d-margin-bottom-20 d-font-size-32 d-text-transform-capitalize body-bold-font"]') }
    get Buyer() { return $('//span[text()="Buyer"]') }
    get Seller() { return $('//span[text()="Seller"]') }
    get RegiAsVendor() { return $('//a[text()="Register as Vendor"]') }
    get Technician() { return $('//span[text()="Technician"]') }
    get Check_Repair_Estimate() { return $('//a[text()="Check repair estimate"]') }
    get BookInspection() { return $('https://droom.in/eco-order') }
    get Repair_EstimateHeading() { return $('//h1[text()="Check Estimated Repair Cost for Free"]') }
    get SelectCar() { return $('//label[text()="Select Car"]') }
    get SelectRepairs() { return $('//label[text()="Select Repairs"]') }
    get getEstimate() { return $(".btn.btn-info.btn-next.repair_service_next")}
    get selectMake() { return $('//span[text()="Select Make"]') }
    get selectTrim(){return $('//span[text()="Select Trim"]')}
    get inputTrim(){return $('//input[@id="s2id_autogen162_search"]')}
    get inputMake(){return $('//input[@id="s2id_autogen1_search"]')}
    get selectModel() { return $('//span[@id="select2-chosen-61"]') }
    get inputModel(){return $('//input[@id="s2id_autogen61_search"]')}
    get location() { return $('//*[@id="repair_estimate_location"]')}
    get searchMy_Location() { return $('(//input[contains(@class,"form-control floating-control lp-search")])') }
    get next() { return $('//a[text()="Next"]') }
    get location2() { return $('//p[text()="Location"]') }
    get delhi() { return $('//li[@class="d-display-block d-padding-2 clickable"]') }
    get break_Repair() { return $('//a[@href="#brakes-repair-service"]') }
    get electrical_Repair() { return $('//a[@href="#electrical-repairs-services"]') }
    get AC_Repair() { return $('//a[@href="#ac-repair-service"]') }
    get wheel_Repair() { return $('//a[@href="#wheel-repair-service"]') }
    get Brakes_ReapairService() { return $('//a[@href="#brakes-repair-service"]') }
    get front_Brake() { return $('//label[normalize-space()="Front Brake Pads (set of 4)"]') }
    get Estimated_RepairCost() { return $('//div[@class="row step2"]//h3') }
    get ECO_Offering() { return $('//h2[normalize-space()="ECO Offerings"]') }
    get cars_OnECO_Offering() { return $('(//a[normalize-space()="Cars"])[2]') }
    get bikes_OnECO_Offering() { return $('(//a[normalize-space()="Bikes"])[2]') }
    get inspection_Services() { return $('(//div[normalize-space()="Inspection Services"])[1]') }
    get basic_Inspection() { return $('(//div[normalize-space()="Basic Inspection"])[1]') }
    get premium_Inspection() { return $('(//div[normalize-space()="Premium Inspection"])[1]') }
    get premium_Plus_Inspection() { return $('//div[normalize-space()="Premium+ Inspection"]') }
    get amount_basic() { return $('(//div[contains(text(),"???")])[1]') }
    get amount_premium() { return $('(//div[contains(text(),"???")])[2]') }
    get amount_primiumPlus_Inspection() { return $('(//div[contains(text(),"???")])[3]') }
    get basic_Report() { return $('//a[@href="https://cdn1.droom.in/imgusr/droomresponsive/img/content/eco/basic-inspection-car-sample-report.pdf"]') }
    get premium_Report() { return $('(//a[@href="https://cdn1.droom.in/imgusr/droomresponsive/img/content/eco/premium-inspection-car-sample-report.pdf"])[1]') }
    get premiumPlus_InspectionReport() { return $('(//a[@href="https://cdn1.droom.in/imgusr/droomresponsive/img/content/eco/premium-inspection-car-sample-report.pdf"])[2]') }
    get features() { return $('//a[normalize-space()="Features"]') }
    get features_FourWheelers() { return $('//button[normalize-space()="four wheelers"]') }
    get featurs_TwoWheelers() { return $('//button[normalize-space()="two wheelers"]') }
    get chechPoint_FourWheeler() { return $('//div[normalize-space()="Inspection Checkpoints for Four Wheeler"]') }
    get chechPoint_TwoWheeler() { return $('//button[normalize-space()="two wheelers"]') }
    get assessment() { return $('//button[normalize-space()="Visual and Functional Assessment"]') }
    get tires_Wheels() { return $('//button[normalize-space()="Tires & Wheels (Front & Rear)"]') }
    get Services() { return $('//a[normalize-space()="Services"]') }
    get scooter_Inspection() { return $('//a[normalize-space()="Scooter Inspection"]') }
    get scooter_InspectionHeading() { return $('//h1[normalize-space()="Get A Used Scooter Inspection With ECO"]') }
    get home() { return $('//a[normalize-space()="Home"]') }
    get signUp(){return $('//a[normalize-space()="Sign up"]')}
    get create_Account(){return $('(//h2[normalize-space()="Create your account"])[1]')}
    get Watch_ECOTV(){return $('//a[text()=" Watch ECO TV"]')}
    get video(){return $('//button[@aria-label="Play"]')}
    get play_btn(){return $('//button[@aria-label="Play (k)"]')}
    get speaker(){return $('//button[@aria-label="Mute (m)"]')}
    get close_Video(){return $('//button[@aria-label="Close"]') }
    get ashok(){return $('//span[text()="Ashok Leyland"]')}
    get stile(){return $('//div[@class="select2-result-label"]')}
    get Le(){return $('.select2-result-label')}
    get inspection(){return $('//a[normalize-space()="Get Inspection"]')}
    
    async traverseToECO() {
        browser.url('https://droom.in/eco')
        await(await this.ECOHeading).waitForDisplayed()
        expect(await this.ECOHeading).toBeDisplayed()
        console.log(await (await this.ECOHeading).getText())
        expect(await this.ECOHeading).toHaveTextContaining("Inspect Vehicle")
    }

    async inputsToCheckEstimate() {
        await (await this.selectMake).click()
        console.log("Make selected")
        await(await this.inputMake).setValue("Ashok Leyland")
        await(await this.ashok).click()
        await(await this.stile).click()
        await(await this.Le).click()
        await (await this.location).click()
        await (await this.searchMy_Location).setValue("Delhi")
        expect(await this.delhi).toBeDisplayed()
        console.log("Location is displayed")
        await (await this.delhi).click()
        expect(await this.next).toBeDisplayed()
        console.log("Next button is shown to go Towards the select Repairs")
        await (await this.next).click()
    }
}

module.exports = new ECO()
    