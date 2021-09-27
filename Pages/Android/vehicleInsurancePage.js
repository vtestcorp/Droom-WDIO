const base = require("../../BaseClass/base");

class VehicleInsurance {
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
   get car() { return base.getByText("Car") }
   get textinput_placeholder() { return base.getByResourceId("in.droom:id/textinput_placeholder") }
   get make() { return base.getByText("Select Make") }
   get model() { return base.getByText("Select Model") }
   get trim() { return base.getByText("Select Trim") }
   get year() { return base.getByText("Select Year") }
   get bajaj() { return base.getByText("Bajaj") }
   get radio_no() { return base.getByResourceId("in.droom:id/radio_no") }
   
}
module.exports = new VehicleInsurance();