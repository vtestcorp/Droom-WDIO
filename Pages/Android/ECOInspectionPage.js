const base = require('../../BaseClass/base')
class ECO {
    get mainPopup(){return base.getByResourceId("in.droom:id/btn_close")}
    get hamburgerMenu(){return base.getByContDesc("Navigate up") }
    get Certification_Services() { return base.getByText("Certification Services") }
    get ECO() { return base.getByResourceIdNText ("in.droom:id/txt_quicklink","ECO")}
    get ECOHeading() { return base.getByText("Inspect Vehicle Within Few Minutes")}
    get Buyer() { return base.getByText('Buyer') }
    get Seller() { return base.getByText ('Seller') }
    get RegiAsVendor() { return base.getByText('Register As Vendor') }
    get Technician() { return base.getByText('Technician') }
    get Check_Repair_Estimate() { return base.getByText('Check Repair Estimate') }
    get BookInspection() { return base.getByText('Book Inspection') }
    get ECO_Offering() { return base.getByText('ECO Offerings') }
    get MakeName() { return base.getByText ("Ashok Leyland") }
    get ModelName() { return base.getByResourceId("Stile") }
    get TrimTo(){return base.getByResourceId("LE")}
    get location() { return getByText("Location") }
    get make(){return base.getByText("Select Make")}
    get model() { return base.getByText("Select Model") }
    get Trim(){return base.getByText("Select Trim")}
    get next() { return base.getByContDesc("Next") }
    get repairServiceHeading(){return base.getByText("Repair & Services Type")}
    get airFilter(){return base.getByText("Air Filter")}
    get getEstimate() { return base.getByText("Get Estimate") }
    get delhi() { return base.getByText("Delhi") }
    get Estimated_RepairCost() { return base.getByText("Estimated Repair Cost ₹ ") }
    get hamburgerMenuECO(){return base.getByText("Toggle navigation") }
    get features() { return base.getByText("Features") }   
    get features_FourWheelers() { return base.getByText("Four Wheelers") }
    get featurs_TwoWheelers() { return base.getByText("Two Wheelers") }
    get chechPoint_FourWheeler() { return base.getByText("Inspection Checkpoints for Four Wheeler") }
    get chechPoint_TwoWheeler() { return base.getByText("Inspection Checkpoints for Two Wheeler") }
    get assessment() { return base.getByText("Visual and Functional Assessment") }
    get tires_Wheels() { return base.getByText("Tires & Wheels (Front & Rear)") }
    async traverseToECO() {
        console.log("Traversing to ECO")  
        await (await this.hamburgerMenu).click()
        console.log("Clicked on Hamburger Menu")
        await(await this .Certification_Services).click()
        base.scrollToResourceID(this.ECO)
        await (await this.ECO).click()
        console.log("Clicked on ECO serive")
        expect(await this.ECOHeading).toBeDisplayed()
        console.log(await (await this.ECOHeading).getText())
        expect(await this.ECOHeading).toHaveTextContaining("Inspect Vehicle")
        console.log("Inspect Vehicle within Few Monites Shown")
    }
}
module.exports = new ECO()
    