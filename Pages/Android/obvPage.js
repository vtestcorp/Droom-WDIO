const base = require('../../BaseClass/base')
class obv {
    get mainPopup(){return base.getByResourceId("in.droom:id/btn_close")}
    get hamburgerMenu(){return base.getByContDesc("Navigate up") }
    get services() {return base.getByText("All services")}
   get Certification_Services() { return base.getByText("Certification Services") }
   get obv() { return base.getByResourceIdNText ("in.droom:id/txt_quicklink","OBV")}
    get proceedbtn() {return base.getByText("Proceed")}
    get obvTitle(){return base.getByText("Orange Book Value")}
    get pricingCalculator(){return base.getByText("Vehicle Pricing Calculator")}
    get used(){return base.getByText("Used")}
    get newTab(){return base.getByText("New")}
    get exchange(){return base.getByText("Exchange")}
    get futurePrice(){return base.getByText("Future Price")}
    get residual(){return base.getByText("Residual")}
    get subtitle(){return base.getByText("Used Vehicle Pricing Calculator shows the pricing of Used Automobiles")}
    get IwanttoBuy(){return base.getByText("I want to Buy")}
    get IwanttoSell(){return base.getByText("I want to Sell")}
    get selectMake(){return base.getByResourceIdNText("make","Select Make")}
    get selectModel(){return base.getByResourceIdNText("model","Select Model")}
    get selectYear(){return base.getByResourceIdNText("year","Select Year")}
    get selectTrim(){return base.getByResourceIdNText("trim","Select Trim")}
    get kmsDriven(){return base.getByResourceId("kms_driven")}
    get checkPrice(){return base.getByText("Check Price")}
    get fromIndividual(){return base.getByText("From Individual")}
    get fromDealer(){return base.getByText("From Dealer")}
    get toIndividual(){return base.getByText("To Individual")}
    get toDealer(){return base.getByText("To Dealer")}
    get obvLogo(){return base.getByText("OBV Logo")}
    get car(){return base.getByResourceIdNText("android:id/text1","Car")}
    get audi(){return base.getByResourceIdNText("android:id/text1","Audi")}
    get yr2020(){return base.getByResourceIdNText("android:id/text1","2020")}
    get TdiPPlus(){return base.getByResourceIdNText("android:id/text1","35 TDI PREMIUM PLUS")}
    get checkObvBtn(){return base.getByResourceIdNText("mmt_submit","Check OBV")}
    get rs(){return base.getByText("₹27,38,353 - ₹29,07,736 *")}
    get obvPopup(){return base.getByText("This image isn‘t labelled. Open the 'More options' menu at the top right to get image descriptions.")}
    get good(){return base.getByText("Good")}
   // get smallpopUp(){return base.getByText("x")}
   get smallpopUp() {return base.getByText("Hi, I am Your Personal Droom Assistant Let's chat")}
    get valueAt(){return base.getByText("Automobile From Individual In Good Condition Is Valued At")}
    get usedcar2(){return base.getByText("/  Used car")}
    get futurePriceInfo(){return base.getByText("Know the Estimated Re-Selling Price for your vehicle in coming years.")}
    get forNew(){return base.getByText("For New")}
    get forUsed(){return base.getByText("For Used")}
    get futureCategory(){return base.getByResourceId("futurenewcategory")}
    get futureMake(){return base.getByResourceId("futurenewmake")}
    get futureModel(){return base.getByResourceId("futurenewmodel")}
    get futureTrim(){return base.getByResourceId("futurenewtrim")}
    get futureResale(){return base.getByResourceId("futurenewexpectedresale")}
    get futureKms(){return base.getByResourceId("futurenewexpected_kms_driven")}
    get futureEstimate(){return base.getByText("Check Future Estimate")}
    get futureModeName(){return base.getByText("A4")}
    get futureTrimName(){return base.getByText("40 TFSI PREMIUM PLUS")}
    get yeOfResale(){return base.getByText("2022")}
    get result(){return base.getByText("/  Result")}
    get obvValueBy(){return base.getByText("OBV Value By")}
    get futurePriceResult(){return base.getByText("Future Price of Audi A4 40 TFSI PREMIUM PLUS evolution in 2022 after 200 Kms")}
    get exchangeInfo(){return base.getByText("Select the Vehicle you want to Exchange Your Current Vehicle With and Know The Price Difference.")}
    get IwanttoExchange(){return base.getByText("I want to Exchange:")}
    get exchangeCategory(){return base.getByResourceId("exchangecategory")}
    get exchangeMake(){return base.getByResourceId("exchangemake")}
    get exchangeModel(){return base.getByResourceId("exchangemodel")}
    get exchangeYear(){return base.getByResourceId("exchangeyear")}
    get exchangeTrim(){return base.getByResourceId("exchangetrim")}
    get exchangeKms(){return base.getByResourceId("exchangekms_driven")}
    get exchangeWith(){return base.getByText("With:")}
    get withNew(){return base.getByText("New")}
    get withOld(){return base.getByText("Used")}
    get exchangeNewMake(){return base.getByResourceId("exchangenewmake")}
    get exchangeNewModel(){return base.getByResourceId("exchangenewmodel")}
    get exchangeNewTrim(){return base.getByResourceId("exchangenewtrim")}
    get bmwCar(){return base.getByText("BMW")}
    get bmwModel(){return base.getByText("2 Series Gran Coupe")}
    get bmwTrim(){return base.getByText("220D M SPORT")}
    get chkExchangePrice(){return base.getByText("Check Exchange Price")}
    get resultExchange(){return base.getByText("Exchange with")}
    get newInfo(){return base.getByText("Check Price of New Vehicle and How it will depreciate in Upcoming Years")}
    get newCategory(){return base.getByResourceId("newcategory")}
    get newMake(){return base.getByResourceId("newmake")}
    get newModel(){return base.getByResourceId("newmodel")}
    get newTrim(){return base.getByResourceId("newtrim")}
    get newLocation(){return base.getByText("Location")}
    get a3(){return base.getByResourceIdNText("android:id/text1","A3")}
    get CheckPriceOnNew(){return base.getByText("Check Price")}
    get ModelNamenew(){return base.getByText("A4")}
    get newTrimName(){return base.getByText("40 TFSI PREMIUM PLUS")}
    get searchMyLocation(){return base.getByText("Search My Location")}
    get residualInfo(){return base.getByText("Residual Value of the vehicle provides an estimate of the worth of the vehicle at the end of the lease.")}
    get ForNew(){return base.getByText("For New")}
    get ForUsed(){return base.getByText("For Used")}
    get residualCategory(){return base.getByResourceId("leasenewcategory")}
    get residualMake(){return base.getByResourceId("leasenewmake")}
    get residualModel(){return base.getByResourceId("leasenewmodel")}
    get residualTrim(){return base.getByResourceId("leasenewtrim")}
    get residualTenure(){return base.getByResourceId("leasenewtenure")}
    get residaulKms(){return base.getByResourceId("leasenewkms_driven_month")}
    get cheResidualEstimate(){return base.getByText("Check Residual Estimate")}
    get residualModelName(){return base.getByText("A4")}
    get residualTrimName(){return base.getByText("40 TFSI PREMIUM PLUS")}
    get residualResult(){return base.getByText("Lease Per Month:")}
    get headingPricingCtr(){return base.getByText("Pricing Certificate")}
    get viewPricingCertificate(){return base.getByText("View Pricing Certificate")}
    get pdfmsg(){return base.getByText("Don't ask again")}
    get selectCategory(){return base.getByResourceIdNText("category","Select Category")}
   // get buy() { return base.getByText("Buy") }
    get menu() {return base.getByText("Menu")}
    get valuation() {return base.getByText("Valuation")}
    get selectfromdropdown() {return base.getByResourceId("in.droom:id/tv_enter_manually")}
    get selectbrand() {return base.getByText("Select Brand")}
    get brandvalue() {return base.getByText("Aston Martin")}
    get selectmodel() {return base.getByText("Select Model")}
    get modelvalue() {return base.getByText("DB9")}
    get selectyear() {return base.getByText("Select Year")}
    get yearvalue() {return base.getByText("2004")}
    get selecttrim() {return base.getByText("Select Trim")}
    get trimvalue() {return base.getByText("6L V12")}
    get kms() {return base.getByText("Enter KM Driven")}
    get submit(){return base.getByText("Submit >")}



  async traverseToObv() {
    await base.androidLoginAsBuyer()
    console.log("Traversing to Obv")  
    await browser.pause(2000)
    await (await this.menu).click()
    console.log("Clicked on Menu")
    await base.scrollToExactText("All services")
    await (await this.services).click()
    await (await this.Certification_Services).click()
    base.scrollToResourceID(this.obv)
    await (await this.obv).click()
    expect(await this.obvTitle).toBeDisplayed()
    console.log("Orange Book Value title shown")
    }

    
async inputToCheckPrice() {
console.log("Taking Inputes for Expected Vechile")
await(await this.selectCategory).click()
console.log("Clicked On select Category")
await(await this.car).click()
console.log("Clicked On Car Category")
await(await this.selectMake).click()
await(await this.audi).click()
console.log("Clicked On Make")
await(await this.selectModel).click()
await(await this.a3).click()
console.log("Selected the required Model")
await(await this.selectYear).click()
console.log("Clicked on the year")
await(await this.yr2020).click()
console.log("Clicked On expected Year")
await(await this.selectTrim).click()
console.log("Clicked on Trim")
await(await this.TdiPPlus).click()
console.log("Clicked On expected Trim")
await(await this.kmsDriven).click()
console.log("Clicked on KmsDriven")
await driver.hideKeyboard()
await driver.pressKeyCode(9, undefined, undefined);
await driver.pressKeyCode(7, undefined, undefined);
await driver.pressKeyCode(7, undefined, undefined);
console.log("Set the value for KMS driven")
}
async inputToNew() {
    console.log("Taking Inputs for New")
    await(await this.newCategory).click()
    console.log("Clicked on Select Category")
    await(await this.car).click()
    console.log("Clicked On Car Category")
    await(await this.newMake).click()
    console.log("Clicked on Make")
    await(await this.audi).click()
    console.log("Selected the Make")
    await(await this.newModel).click()
    await(await this.ModelNamenew).click()
    console.log("Selected the New Model Name")
    await(await this.newTrim).click()
    console.log("Clicked on New Trim")
    await(await this.newTrimName).click()
    await(await this.newLocation).click()
    console.log("Clicked on Location")
    expect(await this.searchMyLocation).toBeDisplayed()
    console.log("Search My Location is available")
    await(await this.searchMyLocation).click()
    console.log("CLicked on Search My Location")
    await(await this.searchMyLocation).setValue("Delhi")
    await(await this.CheckPriceOnNew).click()
}
async inputToExchange() {
   // await (await this.smallpopUp).waitForExist()
    //console.log("Help pop Up is Displayed")
   // await (await this.smallpopUp).click()
    console.log("Taking Inputs for Exchange")
    await(await this.exchangeCategory).click()
    console.log("Clicked on Select Category")
    await(await this.car).click()
    console.log("Clicked On Car Category")
    await(await this.exchangeMake).click()
    console.log("Clicked on Make")
    await(await this.audi).click()
    console.log("Clicked On Make")
    await(await this.exchangeModel).click()
    await(await this.a3).waitForExist({ timeout: 5000 })
    await(await this.a3).click()
    console.log("Selected the required Model")
    await(await this.exchangeYear).click()
    console.log("Clicked on the year")
    await(await this.yr2020).click()
    console.log("Clicked On expected Year")
    await(await this.exchangeTrim).click()
    console.log("Clicked on Trim")
    await(await this.TdiPPlus).click()
    console.log("Clicked On expected Trim")
    await(await this.exchangeKms).click()
    console.log("Clicked on KmsDriven")
    await driver.hideKeyboard()
    await driver.pressKeyCode(9, undefined, undefined);
    await driver.pressKeyCode(7, undefined, undefined);
    await driver.pressKeyCode(7, undefined, undefined);
    console.log("Set the value for KMS driven")
}
    async inputToFutureEstimate() {
    console.log("Taking Inputs for New Future Price")
    //await (await this.smallpopUp).waitForExist()
    //console.log("Help pop Up is Displayed")
    //await (await this.smallpopUp).click()
    await (await this.futureCategory).click()
    console.log("Clicked on Select category")
    await(await this.car).click()
    console.log("Clicked On Car Category")
    await(await this.futureMake).click()
    console.log("Clicked on Select Make")
    await(await this.audi).click()
    await (await this.futureModel).click()
    console.log("Clicked on Select Model")
    await(await this.futureModeName).waitForExist({ timeout: 5000 })
    await(await this.futureModeName).click()
    await (await this.futureTrim).click()
    console.log("Clicked on Select Trim")
    await(await this.futureTrimName).click()
    await (await this.futureResale).click()
    console.log("Clicked on Year Of Resale")
    await(await this.yeOfResale).click()
    console.log("Selected the Year of Resale")
    await (await this.futureKms).click()
    console.log("Clicked on Kms Driven")
    await driver.hideKeyboard()
    await driver.pressKeyCode(9, undefined, undefined)
    await driver.pressKeyCode(7, undefined, undefined)
    await driver.pressKeyCode(7, undefined, undefined)
    console.log("Set the value for KMS driven")
    await(await this.futureEstimate).click()
    console.log("Clicked on Check Future Estimate")
}
async inputToResidual() {
    console.log("Taking Inputs for Residual")
    //await (await this.smallpopUp).waitForExist()
    //console.log("Help pop Up is Displayed")
   // await (await this.smallpopUp).click()
    await (await this.residual).click()
    console.log("Clicked on Residual")
    await(await this.residualCategory).click()
    await(await this.car).click()
    console.log("Clicked On Car Category")
    await(await this.residualMake).click()
    await(await this.audi).click()
    console.log("Clicked On Make")
    await(await this.residualModel).click()
    await(await this.residualModelName).waitForExist({ timeout: 5000 })
    await(await this.residualModelName).click()
    await(await this.residualTrim).click()
    await(await this.residualTrimName).click()
    await(await this.residualTenure).click()
    await driver.hideKeyboard()
    await driver.pressKeyCode(9, undefined, undefined)
    await driver.pressKeyCode(9, undefined, undefined)
    console.log("Set the value for Tenure in month")
    await(await this.residaulKms).click()
    console.log("Clicked on Kms Driven")
    await driver.hideKeyboard()
    await driver.pressKeyCode(9, undefined, undefined)
    await driver.pressKeyCode(7, undefined, undefined)
    await driver.pressKeyCode(7, undefined, undefined)
    console.log("Set the value for KMS driven")
}
}
module.exports = new obv()
    