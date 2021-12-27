const base = require('../../BaseClass/base')
const obvPage = require('../../Pages/Android/obvPage')
describe('Orange Book Value', () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
    });
it('TC_01 Verify the fields on OBV page', async () => {
    await obvPage.traverseToObv()
    await (await obvPage.smallpopUp).waitForExist()
    console.log("Help pop Up is Displayed")
   await (await obvPage.smallpopUp).click()
   expect(await obvPage.subtitle).toBeDisplayed()
   console.log("SubTitle displayed as :"+await(await obvPage.subtitle).getText())
    expect(await obvPage.IwanttoBuy).toBeDisplayed()
    console.log("Buyer Tab displayed as :"+await(await obvPage.IwanttoBuy).getText())
    expect(await obvPage.IwanttoSell).toBeDisplayed()
    console.log("Seller Tab is displayed as :"+await(await obvPage.IwanttoSell).getText())
    console.log("I Want to Sell Tab is displayed for Seller")
 });
/*it('TC_02 Verify the functionality of "I want to Buy" From an Individual', async () => {
    await obvPage.traverseToObv()
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
    expect(await obvPage.valueAt).toBeDisplayed()
    console.log("After click Value get displayed")
 });
it('TC_03 Verify the functionality of I want to Buy From Dealer', async () => {
   await obvPage.traverseToObv()
   expect(await obvPage.IwanttoBuy).toBeDisplayed()
   console.log("Buyer Tab displayed as :"+await(await obvPage.IwanttoBuy).getText())
   await(await obvPage.IwanttoBuy).click()
   console.log("Clicked on I want to Buy")
   await(await obvPage.fromDealer).click()
   console.log("Clicked on I want to Buy From Dealer")
   await obvPage.inputToCheckPrice()
   expect(await obvPage.checkPrice).toBeDisplayed()
   console.log("Check Price Button is availbale")
   await(await obvPage.checkPrice).click()
   console.log("Clicked on Check Price")
   expect(await obvPage.checkObvBtn).toBeDisplayed()
   console.log("Check OBV button is displayed")
   expect(await obvPage.valueAt).toBeDisplayed()
   console.log("After click Value get displayed")
  });
 it('TC_04 Verify the functionality of I want to sell to an Individual', async () => {
     await obvPage.traverseToObv()
    expect(await obvPage.IwanttoSell).toBeDisplayed()
     console.log("Buyer Tab displayed as:"+await(await obvPage.IwanttoSell).getText())
     await(await obvPage.IwanttoSell).click()
     console.log("Clicked on I want to Sell")
     await(await obvPage.toIndividual).click()
     console.log("Clicked on I want to Sell an individual")
     await obvPage.inputToCheckPrice()
     expect(await obvPage.checkPrice).toBeDisplayed()
     console.log("Check Price Button is availbale")
     await(await obvPage.checkPrice).click()
     console.log("Clicked on Check Price")
     expect(await obvPage.checkObvBtn).toBeDisplayed()
     console.log("Check OBV button is displayed")
     expect(await obvPage.valueAt).toBeDisplayed()
     console.log("After click Value get displayed")
    });
    it('TC_05 Verify the functionality of I want to sell to dealer', async () => {
      await obvPage.traverseToObv()
      expect(await obvPage.IwanttoSell).toBeDisplayed()
      console.log("Buyer Tab displayed as:"+await(await obvPage.IwanttoSell).getText())
      await(await obvPage.IwanttoSell).click()
      console.log("Clicked on I want to Sell")
      await(await obvPage.toDealer).click()
      console.log("Clicked on I want to Sell to Dealer")
      await obvPage.inputToCheckPrice()
      expect(await obvPage.checkPrice).toBeDisplayed()
      console.log("Check Price Button is availbale")
      await(await obvPage.checkPrice).click()
      console.log("Clicked on Check Price")
      expect(await obvPage.checkObvBtn).toBeDisplayed()
      console.log("Check OBV button is displayed")
      expect(await obvPage.valueAt).toBeDisplayed()
      console.log("After click Value get displayed")
     });
 it('TC_06 Verify the Grades on pricing report', async () => {
    await obvPage.traverseToObv()
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
    console.log("Clicked on Check Price Button")
    expect(await obvPage.checkObvBtn).toBeDisplayed()
    console.log("Check OBV Button is availbale")
    expect(await obvPage.good).toBeDisplayed
    console.log("Grade is displayed on OBV page after submitting required details")
    console.log("OBV Pricing Report suggested the Good value of vehicle.. by analysing all the inputs given by the user.")
  });
 it('TC_07 Verify used functionality on vehicle pricing calulator on OBV', async () => {
    await obvPage.traverseToObv()
    expect(await obvPage.used).toBeDisplayed()
    console.log("Used option is Displayed On Pricing Calculator")
    await(await obvPage.used).click()
    console.log("Clicked On Used Option")
    expect(await obvPage.IwanttoBuy).toBeDisplayed()
    console.log("Buyer Tab displayed as :"+await(await obvPage.IwanttoBuy).getText())
    await(await obvPage.IwanttoBuy).click()
    console.log("Clicked on I want to Buy")
    await(await obvPage.fromIndividual).click()
    console.log("Clicked on I want to Buy From an Individual")
    await obvPage.inputToCheckPrice()
    await(await obvPage.checkPrice).click()
    console.log("Clicked on Check Price")
    expect(await obvPage.checkObvBtn).toBeDisplayed()
    console.log("Orange Book value Details shown")
    expect(await obvPage.usedcar2).toBeDisplayed()
    console.log("Orange Book Valued Shown for Used Car")
});
it('TC_08 Verify new functionality on vehicle pricing calulator on OBV', async () => {
    await obvPage.traverseToObv()
    expect(await obvPage.newTab).toBeDisplayed()
    console.log("New option is Displayed On Pricing Calculator")
    await(await obvPage.newTab).click()
    console.log("Clicked On New Option")
    expect(await obvPage.newInfo).toBeDisplayed()
    console.log("Information regarding New Tab displayed as :"+await(await obvPage.newInfo).getText())
    await obvPage. inputToNew()
    await(await obvPage.checkPrice).click()
    console.log("Clicked on Check Price")
    expect(await obvPage.checkObvBtn).toBeDisplayed()
    console.log("Orange Book value Details shown")
    expect(await obvPage.usedcar2).toBeDisplayed()
    console.log("Orange Book Valued Shown for Used Car")
});
it('TC_09 Verify exchange functionality on vehicle pricing calulator on OBV', async () => {
    await obvPage.traverseToObv()
    expect(await obvPage.exchange).toBeDisplayed()
    console.log("Exchange option is Displayed On Pricing Calculator")
    await(await obvPage.exchange).click()
    console.log("Clicked On exchange Option")
    expect(await obvPage.exchangeInfo).toBeDisplayed()
    console.log("Exchange Info displayed as :"+await(await obvPage.exchangeInfo).getText())
    expect(await obvPage.IwanttoExchange).toBeDisplayed()
    console.log("Exchange Title displayed as :"+await(await obvPage.IwanttoExchange).getText())
    await obvPage.inputToExchange()
    console.log("Exchange With Displayed with New & Old As=>:")
    console.log(await(await obvPage.withNew).getText())
    console.log(await(await obvPage.withOld).getText())
    await(await obvPage.exchangeNewMake).click()
    console.log("Clicked on Select Make")
    await(await obvPage.bmwCar).click()
    console.log("Selected BMW option for Exchange")
    await(await obvPage.exchangeNewModel).click()
    console.log("Clicked on Select Model")   
    await(await obvPage.bmwModel).click()
    console.log("Selected Model of BMW to exchange")
    await(await obvPage.exchangeNewTrim).click()
    console.log("Clicked on Select Trim")
    await(await obvPage.bmwTrim).click()
    console.log("Selected the Trim option for Exchange with New")
   expect(await obvPage.chkExchangePrice).toBeDisplayed()
    console.log("Check Exchange Button is Displayed") 
   await(await obvPage.chkExchangePrice).click()
   console.log("Clicked on Check Exchange Price Button")
   expect(await obvPage.result).toBeDisplayed()
   console.log("Result shown After click on Check Exchange Price Btn")
   expect(await obvPage.resultExchange).toBeDisplayed()
   console.log("Exchange with shown After click on Check Exchange Price Btn")
 });
it('TC_10 Verify future Price functionality on vehicle pricing calulator on OBV', async () => {
    await obvPage.traverseToObv()
    expect(await obvPage.futurePrice).toBeDisplayed()
    console.log("Future Price option is Displayed On Pricing Calculator")
    await(await obvPage.futurePrice).click()
    console.log("Clicked On Future Price Option")
    expect(await obvPage.futurePriceInfo).toBeDisplayed()
    console.log("Information Regarding Future Price displayed as :"+await(await obvPage.futurePriceInfo).getText())
    expect(await obvPage.forNew).toBeDisplayed()
    console.log("Future Tab displayed=> :"+await(await obvPage.forNew).getText())
    expect(await obvPage.forUsed).toBeDisplayed()
    console.log("Future Tab displayed=> :"+await(await obvPage.forUsed).getText())
    await obvPage.inputToFutureEstimate()
    console.log("Orange Book Valued Shown for Future Price")
    expect(await obvPage.futurePriceResult).toBeDisplayed()
    
});
it('TC_11 Verify Residual functionality on vehicle pricing calulator on OBV', async () => {
    await obvPage.traverseToObv()
    expect(await obvPage.residual).toBeDisplayed()
    console.log("Residual option is Displayed On Pricing Calculator")
    await(await obvPage.residual).click()
    console.log("Clicked On Residual Option")
    expect(await obvPage.residualInfo).toBeDisplayed()
    console.log("Information Regarding Future Price displayed as :"+await(await obvPage.residualInfo).getText())
    expect(await obvPage.forNew).toBeDisplayed()
    console.log("Residual Tab displayed=> :"+await(await obvPage.forNew).getText())
    expect(await obvPage.forUsed).toBeDisplayed()
    console.log("Residial Tab displayed=> :"+await(await obvPage.forUsed).getText())
    await obvPage.inputToResidual()
    console.log("Orange Book Valued Shown for Residual")
    expect(await obvPage.residualResult).toBeDisplayed()

});
it('TC_12 Verify functionality of pricing Certificate', async () => {
    await obvPage.traverseToObv()
    expect(await obvPage.IwanttoBuy).toBeDisplayed()
    console.log("Buyer Tab displayed as :"+await(await obvPage.IwanttoBuy).getText())
    await(await obvPage.IwanttoBuy).click()
    console.log("Clicked on I want to Buy")
    await(await obvPage.fromIndividual).click()
    console.log("Clicked on I want to Buy From an Individual")
    await obvPage.inputToCheckPrice()
    expect(await obvPage.checkPrice).toBeDisplayed()
    console.log("Check Price Button is availbale")
    await base.scrollToExactText("Pricing Certificate")
    expect(await obvPage.viewPricingCertificate).toBeDisplayed()
    await(await obvPage.viewPricingCertificate).click()
    console.log("Clicked on View Pricing Certificate")
    expect(await obvPage.pdfmsg).toBeDisplayed()
    console.log("PDf option shown with Message")
});*/
});