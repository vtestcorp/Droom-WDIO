const base = require("../../BaseClass/base")
class vehicleInsurance {
    get acceptcontinue() { return base.getByText('Accept & continue') }
    get next() { return base.getByText('Next') }
    get yes() { return base.getByText('No, thanks') }
    get heading(){return base.getByText("Get the Best Insurance Cover for your Vehicle")}
    get vehicle_Information() { return base.getByText('Vehicle Information') }
    get personal_Information() { return base.getByText('Personal Information') }
    get insurance_Information() { return base.getByText('Insurance Information') }
    get car() { return base.getByText('Car') }
    get bike() { return base.getByText('Bike') }
    get scooter() { return base.getByText('Scooter') }
    get EnterVehicle_Details() { return base.getByText('Enter Your Vehicle Details') }

   get selectDropDown() { return base.getByText('Select From Dropdown') }
 //get selectDropDown() { return $('//span[@class="d-text-blue text-left d-display-inline-block"]') }
    get Easy_Steps() { return base.getByText('Apply for Vehicle Insurance in 3 Easy Steps') }
    get next() { return base.getByText('Next') }
    get used_condition() { return base.getByResourceId("used-condition")}
    get new_condition() { return base.getByResourceId("new-condition") }
    get enterNo(){return base.getByResourceId("rcNumber")}    
    get makeDropDown() { return $('//select[@name="make"]') }
   get makeValue() { return $('//option[text()="Tata"]') }
   get modelDropdown() { return $('//select[@name="model"]') }
   get modelValue() { return $('//option[text()="Indigo"]') }
   get yearDropdown() { return $('//select[@name="year"]') }
   get yearValue() { return $('//option[text()="2003"]') }
   get trimDropDown() { return $('//select[@name="trim"]') }
   get trimValue() { return $('//option[text()="LS"]') }
   get selectCondition(){return base.getByText("Select Vehicle Condition")}
get selectType(){return base.getByText("Select a Vehicle Type")}
get vehicleDetails(){return base.getbyClass("android.widget.EditText")}
get pickModel(){return base.getByText("Tata Indigo LS 2003")}
get BackBtn1() { return $('//button[normalize-space()="Back"]') }
get name() { return $('//input[@name="first_name"]') }
get email() { return $('//input[@name="email"]') }
get phone() { return $('//input[@name="phone"]') }
 get nextBtn2() { return $('//button[@id="nextBtn2"]') }
 get phnVerificationPage(){return base.getByText("Phone Number Verification")}
    async chromeConditions() {
        await (await this.acceptcontinue).click()
        await (await this.next).click()
        await (await this.yes).click()
    }
    
}
module.exports = new vehicleInsurance();