const { textChangeRangeIsUnchanged } = require("typescript")
const base = require("../../BaseClass/base")
const UsedCarPage = require("../../Pages/ios/usedCarPage")
class Usedcar {
    
    get myReq() { return base.getByResourceId("in.droom:id/textview_my_requirement") }
    get createReq(){return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Create Requirement"`]')}
    get headingSelectPage(){return base.getByAccessibilityID('Select, What You Want To Buy!')}
    get newRequirements() { return base.getByResourceId("in.droom:id/addNewRequirement") }
    get car() { return base.getByAccessibilityID('Car') }
    get usedButton() { return base.getByClassChain('**/XCUIElementTypeButton[`label == "Used"`]') }
    get bike() { return base.getByAccessibilityID('Bike') }
    get scooter() { return base.getByAccessibilityID('Scooter') }
    get back(){return base.getByAccessibilityID('arrow left')}
    get carimg() { return base.getByAccessibilityID('transportation') }

    get newButton() { return base.getByClassChain('**/XCUIElementTypeButton[`label == "New"`]') }
    get location() { return base.getByAccessibilityID('Select Your Location') }
    get searchMagnifier(){return base.getByAccessibilityID('buySearch')}
    get nextButton() { return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Next"`]') }
   // get nextBtn2(){return base.getByAccessibilityID('**/XCUIElementTypeStaticText[`label == "Next"`]')}
    get selectCarHeading(){return base.getByAccessibilityID("Let's Find Your Dream Car")}
    get currentLocation() { return base.getByClassChain('**/XCUIElementTypeButton[`label == "pune"`]')}
    get errorMsg() { return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Please Select Condition"`][1]')}
    get vehicleDetails() { return base.getByAccessibilityID('Enter Your Vehicle Details') }
    get selectVehicle(){return base.getByAccessibilityID('**/XCUIElementTypeStaticText[`label == "Select Vehicle"`]')}
    get searchTextField(){return base.getByClassChain('**/XCUIElementTypeTextField[`value == "E.g Maruti Suzuki Swift LDI"`]')}
    get selectSearchResult(){return base.getByAccessibilityID('Select Search Result')}
    get doneBtn(){return base.getByAccessibilityID('Done')}
    get cancelBtn(){return base.getByAccessibilityID('Cancel')}
    get addmoreVerhicle(){return base.getByClassChain('**/XCUIElementTypeStaticText[`label == " add more Vehicle"`]')}
    get swift() { return base.getByResourceId("in.droom:id/search_view") }
    get selectSwift() { return base.getByTextContains("Maruti Suzuki") }
    get sports(){return base.getByAccessibilityID('Sports')}
    get suv(){return base.getByAccessibilityID('Suv')}
    get bodyType(){return base.getByAccessibilityID('Body Type')}
    get lastStepHeading(){return base.getByAccessibilityID('Last Step to Go! Few More Details')}
    get urCriteria(){return base.getByAccessibilityID('Select vehicles as per Your Budget, Purpose of buying & Family Size')}
get fortEcoSport(){return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Ford Ecosport"`]')}
    get carName() { return base.getByResourceId("in.droom:id/makeModelYearTrimTV")}
    get addBtn() { return base.getByResourceId("in.droom:id/addMoreVehicleBTN") }
    get proSellerCount() { return base.getByResourceId("in.droom:id/textView171") }
    get vehicleCount() { return base.getByTextContains("Vehicle Found in")}
    get closeRecord() { return base.getByResourceId("in.droom:id/deleteVehicleIV")}
    get selectFrom() { return base.getByResourceId("in.droom:id/selectManuallyTV") }
    get orSearch() { return base.getByResourceId("in.droom:id/searchTV") }
    get make() { return base.getByResourceId("in.droom:id/sp_buy_make")}
    get selectMake() { return base.getByResourceId("in.droom:id/tv_tinted_spinner")}
    get model() { return base.getByResourceId("in.droom:id/sp_buy_model")}
    get selectModel() { return base.getByResourceId("in.droom:id/tv_tinted_spinner")}ƒ
    get year() { return base.getByResourceId("in.droom:id/sp_buy_year")}
    get selectyear() { return base.getByResourceId("in.droom:id/tv_tinted_spinner") }
    get trim() { return base.getByResourceId("in.droom:id/sp_buy_trim") }
    get selectTrim() { return base.getByResourceId("in.droom:id/tv_tinted_spinner") }
    get submitR() { return base.getByResourceId("in.droom:id/menu_my_requirement")}
    get droomSugg() { return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Let Droom Suggest for you"`]') }
    get lookingFor() { return base.getByText("Price Range") }
    get priceRange() { return base.getByAccessibilityID("Price Range")}
    get body() { return base.getByText("Body Type") }
    get age() { return base.getByText("Year Range") }
    get budget() { return base.getByText("What Is Your Budget?") }
    get fuelType() { return base.getByAccessibilityID('Fuel Type') }
    get fuleTypes() { return base.getByAccessibilityID('Fuel Type') }
    get petrol() { return base.getByAccessibilityID('Petrol') }
    get diesel(){return base.getByAccessibilityID('Diesel')}
    get kmsDrivenRange(){return base.getByAccessibilityID('Km Driven Range')}
    get selectExtColor(){return base.getByAccessibilityID('Select Exterior Color')}
    get transmissionType(){return base.getByAccessibilityID('Transmission Type')}
    get lastStep() { return base.getByAccessibilityID('Last Step & Explore the Vehicles') }
    get insurance() { return base.getByAccessibilityID('Insurance') }
    get loan() { return base.getByAccessibilityID('Loan') }
    get RCTransfer() { return base.getByAccessibilityID('RC Transfer')}
    get roadSideAssistance() { return base.getByAccessibilityID('Road Side Assistance')}
    get almostDone() { return base.getByText("You are Almost Done!") }
    get submitAndView() { return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Submit & View all Matches"`]')}
    get continueWithMblNo(){return base.getByAccessibilityID("Continue with Mobile No.")}
    get phnNumber(){return base.getByClassChain('**/XCUIElementTypeTextField[`value == "Phone Number"`]')}
    get continue(){return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Continue"`]')}
    get requirements() { return base.getByResourceId("in.droom:id/viewRequirements") }
    get moreBtn() {return base.getByResourceId("in.droom:id/txt_more")}
    get redColor() { return base.getByClassChain('**/XCUIElementTypeButton[`value == "red"`]') }
    get balckColor(){return base.getByClassChain('**/XCUIElementTypeButton[`value == "black"`]')}
    get laststepExploreVehicle(){return base.getByAccessibilityID('Last Step & Explore the Vehicles')}
    get oneLastStepBeforeMatch(){return base.getByAccessibilityID('One Last Step before we Get Matches')}
    get kmsSlider(){return base.getByClassChain('**/XCUIElementTypeOther[`label == "kms_driven, Maximum value in slider, Minimum value in slider, Right Handle, Left Handle"`]')}
    get extColor() { return base.getByResourceIdNText("in.droom:id/txt_km_driven","Red") }
    get transmissionType() { return base.getByAccessibilityID('Transmission Type') }
    get manualTransmission(){return base.getByAccessibilityID('Manual')}
    get automaticTransmission() { return base.getByAccessibilityID('Automatic') }
    get flexibleTransmission() { return base.getByResourceId("in.droom:id/radio_flexible_for_transmission_RV") }
    get buy(){returnbase.getByAccessibilityID('Buy')}
    get submit() { return $('//span[text()="Submit "]') }
    get basicDetails() { return $('//h5[text()="Now Share Your Dream Vehicle Basic Details"]') }
    get backBtn() { return $('//button[@class="s-MuiButtonBase-root s-MuiIconButton-root"]//span[@class="s-MuiIconButton-label"]//*[local-name()="svg"]') }
    get carCancel() { return $('(//div[@role="button"]//*[local-name()="svg"])[1]') }
    get droomSuggcar() { return $('(//div[@class="s-MuiAvatar-root s-s102 s-MuiAvatar-circle s-s102"])[3]') }
    get more() { return $('//p[text()="Add More Detail "]') }
    get goBack() { return $('//*[name()="path" and contains(@d,"M20 11H7.8")]') }
    get service() { return $('(//div[@class="r-MuiGrid-root r-r25 r-MuiGrid-item r-MuiGrid-grid-xs-12 r-MuiGrid-grid-sm-6 r-MuiGrid-grid-md-3"])[1]') }
    get needToBuy() { return $('(//div[@class="r-MuiGrid-root r-r25 r-MuiGrid-item r-MuiGrid-grid-xs-12 r-MuiGrid-grid-sm-6 r-MuiGrid-grid-md-3"])[2]') }
    get exchangeV() { return $('(//div[@class="r-MuiGrid-root r-r25 r-MuiGrid-item r-MuiGrid-grid-xs-12 r-MuiGrid-grid-sm-6 r-MuiGrid-grid-md-3"])[2]') }
    get howQuicklyUwantBuy(){return base.getByAccessibilityID("How Quickly Do You Want to Buy?")}
    get withinFourDay() { return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Within 4 Days"`]') }
    get doUwishExchange(){return base.getByAccessibilityID('Do You Wish to Exchange Your Vehicle? (optional)')}
    get exchange() { return base.getByClassChain('(//span[@class="s-MuiIconButton-label"])[12]') }
    get kms() { return $('//input[@id="exchange_kms_driven"]') }
    get records() { return $('//h3[@class="bm-MuiTypography-root bm-bm80 bm-MuiTypography-h3 bm-MuiTypography-noWrap"]') }
    get seller() { return $('//p[@class="s-MuiTypography-root s-MuiTypography-body1"]') }
    get ageofV() { return $('//div[@class="s-MuiButtonBase-root s-MuiChip-root s-s270 s-MuiChip-outlined s-MuiChip-clickable"]') }
    get sorce() { return $('(//div[@class="noUi-touch-area"])[2]') }
    get target() { return $('//div[@aria-valuenow="15000000.0"]') }
    get scle() { return $('(//div[@class="noUi-connect"])[1]') }
    get closeBtn() { return $('//button[@class="close em-show-later"]') }
    get home() { return $('//a[normalize-space()="Home"]') }
    get budgetBar() { return $('(//div[@class="noUi-connect"])[1]') }
    get Kmsbar() { return $('(//div[@class="noUi-connect"])[2]') }
    get kmsrange() { return base.getByAccessibilityID('Km Driven Range') }
    get exchangeVehicle() { return $('//p[text()="Do You Wish to Exchange Your Vehicle"]') }

    async traverseToCreateRequirement() {
        await base.skipStartup()
        await base.iosLoginAsBuyer()
        await this.m
    }

    async submitRequirement() {
        await base.scrollToTextContain("My Requirements")
        await (await this.myReq).click()    
        await (await this.newRequirements).click()
    }
    async carCondition() {
        
        await (await this.car).touchAction('tap') 
        await (await this.usedButton).touchAction('tap') 
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
        await (await this.newButton).touchAction('tap')
        await (await this.usedButton).touchAction('tap')
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
        await (await this.swift).click()
        await (await this.swift).addValue("Maruti Suzuki swift")
        await driver.pause(5000)
        await driver.pressKeyCode(20)//down arrow
        await driver.pressKeyCode(20)//down arrow
        await driver.pressKeyCode(20)//down arrow
        await driver.pause(2000)
        await driver.pressKeyCode(66)//Enter
        await driver.pause(2000)
        await driver.hideKeyboard()
    }
    async deleteCarRecord() {
        await (await this.closeRecord).click()
    }
    async slectFromDropDown() {
        try {
            //await (await this.addBtn).click()  
        } catch (error) {       
        } 
        await (await this.selectFrom).touchAction('tap')
        await (await this.make).waitForExist({ timeout: 5000 })
    }
    async selectVehicle() {
        await (await this.make).touchAction('tap')
        await (await this.selectMake).touchAction('tap')
        //await driver.pause(2000)
        await (await this.model).touchAction('tap')
        await (await this.selectModel).waitForExist()
        await (await this.selectModel).touchAction('tap')
        //await driver.pause(2000)
        await (await this.year).touchAction('tap')
        await (await this.selectyear).waitForExist()
        await (await this.selectyear).touchAction('tap')
        //await driver.pause(2000)
        await (await this.trim).touchAction('tap')
        await (await this.selectTrim).waitForExist()
        await (await this.selectTrim).touchAction('tap')
        await driver.pause(2000)
    }
    async basicDetailsDisplay() {
        await (await this.basicDetails).waitForExist({ timeout: 5000 })
    }
    async clickOnBack() {
        await (await this.backBtn).click()
        await (await this.carCancel).click()
    }
    async letDroomSuggest() {
        await (await this.droomSugg).click()
        await (await this.lookingFor).waitForDisplayed({ timeout: 5000 })
    }
    async clickOnGoBack() {
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
        await (await this.requirements).click()
    }
    async clickOnSubmitRequirements() {
        await (await this.newRequirements).click()
    }
    async selectColor() {
        await (await this.redColor).touchAction('tap')
    }
    async selectAutomatic() {
        await(await this.flexibleTransmission).scrollIntoView()
        await(await this.flexibleTransmission).touchAction('tap')
        await (await this.automatic).touchAction('tap')
    }
    async selectDoYouAlsoNeed() {
        await (await this.lastStep).waitForExist({ timeout: 5000 })
        await (await this.insurance).touchAction('tap')
        await (await this.loan).touchAction('tap')
        await (await this.RCTransfer).touchAction('tap')
        await (await this.roadSideAssistance).touchAction('tap')
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
    async closePopUp()
    {
        await (await this.closeBtn).click()
    }
}
module.exports = new Usedcar();