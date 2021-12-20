const base = require('../../BaseClass/base')

class usedbikepage{
    get menu() {return base.getByText("Menu")}
    get buy() {return base.getByText("Buy")}
    get bikeimg() {return base.getByResourceIdNText("in.droom:id/category_name","Bike")}
    get caroption() {return base.getByText("Car")}
    get bikeoption() {return base.getByText("Bike")}
    get scooteroption() {return base.getByText("Scooter")}
    get newRadio() {return base.getByResourceId("in.droom:id/newRadioButton")}
    get usedRadio() {return base.getByResourceId("in.droom:id/usedRadioButton")}
    get location() {return base.getByResourceId("in.droom:id/autoCompleteEditText")}
    get searchLocation() {return base.getByText("Search My Location")}
    get nextBtn() {return base.getByText("Next")}
    get errormsg() {return base.getByText("Please select location")}
    get cityName() {return base.getByText("Pune")}
    get heading1() {return base.getByText("Let's Find Your Dream Bike")}
    get searchfield() {return base.getByText("Enter Vehicle Name")}
    get selectVehicle() {return base.getByResourceId("in.droom:id/selectManuallyTV")}
    get selectMake() {return base.getByText("Select Make")}
    get selectModel() {return base.getByText("Select Model")}
    get selectYear()  {return base.getByText("Select Year")}
    get selectTrim() {return base.getByText("Select Trim")}
    get makeoption() {return base.getByText("Bajaj")}
    get modeloption() {return base.getByText("Avenger")}
    get yearoption() {return base.getByText("2016")}
    get trimoption() {return base.getByText("220CC")}
    get bikeName() {return base.getByResourceId("in.droom:id/makeModelYearTrimTV")}
    get addmoreVehicle() {return base.getByResourceId("in.droom:id/addMoreVehicleBTN")}


    async selectBikeVehicle() {
        await (await this.selectMake).click()
        await (await this.makeoption).click()
        await (await this.selectModel).click()
        await (await this.modeloption).click()
        await (await this.selectYear).click()
        await (await this.yearoption).click()
        await (await this.selectTrim).click()
        await (await this.trimoption).click()
        console.log("selected Bike as per requirement")
    }

}

module.exports = new usedbikepage();