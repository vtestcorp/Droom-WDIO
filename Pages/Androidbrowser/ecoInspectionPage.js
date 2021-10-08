const base = require("../../BaseClass/base");
class Eco {
    get moreOptions(){return base.getByText("More actions")}
    get menu (){return base.getByContDesc("Menu")}
    get inspection(){return base.getByText("Inspection")}
    get ECOHeading() { return base.getByText("Inspect Vehicle Within Few Minutes")}
    get Buyer() { return base.getByText('Buyer') }
    get Seller() { return base.getByText('Seller')}
    get RegiAsVendor() { return base.getByText('Register As Vendor') }
    get Technician() { return base.getByText('Technician') }
    get Check_Repair_Estimate() { return base.getByText('Check Repair Estimate') }
    get BookInspection() { return base.getByText('Book Inspection') }
    get ECO_Offering() { return base.getByText('ECO Offerings') }
    get checkRepairEstiHeading(){return base.getByText("Check Estimated Repair Cost for Free")}
    get make1(){return base.getByResourceId('Select Make')}
    get model1() { return base.getByResourceId('Select Model')}
    get Trim1(){return base.getByResourceId('Select Trim')}
    get makeTxt(){return base.getByResourceId("s2id_autogen1_search")}
    get MakeName() { return base.getByText ("Aston Martin") }
    get modelTxt(){return base.getByResourceId("s2id_autogen57_search")}
    get ModelName() { return base.getByResourceId("Rapide") }
    get Trimxt(){return base.getByResourceId("s2id_autogen63_search")}
    get TrimTo(){return base.getByResourceId("S")}
    get location() { return getByText("Location") }
    get myLocation(){return getByText("Search My Location")}
    get next() { return base.getByContDesc("Next") }
    async traverseToECO() {
        console.log("Traversing to ECO")  
        await (await this.menu).click()
        console.log("Clicked on Menu")
       await base.scrollToExactText("Inspection")
        await (await this.inspection).click()
        console.log("Clicked on ECO Inspection serive")
        expect(await this.ECOHeading).toBeDisplayed()
        console.log(await (await this.ECOHeading).getText())
        expect(await this.ECOHeading).toHaveTextContaining("Inspect Vehicle")
        console.log("Inspect Vehicle within Few Minutes Shown")
    }

    
}
module.exports = new Eco();