const base = require("../../BaseClass/base")
class vehicleInsurance {
    get acceptcontinue() { return base.getByText('Accept & continue') }
    //get next() { return base.getByText('Next') }
    get yes() { return base.getByText('No, thanks') }

    get heading(){return base.getByText("Get the Best Insurance Cover for your Vehicle")}
    get vehicle_Information() { return base.getByText('Vehicle Information') }
    get personal_Information() { return base.getByText('Personal Information') }
    get insurance_Information() { return base.getByText('Insurance Information') }
    get car() { return base.getByResourceId('car') }
    get bike() { return base.getByResourceId('motorcycle/bike') }
    get scooter() { return base.getByResourceId('scooter') }
    get vehicle_Details() { return base.getByText('Enter Your Vehicle Details') }
    get select_Dropdown() { return base.getByText('Select From Dropdown') }
    get Easy_Steps() { return base.getByText('Apply for Vehicle Insurance in 3 Easy Steps') }
    get next() { return base.getByText('Next') }
    get used_condition() { return base.getByResourceId("used-condition")}
    get new_condition() { return base.getByResourceId("new-condition") }
    get enterNo(){return base.getByResourceId("rcNumber")}    
    get makeDropDown() { return base.getByText('Select Make') }
   get makeValue() { return base.getByText('Ariel') }
   get modelDropdown() { return base.getByText('Select Model') }
   get modelValue() { return base.getByText('Atom') }
   get yearDropdown() { return base.getByText('Select Year') }
   get yearValue() { return base.getByText('2008') }
   get trimDropDown() { return base.getByText('Select Trim') }
   get trimValue() { return base.getByText('ATOM 3') }
   get selectCondition(){return base.getByText("Select Vehicle Condition")}
   get selectType(){return base.getByText("Select a Vehicle Type")} 
get vehicleDetails(){return base.getByClass("android.widget.EditText")}
get pickModel(){return base.getByText("Tata Indigo LS 2003")}
get maruti(){return base.getByText('E.g Maruti Suzuki')}
//get choiceforVehicle(){return base.getByText('Tata Indigo CS LS TDI 2008')}
//get BackBtn1() { return base.getByResourceId('previous_btn') }
//get name() { return base.getByResourceId('name') }
//get email() { return base.getByResourceId('email') }
//get phone() { return base.getByText('Contact Number') }
 //get nextBtn2() { return base.getByResourceId('nextBtn2') }
 get phnVerificationPage(){return base.getByText("Phone Number Verification")}
get placeHolderFOrVehicle(){return $('//input[@name="product_title"]')}
 get BackBtn1() { return $('//button[normalize-space()="Back"]') }
get name() { return $('//input[@name="first_name"]') }
get email() { return $('//input[@name="email"]') }
get phone() { return $('//input[@name="phone"]') }
 get nextBtn2() { return $('//button[@id="nextBtn2"]') }
 get phnVerificationPage(){return base.getByText("Phone Number Verification")}

async input(){
    await (await this.makeDropDown).click()
    //await(await this.makeValue).waitForExist({ timeout: 5000 })
    await (await this.makeValue).click()
    await (await this.modelDropdown).click()
    //await(await this.modelValue).waitForExist({ timeout: 5000 })
    await base.swipeUp()
    await (await this.modelValue).click()
    await (await this.yearDropdown).click()
   // await(await this.yearValue).waitForExist({ timeout: 5000 })
    await(await this.yearValue).click()
    await (await this.trimDropDown).click()
    await (await this.trimValue).click()
}
    async chromeConditions() {
        await (await this.acceptcontinue).click()
        await (await this.next).click()
        await (await this.yes).click()
    }

    async switchToWebview() {
        let x = driver.getContexts()
            ; (await x).forEach(myFunction)
        function myFunction(elem) {
            if (elem.search("WEBVIEW") >= 0) {
                driver.switchContext(elem)
            }
        }

    }
    async switchToNativeApp() {
        let x = driver.getContexts()
            ; (await x).forEach(myFunction)
        function myFunction(elem) {
            if (elem.search("NATIVE_APP") >= 0) {
                driver.switchContext(elem)
            }
        }
    }

}
module.exports = new vehicleInsurance();