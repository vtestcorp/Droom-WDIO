
const Base = require('../../BaseClass/base');
const { orangeBookValue_2 } = require('../../Pages/OBVPage/Orange_Book_ValuePage');
const Orange_Book_ValuePage = require('../../Pages/OBVPage/Orange_Book_ValuePage')
describe('Orange Book Value', () => {
    it('TC_01 Verify the fields on OBV page', async () => {
        await Base.loginAsBuyer()
        await browser.pause(5000)
        await Orange_Book_ValuePage.shop_by_category.click()
        console.log("Clicked on Shop By category")
        await Orange_Book_ValuePage.services.moveTo()
        console.log("Moved to Certification Services")
        await Orange_Book_ValuePage.obv.click()
        console.log("Clicked on OBV")
        await expect(Orange_Book_ValuePage.title_pricing_report).toBeDisplayed()
        console.log("Get the new Pricing report Title dispalyed on the page")
        expect(Orange_Book_ValuePage.title_pricing_report).toHaveTextContaining("Get the new Pricing report");
        await expect(Orange_Book_ValuePage.pricing_cal).toBeDisplayed()
        console.log("Used Vehicle Pricing Calculator Heading is Displayed")
        expect(Orange_Book_ValuePage.pricing_cal).toHaveTextContaining("Used Vehicle Pricing Calculator");
        await expect(Orange_Book_ValuePage.buyer_tab).toBeDisplayed()
        console.log(await Orange_Book_ValuePage.buyer_tab.getText());
        console.log("I Want to buy Tab is displayed for Buyer")
        await expect(Orange_Book_ValuePage.seller_tab).toBeDisplayed()
        console.log(await Orange_Book_ValuePage.seller_tab.getText());
        console.log("I Want to Sell Tab is displayed for Sellet")

    });

    it('TC_02 Verify the pricing report functionality for "I want to Buy from an Individual"', async () => {

        await Orange_Book_ValuePage.toVehiclePricingCalculator()
        await expect(Orange_Book_ValuePage.buyer_tab).toBeDisplayed()
        await browser.pause(2000)
        console.log(await Orange_Book_ValuePage.buyer_tab.getText());
        console.log("I Want to buy Tab is displayed for Buyer")
        await browser.pause(2000)
        await Orange_Book_ValuePage.toTakeInputs()
        console.log("Pricing Report displayed on check OBV page")
        console.log(await Orange_Book_ValuePage.result.getText())
        expect(Orange_Book_ValuePage.result).toHaveTextContaining("Audi");


    });

    it('TC_03 Verify the pricing report functionality for "I want to Buy from a Dealer"', async () => {
        await Orange_Book_ValuePage.toVehiclePricingCalculator()
        await expect(Orange_Book_ValuePage.buyer_tab).toBeDisplayed()
        await browser.pause(2000)
        console.log(await Orange_Book_ValuePage.buyer_tab.getText());
        console.log("I Want to buy Tab is displayed for Buyer")
        await browser.pause(2000)
        await Orange_Book_ValuePage.from_dealer.click()
        await Orange_Book_ValuePage.toTakeInputs()

        console.log("Pricing Report displayed on check OBV page")
        console.log(await Orange_Book_ValuePage.result.getText())
        expect(await Orange_Book_ValuePage.result).toHaveTextContaining("Audi");

    });


    it('TC_04 Verify the pricing report functionality for "I want to sell to an Individual"', async () => {
        await Orange_Book_ValuePage.toVehiclePricingCalculator()
        await expect(Orange_Book_ValuePage.seller_tab).toBeDisplayed()
        await Orange_Book_ValuePage.seller_tab.click()
        await browser.pause(2000)
        console.log(await Orange_Book_ValuePage.seller_tab.getText());
        console.log("I Want to Sell Tab is displayed for Seller")
        await browser.pause(2000)
        await Orange_Book_ValuePage.toTakeInputs()
        await browser.pause(2000)
        await expect(Orange_Book_ValuePage.result).toBeDisplayed()
        console.log(await Orange_Book_ValuePage.result.getText())
        expect(await Orange_Book_ValuePage.result).toHaveTextContaining("Audi");
    });


    it('TC_05 Verify the pricing report functionality for "I want to sell to a Dealer"', async () => {
        await Orange_Book_ValuePage.toVehiclePricingCalculator()
        await expect(Orange_Book_ValuePage.seller_tab).toBeDisplayed()
        await Orange_Book_ValuePage.seller_tab.click()
        await browser.pause(2000)
        console.log(await Orange_Book_ValuePage.seller_tab.getText());
        console.log("I Want to sell Tab is displayed for seller")
        await browser.pause(2000)
        await Orange_Book_ValuePage.to_dealer.click()
        await Orange_Book_ValuePage.toTakeInputs()
        await expect(Orange_Book_ValuePage.result).toBeDisplayed()
        console.log(await Orange_Book_ValuePage.result.getText())
        expect(await Orange_Book_ValuePage.result).toHaveTextContaining("Audi");
    })

    it('TC_06 Verify the Grades on pricing report', async () => {
        await Orange_Book_ValuePage.toVehiclePricingCalculator()
        await expect(Orange_Book_ValuePage.buyer_tab).toBeDisplayed()
        await browser.pause(2000)
        console.log(await Orange_Book_ValuePage.buyer_tab.getText());
        console.log("I Want to buy Tab is displayed for Buyer")
        await browser.pause(2000)
        await Orange_Book_ValuePage.toTakeInputs()
        console.log(await Orange_Book_ValuePage.result.getText())
        expect(Orange_Book_ValuePage.result).toHaveTextContaining("Audi");
        console.log("Pricing Report displayed on check OBV page")
        await expect(Orange_Book_ValuePage.good).toBeDisplayed()
        console.log("Grade is displayed on OBV page after submitting required details")
        await expect(Orange_Book_ValuePage.good).toHaveTextContaining("Good");
        console.log("OBV Pricing Report suggested the Good value of vehicle.. by analysing all the inputs given by the user.")

    });

    it('TC_07 Verify used functionality on vehicle pricing calulator on OBV', async () => {
        await Orange_Book_ValuePage.toVehiclePricingCalculator()
        await expect(Orange_Book_ValuePage.seller_tab).toBeDisplayed()
        await browser.pause(2000)
        console.log(await Orange_Book_ValuePage.seller_tab.getText());
        console.log("I Want to buy Tab is displayed for Buyer")
        await browser.pause(2000)
        await Orange_Book_ValuePage.toTakeInputs()
        await Orange_Book_ValuePage.orangeBookValue_next.click()
        console.log("Towards the options like New,Used ,Exchange on Vechile Pricing Calculator")
        await browser.pause(2000)
        await expect(Orange_Book_ValuePage.used).toBeDisplayed()
        console.log("Used Option shown on the Vehicle Pricing Calculator")
        await Orange_Book_ValuePage.used.click()
        await expect(Orange_Book_ValuePage.used_vehicle_info).toBeDisplayed()
        console.log(await Orange_Book_ValuePage.used_vehicle_info.getText())
        await Orange_Book_ValuePage.IWantToBuy2.click()
        await Orange_Book_ValuePage.from_individual2.click()
        await Orange_Book_ValuePage.toTakeInputsForOBV()
        await expect(Orange_Book_ValuePage.check_OBV).toBeDisplayed()
        await expect(Orange_Book_ValuePage.check_OBV).toHaveTextContaining("Check OBV");
        console.log("Check OBV tab is shown after giving details for Used car on Vechile Pricing Calculator")
    });
    it('TC_08 Verify New functionality on vehicle pricing calulator on OBV', async () => {
        await Orange_Book_ValuePage.toVehiclePricingCalculator()
        await expect(Orange_Book_ValuePage.seller_tab).toBeDisplayed()
        await browser.pause(2000)
        console.log(await Orange_Book_ValuePage.seller_tab.getText());
        console.log("I Want to buy Tab is displayed for Buyer")
        await browser.pause(2000)
        await Orange_Book_ValuePage.toTakeInputs()
        await Orange_Book_ValuePage.orangeBookValue_next.click()
        console.log("Towards the options like New,Used ,Exchange on Vechile Pricing Calculator")
        await browser.pause(2000)
        await Orange_Book_ValuePage.inputForNewVechicle()
       
    })

    it('TC_09 Verify Exchange functionality on vehicle pricing calulator on OBV', async () => {
        await Orange_Book_ValuePage.toVehiclePricingCalculator()
        await expect(Orange_Book_ValuePage.seller_tab).toBeDisplayed()
        await browser.pause(2000)
        console.log(await Orange_Book_ValuePage.seller_tab.getText());
        console.log("I Want to buy Tab is displayed for Buyer")
        await browser.pause(2000)
        await Orange_Book_ValuePage.toTakeInputs()
        await Orange_Book_ValuePage.orangeBookValue_next.click()
        console.log("Towards the options like New,Used ,Exchange on Vechile Pricing Calculator")
        await browser.pause(2000)
        await expect(Orange_Book_ValuePage.used).toBeDisplayed()
        console.log("Used Option shown on the Vehicle Pricing Calculator")
        await Orange_Book_ValuePage.used.click()
        await expect(Orange_Book_ValuePage.used_vehicle_info).toBeDisplayed()
        console.log(await Orange_Book_ValuePage.used_vehicle_info.getText())
        await Orange_Book_ValuePage.IWantToBuy2.click()
        await Orange_Book_ValuePage.from_individual2.click()
        await Orange_Book_ValuePage.toTakeInputsForOBV()
        await expect(Orange_Book_ValuePage.check_OBV).toBeDisplayed()
        await expect(Orange_Book_ValuePage.check_OBV).toHaveTextContaining("Check OBV");
        console.log("Check OBV tab is shown after giving details for Used car on Vechile Pricing Calculator")
    });


    it('TC_10 Verify Future price functionality on vehicle pricing calulator on OBV', async () => {
        await Orange_Book_ValuePage.toVehiclePricingCalculator()
        await expect(Orange_Book_ValuePage.seller_tab).toBeDisplayed()
        await browser.pause(2000)
        console.log(await Orange_Book_ValuePage.seller_tab.getText());
        console.log("I Want to buy Tab is displayed for Buyer")
        await browser.pause(2000)
        await Orange_Book_ValuePage.toTakeInputs()
        await Orange_Book_ValuePage.orangeBookValue_next.click()
        console.log("Towards the options like New,Used ,Exchange on Vechile Pricing Calculator")
        await browser.pause(2000)
        await expect(Orange_Book_ValuePage.futurePrice).toBeDisplayed()
        console.log("Future Price Option shown on the Vehicle Pricing Calculator")
        await Orange_Book_ValuePage.used.click()
        await expect(Orange_Book_ValuePage.used_vehicle_info).toBeDisplayed()
        console.log(await Orange_Book_ValuePage.used_vehicle_info.getText())
        await Orange_Book_ValuePage.IWantToBuy2.click()
        await Orange_Book_ValuePage.from_individual2.click()
        await Orange_Book_ValuePage.toTakeInputsForOBV()
        await expect(Orange_Book_ValuePage.check_OBV).toBeDisplayed()
        await expect(Orange_Book_ValuePage.check_OBV).toHaveTextContaining("Check OBV");
        console.log("Check OBV tab is shown after giving details for Used car on Vechile Pricing Calculator")
    });

})