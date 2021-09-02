const { showConfig } = require('appium/build/lib/config');
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
    get checkPrice() { return $('//input[@value="Check Price"]') }
    get exchange_Info() { return $('//p[contains(text(),"Select the Vehicle you want to Exchange Your Curre")]') }
    get exchange_category() { return $('//select[@id="exchangecategory"]') }
    get exchange_Make() { return $('//select[@id="exchangemake"]') }
    get exchange_Model() { return $('//select[@id="exchangemodel"]') }
    get exchange_year() { return $('//select[@id="exchangeyear"]') }
    get exchange_trim() { return $('//select[@id="exchangetrim"]') }
    get exchange_kmsDriven() { return $('//input[@id="exchangekms_driven"]') }
    get exchange_WithNew() { return $('//input[@id="New"]') }
    get exchange_NewMake() { return $('//select[@id="exchangenewmake"]') }
    get exchange_NewModel() { return $('//select[@id="exchangenewmodel"]') }
    get exchange_NewTrim() { return $('//select[@id="exchangenewtrim"]') }
    get check_ExchangePrice() { return $('//button[text()="Check Exchange Price"]') }
    get chegneVehicle() { return $('//a[text()="Change Vehicle"]') }
    get heading_exchnagePrice() { return $('//label[normalize-space()="Amount You will need to pay for this Exchange"]') }
    get futurePrice_info() { return $('//p[contains(text(),"Know the Estimated Re-Selling Price for your vehic")]') }
    get futurePrice_new() { return $('//a[@id="new-price"]') }
    get future_category() { return $('//select[@id="futurenewcategory"]') }
    get future_Make() { return $('//select[@id="futurenewmake"]') }
    get future_Model() { return $('//select[@id="futurenewmodel"]') }
    get future_trim() { return $('//select[@id="futurenewtrim"]') }
    get future_Resale_Year() { return $('//select[@id="futurenewexpectedresale"]') }
    get future_kmsDriven() { return $('//input[@id="futurenewexpected_kms_driven"]') }
    get checkFuture_Estimate() { return $('(//button[text()="Check Future Estimate"])[1]') }
    get futurePrice_Estimated() { return $('//label[contains(text(),"Future Price of")]') }
    get residual_info() { return $('//p[contains(text(),"Residual Value of the vehicle provides an estimate")]') }
    get residual_forNew() { return $('//a[@id="new-price-lease"]') }
    get residual_category() { return $('//select[@id="leasenewcategory"]') }
    get residual_Make() { return $('//select[@id="leasenewmake"]') }
    get residual_Model() { return $('//select[@id="leasenewmodel"]') }
    get residual_trim() { return $('//select[@id="leasenewtrim"]') }
    get residual_Tenure() { return $('//input[@id="leasenewtenure"]') }
    get residual_kmsDriven() { return $('//input[@id="leasenewkms_driven_month"]') }
    get checkResidual_Estimate() { return $('(//button[text()="Check Residual Estimate"])[1]') }
    get ResidualPrice_Estimated() { return $('//div[@role="residual-result"]//div[@class="row"]//label[1]') }
    get viewPricingCertificate() { return $('//a[text()="View Pricing Certificate"]') }
    get locationOn_New() { return $('(//input[contains(@class,"select")])[1]') }
    get search_location() { return $('(//input[contains(@class,"lp-search")])[2]') }
    get delhi() { return $('//li[@class="d-display-block d-padding-2 clickable"]') }
    get check_PriceOnNew() { return $('//button[text()="Check Price"]') }
    get Price_ForNew_Vehicle() { return $('//label[text()="Price of New Vehicle is"]') }
    get New_Price() { return $('//h2[contains(text(),"₹")]') }
    async chooseFromIndidual() {
        await (await this.from_individual).click()
        console.log('Selected the option Buy from Individuals')
    }
    async chooseFromDealer() {
        await (await this.from_dealer).click()
        console.log('Selected the option Buy from Dealer')
    }
    async toVehiclePricingCalculator() {
        await (await this.shop_by_category).click()
        console.log("Clicked on Shop By category")
        await (await this.services).moveTo()
        console.log("Moved to Certification Services")
        await (await this.obv).click()
        console.log("Clicked on OBV")
        expect(await this.title_pricing_report).toBeDisplayed()
        console.log("Get the new Pricing report Title dispalyed on the page")
    }
    async toTakeInputs() {
        await (await this.category).selectByVisibleText('Car')
        console.log("Selected Car category")
        await (await (await this.make).$('//option[@id]')).waitForExist({ timeout: 5000 })
        await (await this.make).selectByVisibleText('Audi')
        console.log('Selected the expected Manufacturer')
        await (await (await this.model).$('(//option[@id])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.model).selectByVisibleText('A5')
        console.log('Selected the expected Model of Vehicle ')
        await (await (await this.year).$('(//option[@id])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.year).selectByVisibleText('2020')
        console.log("Selected year")
        await (await (await this.trim).$('(//option[@id])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.trim).selectByVisibleText('S5')
        console.log('Selected the option trim to differentiate between models ')
        await (await this.kms_Driven).waitForExist()
        await (await this.kms_Driven).setValue("100")
        console.log('Set the value for Kms driven')
        await (await this.submit).click()
        console.log('Clicked on Submit button to submit the details given by Buyer')
        console.log('Check OBV Button shown after submitting the details by User ')
    }
    async toinputForUsedVechile() {
        await (await this.category).selectByVisibleText('Car')
        console.log("Selected Car category")
        await (await (await this.make).$('(//option[@id])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.make).selectByVisibleText('Audi')
        console.log('Selected the expected Manufacuring ')
        await (await (await this.model).$('(//option[@id])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.model).selectByVisibleText('A5')
        console.log('Selected the expected Model of Vehicle ')
        await (await (await this.year).$('(//option[@id])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.year).selectByVisibleText('2020')
        console.log('Selected the expected Year of the Vehicle ')
        await (await (await this.trim).$('//option[@id]')).waitForExist({ timeout: 5000 })
        await (await this.trim).selectByVisibleText('S5')
        console.log('Selected the option trim to differentiate between models ')
        await (await this.kms_Driven).setValue("100")
        console.log('Set the value for Kms driven')
        await (await this.checkPrice).click()
        console.log('Clicked on the Check Price  button to submit the details given by Buyer')
    }
    async toinputForNewVechicle() {
        await (await (await this.newCategory).$('(//option[@value])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.newCategory).selectByVisibleText('Car')
        console.log("Selected the Cars")
        await (await (await this.newMake).$('(//option[@value])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.newMake).selectByVisibleText('Audi')
        console.log("New Manufacturer Selected")
        await (await (await this.newModel).$('(//option[@value])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.newModel).selectByVisibleText('A4')
        console.log("Model for New Vehicle selected")
        await (await (await this.newTrim).$('(//option[@value])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.newTrim).selectByVisibleText('40 TFSI PREMIUM PLUS')
        await (await this.locationOn_New).click()
        await (await this.search_location).click()
        await (await this.search_location).setValue("Delhi")
        await (await this.delhi).click()
        console.log("selected the Delhi location")
        await (await this.check_PriceOnNew).click()
        console.log('Clicked on the Check Price  button to submit the details given by Buyer')
    }
    async toinputForExchangeVehicle() {
        await (await (await this.exchange_category).$('(//option[@value])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.exchange_category).selectByVisibleText('Scooter')
        await (await (await this.exchange_Make).$('(//option[@value])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.exchange_Make).selectByVisibleText('Avan')
        await (await (await this.exchange_Model).$('(//option[@value])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.exchange_Model).selectByVisibleText('Xero')
        await (await (await this.exchange_year).$('(//option[@value])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.exchange_year).selectByVisibleText('2019')
        await (await (await this.exchange_trim).$('(//option[@value])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.exchange_trim).selectByVisibleText('STANDARD')
        await (await this.exchange_kmsDriven).click()
        await (await this.exchange_kmsDriven).setValue('100')
        await (await this.exchange_WithNew).click()
        await (await (await this.exchange_NewMake).$('(//option[@value])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.exchange_NewMake).selectByVisibleText('Bajaj')
        await (await (await this.exchange_NewModel).$('(//option[@value])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.exchange_NewModel).selectByVisibleText('Chetak Electric')
        await (await (await this.exchange_NewTrim).$('(//option[@value])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.exchange_NewTrim).selectByVisibleText('PREMIUM')
    }
    async toinputForFutureVehicle() {
        await (await (await this.future_category).$('(//option[@value])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.future_category).selectByVisibleText('Car')
        await (await (await this.future_Make).$('(//option[@value])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.future_Make).selectByVisibleText('BMW')
        await (await (await this.future_Model).$('(//option[@value])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.future_Model).selectByVisibleText('3 Series')
        await (await (await this.future_trim).$('(//option[@value])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.future_trim).selectByVisibleText('320D LUXURY LINE BS6')
        await (await (await this.future_Resale_Year).$('(//option[@value])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.future_Resale_Year).selectByVisibleText('2022')
        await (await this.future_kmsDriven).click()
        await (await this.future_kmsDriven).setValue(200)
    }
    async toinputForResidualVehicle() {
        await (await this.residual_forNew).click()
        console.log("Clicked on Residual For New ")
        await (await (await this.residual_category).$('(//option[@value])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.residual_category).selectByVisibleText('Car')
        console.log("Selected Car option")
        await (await (await this.residual_Make).$('(//option[@value])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.residual_Make).selectByVisibleText('BMW')
        console.log("Selcted BMW Oprion")
        await (await (await this.residual_Model).$('(//option[@value])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.residual_Model).selectByVisibleText('3 Series')
        console.log("Model is selected")
        await (await (await this.residual_trim).$('(//option[@value])[last()]')).waitForExist({ timeout: 5000 })
        await (await this.residual_trim).selectByIndex(1)
        console.log("Trim option selected")
        await (await this.residual_Tenure).setValue("11")
        console.log("Set the Tenure Successfully")
        await (await this.residual_kmsDriven).setValue(200)
        console.log("Kms Driven set by the User")
        await (await this.checkResidual_Estimate).waitForExist({ timeout: 5000 })
    }
}
module.exports = new OBV()

