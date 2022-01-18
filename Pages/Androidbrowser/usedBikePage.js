const base = require("../../BaseClass/base")
class usedbike {
    
    get buy() {return base.getByText('Buy')}
    get bikeimg() {return base.getByText('Bike')}
    get caroption() {return base.getByText('Car')}
    get bikeoption() {return base.getByText("Bike Bike")}
    get addNewReq(){return base.getByText('+ Add New Requirement')}
    get scooteroption() {return base.getByText('Scooter Scooter')}
    get newRadio() {return base.getByText('New')}
    get usedRadio() {return base.getByText('Used')}
    get location() {return base.getByText('Location')}
    get currentLocation() {return base.getByText('Current Location')}
    get myReq(){return base.getByText("My Requirements")}
    get TypeToLocation(){return base.getByText("Select...")}
    get cityName() {return base.getByText("Pune, Maharashtra, India")}
    get nextBtn() {return base.getByText("Next")}
    get heading2() {return base.getByText("Let's Find Your Dream Bike")}
    get errormsg() {return base.getByText("Please Select The City")}
    get searchfield() {return base.getByText("E.g Bajaj Pulsar 2018 150cc")}
    get bike1() {return base.getByText("Bajaj Pulsar 180cc 2016")}
    get selectMake() {return base.getByText("Select Make")}
    get selectModel() {return base.getByText("Select Model")}
    get selectYear()  {return base.getByText("Select Year")}
    get selectTrim() {return base.getByText("Select Trim")}
    get makeoption() {return base.getByText("Bajaj")}
    get modeloption() {return base.getByText("Avenger")}
    get yearoption() {return base.getByText("2016")}
    get trimoption() {return base.getByText("220CC")}
    get selectvehiclefromdropdown() {return base.getByText("Select From Dropdown")}
    get heading3() {return base.getByText('Now Share Your Dream Vehicle Basic Details')}
    get droomSuggest() {return base.getByText('Let Droom Suggest for you')}
    get heading4() {return base.getByText('Let Us Know What You Are Looking For')}
    get budget() { return base.getByText("What is Your Budget?") }
    get heading6() {return base.getByText("Select vehicles as per Your Budget, Purpose of buying & Family Size")}
    get selecttype() {return base.getByText("Commuter")}
    get yearRange() {return base.getByText("Year Range")}
    get selectyear() {return base.getByText("2018 & Above")}
    get submitBtn() {return base.getByText("Submit")}
    get submitViewMatch() {return base.getByText("Submit & View all Matches")}
    get allrequirement() {return base.getByText("View All Requirements")}
    get priceRange() {return base.getByText("Below 1 Cr")}
    get extColor() {return base.getByText("Select Exterior Color")}
    get color1() {return base.getByResourceId("in.droom:id/smb_CardCV")}
    get doyouneedoption() {return base.getByText("Do You Also Need?")}
    get loan() {return base.getByText("Loan")}
    get loantoggle() {return base.getByResourceId("in.droom:id/loan_toggle")}
    get heading5() {return base.getByText("Great! More Information Gives Best Results")}
    get quickBuy() {return base.getByText("How Quickly Do You Want to Buy?")}
    get weeks() {return base.getByText("1-4 Weeks")}
    get lastStep() {return base.getByText("Last Step to Go! Few More Details")}
    get reqCount() {return base.getByText("We found 0 matches as per your requirement")}
    get exchange() {return base.getByText("Do You Wish to Exchange Your Vehicle")}
    get exchangetoggle() {return base.getByText("Yes")}
    get category() {return base.getByResourceId("exchage_category")}
    get exchngeMake() {return base.getByResourceId("exchage_make")}
    get exchangeModel() {return base.getByResourceId("exchage_model")}
    get exchngeYear() {return base.getByResourceId("exchage_year")}
    get exchngeTrim() {return base.getByResourceId("exchage_trim")}
    get kms() {return base.getByText("Enter KM Driven")}
    get bikeCategory() {return base.getByText("Bike")}
    get make() {return base.getByText("Aftek")}
    get model(){return base.getByText("Royal Plus")}
    get year() {return base.getByText("2020")}
    get trim() {return base.getByText("110CC")}
    //get selectMake() {return $("//label[text()='Select Make']")}
    //get selectModel() {return $("//label[text()='Select Model']")}
    //get selectYear()  {return $("//label[text()='Select Year']")}
    //get selectTrim() {return $("//label[text()='Select Trim']")}

  
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
        base.swipeUp()
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
    module.exports = new usedbike();

