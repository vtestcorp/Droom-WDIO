const base = require('../../BaseClass/base')
class obv {
    get moreOptions(){return base.getByText("More actions")}
    get menu (){return base.getByText("Menu")}
    get valuation(){return base.getByText("Valuation")}
    get pricingCalculator(){return base.getByText("Used Vehicle Pricing Calculator")}
    get IwanttoBuy(){return base.getByText("I Want to Buy")}
    get IwanttoSell(){return base.getByText("I Want to Sell")}
    get fromIndividual(){return base.getByText("From Individual")}
    get fromDealer(){return base.getByText("From Dealer")}
    get selectCategory(){return base.getByResourceId("category")}
    get selectMake(){return base.getByResourceId("make")}
    get selectModel(){return base.getByResourceId("model")}
    get selectYear(){return base.getByResourceId("year")}
    get selectTrim(){return base.getByResourceId("trim")}
    get kmsDriven(){return base.getByResourceId("kms_driven")}
    get submit(){return base.getByText("Submit")}
    get checkObvBtn(){return base.getByText("Check OBV")}
    get valueAt(){return base.getByText("Automobile From Individual In Good Condition Is Valued At")}
    get car(){return base.getByResourceIdNText("android:id/text1","Car")}
    get audi(){return base.getByResourceIdNText("android:id/text1","Audi")}
    get a3(){return base.getByResourceIdNText("android:id/text1","A3")}
    get yr2020(){return base.getByResourceIdNText("android:id/text1","2020")}
    get TdiPPlus(){return base.getByResourceIdNText("android:id/text1","35 Tdi Premium Plus")}
    get smallpopUp(){return base.getByText("x")}
    get toIndividual(){return base.getByText("To an Individual")}
    get toDealer(){return base.getByText("To a Dealer")}
    get IwanttoSell(){return base.getByText("I Want to Sell")}
    get good(){return base.getByText("Good")}
    get used(){return base.getByText("Used")}
    get newTab(){return base.getByText("New")}
    get exchange(){return base.getByText("Exchange")}
    get futurePrice(){return base.getByText("Future Price")}
    get residual(){return base.getByText("Residual")}
    get linkOBV(){return base.getByText("Orange Book Value")}
    get subTitleonOBV(){return base.getByText("Used Vehicle Pricing Calculator shows the pricing of Used Automobiles")}
    get checkObvBtn(){return base.getByText("Check OBV")}
//used
get selectCategory(){return base.getByText("Select Category")}
get selectMake(){return base.getByText("Select Make")}
get selectModel(){return base.getByText("Select Model")}
get selectYear(){return base.getByText("Select Year")}
get selectTrim(){return base.getByText("Select Trim")}
get kmsDriven(){return base.getByResourceId("kms_driven")}
get checkPrice(){return base.getByText("Check Price")}
get usedcar2(){return base.getByText("/  Used car")}
get usedInfo(){return base.getByText("Used Vehicle Pricing Calculator shows the pricing of Used Automobiles")}
get headingOnOptions(){return base.getByText("Check Fair Market Value for any Vehicle")}
//New
get newCategory(){return base.getByText("Select Category")}
get newMake(){return base.getByText("Select Make")}
get newModel(){return base.getByText("Select Model")}
get newTrim(){return base.getByText("Select Trim")}
get newLocation(){return base.getByText("Location")}
get CheckPriceOnNew(){return base.getByText("Check Price")}
get ModelNamenew(){return base.getByText("A4")}
get newTrimName(){return base.getByText("40 TFSI PREMIUM PLUS")}
get newModelName(){return base.getByText("get CheckPriceOnNew")}
get newCheckPrice(){return base.getByText("Check Price")}
get pricingCalculator2(){return base.getByText("Vehicle Pricing Calculator")}
get priceForNew(){return base.getByText("Price of New Vehicle is")}
//Exchange
get exchangeInfo(){return base.getText("Select the Vehicle you want to Exchange Your Current Vehicle With and Know The Price Difference.")}
get IwanttoExchange(){return base.getByText("I want to Exchange:")}
get exchangeCategory(){return base.getByResourceId("exchangecategory")}
get exchangeMake(){return base.getByResourceId("exchangemake")}
get exchangeModel(){return base.getByResourceId("exchangemodel")}
get exchangeYear(){return base.getByResourceId("exchangeyear")}
get exchangeTrim(){return base.getByResourceId("exchangetrim")}
get exchangeKms(){return base.getByResourceId("exchangekms_driven")}
get lableWith(){return base.getByText("With:")}
get lableNew(){return base.getByText("New")}
get lableUsed(){return base.getByText("Used")}
get withMake(){return base.getByResourceId("exchangenewmake")}
get makeNameWith(){return base.getByText("BMW")}
get withModel(){return base.getByResourceId("exchangenewmodel")}
get modelNameWith(){return base.getByText("3 Series")}
get withTrim(){return base.getByResourceId("exchangenewtrim")}
get trimNameWith(){return base.getByText("M340I")}
get checkExchangePrice(){return base.getByText("Check Exchange Price")}
get info() { return base.getByText("Info")}
//Future Price
get futurePriceInfo(){return base.getByText("Know the Estimated Re-Selling Price for your vehicle in coming years.")}
get checkfutureEsti(){return base.getByText("Check Future Estimate")}
get futureForNewLbl(){return base.getByContDesc("For New")}
get futureCategory(){return base.getByText("Select Category")}
get futureMake(){return base.getByText("Select Make")}
get futureModel(){return base.getByText("Select Model")}
get futureTrim(){return base.getByText("Select Trim")}
get futureResaleyr(){return base.getByText("Year of Resale")}
get futureyr2025(){return base.getByText("2022")}
get futurekmsDriven(){return base.getByResourceId("futurenewexpected_kms_driven")}
get obvValueForFuture(){return base.getByText("OBV Value By")}


//Residual
get residualInfo(){return base.getByText("Residual Value of the vehicle provides an estimate of the worth of the vehicle at the end of the lease.")}
get lableForNew(){return base.getByText("For New")}
get lableForUsed(){return base.getByText("For Used")}
get chkResidualEstimate(){return base.getByText("Check Residual Estimate")}
get resiCategory(){return base.getByText("Select Category")}
get resiMake(){return base.getByText("Select Make")}
get resiModel(){return base.getByText("Select Model")}
get resiTrim(){return base.getByText("Select Trim")}
get resiTenure(){return base.getByResourceId("leasenewtenure")}
get resiKmsDriven(){return base.getByResourceId("leasenewkms_driven_month")}
get residualResult1(){return base.getByText("/  Result")}
get residualResult(){return base.getByText("Residual Price of")}
get sampleReport(){return base.getByText("Sample Report (Page 2 Of 4)")}
get BtnPrevious(){return base.getByText("Previous")}
get BtnNext(){return base.getByText("Next")}
get headingReport(){return base.getByText("OBV Value For All Conditions")}
get page2(){return base.getByText("Sample Report (Page 2 Of 4)")}


async traverseToValuation() {
    console.log("Traversing to Valuation") 
    await (await this.menu).waitForExist({ timeout: 50000 })
     await browser.pause(8000)
    await (await this.menu).click()
    await browser.pause(3000)
    console.log("Clicked on Menu")
    await base.swipeUp()
    await (await this.valuation).click()
    console.log("Clicked on Valuation ")
}
async inputForSubmit()
{
    console.log("Taking Inputs for Expected Vechile")
    //await (await this.smallpopUp).waitForExist()
    //console.log("Help pop Up is Displayed")
   // await (await this.smallpopUp).click()
    base.swipeUp()
    await(await this.selectCategory).click()
    console.log("Clicked On select Category")
    await(await this.car).click()
    await base.swipeUp()
    console.log("Clicked On Car Category")
    await(await this.selectMake).click()
    await(await this.audi).click()
    console.log("Clicked On Make")
    await(await this.selectModel).click()
    await(await this.a3).waitForExist({ timeout: 5000 })
    await(await this.a3).click()
    await base.swipeUp()
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
async traverseToOptions()
{
    expect(await this.IwanttoBuy).toBeDisplayed()
    console.log("Buyer Tab displayed as :"+await(await this.IwanttoBuy).getText())
    expect(await this.IwanttoSell).toBeDisplayed()
    console.log("Seller Tab is displayed as :"+await(await this.IwanttoSell).getText())
    console.log("I Want to Sell Tab is displayed for Seller")
    expect(await this.fromIndividual).toBeDisplayed()
    console.log("I want To Buy From Individual is shown on Page")
    base.swipeUp()
    await this.inputForSubmit()
    expect(await this.submit).toBeDisplayed()
    console.log("Submit Button is availbale")
    await(await this.submit).click()
    console.log("Clicked on Submit Button")
    expect(await this.checkObvBtn).toBeDisplayed()
    console.log("Check OBV button is displayed")
    expect(await this.valueAt).toBeDisplayed()
    console.log("After click Value get displayed")
    await (await this.linkOBV).click()
    console.log("Traversimg to The Menus like Use, New,Exchange,Future Price,Residual")
}
async inputToUsed(){
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
    await base.swipeup()
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
    await(await this.submit).click()
    console.log("Clicked on Submit Button")
}
async inputToNew(){
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
    await(await this.CheckPriceOnNew).click()
}
async inputToExchange(){
    console.log("Taking Inputs For Exchage Vechile")
    base.swipeUp()
    await(await this.exchangeCategory).click()
    console.log("Clicked On select Category")
    await(await this.car).click()
    await base.swipeUp()
    console.log("Clicked On Car Category")
    await(await this.exchangeMake).click()
    await(await this.audi).click()
    console.log("Clicked On Make")
    await(await this.exchangeModel).click()
    await(await this.a3).waitForExist({ timeout: 5000 })
    await(await this.a3).click()
    await base.swipeUp()
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
    await(await this.withMake).click()
    console.log("Clicked On Make name with which user wants to Exchange Vehicle ")
    await(await this.makeNameWith).click()
    await(await this.withModel).click()
    console.log("Clicked On Model name with which user wants to Exchange Vehicle ")
    await(await this.modelNameWithNameWith).click()
    await(await this.withTrim).click()
    console.log("Clicked On Trim with which user wants to Exchange Vehicle ")
    await(await this.trimNameWithNameWith).click()

}
async inputToFuturePrice(){
    console.log("Taking Inouts for Future Price")
    await(await this.futureCategory).click()
    console.log("Clicked on Select Category")
    await(await this.car).click()
    console.log("Clicked On Car Category")
    await(await this.futureMake).click()
    console.log("Clicked on Make")
    await(await this.audi).click()
    console.log("Selected the Make")
    await(await this.futureModel).click()
    await(await this.ModelNamenew).click()
    console.log("Selected the New Model Name")
    await(await this.futureTrim).click()
    console.log("Clicked on New Trim")
    await(await this.newTrimName).click()
    await(await this.futureResaleyr).click()
     await(await this.futureyr2025).click()
     console.log("Selected the year of Resale")
    console.log("Clicked on KmsDriven")
    await driver.hideKeyboard()
    await driver.pressKeyCode(9, undefined, undefined);
    await driver.pressKeyCode(7, undefined, undefined);
    await driver.pressKeyCode(7, undefined, undefined);
    console.log("Set the value for KMS driven")
    await(await this.checkfutureEsti).click()
    console.log("Clicked on Check Future Estimate Button")
}

async inputToResidaul(){
    console.log("Taking Inputs For Exchage Vechile")
    base.swipeUp()
    await(await this.resiCategory).click()
    console.log("Clicked On select Category")
    await(await this.car).click()
    await base.swipeUp()
    console.log("Clicked On Car Category")
    await(await this.resiMake).click()
    console.log("Clicked on Make")
    await(await this.audi).click()
    console.log("Selected the Make")
    await(await this.resiModel).click()
    console.log("Selecting the Model")
    await(await this.ModelNamenew).waitForExist({ timeout: 5000 })
    await(await this.ModelNamenew).click()
    await(await this.resiTrim).click()
    console.log("Clicked On Select Trim")
    await(await this.newTrimName).click()
    await driver.hideKeyboard()
    await driver.pressKeyCode(9, undefined, undefined);
    await driver.pressKeyCode(7, undefined, undefined);
    await base.swipeUp()
    await(await this.resiKmsDriven).click()
    console.log("Clicked on KmsDriven")
    await driver.hideKeyboard()
    await driver.pressKeyCode(9, undefined, undefined);
    await driver.pressKeyCode(7, undefined, undefined);
    await driver.pressKeyCode(7, undefined, undefined);
    console.log("Set the value for KMS driven")
    await(await this.chkResidualEstimate).click()
    console.log("Clicked on Check Residual Estimate")

}
}
module.exports = new obv()