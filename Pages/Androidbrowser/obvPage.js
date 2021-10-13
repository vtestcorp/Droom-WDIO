const base = require('../../BaseClass/base')
class obv {
    get moreOptions(){return base.getByText("More actions")}
    get menu (){return base.getByContDesc("Menu")}
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
get locationOn_New() { return $('(//input[contains(@class,"select")])[1]') }
get search_location() { return $('(//input[contains(@class,"lp-search")])[2]') }
get delhi() { return $('//li[@class="d-display-block d-padding-2 clickable"]') }
async traverseToValuation() {
    console.log("Traversing to Valuation")  
    await (await this.menu).click()
    console.log("Clicked on Menu")
    await base.swipeUp()
    await (await this.valuation).click()
    console.log("Clicked on Valuation ")
}
async inputForSubmit()
{
    console.log("Taking Inputes for Expected Vechile")
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
    console.log("Taking Inputs for New")
    await (await this.smallpopUp).waitForExist()
    console.log("Help pop Up is Displayed")
    await (await this.smallpopUp).click()
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
    await(await this.locationOn_New).click()
    console.log("Clicked on Location")
    await base.switchToWebview()
    await (await this.search_location).click()
    console.log("At WebView")
    await(await this.search_location).setValue("Delhi")
    expect(await this.search_location).toBeDisplayed()
    await base.switchToNativeApp()
    console.log("At Native")
    await base.switchToWebview()
    await (await this.delhi).waitForDisplayed()
    expect(await this.delhi).toBeDisplayed()
    await (await this.delhi).click()
    await base.switchToNativeApp()
    await(await this.CheckPriceOnNew).click()
}
}
module.exports = new obv()