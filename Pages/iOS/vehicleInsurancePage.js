const base = require("../../BaseClass/base");

class VehicleInsurance {
   get menu() {return base.getByAccessibilityID('Menu')}
   //get menu(){return base.getByClassChain('**/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther[6]/XCUIElementTypeImage')}
   get services() {return base.getByPredicateString('label == "Others"')}
   get sideMenuOthers(){return base.getByAccessibilityID('sidemenu-others')}
   get buy() { return base.getByAccessibilityID('Buy') }
   get services(){return base.getByAccessibilityID('homepopup-buy-service')}
   get loan() { return base.getByAccessibilityID("Loan") }
   get loanInsurance() { return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Loan & Insurance"`][2]') } 
   get loanInsuranceIcon(){return base.getByClassChain('**/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeImage')}
   get insurance() { return base.getByAccessibilityID("Insurance") }
   get insuranceIcon(){return base.getByClassChain('**/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeImage')}
   get proceed() { return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Proceed"`]') }
   get ok(){return base.getByAccessibilityID('OK')}
   get close_OTP(){return base.getByAccessibilityID('Cross Btn')}
   get cancel(){return base.getByAccessibilityID('Cancel')}
   get done(){return base.getByAccessibilityID('Done')}
 //  get fullname_field() { return base.getByClassChain("**/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[1]/XCUIElementTypeTextField") }
 //  get email_id_field() { return base.getByResourceId("**/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[2]/XCUIElementTypeTextField") }
  // get contact_number_field() { return base.getByClassChain("**/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[3]/XCUIElementTypeTextField") }
   //get location_field() { return base.getByClassChain("**/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[4]/XCUIElementTypeButton") }
   get location_field(){return base.getByClassChain('**/XCUIElementTypeTextField[`value == "Pune"`]')}
   get fullname_field() { return base.getByClassChain('**/XCUIElementTypeTextField[`value == "Vtest1"`]')}
   get email_id_field() { return base.getByClassChain('**/XCUIElementTypeTextField[`value == "vtest1@gmail.com"`]')}
   get contact_number_field() {return base.getByClassChain('**/XCUIElementTypeTextField[`value == "9999999999"`]')}
   get btn_next_step1() { return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Proceed to Step 2"`]') }
   //get radio_yes() { return base.getByResourceId("in.droom:id/radio_yes") }
   get imgViewFor_location_field() { return base.getByResourceId("in.droom:id/imgViewFor_location_field") }
   get location() { return base.getByText("Search My Location") }
   get pune() { return base.getByText("Pune, Maharashtra") }
   //get vehicleType() { return base.getByClassChain('**/XCUIElementTypeTextField[`value == "Select Vehicle Type"`]') }
   get vehicleType(){return base.getByPredicateString('value == "Select Vehicle Type" AND type == "XCUIElementTypeTextField"')}
   get arrowVehicletype(){return base.getByClassChain('**/XCUIElementTypeImage[`name == "downArrowInCategory"`][1]')}
   get personalInformation() { return base.getByAccessibilityID('Personal Information') }
   get vehicleInformation() { return base.getByAccessibilityID('Vehicle Information') }
   get insuranceInformation() { return base.getByAccessibilityID('Insurance Information') }
   get car() { return base.getByClassChain('**/XCUIElementTypePickerWheel[`value == "Car"`]') }
   get textinput_placeholder() { return base.getByResourceId("in.droom:id/textinput_placeholder") }
   get makeModelTrimYear(){return base.getByClassChain('**/XCUIElementTypeTextField[`value == "Enter Vehicle Make Model Trim Year"`]')}
   get make() { return base.getByClassChain('**/XCUIElementTypeTextField[`value == "Select Make"`]') }
   get makearrow(){return base.getByClassChain('**/XCUIElementTypeImage[`name == "downArrowInCategory"`][2]')}
   get ariel(){return base.getByClassChain('**/XCUIElementTypePickerWheel[`value == "Ariel"`]')}
   get model() { return base.getByClassChain('**/XCUIElementTypeTextField[`value == "Select Model"`]') }
get arrowModel(){return base.getByClassChain('**/XCUIElementTypeImage[`name == "downArrowInCategory"`][3]')}
   get atom(){return base.getByClassChain('**/XCUIElementTypePickerWheel[`value == "Atom"`]')}
   get trim() { return base.getByClassChain('**/XCUIElementTypeTextField[`value == "Select Trim"`]') }
   get arrowTrim(){return base.getByClassChain('**/XCUIElementTypeImage[`name == "downArrowInCategory"`][4]')}
   get atom3(){return base.getByClassChain('**/XCUIElementTypePickerWheel[`value == "Atom"`]')}
   get year() { return base.getByClassChain('**/XCUIElementTypeTextField[`value == "Select Year"`]') }
   get arrowYear(){return base.getByClassChain('**/XCUIElementTypeImage[`name == "downArrowInCategory"`][5]')}
   get year_08(){return base.getByClassChain('**/XCUIElementTypePickerWheel[`value == "2008"`]')}
   get bajaj() { return base.getByText("Bajaj") }
   get condition(){return base.getByAccessibilityID('Condition')}
   get radio_no() { return base.getByAccessibilityID('unselectedRadioImage') }
   get radio_yes(){return base.getByAccessibilityID('selectedRadioImage')}
   get makevalue() {return base.getByText("Chevrolet")}
   get modelvalue() {return base.getByText("Beat")}
   get select_year() {return base.getByText("2017")}
   get motorcycle() {return base.getByText("Motorcycle/Bike")}
   get scooter() {return base.getByText("Scooter")}
   get enterVehicleRN() {return base.getByClassChain('**/XCUIElementTypeTextField[`value == "Enter Vehicle Registration Number"`]')}
  get btn_previous_step2() {return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Previous"`]')}
  get proceedToStep2(){return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Proceed to Step 2"`]')}
  get btn_next_step2() {return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Proceed to Final Step"`]')}
  get submit() {return base.getByText('**/XCUIElementTypeStaticText[`label == "SUBMIT"`]')}
  get searchingFor(){return base.getByAccessibilityID('What Are You Searching For')}

  async traverseToVehicleInsurance() {
   console.log("buyer login successfully")   
   await (await this.menu).touchAction('tap')
   console.log("Clicked on Menu")
   await (await this.buy).click()
   console.log("clicked on Buy")
   await (await this.services).click()
   console.log("clicked on Servioces")
   

  }
}
module.exports = new VehicleInsurance();