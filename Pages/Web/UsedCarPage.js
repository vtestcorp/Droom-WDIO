
class Usedcar {
    get bike() { return $('//span[text()="Bike"]') }
    get submit() { return $('//span[text()="Submit "]') }
    get car() { return $('(//span[@class="s-MuiButton-label"])[1]') }
    get used() { return $('//span[text()="Used"]') }
    get carimg() { return $('//span[text()="Car"]') }
    get scooter() { return $('//span[text()="Scooter"]') }
    get newButton() { return $('(//span[text()="New"])[3]') }
    get used() { return $('//span[text()="Used"]') }
    get usedButton() { return $('(//span[@class="s-MuiIconButton-label"])[3]') }
    get newRButton() { return $('(//*[@class="s-MuiIconButton-label"])[2]') }
    get location() { return $('//p[text()="Location"]') }
    get currentLocation() { return $('//div[text()="Current Location"]') }
    get nextButton() { return $('//span[text()="Next "]') }
    get errorMsg() { return $('//p[text()="Please Select The City"]') }
    get vehicleDetails() { return $('//label[text()="Enter Your Vehicle Details"]') }
    get swift() { return $('//input[@placeholder="E.g Maruti Suzuki Swift 2017 LDI"]') }
    get selectSwift() { return $('(//li[@class="d-block d-margin-bottom-10 d-font-size-13"])[1]') }
    get carName() { return $('//span[@class="s-MuiChip-label"]') }
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
    get droomSugg() { return $('//button[text()="Let Droom Suggest for you"]') }
    get droomSuggcar() { return $('(//div[@class="s-MuiAvatar-root s-s102 s-MuiAvatar-circle s-s102"])[3]') }
    get lookingFor() { return $('//h5[text()="Let us know what you are looking for"]') }
    get gudget() { return $('//p[text()="What is Your Budget?"]') }
    get body() { return $('//p[text()="Body Type"]') }
    get age() { return $('//p[text()="Age of Vehicle"]') }
    get more() { return $('//p[text()="Add More Detail "]') }
    get goBack() { return $('//*[name()="path" and contains(@d,"M20 11H7.8")]') }
    get fuelType() { return $('//p[text()="Fuel Type"]') }
    get petrol() { return $('(//span[@class="s-MuiIconButton-label"])[3]') }
    get fuleTypes() { return $('//div[@class="r-MuiBox-root r-r133"]') }
    get almostDone() { return $('//h5[text()="You are Almost Done!"]') }
    get submitAndView() { return $('//span[text()="Submit & View All Matches "]') }
    get requirements() { return $('//span[text()=" View all Requirements "]') }
    get newRequirements() { return $('//span[text()=" + Add New Requirement"]') }
    get submitR() { return $('//span[contains(text(),"Submit")]') }
    get redColor() { return $('//input[@value="red"]') }
    get extColor() { return $('//div[@class="r-MuiBox-root r-r136"]') }
    get automatic() { return $('//img[@alt="Automatic"]') }
    get transmissionType() { return $('//div[@class="r-MuiBox-root r-r130"]') }
    get lastStep() { return $('//h5[text()="Last Step to Go! "]') }
    get insurance() { return $('(//span[@class="s-MuiIconButton-label"])[2]') }
    get loan() { return $('(//span[@class="s-MuiIconButton-label"])[3]') }
    get RCTransfer() { return $('(//span[@class="s-MuiIconButton-label"])[4]') }
    get roadSideAssistance() { return $('(//span[@class="s-MuiIconButton-label"])[5]') }
    get service() { return $('(//div[@class="r-MuiGrid-root r-r25 r-MuiGrid-item r-MuiGrid-grid-xs-12 r-MuiGrid-grid-sm-6 r-MuiGrid-grid-md-3"])[1]') }
    get needToBuy() { return $('(//div[@class="r-MuiGrid-root r-r25 r-MuiGrid-item r-MuiGrid-grid-xs-12 r-MuiGrid-grid-sm-6 r-MuiGrid-grid-md-3"])[2]') }
    get exchangeV() { return $('(//div[@class="r-MuiGrid-root r-r25 r-MuiGrid-item r-MuiGrid-grid-xs-12 r-MuiGrid-grid-sm-6 r-MuiGrid-grid-md-3"])[2]') }
    get withinFourDay() { return $('(//span[@class="s-MuiIconButton-label"])[8]') }
    get exchange() { return $('(//span[@class="s-MuiIconButton-label"])[12]') }
    get kms() { return $('//input[@id="exchange_kms_driven"]') }
    get records() { return $('//h3[@class="bm-MuiTypography-root bm-bm80 bm-MuiTypography-h3 bm-MuiTypography-noWrap"]') }
    get Transmission() { return $('(//span[@class="s-MuiButton-label"])[1]') }
    get seller() { return $('//p[@class="s-MuiTypography-root s-MuiTypography-body1"]') }
    get ageofV() { return $('//div[@class="s-MuiButtonBase-root s-MuiChip-root s-s270 s-MuiChip-outlined s-MuiChip-clickable"]') }
    get sorce() { return $('(//div[@class="noUi-touch-area"])[2]') }
    get target() { return $('//div[@aria-valuenow="15000000.0"]') }
    get scle() { return $('(//div[@class="noUi-connect"])[1]') }
    get closeBtn() { return $('//button[@class="close em-show-later"]') }
    get home() { return $('//a[normalize-space()="Home"]') }
    
    
    async submitRequirement() {
        await (await this.submit).click()
    }
    async carCondition() {
        await (await this.car).click()
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
    async basicDetailsDisplay() {
        await (await this.basicDetails).waitForExist({ timeout: 5000 })
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
        await (await this.submitR).click()
    }
    async selectColor() {
        await (await this.redColor).click()
    }
    async selectAutomatic() {
        await (await this.Transmission).click()
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
    async closePopUp()
    {
        await (await this.closeBtn).click()
    }
}
module.exports = new Usedcar();