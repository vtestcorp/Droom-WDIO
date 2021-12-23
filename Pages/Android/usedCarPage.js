
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
    get heading3() {return base.getByText("Select the Vehicle Entering Make, Model, Year & trim")}
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

   /*// get myReq() { return base.getByResourceId("in.droom:id/textview_my_requirement") }
  //  get newRequirements() { return base.getByResourceId("in.droom:id/addNewRequirement") }
   // get car() { return base.getByResourceId("in.droom:id/carLayout") }
    get usedButton() { return base.getByResourceId("in.droom:id/usedRadioButton") }
    get bike() { return base.getByResourceId("in.droom:id/bikeLayout") }
    get scooter() { return base.getByResourceId("in.droom:id/scooterLayout") }
   // get carimg() { return base.getByResourceId("in.droom:id/carLayout") }
    get newButton() { return base.getByResourceId("in.droom:id/newRadioButton") }
    get location() { return base.getByResourceIdNText("in.droom:id/autoCompleteEditText","Select Location") }
    get nextButton() { return base.getByText("Next") }
    get currentLocation() { return base.getByResourceId("in.droom:id/detectLocationTV")}
    get errorMsg() { return base.getByText("Please select location")}
    get vehicleDetails() { return base.getByResourceId("in.droom:id/txt_enter_vehicle_details") }
    get swift() { return base.getByResourceId("in.droom:id/search_view") }
    get selectSwift() { return base.getByTextContains("Maruti Suzuki") }
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
    get selectModel() { return base.getByResourceId("in.droom:id/tv_tinted_spinner")}
    get year() { return base.getByResourceId("in.droom:id/sp_buy_year")}
    get selectyear() { return base.getByResourceId("in.droom:id/tv_tinted_spinner") }
    get trim() { return base.getByResourceId("in.droom:id/sp_buy_trim") }
    get selectTrim() { return base.getByResourceId("in.droom:id/tv_tinted_spinner") }
    get submitR() { return base.getByResourceId("in.droom:id/menu_my_requirement")}
    get droomSugg() { return base.getByResourceId("in.droom:id/droomSuggestBTN") }
    get lookingFor() { return base.getByText("Price Range") }
    get priceRange() { return base.getByTextContains("Price Range")}
    get body() { return base.getByText("Body Type") }
    get age() { return base.getByText("Year Range") }
   // get budget() { return base.getByText("What Is Your Budget?") }
    get fuelType() { return base.getByText("Fuel Type") }
    get petrol() { return base.getByClassNIndex("android.widget.Switch","0") }
    get lastStep() { return base.getByResourceIdNIndex("in.droom:id/headingTextView","2") }
    get insurance() { return base.getByResourceId("in.droom:id/insurance_toggle") }
    get loan() { return base.getByResourceId("in.droom:id/loan_toggle") }
    get RCTransfer() { return base.getByResourceId("in.droom:id/rc_transfer_toggle")}
    get roadSideAssistance() { return base.getByResourceId("in.droom:id/road_side_assitance_toggle")}
    get almostDone() { return base.getByText("You are Almost Done!") }
    get submitAndView() { return base.getByText("Submit & View all Matches")}
    get requirements() { return base.getByResourceId("in.droom:id/viewRequirements") }
    get moreBtn() {return base.getByResourceId("in.droom:id/txt_more")}
    get fuleTypes() { return base.getByResourceId("in.droom:id/petrol_view") }
    get redColor() { return base.getByResourceIdNIndex("in.droom:id/smb_CardCV","0") }
    get extColor() { return base.getByResourceIdNText("in.droom:id/txt_km_driven","Red") }
    get transmissionType() { return base.getByResourceIdNText("in.droom:id/txt_km_driven","Automatic") }
    get automatic() { return base.getByResourceIdNIndex("in.droom:id/icon_card_view","0") }
    get flexibleTransmission() { return base.getByResourceId("in.droom:id/radio_flexible_for_transmission_RV") }
    */
    
   
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