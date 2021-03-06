
const base = require("../../BaseClass/base")
class Usedcar {
    get menu() {return base.getByText('Menu')}
    get buy() {return base.getByText("Buy")}
    get carimg() {return base.getByText('Car Car')}//  Bike S Scooter
    get caroption() {return base.getByText("Car")}
    get scooteroption() {return base.getByText("Scooter")}
    get newRadio() {return base.getByText("New")}
    get usedRadio() {return base.getByText("Used")}
    get textFieldLocation(){return base.getByResourceId("react-select-2-input")}
    get locationLbl(){return base.getByText("Location")}
    get searchField(){return base.getByResourceId("req_mmyt")}
    get location() {return base.getByResourceId("Pune, Maharashtra, India")}
    get searchLocation() {return base.getByText("Search My Location")}
    get currentLocation(){return base.getByText("Current Location")}
    get TypeToLocation(){return base.getByText("Type to search Location")}
    get cityName() {return base.getByText("Delhi, India")}
     get pune() {return base.getByText("Pune, Maharashtra, India")}
    get nextBtn() {return base.getByText("Next")}
    get errormsg() {return base.getByText("Please Select The City")}
    get heading1() {return base.getByText("Select, What You Want To Buy !")}
    get heading2() {return base.getByText("Let's Find Your Dream Car")}
    get subHeading() {return base.getByText("Search or Select Car you are looking for")}
    get enterVehicleHeading() {return base.getByText("Enter Your Vehicle Details")}
    //get searchField() {return base.getByText("Enter Vehicle Name")}
    get droomSuggest() {return base.getByText("Let Droom Suggest for you")}
   // get selectVehicle() {return base.getByText("Select Vehicle")}
   get myReq(){return base.getByText("My Requirements")}
   get addNewReq(){return base.getByText("+ Add New Requirement")}
   get selectVehicle() {return base.getByResourceId("in.droom:id/selectManuallyTV")}
    get car1() {return base.getByText("Maruti Suzuki Ertiga VDi 2015")}
    get priceRange() {return base.getByText("Price Range")}
    get bodyType() {return base.getByText("Body Type")}
    get selecttype() {return base.getByText("SUV")}
    get yearRange() {return base.getByText("Age of Vehicle")}
    get selectyear() {return base.getByText("2018 & Above")}
    get heading6() {return base.getByText("Select vehicles as per Your Budget, Purpose of buying & Family Size")}
    get vehicle1() {return base.getByText("Hyundai Creta")}
    get budget() { return base.getByText("What is Your Budget?") }
    get selectMake() {return base.getByText("Select Make")}
    get selectModel() {return base.getByText("Select Model")}
    get selectYear()  {return base.getByText("Select Year")}
    get selectTrim() {return base.getByText("Select Trim")}

    //get selectMake() {return $("//label[text()='Select Make']")}
    //get selectModel() {return $("//label[text()='Select Model']")}
    //get selectYear()  {return $("//label[text()='Select Year']")}
    //get selectTrim() {return $("//label[text()='Select Trim']")}

    get makeoption() {return base.getByText("Acura")}
    get modeloption() {return base.getByText("TLX")}
    get yearoption() {return base.getByText("2018")}
    get trimoption() {return base.getByText("BASE")}
    get heading3() {return base.getByText("Now Share Your Dream Vehicle Basic Details")}
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
    get insurance() {return base.getByText("Insurance")}
    get loan() {return base.getByText("Loan")}
    get loantoggle() {return base.getByResourceId("in.droom:id/loan_toggle")}
    get rcTransfer() {return base.getByText("RC Transfer")}
    get roadAssistance() {return base.getByText("Road Side Assistance")}
    get quickBuy() {return base.getByText("How Quickly Do You Want to Buy?")}
    get weeks() {return base.getByText("1-4 Weeks")}
    get exchange() {return base.getByText("Do You Wish to Exchange Your Vehicle")}
    get exchangetoggle() {return base.getByText("Yes")}
    get submitheading() {return base.getByText("Great! More Information Gives Best Results")}
    get almostdone() {return base.getByText("You are Almost Done!")}
    get reqCount() {return base.getByText("We found 0 matches as per your requirement")}
    get selectFromDropDown(){return base.getByText("Select From Dropdown")}
   
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