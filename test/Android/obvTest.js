const Base = require('../../BaseClass/base')
const obvPage = require('../../Pages/Android/obvPage')
describe('Orange Book Value', () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
    });
 it('TC_01 Verify the Functionaliy of Buyer on ECO', async () => {
    await (await Base.mainPopup).isDisplayed()
    await (await Base.mainPopup).click()
    await obvPage.traverseToObv()
    expect(await obvPage.subtitle).toBeDisplayed()
    console.log("SubTitle displayed as :"+await(await obvPage.subtitle).getText())
    expect(await  obvPage.pricingCalculator).toBeDisplayed()
    console.log("Pricing Calculator displayed as :"+await(await obvPage.pricingCalculator).getText())
    expect(await obvPage.IwanttoBuy).toBeDisplayed()
    console.log("Buyer Tab displayed as :"+await(await obvPage.IwanttoBuy).getText())
    expect(await obvPage.IwanttoSell).toBeDisplayed()
    console.log("Seller Tab is displayed as :"+await(await obvPage.IwanttoSell).getText())
    console.log("I Want to Sell Tab is displayed for Sellet")
 });
 it('TC_02 Verify the functionality of "I want to Buy" From an Individual', async () => {
    await (await Base.mainPopup).isDisplayed()
    await (await Base.mainPopup).click()
    await obvPage.traverseToObv()
    expect(await  obvPage.pricingCalculator).toBeDisplayed()
    console.log("Pricing Calculator displayed as :"+await(await obvPage.pricingCalculator).getText())
    expect(await obvPage.IwanttoBuy).toBeDisplayed()
    console.log("Buyer Tab displayed as :"+await(await obvPage.IwanttoBuy).getText())
    await(await obvPage.IwanttoBuy).click()
    console.log("Clicked on I want to Buy")
    await(await obvPage.fromIndividual).click()
    console.log("Clicked on I want to Buy From an Individual")
    await obvPage.inputToCheckPrice()
    expect(await obvPage.checkPrice).toBeDisplayed()
    console.log("Check Price Button is availbale")
    await(await obvPage.checkPrice).click()
    console.log("Clicked on Check Price")
    expect(await obvPage.checkObvBtn).toBeDisplayed()
    console.log("Check OBV button is displayed")
    await(await obvPage.checkObvBtn).click()
    console.log("Clicked on Check OBV Button")
    console.log("After click On Check OBV  :"+await(await obvPage.rs).getText())
 });
});
 