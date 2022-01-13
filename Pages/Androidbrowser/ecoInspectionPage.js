const base = require("../../BaseClass/base");
class Eco {
    get moreOptions(){return base.getByText("More actions")}
    get menu (){return base.getByText("Menu")}
    get inspection(){return base.getByText("Inspection")}
    get ECOHeading() { return base.getByText("Inspect Vehicle Within Few Minutes")}
    get Buyer() { return base.getByText('Buyer') }
    get Seller() { return base.getByText('Seller')}
    get RegiAsVendor() { return base.getByText('Register As Vendor') }
get RegiAsTechnician(){return base.getByContDesc('Register As Technician')}
   get Technician() { return base.getByText("Technician") }
    get Check_Repair_Estimate() { return base.getByText('Check Repair Estimate') }
    get BookInspection() { return base.getByText('Book Inspection') }
    get ECO_Offering() { return base.getByText('ECO Offerings') }
    get checkRepairEstiHeading(){return base.getByText("Check Estimated Repair Cost for Free")}
    get make1(){return base.getByText('Select Make')}
    get model1() { return base.getByText('Select Model')}
    get Trim1(){return base.getByText('Select Trim')}
    get makeTxt(){return base.getByResourceId("s2id_autogen1_search")}
    get MakeName() { return base.getByText ("Aston Martin") }
    get modelTxt(){return base.getByResourceId("s2id_autogen57_search")}
    get ModelName() { return base.getByText("Rapide") }
    get Trimxt(){return base.getByResourceId("s2id_autogen63_search")}
    get TrimTo(){return base.getByText("S V12")}
    get location() { return getByText("Location") }
    get myLocation(){return getByText("Search My Location")}
    get next() { return base.getByContDesc("Next") }
    get hamburgerMenu(){return base.getByContDesc("Toggle navigation") }
    get features(){return base.getByText("Features") }   
    get features_FourWheelers() { return base.getByResourceId("four-wheelers-tab") }
    get featurs_TwoWheelers() { return base.getByResourceId("two-wheelers-tab") }
    get chechPoint_FourWheeler() { return base.getByText("Inspection Checkpoints for Four Wheeler") }
    get chechPoint_TwoWheeler() { return base.getByText("Inspection Checkpoints for Two Wheeler") }
    get assessment() { return base.getByText("Visual and Functional Assessment") }
    get tires_Wheels() { return base.getByText("Tires & Wheels (Front & Rear)") }
    get cars(){return base.getByContDesc('Cars')}
    get Bikes(){return base.getByContDesc('Bikes')}
    get inspectionServices(){return base.getByText('Inspection Services')}
    get basicInspection(){return base.getByText('Basic Inspection')}
    get basicAmt(){return base.getByText('₹299')}
    get premiumAmt(){return base.getByText('₹549')}
    get premiumPlusAmt(){return base.getByText('₹599')}
    get viewSampleReport(){return base.getByText('View Sample Report')}
    get basicAmtBike(){return base.getByText('₹149')}
    get premiumAmtBike(){return base.getByText('249')}
    get titleAmt(){return base.getByText('₹99')}
    get titleCertificate(){return base.getByText('Title Certificate')}
    get hamburgurOnEco(){return base.getByText("Toggle navigation")}
    get service(){return base.getByText('Services')}
    get scooterInspection(){return base.getByText('Scooter Inspection')}
    get scooterInspectionHeading(){return base.getByText('Get A Used Scooter Inspection With ECO')}
    get bookInspection(){return base.getByText('Book Inspection')}
    get signUp(){return base.getByText('Sign up')}
    get signUpHeading(){return base.getByText('Sign Up With ECO')}
   // get watchEcoTv(){return base.getByContDesc("Watch ECO TV")}
    get watchEcoTv(){return $('//a[text()=" Watch ECO TV"]')}
    get videoHeading(){return base.getByText("Droom ECO TVC - Gaadi ki asli condition (30s)")}
    get closeVideo(){return base.getByText("Close")}
    get helpPopUp(){return base.getByText("x")}
    get seller_RegiAsTechnician(){return base.getByText("Register As Technician")}
    get seller_RegiAsVendor(){return base.getByText("Register As Vendor")}
    get createUrAccount(){return base.getByText("CREATE YOUR ACCOUNT")}
    get mandatoryNote(){return base.getByText("All Fields are Mandatory")}
    get fName(){return base.getByText("Full Name")}
    get emailId(){return base.getByText("Email ID")}
    get PhoneNo(){return base.getByText("Phone Number")}
    get pinCode(){return base.getByText("Pin Code")}
    get cityName(){return base.getByText("Enter City Name")}
    get state(){return base.getByText("State")}
    get Building(){return base.getByText("Building/Area/Locality")}
    get contactName(){return base.getByText("Contact Name")}
    get contactEmail(){return base.getByText("Contact Email")}
    get contactPhone(){return base.getByText("Contact Phone")}
    get password(){return base.getByText("Password")}
    get submitBtn(){return base.getByText("Submit")}
    get flowForVendor(){return base.getByText("INSPECTION FLOW FOR VENDOR")}
    get firstName(){return base.getByText("First Name")}
    get lastName(){return base.getByText("Last Name")}
    get emailId(){return base.getByText("Email ID")}
    get stateTechnician(){return base.getByText("State")}
    get area(){return base.getByText("Building/Area/Locality")}
    // passwordTechnician(){return base.getByText("")}
    get flowForTechnician(){return base,getByText("INSPECTION FLOW FOR TECHNICIAN")}

    async traverseToECO() {
        console.log("Traversing to ECO")  
         await (await this.menu).waitForExist({ timeout: 50000 })
         await browser.pause(3000)
        await (await this.menu).click()
        await browser.pause(3000)
        console.log("Clicked on Menu")
        await base.swipeUp()
        await (await this.inspection).click()
        console.log("Clicked on ECO Inspection serive")
        expect(await this.ECOHeading).toBeDisplayed()
        console.log(await (await this.ECOHeading).getText())
        expect(await this.ECOHeading).toHaveTextContaining("Inspect Vehicle")
        console.log("Inspect Vehicle within Few Minutes Shown")
    }
}
module.exports = new Eco();