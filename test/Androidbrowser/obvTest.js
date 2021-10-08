
const Base = require('../../BaseClass/base')
const obvPage = require('../../Pages/Androidbrowser/obvPage')
describe('Orange Book Value', () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
});
it('TC_01 Verify the fields on OBV page', async () => {
    await browser.url('/user/login') 
    await obvPage.traverseToValuation()
    await (await  obvPage.pricingCalculator).waitForDisplayed({timeout:30000})    
    expect(await  obvPage.pricingCalculator).toBeDisplayed()
    console.log("Pricing Calculator displayed as :"+await(await obvPage.pricingCalculator).getText())
    expect(await obvPage.IwanttoBuy).toBeDisplayed()
    console.log("Buyer Tab displayed as :"+await(await obvPage.IwanttoBuy).getText())
    expect(await obvPage.IwanttoSell).toBeDisplayed()
    console.log("Seller Tab is displayed as :"+await(await obvPage.IwanttoSell).getText())
    console.log("I Want to Sell Tab is displayed for Seller")
    expect(await obvPage.fromIndividual).toBeDisplayed()
    console.log("I want To Buy From Individual is shown on Page")
    expect(await obvPage.fromDealer).toBeDisplayed()
    console.log("I want To Buy From Dealer is shown on Page")
});
});