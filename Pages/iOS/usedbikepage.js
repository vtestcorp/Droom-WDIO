const base = require("../../BaseClass/base")

class UsedBike {
    get myReq() { return base.getByResourceId("in.droom:id/textview_my_requirement") }
    get createReq(){return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Create Requirement"`]')}
    get headingSelectPage(){return base.getByAccessibilityID('Select, What You Want To Buy!')}
    get newRequirements() { return base.getByResourceId("in.droom:id/addNewRequirement") }
    get carimg() { return base.getByAccessibilityID('transportation') }
    get bikeimg(){return base.getByAccessibilityID('motorbike (3)')}
    get scotterimg(){return base.getByAccessibilityID('scooterBuy')}
    get newButton() { return base.getByClassChain('**/XCUIElementTypeButton[`label == "New"`]') }
    get location() { return base.getByAccessibilityID('Select Your Location') }
    //get mylocation(){return base.getByAccessibilityID('**/XCUIElementTypeStaticText[`label == "pune"`]')}
    get searchMagnifier(){return base.getByAccessibilityID('buySearch')}
    get nextButton() { return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Next"`]') }
    get selectCarHeading(){return base.getByAccessibilityID("Let's Find Your Dream Car")}
    get currentLocation() { return base.getByClassChain('**/XCUIElementTypeButton[`label == "pune"`]')}
    get page2heading(){return base.getByAccessibilityID("Let's Find Your Dream Bike")}
    get searchTitle(){return base.getByAccessibilityID('Search or Select Bike You are Looking for')}
     get enterVehicleDetails(){return base.getByAccessibilityID('Enter Your Vehicle Details')}
     get selectVehicle(){return base.getByAccessibilityID('**/XCUIElementTypeStaticText[`label == "Select Vehicle"`]')}
     get bikeSearchTextField(){return base.getByClassChain('**/XCUIElementTypeTextField[`value == "E.g Bajaj Pulsar 2018 150cc"`]')}
     get DroomSuggest(){return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Let Droom Suggest for you"`]')}
     get page3Heading(){return base.getByAccessibilityID('Get Personalised Suggestion')}
     get priceRange(){return base.getByAccessibilityID('Price Range')}
     get bodyType(){return base.getByAccessibilityID('Body Type')}
     get pricingSlider(){return base.getByAccessibilityID('selling_price_suggest, Maximum value in slider, Minimum value in slider, Right Handle, Left Handle')}

    get page4Heading(){return base.getByAccessibilityID('')}

    get errorMsg() { return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Please Select Condition"`][1]')}
    get vehicleDetails() { return base.getByResourceId('Enter Your Vehicle Details') }
    get selectVehicle(){return base.getByAccessibilityID('**/XCUIElementTypeStaticText[`label == "Select Vehicle"`]')}
    get newButton() { return base.getByClassChain('**/XCUIElementTypeButton[`label == "New"`]') }
    get car() { return base.getByAccessibilityID('Car') }
    get usedButton() { return base.getByClassChain('**/XCUIElementTypeButton[`label == "Used"`]') }
    get bike() { return base.getByAccessibilityID('Bike') }
    get scooter() { return base.getByAccessibilityID('Scooter') }
    get back(){return base.getByAccessibilityID('arrow left')}
    get location() { return base.getByAccessibilityID('Select Your Location') }
    get searchMagnifier(){return base.getByAccessibilityID('buySearch')}
    get nextButton() { return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Next"`]') }
    get sportsBike(){return base.getByAccessibilityID('**/XCUIElementTypeStaticText[`label == "Sports"`]') }
//get submit() { return $('//span[text()="Submit "]') }
    get used() { return base.getByClassChain('**/XCUIElementTypeButton[`label == "Used"`]') }
    get searchField(){return base.getByAccessibilityID('**/XCUIElementTypeTextField[`value == "E.g Bajaj Pulsar 2018 150cc"`]')}
    
    get findBike(){return base.getByAccessibilityID("Let's Find Your Dream Bike")}
    get selectWhatuWant(){return base.getByAccessibilityID('Select, What You Want To Buy!')}
    get bodyTypeOnsugg(){return base.getByAccessibilityID('Body Type')}
    get bySearch(){return base.getByAccessibilityID('buySearch')}
    get location() { return $('//p[text()="Location"]') }
    get resetLocation(){return base.getByAccessibilityID('**/XCUIElementTypeStaticText[`label == "Reset"`]')}
    //get currentLocation() { return $('//div[text()="Current Location"]') }
    get nextButton() { return $('//span[text()="Next "]') }
    get errorMsg() { return $('//p[text()="Please Select The City"]') }
    get vehicleDetails() { return base.getByAccessibilityID('Enter Your Vehicle Details') }
    get swift() { return $('//input[@placeholder="E.g Maruti Suzuki Swift 2017 LDI"]') }
    get selectSwift() { return $('(//li[@class="d-block d-margin-bottom-10 d-font-size-13"])[1]') }
    get bikeName() { return $('//span[@class="s-MuiChip-label"]') }
    get addBtn() { return $('//p[text()=" Add Another Vehicle"]') }
    get closeRecord() { return $('//div[@role="button"]//*[local-name()="svg"]') }
    get selectFrom() { return $('//span[text()="Select From"]') }
    get orSearch() { return $('//span[text()="Or Search"]') }
    get make() { return $('//select[@class="form-control floating-control pmmyt-make-f"]') }
    get selectMake() { return $('//option[text()="BMW"]') }
    get model() { return $('//select[@name="model"]') }
    get selectModel() { return $('//option[text()="1 Series"]') }
    get year() { return $('//select[@class="form-control floating-control pmmyt-year-f"]') }
    get selectyear() { return $('//option[text()="2018"]') }
    get trim() { return $('//select[@class="form-control floating-control pmmyt-trim-f"]') }
    get selectTrim() { return $('//option[text()="118D SPORT LINE"]') }
    get basicDetails() { return $('//h5[text()="Now Share Your Dream Vehicle Basic Details"]') }
    get backBtn() { return $('//button[@class="s-MuiButtonBase-root s-MuiIconButton-root"]//span[@class="s-MuiIconButton-label"]//*[local-name()="svg"]') }
    get carCancel() { return $('(//div[@role="button"]//*[local-name()="svg"])[1]') }
    get droomSugg() { return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Let Droom Suggest for you"`]') }
    get lookingFor() { return $('//h5[text()="Let us know what you are looking for"]') }
    get budget() { base.getByAccessibilityID ('??? 0 -??? 1 Crore') }
    get body() { return $('//p[text()="Body Type"]') }
    get age() { return $('//p[text()="Age of Vehicle"]') }
    get more() { return $('//p[text()="Add More Detail "]') }
    get goBack() { return $('//*[name()="path" and contains(@d,"M20 11H7.8")]') }
    get fuelType() { return $('//p[text()="Fuel Type"]') }
    get petrol() { return $('(//span[@class="s-MuiIconButton-label"])[3]') }
    get almostDone() { return $('//h5[text()="You are Almost Done!"]') }
    get submitAndView() { return $('//span[text()="Submit & View All Matches "]') }
    get requirements() { return $('//span[text()=" View all Requirements "]') }
    get newRequirements() { return $('//span[text()=" + Add New Requirement"]') }
    get submitR() { return $('//span[contains(text(),"Submit")]') }
    get redColor() { return $('(//span[@class="s-MuiIconButton-label"])[7]') }
    get automatic() { return $('//img[@alt="Automatic"]') }
    get lastStep() { return $('//h5[text()="Last Step to Go! "]') }
    get insurance() { return $('(//span[@class="s-MuiIconButton-label"])[2]') }
    get loan() { return $('(//span[@class="s-MuiIconButton-label"])[3]') }
    get RCTransfer() { return $('(//span[@class="s-MuiIconButton-label"])[4]') }
    get roadSideAssistance() { return $('(//span[@class="s-MuiIconButton-label"])[5]') }
    get withinFourDay() { return $('(//span[@class="s-MuiIconButton-label"])[8]') }
    get exchange() { return $('(//span[@class="s-MuiIconButton-label"])[12]') }
    get kms() { return $('//input[@id="exchange_kms_driven"]') }
    get records() { return $('//h3[@class="bm-MuiTypography-root bm-bm80 bm-MuiTypography-h3 bm-MuiTypography-noWrap"]') }
    get himalayan() { return $('//input[@placeholder="E.g Bajaj Pulsar 2018 150cc"]') }
    get selectHimalayan() { return $('(//li[@class="d-block d-margin-bottom-10 d-font-size-13"])[1]') }
    get bajaj() { return $('//option[text()="Bajaj"]') }
    get avenger() { return $('//option[text()="Avenger"]') }
    get trimName() { return $('(//option[contains(text(),"STREET ")])[1]') }
    get colorName() { return $('(//div[@class="s-MuiGrid-root s-MuiGrid-item s-MuiGrid-grid-xs-2"])[1]') }
    get clickOnCar() { return $('//div[@class="s-MuiSelect-root s-MuiSelect-select s-MuiSelect-selectMenu s-MuiInputBase-input s-MuiInput-input"]') }
    get bikeOption() { return $('(//li[@class="s-MuiButtonBase-root s-MuiListItem-root s-MuiMenuItem-root s-MuiMenuItem-gutters s-MuiListItem-gutters s-MuiListItem-button"])[1]') }
    get scooterOption() { return $('(//li[@class="s-MuiButtonBase-root s-MuiListItem-root s-MuiMenuItem-root s-MuiMenuItem-gutters s-MuiListItem-gutters s-MuiListItem-button"])[2]') }
    get fuleTypes() { return $('//div[@class="r-MuiBox-root r-r133"]') }
    get extColor() { return $('//div[@class="r-MuiBox-root r-r136"]') }
    get service() { return $('(//div[@class="r-MuiGrid-root r-r25 r-MuiGrid-item r-MuiGrid-grid-xs-12 r-MuiGrid-grid-sm-6 r-MuiGrid-grid-md-3"])[1]') }
    get needToBuy() { return $('(//div[@class="r-MuiGrid-root r-r25 r-MuiGrid-item r-MuiGrid-grid-xs-12 r-MuiGrid-grid-sm-6 r-MuiGrid-grid-md-3"])[2]') }
    get budgetBar() { return $('(//div[@class="noUi-connect"])[1]') }
    get Kmsbar() { return $('(//div[@class="noUi-connect"])[2]') }
    get priceRange() { return $('(//div[@class="r-MuiGrid-root r-r51 r-MuiGrid-item r-MuiGrid-grid-xs-4 r-MuiGrid-grid-sm-3"])[1]') }
    get kmsrange() { return $('(//div[@class="r-MuiBox-root r-r127"])[1]') }
    get closeBtn() { return $('//button[@class="close em-show-later"]') }
    get home() { return $('//a[normalize-space()="Home"]') }
    async submitRequirement() {
        await (await this.submit).click()
    }
    async bikeCondition() {
        await (await this.Bike).click()
        await (await this.used).click()
    }
    async clickOnNext() {
        await (await this.nextButton).click()
    }
    async selectCity() {
        await (await this.errorMsg).waitForExist({ timeout: 15000 })
    }
    async cLocation() {
        await (await this.currentLocation).click()
        await (await this.currentLocation).waitForExist({ timeout: 5000 })
        await (await this.newButton).click()
        await (await this.used).click()
    }
    async selectNewBtn() {
        await (await this.newButton).click()
    }
    async selectUsedBtn() {
        await (await this.used).click()
    }
    async waitForVehicleDetails() {
        await (await this.vehicleDetails).waitForExist({ timeout: 5000 })
    }
    async selectCar() {
        await (await this.swift).setValue("Swift")
        await (await this.selectSwift).click()
    }
    async selectBike() {
        await (await this.himalayan).setValue("Himalayan")
        await (await this.selectHimalayan).click()
    }
    async deleteCarRecord() {
        await (await this.closeRecord).click()
    }
    async slectFromDropDown() {
        await (await this.selectFrom).click()
        await (await this.orSearch).waitForExist({ timeout: 5000 })
    }
    async selectVehicle() {
        await (await this.make).click()
        await (await this.selectMake).click()
        await (await this.model).click()
        await (await this.selectModel).click()
        await (await this.year).click()
        await (await this.selectyear).click()
        await (await this.trim).click()
        await (await this.selectTrim).click()
    }
    async selectBikeVehicle() {
        await (await this.make).click()
        await (await this.bajaj).click()
        await (await this.model).click()
        await (await this.avenger).click()
        await (await this.year).click()
        await (await this.selectyear).click()
        await (await this.trim).click()
        await (await this.trimName).click()
    }
    async basicDetailsDisplay() {
        (await this.budget).waitForExist({ timeout: 7000 })
    }
    async clickOnBack() {
        await (await this.backBtn).click()
        await (await this.carCancel).click()
    }
    async letDroomSuggest() {
        await (await this.droomSugg).click()
        await (await this.lookingFor).waitForExist({ timeout: 5000 })
    }
    async clickOnGoBack() {
        await (await this.body).waitForExist({ timeout: 5000 })
        await (await this.goBack).moveTo()
        await (await this.goBack).click()
        await (await this.vehicleDetails).waitForExist({ timeout: 5000 })
    }
    async selectPetrol() {
        await (await this.petrol).click()
    }
    async clickOnSubmit() {
        await (await this.submitAndView).click()
    }
    async clickOngetRequirements() {
        await (await this.requirements).waitForExist({ timeout: 15000 })
        await (await this.requirements).click()
    }
    async clickOnSubmitRequirements() {
        await (await this.submitR).click()
    }
    async selectColor() {
        await (await this.redColor).click()
    }
    async selectAutomatic() {
        await (await this.automatic).click()
    }
    async selectDoYouAlsoNeed() {
        await (await this.lastStep).waitForExist({ timeout: 5000 })
        await (await this.insurance).click()
        await (await this.loan).click()
        await (await this.RCTransfer).click()
        await (await this.roadSideAssistance).click()
    }
    async selectHowQuickly() {
        await (await this.withinFourDay).click()
    }
    async exchangeVehicle() {
        await (await this.exchange).click()
    }
    async Enterkms() {
        await (await this.kms).setValue("10000")
    }
    async selectColorFromList() {
        await (await this.colorName).click()
    }
    async closePopUp()
    {
        await (await this.closeBtn).click()
    }
}
module.exports = new UsedBike();