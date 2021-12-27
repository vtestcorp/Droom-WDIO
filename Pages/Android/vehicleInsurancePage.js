const base = require("../../BaseClass/base");

class VehicleInsurance {
   get menu() {return base.getByText("Menu")}
   get services() {return base.getByText("All services")}
   get buy() { return base.getByText("Buy") }
   get loanInsurance() { return base.getByText("Loan & Insurance") }
   get insurance() { return base.getByText("Insurance") }
   get proceed() { return base.getByText("Proceed") }
   get fullname_field() { return base.getByResourceId("in.droom:id/fullname_field") }
   get email_id_field() { return base.getByResourceId("in.droom:id/email_id_field") }
   get contact_number_field() { return base.getByResourceId("in.droom:id/contact_number_field") }
   get location_field() { return base.getByResourceId("in.droom:id/location_field") }
   get btn_next_step1() { return base.getByResourceId("in.droom:id/btn_next_step1") }
   get radio_yes() { return base.getByResourceId("in.droom:id/radio_yes") }
   get imgViewFor_location_field() { return base.getByResourceId("in.droom:id/imgViewFor_location_field") }
   get location() { return base.getByText("Search My Location") }
   get pune() { return base.getByText("Pune, Maharashtra") }
   get vehicleType() { return base.getByText("Vehicle Type") }
   get personalInformation() { return base.getByText("Personal Information") }
   get vehicleInformation() { return base.getByText("Vehicle Information") }
   get insuranceInformation() { return base.getByText("Insurance Information") }
   get car() { return base.getByText("Car") }
   get textinput_placeholder() { return base.getByResourceId("in.droom:id/textinput_placeholder") }
   get make() { return base.getByText("Select Make") }
   get model() { return base.getByText("Select Model") }
   get trim() { return base.getByText("Select Trim") }
   get year() { return base.getByText("Select Year") }
   get bajaj() { return base.getByText("Bajaj") }
   get radio_no() { return base.getByResourceId("in.droom:id/radio_no") }
   get makevalue() {return base.getByText("Chevrolet")}
   get modelvalue() {return base.getByText("Beat")}
   get trimvalue() {return base.getByText("LS PETROL")}
   get select_year() {return base.getByText("2017")}
   get motorcycle() {return base.getByText("Motorcycle/Bike")}
   get scooter() {return base.getByText("Scooter")}
   get enterVehicleRN() {return base.getByText("Enter Vehicle Registration Number")}
  get btn_previous_step2() {return base.getByText("Previous")}
  get btn_next_step2() {return base.getByText("Proceed to Final Step")}
  get submit() {return base.getByText("Submit")}
   
}
module.exports = new VehicleInsurance();