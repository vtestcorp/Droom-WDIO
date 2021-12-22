const base = require('../../BaseClass/base')

class usedbikepage{
    get menu() {return base.getByText("Menu")}
    get buy() {return base.getByText("Buy")}
    get bikeimg() {return base.getByResourceIdNText("in.droom:id/category_name","Bike")}
    get caroption() {return base.getByText("Car")}
    get bikeoption() {return base.getByText("Bike")}
    get scooteroption() {return base.getByText("Scooter")}
    get newRadio() {return base.getByResourceId("in.droom:id/newRadioButton")}
    get usedRadio() {return base.getByResourceId("in.droom:id/usedRadioButton")}
    get location() {return base.getByResourceId("in.droom:id/autoCompleteEditText")}
    get searchLocation() {return base.getByText("Search My Location")}
    get nextBtn() {return base.getByText("Next")}
    get errormsg() {return base.getByText("Please select location")}
    get cityName() {return base.getByText("Pune")}
    get heading1() {return base.getByText("Let's Find Your Dream Bike")}
    get searchfield() {return base.getByText("Enter Vehicle Name")}
    get selectVehicle() {return base.getByResourceId("in.droom:id/selectManuallyTV")}
    get selectMake() {return base.getByText("Select Make")}
    get selectModel() {return base.getByText("Select Model")}
    get selectYear()  {return base.getByText("Select Year")}
    get selectTrim() {return base.getByText("Select Trim")}
    get makeoption() {return base.getByText("Bajaj")}
    get modeloption() {return base.getByText("Avenger")}
    get yearoption() {return base.getByText("2016")}
    get trimoption() {return base.getByText("220CC")}
    get bikeName() {return base.getByResourceId("in.droom:id/makeModelYearTrimTV")}
    get addmoreVehicle() {return base.getByResourceId("in.droom:id/addMoreVehicleBTN")}
    get droomSuggest() {return base.getByResourceId("in.droom:id/droomSuggestBTN")}
    get heading2() {return base.getByText("Get Personalised Suggestion")}
    get priceRange() {return base.getByText("Price Range")}
    get bodyType() {return base.getByResourceId("in.droom:id/bodyTypeHeadingTV")}
    get selecttype() {return base.getByText("Commuter")}
    get yearRange() {return base.getByText("Year Range")}
    get selectyear() {return base.getByText("2018 & Above")}
    get heading3() {return base.getByText("Now Share Your Dream Vehicle Basic Details")}
    get extcolor() {return base.getByResourceId("in.droom:id/txt_select_exterior_color")}
    get color() {return base.getByResourceId("in.droom:id/smb_CardCV")}
    get heading4() {return base.getByText("Last Step to Go! Few More Details")}
    get doyouneedoption() {return base.getByText("Do You Also Need?")}
    get loan() {return base.getByResourceId("in.droom:id/txt_smb_loan")}
    get loantoggle() {return base.getByResourceId("in.droom:id/loan_toggle")}
    get heading5() {return base.getByText("Great! More Information Gives Best Results")}
    get submitBtn() {return base.getByText("Submit")}
    get quickyBuy() {return base.getByText("How Quickly Do You Want to Buy?")}
    get duration() {return base.getByResourceId("in.droom:id/radio_one_four_week")}
    get budget() {return base.getByText("What Is Your Budget?")}
    get priceslider() {return base.getByResourceId("in.droom:id/priceRangeSlider")}
    get submitViewMatch() {return base.getByText("Submit & View all Matches")}
    get allrequirement() {return base.getByText("View All Requirements")}
    get priceRange() {return base.getByText("Below 1 Cr")}
    get kmDriven() {return base.getByText("KM Driven Range")}
    get kmSlider() {return base.getByResourceId("in.droom:id/kmDrivenSlider")}
    get exchange() {return base.getByResourceId("in.droom:id/txt_do_you_wish_to_exchange_your_vehicle")}
    get exchangetoggle() {return base.getByResourceId("in.droom:id/yes_toggle")}
    get category() {return base.getByResourceId("in.droom:id/sp_buy_category")}
    get exchngeMake() {return base.getByResourceId("in.droom:id/sp_buy_make")}
    get exchangeModel() {return base.getByResourceId("in.droom:id/sp_buy_model")}
    get exchngeYear() {return base.getByResourceId("in.droom:id/sp_buy_year")}
    get exchngeTrim() {return base.getByResourceId("in.droom:id/sp_buy_trim")}
    get kms() {return base.getByText("KM Driven")}
    get bikeCategory() {return base.getByText("Bike")}
    get make() {return base.getByText("Aftek")}
    get model(){return base.getByText("Royal Plus")}
    get year() {return base.getByText("2020")}
    get trim() {return base.getByText("110CC")}
    get addnewRequirement() {return base.getByResourceId("in.droom:id/addNewRequirement")}
    get heading6() {return base.getByText("Select vehicles as per Your Budget, Purpose of buying & Family Size")}
    get vehicle1() {return base.getByText("Bajaj Pulsar")}




    async selectBikeVehicle() {
        await (await this.selectMake).click()
        await (await this.makeoption).click()
        await (await this.selectModel).click()
        await (await this.modeloption).click()
        await (await this.selectYear).click()
        await (await this.yearoption).click()
        await (await this.selectTrim).click()
        await (await this.trimoption).click()
        console.log("selected Bike as per requirement")
    }

    async droomSuggestBike(){
        await (await this.selecttype).click()
        console.log("body type selected")
        base.swipeUp()
        expect(await this.yearRange).toBeDisplayed()
        console.log('Year Range Displayed')
        await (await this.selectyear).click()
        console.log("Year selected")
        await (await this.nextBtn).click()
        console.log("clicked on Next button")
       }

       async exchangeBike(){
        await (await this.category).click()
        await (await this.bikeCategory).click()
        console.log("Bike category selected")
        await (await this.exchngeMake).click()
        await (await this.make).click()
        await (await this.exchangeModel).click()
        await (await this.model).click()
        await (await this.exchngeYear).click()
        await (await this.year).click()
        await (await this.exchngeTrim).click()
        await (await this.trim).click()
        await (await this.kms).click()
        console.log("Clicked on KmsDriven")
        await driver.hideKeyboard()
        driver.pressKeyCode(9, undefined, undefined);
        await driver.pressKeyCode(7, undefined, undefined);
        await driver.pressKeyCode(7, undefined, undefined);
        console.log("Set the value for KMS driven")
        console.log("selected Bike as per requirement")
       }

}

module.exports = new usedbikepage();