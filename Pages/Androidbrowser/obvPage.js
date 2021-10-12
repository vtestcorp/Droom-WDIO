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
    get TdiPPlus(){return base.getByResourceIdNText("android:id/text1","35 TDI PREMIUM PLUS")}
    get smallpopUp(){return base.getByText("x")}
    get toIndividual(){return base.getByText("To an Individual")}
    get toDealer(){return base.getByText("To a Dealer")}
   get IwanttoSell(){return base.getByText("I Want to Sell")}

async traverseToValuation() {
    console.log("Traversing to Valuation")  
    await (await this.menu).click()
    console.log("Clicked on Menu")
    await base.scrollToExactText("Valuation")
    await (await this.valuation).click()
    console.log("Clicked on Valuation ")
}
async inputForSubmit()
{
    //console.log("Taking Inputes for Expected Vechile")
    //await (await this.smallpopUp).waitForExist()
    //console.log("Help pop Up is Displayed")
    //await (await this.smallpopUp).click()
    await(await this.selectCategory).click()
    console.log("Clicked On select Category")
    await(await this.car).click()
    console.log("Clicked On Car Category")
    await(await this.selectMake).click()
    await(await this.audi).click()
    console.log("Clicked On Make")
    await(await this.selectModel).click()
    await(await this.a3).waitForExist({ timeout: 5000 })
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
}
module.exports = new obv()