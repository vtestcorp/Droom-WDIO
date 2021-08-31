const Base = require('../../BaseClass/base');
class OBV {
    get home() { return $('//a[text()="Home"]') }
    get services() { return $('//span[contains(text(),"Certification Services")]') }
    get shop_by_category() { return $('//span[contains(text(),"Shop by Category")]') }
    get obv() { return $('(//a[@href ="https://droom.in/obv/premium-report"] )[1]') }
    get pricing_cal() { return $('//h2[normalize-space()="Used Vehicle Pricing Calculator"]') }
    get buyer_tab() { return $('//a[normalize-space()="I Want to Buy"]') }
    get seller_tab() { return $('//a[normalize-space()="I Want to Sell"]') }
    get title_pricing_report() { return $('//h2[contains (text(),"Get the new Pricing report")]') }
    get from_individual() { return $('//input[@id="ct1"]') }
    get from_dealer() { return $('//input[@id="ct2"]') }
    get to_individual() { return $('//input[@id="ct1"]') }
    get to_dealer() { return $('//input[@id="ct2"]') }
    get category() { return $('//select[@id="category"]') }
    get make() { return $('//select[@id="make"]') }
    get model() { return $('//select[@id="model"]') }
    get year() { return $('//select[@id="year"]') }
    get trim() { return $('//select[@id="trim"]') }
    get kms_Driven() { return $('//input[@id="kms_driven"]') }
    get submit() { return $('//input[@type="submit"]') }
    get check_OBV() { return $('//input[@id="mmt_submit"]') }
    get result() { return $('(//label[text()="Audi A5"])[1]') }
    get good() { return $('//a[text()="Good"]') }
    get orangeBookValue_next() { return $('//a[text()="Orange Book Value"]') }
    get used() { return $('//a[text()="Used"]') }
    get newOne() { return $('//a[text()="New"]') }
    get exchange() { return $('//a[text()="Exchange"]') }
    get futurePrice() { return $('//a[text()="Future Price"]') }
    get residual() { return $('//a[text()="Residual"]') }
    get used_vehicle_info() { return $('//p[contains(text(),"Used Vehicle Pricing Calculator shows the pricing ")]') }
    get IWantToBuy2() { return $('//a[text()="I want to Buy"]') }
    get IWantToSell2() { return $('//a[text()="I want to Sell"]') }
    get from_individual2() { return $('//input[@id="indi"]') }
    get from_dealer2() { return $('//label[text()="From Dealer"]') }
    get to_individual2() { return $('//label[text()="To Individual"]') }
    get to_dealer2() { return $('//input[@id="dealer"]') }
    get new_vehicle_info() { return $('//p[contains(text(),"Check Price of New Vehicle and How it will depreci")]') }
    get newCategory() { return $('//select[@id="newcategory"]') }
    get newMake() { return $('//select[@id="newmake"]') }
    get newModel() { return $('//select[@id="newmodel"]') }
    get newTrim() { return $('//select[@id="newtrim"]') }



    async chooseFromIndidual() {
        await this.from_individual.click()
        console.log('Selected the option Buy from Individuals')
    }
    async chooseFromDealer() {
        await this.from_dealer.click()
        console.log('Selected the option Buy from Dealer')
    }

    async toTakeInputs() {

        await this.category.click()
        await browser.pause(3000)
        await this.category.selectByVisibleText('Car');
        console.log("Selected Car category")
        await browser.pause(3000)
        await this.make.click()
        await browser.pause(3000)
        await this.make.selectByVisibleText('Audi');
        await browser.pause(3000)
        console.log('Selected the expected Manufacuring ')
        await this.model.click()
        await browser.pause(3000)
        await this.model.selectByVisibleText('A5');
        console.log('Selected the expected Model of Vehicle ')
        await browser.pause(3000)
        await this.year.selectByVisibleText('2020');
        console.log('Selected the expected Model of Vehicle ')
        await browser.pause(3000)
        console.log('Select the trim')
        await this.trim.click()
        await browser.pause(3000)
        await this.trim.selectByVisibleText('S5');
        console.log('Selected the option trim to differentiate between models ')
        await browser.pause(3000)
        console.log("Setting the Kms Driven expected")
        await this.kms_Driven.setValue("100")
        console.log('Set the value for Kms driven')
        await browser.pause(3000)
        await this.submit.click()
        console.log('Clicked on Submit button to submit the details given by Buyer')
        await browser.pause(3000)
        console.log('Check OBV Button shown after submitting the details by User ')



    }
    async toTakeInputsForOBV() {

        await this.category.click()
        await browser.pause(3000)
        await this.category.selectByVisibleText('Bike/Motorcycle');
        console.log("Selected Bike/Motorbike category")
        await browser.pause(3000)
        await this.make.click()
        await browser.pause(3000)
        await this.make.selectByVisibleText('Aprilia');
        await browser.pause(3000)
        console.log('Selected the expected Manufacuring ')
        await this.model.click()
        await browser.pause(3000)
        await this.model.selectByVisibleText('Caponord');
        console.log('Selected the expected Model of Vehicle ')
        await browser.pause(3000)
        await this.year.selectByVisibleText('2018');
        console.log('Selected the expected Model of Vehicle ')
        await browser.pause(3000)
        console.log('Select the trim')
        await this.trim.click()
        await browser.pause(3000)
        await this.trim.selectByVisibleText('1200');
        console.log('Selected the option trim to differentiate between models ')
        await browser.pause(3000)
        console.log("Setting the Kms Driven expected")
        await this.kms_Driven.setValue("100")
        console.log('Set the value for Kms driven')
        await browser.pause(3000)
        await this.submit.click()
        console.log('Clicked on the Check Price  button to submit the details given by Buyer')
        await browser.pause(3000)
        console.log('Check OBV Button shown after submitting the details by User ')

    }


    async inputForNewVechicle() {
        await expect(Orange_Book_ValuePage.newOne).toBeDisplayed()
        console.log("New Option shown on the Vehicle Pricing Calculator")
        await Orange_Book_ValuePage.newOne.click()
        await expect(Orange_Book_ValuePage.used_vehicle_info).toBeDisplayed()
        console.log(await Orange_Book_ValuePage.used_vehicle_info.getText())
        await this.newOne.click()
        await this.newCategor.click()
        await this.category.selectByVisibleText('Car');
        await this.newMake.click()
        await this.newMake.selectByVisibleText('Audi');
        await this.newModel.click()
        await this.newModel.selectByVisibleText('A4');
        await this.newTrim.click()
        await this.newTrim.selectByVisibleText('40 TFSI PREMIUM PLUS');
        await browser.pause(3000)
        await this.submit.click()
        console.log('Clicked on the Check Price  button to submit the details given by Buyer')
        await browser.pause(3000)
        console.log('Check OBV Button shown after submitting the details by User ')
        await expect(Orange_Book_ValuePage.check_OBV).toBeDisplayed()
        await expect(Orange_Book_ValuePage.check_OBV).toHaveTextContaining("Check OBV");
        console.log("Check OBV tab is shown after giving details for Used car on Vechile Pricing Calculator")
    }
    async toVehiclePricingCalculator() {
        await Base.loginAsBuyer()
        await browser.pause(3000)
        await this.shop_by_category.click()
        console.log("Clicked on Shop By category")
        await this.services.moveTo()
        console.log("Moved to Certification Services")
        await this.obv.click()
        console.log("Clicked on OBV")
        await expect(this.title_pricing_report).toBeDisplayed()
        console.log("Get the new Pricing report Title dispalyed on the page")
    }
}
module.exports = new OBV()
