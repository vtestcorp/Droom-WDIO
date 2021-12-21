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
    get selecttype() {return base.getByText("Sports")}
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

}

module.exports = new usedbikepage();