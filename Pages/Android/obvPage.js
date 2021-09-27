const base = require('../../BaseClass/base')
class obv {
    get mainPopup(){return base.getByResourceId("in.droom:id/btn_close")}
    get hamburgerMenu(){return base.getByContDesc("Navigate up") }
    get Certification_Services() { return base.getByText("Certification Services") }
    get obv() { return base.getByResourceIdNText ("in.droom:id/txt_quicklink","OBV")}
    get obvTitle(){return base.getByResourceIdNText('in.droom:id/screen_title','Orange Book Value')}
    get pricingCalculator(){return base.getByText("Vehicle Pricing Calculator")}
    get used(){return base.getByText("Used")}
    get newTab(){return base.getByText("New")}
    get exchange(){return base.getByText("Exchange")}
    get futurePrice(){return base.getByText("Future Price")}
    get residual(){return base.getByText("Residual")}
    get subtitle(){return base.getByText("Used Vehicle Pricing Calculator shows the pricing of Used Automobiles")}
    get IwanttoBuy(){return base.getByText("I want to Buy")}
    get IwanttoSell(){return base.getByText("I want to Sell")}
    get selectCategory(){return base.getByResourceIdNText("category","Select Category")}
    get selectMake(){return base.getByResourceIdNText("make","Select Make")}
    get selectModel(){return base.getByResourceIdNText("model","Select Model")}
    get selectYear(){return base.getByResourceIdNText("year","Select Year")}
    get selectYear(){return base.getByResourceIdNText("trim","Select Trim")}
    get kmsDriven(){return base.getByResourceIdNText("kms_driven","0.0")}
    get checkPrice(){return base.getByText("Check Price")}
    get fromIndividual(){return base.getByText("From Individual")}
    get fromDealer(){return base.getByText("From Dealer")}
    get toIndividual(){return base.getByText("To Individual")}
    get toDealer(){return base.getByText("To Dealer")}
    get obvLogo(){return base.getByText("OBV Logo")}
    get car(){return base.getByResourceIdNText("android:id/text1","Car")}
    get audi(){return base.getByResourceIdNText("android:id/text1","Audi")}
    get a3(){return base.getByResourceIdNText("android:id/text1","A3")}
    get yr2020(){return base.getByResourceIdNText("android:id/text1","2020")}
    get TdiPPlus(){return base.getByResourceIdNText("android:id/text1","35 TDI PREMIUM PLUS")}
    get checkObvBtn(){return base.getByResourceIdNText("mmt_submit","Check OBV")}
    get rs(){return base.getByText("₹")}


    async traverseToObv() {
        console.log("Traversing to Obv")  
        await (await this.hamburgerMenu).click()
        console.log("Clicked on Hamburger Menu")
        await(await this .Certification_Services).click()
        base.scrollToResourceID(this.obv)
        await (await this.obv).click()
        console.log("Clicked on OBV serive")
        expect(await this.obvTitle).toBeDisplayed()
        console.log("Orange Book Value title shown")
    }
    async inputToCheckPrice() {
        console.log("Taking Inputes for Expected Vechile")
        await(await this.selectCategory).click()
        console.log("Clicked On select Category")
        await (await (await this.car)).waitForExist({ timeout: 5000 })
        await(await this.car).click()
        console.log("Clicked On Car Category")
        await(await this.selectMake).click()
        await(await this.audi).click()
        console.log("Clicked On Make")
        await(await this.selectModel).click()
        await(await this.a3).click()
        console.log("Selected the required Model")
        await(await this.selectYear).click()
        await(await this.yr2020).click()
        console.log("Clicked On expected Year")
        await(await this.TdiPPlus).click()
        console.log("Clicked On expected Year")
        await(await this.kmsDriven).setValue('500')
}
}
module.exports = new obv()
    