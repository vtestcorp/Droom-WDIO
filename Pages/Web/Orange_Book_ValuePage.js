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

    get checkResidual_Estimate() { return $('//button[contains(@onclick,"return ValidateAllForms("futurenew","new")")]') }
    get ResidualPrice_Estimated() { return $('//div[@role="residual-result"]//div[@class="row"]//label[1]') }
    get viewPricingCertificate() { return $('//a[text()="View Pricing Certificate"]') }

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
        await (await (await this.make).$('//option[@id]')).waitForExist()
        await (await this.make).selectByVisibleText('Audi')
        console.log('Selected the expected Manufacturer')
        await (await (await this.model).$('//option[@id]')).waitForExist()
        await (await this.model).selectByVisibleText('A5')
        console.log('Selected the expected Model of Vehicle ')
        await (await (await this.year).$('//option[@id]')).waitForExist()
        await (await this.year).click()
        await (await this.year).selectByVisibleText('2020')
        console.log("Selected year")
        await (await (await this.trim).$('//option[@id]')).waitForExist()
        await (await this.trim).click()
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
        await (await (await this.make).$('//option[@id]')).waitForExist()
        await (await this.make).selectByVisibleText('Audi')
        console.log('Selected the expected Manufacuring ')
        await (await (await this.model).$('//option[@id]')).waitForExist()
        await (await this.model).selectByVisibleText('A5')
        console.log('Selected the expected Model of Vehicle ')
        await (await (await this.year).$('//option[@id]')).waitForExist()
        await (await this.year).selectByVisibleText('2020')
        console.log('Selected the expected Year of the Vehicle ')
        await (await (await this.trim).$('//option[@id]')).waitForExist()
        await (await this.trim).selectByVisibleText('S5')
        console.log('Selected the option trim to differentiate between models ')
        await (await this.kms_Driven).setValue("100")
        console.log('Set the value for Kms driven')
        await (await this.checkPrice).click()
        console.log('Clicked on the Check Price  button to submit the details given by Buyer')

    }
    async toinputForNewVechicle() {
        await (await this.newOne).click()
        await (await (await this.newCategory).$('//option[@id]')).waitForExist()
        await (await this.newCategory).click()
        await (await this.category).selectByVisibleText('Car')
        await (await (await this.newMake).$('//option[@id]')).waitForExist()
        await (await this.newMake).click()
        await (await this.newMake).selectByVisibleText('Audi')
        await (await (await this.newModel).$('//option[@id]')).waitForExist()
        await (await this.newModel).click()
        await (await this.newModel).selectByVisibleText('A4')
        await (await (await this.newTrim).$('//option[@id]')).waitForExist()
        await (await this.newTrim).click()
        await (await this.newTrim).selectByVisibleText('40 TFSI PREMIUM PLUS')
        await (await this.submit).click()
        console.log('Clicked on the Check Price  button to submit the details given by Buyer')
        console.log('Check OBV Button shown after submitting the details by User ')
        expect(Orange_Book_ValuePage.check_OBV).toBeDisplayed()
        expect(Orange_Book_ValuePage.check_OBV).toHaveTextContaining("Check OBV")
        console.log("Check OBV tab is shown after giving details for Used car on Vechile Pricing Calculator")
    }

    async toinputForExchangeVehicle() {
        await (await (await this.exchange_category).$('//option[@id]')).waitForExist()
        await (await this.exchange_category).click()
        await (await this.exchange_category).selectByVisibleText('Scooter')
        await (await (await this.exchange_Make).$('//option[@id]')).waitForExist()
        await (await this.exchange_Make).click()
        await (await this.exchange_Make).selectByVisibleText('Avan')
        await (await (await this.exchange_Model).$('//option[@id]')).waitForExist()
        await (await this.exchange_Model).click()
        await (await this.exchange_Model).selectByVisibleText('Xero')
        await (await (await this.exchange_year).$('//option[@id]')).waitForExist()
        await (await this.exchange_year).click()
        await (await this.exchange_year).selectByVisibleText('2019')
        await (await (await this.exchange_trim).$('//option[@id]')).waitForExist()
        await (await this.exchange_trim).click()
        await (await this.exchange_trim).selectByVisibleText('STANDARD')
        await (await this.exchange_kmsDriven).click()
        await (await this.exchange_kmsDriven).setValue('100')
        await (await this.exchange_WithNew).click()
        await (await this.exchange_NewMake).click()
        await (await this.exchange_NewMake).selectByVisibleText('Bajaj')
        await (await this.exchange_NewModel).click()
        await (await this.exchange_NewModel).selectByVisibleText('Chetak Electric')
        await (await this.exchange_NewTrim).click()
        await (await this.exchange_NewTrim).selectByVisibleText('PREMIUM')

    }

    async toinputForFutureVehicle() {
        await (await this.futurePrice_new).click()
        await (await (await this.future_category).$('//option[@id]')).waitForExist()
        await (await this.future_category).click()
        await (await this.future_category).selectByVisibleText('Car')
        await (await (await this.future_Make).$('//option[@id]')).waitForExist()
        await (await this.future_Make).click()
        await (await this.future_Make).selectByVisibleText('BMW')
        await (await (await this.future_Model).$('//option[@id]')).waitForExist()
        await (await this.future_Model).click()
        await (await this.future_Model).selectByVisibleText('3 Series')
        await (await (await this.future_trim).$('//option[@id]')).waitForExist()
        await (await this.future_trim).click()
        await (await this.future_trim).selectByVisibleText('320D LUXURY LINE BS6')
        await (await (await this.future_Resale_Year).$('//option[@id]')).waitForExist()
        await (await this.future_Resale_Year).click()
        await (await this.future_Resale_Year).selectByVisibleText('2022')
        await (await this.future_kmsDriven).click()
        await (await this.future_kmsDriven).setValue(200)
    }

    async toinputForResidualVehicle() {
        expect(await this.residual).toBeDisplayed()
        console.log("Residual option shown on the Vehicle Pricing Calculator")
        await (await this.residual).click()
        expect(this.residual_info).toBeDisplayed()
        console.log(await (this.residual_info).getText())
        await (await this.residual_forNew).click()
        await (await (await this.residual_category).$('//option[@id]')).waitForExist()
        await (await this.residual_category).click()
        await (await this.residual_category).selectByVisibleText('Car')
        await (await (await this.residual_Make).$('//option[@id]')).waitForExist()
        await (await this.residual_Make).click()
        await (await this.residual_Make).selectByVisibleText('BMW')
        await (await (await this.residual_Model).$('//option[@id]')).waitForExist()
        await (await this.residual_Model).click()
        await (await this.residual_Model).selectByVisibleText('3 Series')
        await (await (await this.residual_trim).$('//option[@id]')).waitForExist()
        await (await this.residual_trim).click()
        await (await this.residal_trim).selectByVisibleText('320D LUXURY LINE BS6')
        await (await (await this.residual_Tenure).$('//option[@id]')).waitForExist()
        await (await Orange_Book_ValuePage.residual_Tenure).click()
        await (await Orange_Book_ValuePage.residual_Tenure).selectByVisibleText('11')
        await (await this.residual_kmsDriven).click()
        await (await this.residual_kmsDriven).setValue(200)

    }
}
module.exports = new OBV()

