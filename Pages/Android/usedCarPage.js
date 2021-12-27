
const base = require("../../BaseClass/base")

class Usedcar {
    get menu() {return base.getByText("Menu")}
    get buy() {return base.getByText("Buy")}
    get carimg() {return base.getByResourceIdNText("in.droom:id/category_name","Car")}
    get caroption() {return base.getByText("Car")}
    get scooteroption() {return base.getByText("Scooter")}
    get newRadio() {return base.getByResourceId("in.droom:id/newRadioButton")}
    get usedRadio() {return base.getByResourceId("in.droom:id/usedRadioButton")}
    get location() {return base.getByResourceId("in.droom:id/autoCompleteEditText")}
    get searchLocation() {return base.getByText("Search My Location")}
    get cityName() {return base.getByText("Pune")}
    get nextBtn() {return base.getByText("Next")}
    get errormsg() {return base.getByText("Please select location")}
    get heading1() {return base.getByText("Select, What You Want To Buy !")}
    get heading2() {return base.getByText("Let's Find Your Dream Car")}
    get subHeading() {return base.getByText("Search or Select Car you are looking for")}
    get enterVehicleHeading() {return base.getByText("Enter Your Vehicle Details")}
    get searchField() {return base.getByText("Enter Vehicle Name")}
    get droomSuggest() {return base.getByText("Let Droom Suggest for you")}
   // get selectVehicle() {return base.getByText("Select Vehicle")}
   get selectVehicle() {return base.getByResourceId("in.droom:id/selectManuallyTV")}
    get car1() {return base.getByText("Maruti Suzuki Ertiga VDi 2015")}
    get priceRange() {return base.getByText("Price Range")}
    get bodyType() {return base.getByResourceId("in.droom:id/bodyTypeHeadingTV")}
    get selecttype() {return base.getByText("SUV")}
    get yearRange() {return base.getByText("Year Range")}
    get selectyear() {return base.getByText("2018 & Above")}
    get heading6() {return base.getByText("Select vehicles as per Your Budget, Purpose of buying & Family Size")}
    get vehicle1() {return base.getByText("Hyundai Creta")}
    get budget() { return base.getByText("What Is Your Budget?") }
    get selectMake() {return base.getByText("Select Make")}
    get selectModel() {return base.getByText("Select Model")}
    get selectYear()  {return base.getByText("Select Year")}
    get selectTrim() {return base.getByText("Select Trim")}
    get makeoption() {return base.getByText("Acura")}
    get modeloption() {return base.getByText("TLX")}
    get yearoption() {return base.getByText("2018")}
    get trimoption() {return base.getByText("BASE")}
    get heading3() {return base.getByResourceId("in.droom:id/lookingForTV")}
    get selectCar() {return base.getByResourceId("in.droom:id/makeModelYearTrimTV")}
    get addmoreVehicle() {return base.getByResourceId("in.droom:id/addMoreVehicleBTN")}
    get budget() {return base.getByText("What Is Your Budget?")}
    get submitBtn() {return base.getByText("Submit")}
    get submitViewMatch() {return base.getByText("Submit & View all Matches")}
    get allrequirement() {return base.getByText("View All Requirements")}
    get priceRange() {return base.getByText("Below 1 Cr")}
    get fuelType() {return base.getByText("Fuel Type")}
    get fueltoggle() {return base.getByText("OFF")}
    get fuel() {return base.getByResourceId("in.droom:id/switch_label")}
    get kmDrivenRange() {return base.getByText("KM Driven Range")}
    get kmSlider() {return base.getByResourceId("in.droom:id/kmDrivenSlider")}
    get extColor() {return base.getByText("Select Exterior Color")}
    get color1() {return base.getByResourceId("in.droom:id/smb_CardCV")}
    get transmissionType() {return base.getByResourceId("in.droom:id/transmissionTypeTV")}
    get type1() {return base.getByResourceId("in.droom:id/autoCompleteTextView")}
    get lastStep() {return base.getByText("Last Step to Go! Few More Details")}
    get doyouNeed() {return base.getByResourceId("in.droom:id/txt_are_you_flexible_for")}
    get insurance() {return base.getByResourceId("in.droom:id/txt_insurance")}
    get loan() {return base.getByResourceId("in.droom:id/txt_smb_loan")}
    get loantoggle() {return base.getByResourceId("in.droom:id/loan_toggle")}
    get rcTransfer() {return base.getByResourceId("in.droom:id/txt_rc_transfer")}
    get roadAssistance() {return base.getByResourceId("in.droom:id/txt_road_side_assitance")}
    get quickBuy() {return base.getByResourceId("in.droom:id/txt_how_quickly_do_you_want_to_buy")}
    get weeks() {return base.getByResourceId("in.droom:id/radio_one_four_week")}
    get exchange() {return base.getByResourceId("in.droom:id/txt_do_you_wish_to_exchange_your_vehicle")}
    get exchangetoggle() {return base.getByResourceId("in.droom:id/yes_toggle")}
    get submitheading() {return base.getByText("Great! More Information Gives Best Results")}
    get almostdone() {return base.getByText("You are Almost Done!")}
    get reqCount() {return base.getByText("We found 0 matches as per your requirement")}

   
    
   
    async droomSuggestCar(){
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

       async selectVehicleFromDropdown(){
        await (await this.selectMake).click()
        await (await this.makeoption).click()
        console.log("selected Make value")
        await (await this.selectModel).click()
        await (await this.modeloption).click()
        console.log("selected Model value")
        await (await this.selectYear).click()
        await (await this.yearoption).click()
        console.log("selected Year")
        await (await this.selectTrim).click()
        await (await this.trimoption).click()
        console.log("selected Trim Option")
        console.log("selected Car as per requirement")

       }

}
module.exports = new Usedcar();