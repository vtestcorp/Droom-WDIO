const CheckHistory = require('../../Pages/Web/CheckHistoryPage')
const Base = require('../../BaseClass/base')
describe("Check History", () => {
    it("TC_01 To Verify Functionality Of Check History", async () => {
        await Base.loginAsBuyer()
        await (await CheckHistory.categories).click()
        await (await CheckHistory.history).click()
        console.log("Navigate to History Page")
        expect(await CheckHistory.registredVehicleRegNo).toBeDisplayed()
        console.log("Registration No Textbox displayed")
        await (await CheckHistory.registredVehicleRegNo).setValue("MH13 Y 4444")
        console.log("User entered Valid Registration Number")
        expect(await CheckHistory.checkHistoryBtn).toBeDisplayed()
        console.log("Check History Button Displayed")
        console.log(await (await CheckHistory.checkHistoryBtn).isClickable())
        await (await CheckHistory.checkHistoryBtn).click()
        expect(await CheckHistory.vehicleCertificate).toBeDisplayed()
        console.log("Application show Vehicle History Certificate")
        });


       it("TC_02 To Verify About Menu On History Page", async () => {
        await (await CheckHistory.historylink).click()
        expect(await CheckHistory.aboutTab).toBeDisplayed()
        console.log("About Tab Displayed")
        console.log(await (await CheckHistory.aboutTab).isClickable())
        await (await CheckHistory.aboutTab).click()
        console.log("User click on ABOUT Tab on check history Page")
        expect(await CheckHistory.aboutHistory).toBeDisplayed()
        console.log("About History Displayed")
        expect(await CheckHistory.whyHistory).toBeDisplayed()
        console.log("Why History displayed")
        expect(await CheckHistory.keyHighlights).toBeDisplayed()
        console.log("Key Highlights Displayed")
        console.log("All Points are displayed in About Page")
    });

     it("TC_03 To Verify Premium Certificate On History Page", async () => {
       expect(await CheckHistory.premiumCertificate).toBeDisplayed()
       console.log("Premium Certificate Tab Displayed")
       console.log(await (await CheckHistory.premiumCertificate).isClickable())
        await (await CheckHistory.premiumCertificate).click()
        console.log("Navigate to Premium Certificate")
        expect(await CheckHistory.heading).toBeDisplayed()
        console.log(await (await CheckHistory.heading).getText())
        await (await CheckHistory.registredVehicleRegNo).setValue("MH13 Y 4444")
        console.log("User entered Valid Registration Number")
        expect(await CheckHistory.goldCertificate).toBeDisplayed()
        console.log(await (await CheckHistory.goldCertificate).isClickable())
        await (await CheckHistory.goldCertificate).click()
        console.log("Sucessfully Item is added to cart")
        expect(await CheckHistory.platinumCertificate).toBeDisplayed()
        console.log(await (await CheckHistory.platinumCertificate).isClickable())
        console.log("Application shows platinum Certificate")
        expect(await CheckHistory.sampleReport).toBeDisplayed()
        console.log(await (await CheckHistory.sampleReport).isClickable())
        console.log("Sample Report Displayed")
     });


   it("TC_04 To Verify The List Of FAQs Is Displayed On History Page", async () => {
        await browser.back()
        await (await CheckHistory.faq).click()
        console.log("Application shows FAQ")
        await (await CheckHistory.faq).scrollIntoView()
        expect(await CheckHistory.faq).toBeDisplayed()
        expect(await CheckHistory.list).toHaveChildren(5)
        console.log("Application shows FAQ Points")
    });
    it("TC_05 To Verify The View Sample Vehicle History Certificate Link Is Functional", async () => {
      await (await CheckHistory.certificateLink).waitForDisplayed({ timeout: 2000 })
      expect(await CheckHistory.certificateLink).toBeDisplayed()
      console.log(await (await CheckHistory.certificateLink).getText())
      console.log(await (await CheckHistory.certificateLink).isClickable())
      await (await CheckHistory.certificateLink).click()
      console.log("User click on sample Vehicle History Certificate Link")
      expect(await CheckHistory.sampleCertificate).toBeDisplayed()
      console.log(await (await CheckHistory.sampleCertificate).getText())
      console.log("Sample Certificate Displayed")
      await (await CheckHistory.close).click()
    });
   
    it("TC_06 To Verify The Home Option Is Functional On History Page", async () => {
      await (await CheckHistory.homeTab).waitForDisplayed({ timeout: 2000 })
      expect(await CheckHistory.homeTab).toBeDisplayed()
        console.log(await (await CheckHistory.homeTab).isClickable())
        await (await CheckHistory.homeTab).click()
        console.log(await browser.getUrl())
        expect(browser).toHaveTitle("India's Most Trusted Motorplace to Buy & Sell Used Cars, Bikes, Scooters Online | Droom")
        console.log("After click on Home Tab user navigate to home page")
    });
});