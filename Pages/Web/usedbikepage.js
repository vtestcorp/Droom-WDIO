
class UsedBike {
    get bike() { return $('//span[text()="Bike"]') }
    get submit() { return $('//span[text()="Submit "]') }
    get Bike() { return $('(//span[@class="s-MuiButton-label"])[2]') }
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
    get droomSugg() { return $('//button[text()="Let Droom Suggest for you"]') }
    get lookingFor() { return $('//h5[text()="Let us know what you are looking for"]') }
    get budget() { return $('//p[text()="What is Your Budget?"]') }
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
        await (await this.requirements).waitForExist({ timeout: 7000 })
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
}
module.exports = new UsedBike();