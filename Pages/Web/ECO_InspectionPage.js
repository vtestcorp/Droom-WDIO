const Base = require('../../BaseClass/base')
class ECO {
    get shop_by_category() { return $('//span[contains(text(),"Shop by Category")]') }
    get Certification_Services() { return $('//span[contains(text(),"Certification Services")]') }
    get ECO() { return $('(//a[@href ="https://droom.in/eco"] )') }
    get ECOHeading() { return $('//h1[normalize-space()="Inspect vehicle within few minutes"]') }
    get Buyer() { return $('//span[text()="Buyer"]') }
    get Seller() { return $('//span[text()="Seller"]') }
    get Technician() { return $('//span[text()="Technician"]') }
    get Check_Repair_Estimate() {return $('//a[text()="Check repair estimate"]') }
    get BookInspection() { return $('https://droom.in/eco-order') }
    get Repair_EstimateHeading() { return $('//h1[text()="Check Estimated Repair Cost for Free"]') }
    get SelectCar() { return $('//label[text()="Select Car"]') }
    get SelectRepairs() { return $('//label[text()="Select Repairs"]') }
    get getEstimate() { return $('//label[text()="Get Estimate"]') }
    get selectMake() { return $('//div[@id="s2id_make"]') }
    get selectModel() { return $('//span[@id="select2-chosen-2"]') }
    get selectTrim() { return $('//div[@id="select2-drop-mask"]') }
    get location() { return $('//input[@class="form-control select-city"]') }
    get searchMy_Location() { return $('(//input[contains(@class,"lp-search")])[2]') }
    get next() { return $('//a[text()="Next"]') }
    get location() { return $('//p[text()="Location"]') }
    get delhi() { return $('//li[@class="d-display-block d-padding-2 clickable"]') }
    get break_Repair() { return $('//a[@href="#brakes-repair-service"]') }
    get electrical_Repair() { return $('//a[@href="#electrical-repairs-services"]') }
    get AC_Repair() { return $('//a[@href="#ac-repair-service"]') }
    get wheel_Repair() { return $('//a[@href="#wheel-repair-service"]') }
    get front_Brake() { return $('//label[normalize-space()="Front Brake Pads (set of 4)"]') }
    get Estimated_RepairCost() { return $('//div[@class="row step2"]//h3[1]') }
    get ECO_Offering() { return $('//h2[normalize-space()="ECO Offerings"]') }
    get cars_OnECO_Offering() { return $('(//a[normalize-space()="Cars"])[2]') }
    get bikes_OnECO_Offering() { return $('(//a[normalize-space()="Bikes"])[2]') }
    get inspection_Services() { return $('(//div[normalize-space()="Inspection Services"])[1]') }
    get basic_Insection() { return $('(//div[normalize-space()="Basic Inspection"])[1]') }
    get premium_Inspection() { return $('(//div[normalize-space()="Premium Inspection"])[1]') }
    get premium_Plus_Inspection() { return $('//div[normalize-space()="Premium+ Inspection"]') }
    get amount_basic() { return $('(//div[contains(text(),"₹")])[1]') }
    get amount_premium() { return $('(//div[contains(text(),"₹")])[2]') }
    get amount_primiumPlus_Inspection() { return $('(//div[contains(text(),"₹")])[3]') }
    get basic_Report() { return $('//a[@href="https://cdn1.droom.in/imgusr/droomresponsive/img/content/eco/basic-inspection-car-sample-report.pdf"]') }
    get premium_Report() { return $('(//a[@href="https://cdn1.droom.in/imgusr/droomresponsive/img/content/eco/premium-inspection-car-sample-report.pdf"])[1]') }
    get premiumPlus_InspectionReport() { return $('(//a[@href="https://cdn1.droom.in/imgusr/droomresponsive/img/content/eco/premium-inspection-car-sample-report.pdf"])[2]') }
    get features() { return $('//a[normalize-space()="Features"]') }
    get features_FourWheelers() { return $('//button[normalize-space()="four wheelers"]') }
    get featurs_TwoWheelers() { return $('//button[normalize-space()="two wheelers"]') }
    get chechPoint_FourWheeler() { return $('//div[normalize-space()="Inspection Checkpoints for Four Wheeler"]') }
    get chechPoint_TwoWheeler() { return $('//button[normalize-space()="two wheelers"]') }
    get assessment_() { return $('//button[normalize-space()="Visual and Functional Assessment"]') }
    get tires_Wheels() { return $('//button[normalize-space()="Tires & Wheels (Front & Rear)"]') }
    get Services() { return $('//a[normalize-space()="Services"]') }
    get scooter_Inspection() { return $('//a[normalize-space()="Scooter Inspection"]') }

    get scooter_InspectionHeading() { return $('//h1[normalize-space()="Get A Used Scooter Inspection With ECO"]') }
    async traverseToECO() {
        await (await this.shop_by_category).waitForClickable({ timeout: 3000 })
        await (await this.shop_by_category).click()
        console.log("Clicked on Shop By category")
        await (await this.Certification_Services).moveTo()
        console.log("Moved to Certification Services")
        await (await this.ECO).click()
        console.log("Clicked on ECO serive")
        expect(await this.ECOHeading).toBeDisplayed()
        console.log(await (await this.ECOHeading).getText())
        expect(await this.ECOHeading).toHaveTextContaining("Inspect Vehicle")
    }

    toinputsForCheckEstimate()
    {
        await (await (await ECO.selectMake)$('(//option[@id])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.selectMake).selectByVisibleText('MBW')
        await (await (await this.selectModel).$('(//option[@id])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.model).selectByVisibleText('1 Series')
        await (await (await this.selectTrim).$('(//option[@id])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.selectTrim).selectByVisibleText('116I')
        await (await ECO_InspectionPage.searchMy_Location).setValue("Delhi")
        expect(await ECO_InspectionPage.delhi).toBeDisplayed()
        console.log("Location is displayed")
        await (await ECO_InspectionPage.delhi).click()
        expect(await ECO_InspectionPage.next).toBeDisplayed()
        console.log("Next button is shown to go Towards the select Repairs")
        await (await ECO_InspectionPage.next).click()
    }
}
module.exports = new ECO()