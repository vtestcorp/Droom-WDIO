
const base = require('../../BaseClass/base')
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
it('TC_02 Verify the functionality of "I want to Buy" From an Individual', async () => {
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
    await obvPage.inputForSubmit()
    expect(await obvPage.getReport).toBeDisplayed()
    console.log("Get Report Button is available")
    await(await obvPage.getReport).click()
    console.log("Clicked on Check Price")
    expect(await obvPage.checkObvBtn).toBeDisplayed()
    console.log("Check OBV button is displayed")
    expect(await obvPage.valueAt).toBeDisplayed()
    console.log("After click Value get displayed")
});
it('TC_03 Verify the functionality of I want to Buy From Dealer', async () => {
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
    expect(await obvPage.fromDealer).toBeDisplayed()
    console.log("I want To Buy From Dealer is shown on Page")
    await obvPage.inputForSubmit()
    expect(await obvPage.getReport).toBeDisplayed()
    console.log("Get Report Button is available")
    await(await obvPage.getReport).click()
    console.log("Clicked on Check Price")
    expect(await obvPage.checkObvBtn).toBeDisplayed()
    console.log("Check OBV button is displayed")
    expect(await obvPage.valueAt).toBeDisplayed()
    console.log("After click Value get displayed")
});

it('TC_04 Verify the functionality of I want to sell to an Individual', async () => {
    await browser.url('/user/login') 
    await obvPage.traverseToValuation()
    expect(await  obvPage.pricingCalculator).toBeDisplayed()
    console.log("Pricing Calculator displayed as :"+await(await obvPage.pricingCalculator).getText())
    expect(await obvPage.IwanttoSell).toBeDisplayed()
    console.log("Buyer Tab displayed as:"+await(await obvPage.IwanttoSell).getText())
    await(await obvPage.IwanttoSell).click()
    console.log("Clicked on I want to Sell")
    await(await obvPage.toIndividual).click()
    console.log("Clicked on I want to Sell an individual")
    await obvPage.inputForSubmit()
    expect(await obvPage.getReport).toBeDisplayed()
    console.log("Get Report Button is available")
    await(await obvPage.getReport).click()
    console.log("Clicked on Get Report")
    expect(await obvPage.checkObvBtn).toBeDisplayed()
    console.log("Check OBV button is displayed")
    expect(await obvPage.valueAt).toBeDisplayed()
    console.log("After click Value get displayed")
});
    it('TC_05 Verify the functionality of I want to sell to dealer', async () => {
    await browser.url('/user/login') 
    await obvPage.traverseToValuation()
    expect(await  obvPage.pricingCalculator).toBeDisplayed()
    console.log("Pricing Calculator displayed as :"+await(await obvPage.pricingCalculator).getText())
    expect(await obvPage.IwanttoSell).toBeDisplayed()
    console.log("Buyer Tab displayed as:"+await(await obvPage.IwanttoSell).getText())
    await(await obvPage.IwanttoSell).click()
    console.log("Clicked on I want to Sell")
    await(await obvPage.toDealer).click()
    console.log("Clicked on I want to Sell to Dealer")
    await obvPage.inputForSubmit()
    expect(await obvPage.getReport).toBeDisplayed()
    console.log("Get Report Button is available")
    await(await obvPage.getReport).click()
    console.log("Clicked on Get Report")
    expect(await obvPage.checkObvBtn).toBeDisplayed()
    console.log("Check OBV button is displayed")
    expect(await obvPage.valueAt).toBeDisplayed()
    console.log("After click Value get displayed")
});
   it('TC_06 Verify the Grades on pricing report', async () => {
    await browser.url('/user/login') 
    await obvPage.traverseToValuation()
    expect(await  obvPage.pricingCalculator).toBeDisplayed()
    console.log("Pricing Calculator displayed as :"+await(await obvPage.pricingCalculator).getText())
    expect(await obvPage.IwanttoBuy).toBeDisplayed()
    console.log("Buyer Tab displayed as :"+await(await obvPage.IwanttoBuy).getText())
    await(await obvPage.IwanttoBuy).click()
    console.log("Clicked on I want to Buy")
    await(await obvPage.fromIndividual1).click()
    console.log("Clicked on I want to Buy From an Individual")
    await obvPage.inputForSubmit()
    expect(await obvPage.getReport).toBeDisplayed()
    console.log("Get Report Button is available")
    await(await obvPage.getReport).click()
    console.log("Clicked on Get Report")
    expect(await obvPage.checkObvBtn).toBeDisplayed()
    console.log("Check OBV Button is availbale")
    expect(await obvPage.good).toBeDisplayed
    console.log("Grade is displayed on OBV page after submitting required details")
    console.log("OBV Pricing Report suggested the Good value of vehicle.. by analysing all the inputs given by the user.")
  });

 it('TC_07 Verify used functionality on vehicle pricing calulator on OBV', async () => {
    //await browser.url('/user/login') 
    //await obvPage.traverseToValuation()
    //await obvPage.traverseToOptions()
     await browser.url('/obv')
    console.log("User is on Orange Book Value Page")
    expect(await obvPage.usedHeading).toBeDisplayed()
    expect(await obvPage.used).toBeDisplayed()
    console.log("Used option is Displayed On Pricing Calculator")
    await(await obvPage.used).click()
    console.log("Clicked On Used Option")
    expect(await obvPage.IwanttoBuy1).toBeDisplayed()
    console.log("Buyer Tab displayed as :"+await(await obvPage.IwanttoBuy1).getText())
    await(await obvPage.IwanttoBuy1).click()
    console.log("Clicked on I want to Buy")
    await obvPage.inputToUsed()
    expect(await obvPage.usedcar2).toBeDisplayed()
    console.log("Orange Book Valued Shown for Used Car")
});
it('TC_08 Verify new functionality on vehicle pricing calulator on OBV', async () => {
    await browser.url('/obv') 
    //await obvPage.traverseToValuation()
  //  await obvPage.traverseToOptions()
    expect(await obvPage.newTab).toBeDisplayed()
    console.log("New option is Displayed On Pricing Calculator")
    await(await obvPage.newTab).click()
    console.log("Clicked On New Option")
    await obvPage.inputToNew()
    expect(await obvPage.usedcar2).toBeDisplayed()
    console.log("Orange Book Valued Shown for Used Car")
});
it('TC_09 Verify exchange functionality on vehicle pricing calulator of OBV', async () => {
    await browser.url('/obv') 
    //await browser.url('/user/login') 
  //  await obvPage.traverseToValuation()
   // await obvPage.traverseToOptions()
    expect(await obvPage.exchange).toBeDisplayed()
    console.log("Exchange option is Displayed On Pricing Calculator")
    await(await obvPage.exchange).click()
    console.log("Clicked On Exchange Option")
    expect(await obvPage.exchangeInfo).toBeDisplayed()
    console.log("Exchange Information is Displayed On Pricing Calculator as---")
    //console.log(await(await obvPage.exchangeInfo).getText())
    expect(await obvPage.IwanttoExchange).toBeDisplayed()
    console.log(await("Sub Heading Shown as-- :"+await obvPage.IwanttoExchange).getText())
    expect(await obvPage.lableWith).toBeDisplayed()
    console.log("With Lable shown on Vehicle Pricing Calculator")
    expect(await obvPage.lableNew).toBeDisplayed()
    console.log("New Lable shown on Vehicle Pricing Calculator")
    expect(await obvPage.lableUsed).toBeDisplayed()
    console.log("Used Lable shown on Vehicle Pricing Calculator")
    console.log("Takinhg inputs for Exchabge valuation of Vechicle")
    await obvPage.inputToExchange()
    expect(await obvPage.checkExchangePrice).toBeDisplayed()
    console.log("CHeck Exchange Price Button os Shown")
    await(await obvPage.checkExchangePrice).click()
    console.log("CLicked on Check Exchange Price Button")
    //page not displayed to tk locator 
    expect(await Orange_Book_ValuePage.headingExchnagePrice).toBeDisplayed()
    expect(await Orange_Book_ValuePage.headingExchnagePrice).toHaveTextContaining("Amount You will need to pay for this Exchange")
    console.log("After click on the Check Exchange  price Amount You will need to pay for this Exchange is displayed")
 });
it('TC_10 Verify Residual functionality on vehicle pricing calulator of OBV', async () => {
    await browser.url('/obv') 
   // await browser.url('/user/login') 
  //  await obvPage.traverseToValuation()
   // await obvPage.traverseToOptions()
    expect(await obvPage.residual).toBeDisplayed()
    console.log("Residual option is Displayed On Pricing Calculator")
    await(await obvPage.residual).click()
    console.log("Clicked On Residual Option")
    expect(await obvPage.residual).toBeDisplayed()
    console.log("Residual Information is Displayed On Pricing Calculator as---")
    console.log(await(await obvPage.residualInfo).getText())
    expect(await obvPage.lableNew).toBeDisplayed()
    console.log("For New  Residual Lable shown on Vehicle Pricing Calculator")
    expect(await obvPage.lableUsed).toBeDisplayed()
    console.log("For Used Residaul Lable shown on Vehicle Pricing Calculator")
    console.log("Takinhg inputs for Exchabge valuation of Vechicle")
    await obvPage.inputToResidaul()
    //expect(await obvPage.checkExchangePrice).toBeDisplayed()
    //console.log("CHeck Exchange Price Button os Shown")
   // await(await obvPage.checkExchangePrice).click()
   // console.log("CLicked on Check Exchange Price Button")
});
it('TC_11 Verify the functionality of Pricing Certificate', async () => {
    await browser.url('/user/login') 
    await obvPage.traverseToValuation()
    await base.swipeUp()
    expect(await obvPage.sampleReport).toBeDisplayed()
    console.log("Sample Report is Displayed")
    expect(await obvPage.BtnPrevious).toBeDisplayed()
    console.log("Previous Button is Displayed")
    expect(await obvPage.BtnNext).toBeDisplayed()
    console.log("Next Button is Displayed")
    expect(await obvPage.headingReport)
    console.log(await(await obvPage.headingReport).getText())
   await(await obvPage.BtnNext).click() 
   expect(await obvPage.page2).toBeDisplayed()
   console.log("After click on Next Button User able to see next page of report")
   await(await obvPage.BtnPrevious).click() 
    expect(await obvPage.sampleReport).toBeDisplayed()
    console.log("After click on Previous Button User able to see Previous page of report")
});
});