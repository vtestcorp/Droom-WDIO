const base = require("../../BaseClass/base");
const checkHistoryPage = require("../../Pages/Androidbrowser/checkHistoryPage");


describe('Check History', async () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
    });
    it("TC_01 To Verify Functionality Of Check History", async () => {
        browser.url('/history')
        console.log("Navigate to History Page")
        console.log(await (await checkHistoryPage.title).getText())
        expect(await checkHistoryPage.registredVehicleRegNo).toBeDisplayed()
        console.log("Registration No Textbox displayed")
        await (await checkHistoryPage.registredVehicleRegNo).setValue("MH13 Y 4444")
        console.log("User entered Valid Registration Number")
        expect(await checkHistoryPage.checkHistoryBtn).toBeDisplayed()
        console.log("Check History Button Displayed")
        await (await checkHistoryPage.checkHistoryBtn).click()
        console.log("Clicked on check history")
        await browser.pause('2000')
        expect(await checkHistoryPage.vehicleCertificate).toBeDisplayed()
        console.log("Application show Vehicle History Certificate")
    });
      
 /*   it("TC_02 To Verify About Menu On History Page", async () => {
          //not automated because of pop automatically closed
    });

    
    it("TC_03 To Verify Premium Certificate On History Page", async () => {
          //not automated because of pop automatically closed
    });
*/
    it("TC_04 To Verify The List Of FAQs Is Displayed On History Page", async () => {
        browser.url('/history')
        await browser.pause(3000)
        await base.swipeUp()
        console.log('scrolling to faq')
        expect(await checkHistoryPage.faq).toBeDisplayed()
        console.log("Application shows FAQ")
       await base.scrollToExactText("Can I sell Vehicle History certificate?")
        expect(await checkHistoryPage.point1).toBeDisplayed()
        console.log(await (await checkHistoryPage.point1).getText())
        await base.swipeUp()
        expect(await checkHistoryPage.point2).toBeDisplayed()
        console.log(await (await checkHistoryPage.point2).getText())
        expect(await checkHistoryPage.point3).toBeDisplayed()
        console.log(await (await checkHistoryPage.point3).getText())
        expect(await checkHistoryPage.point4).toBeDisplayed()
        console.log(await (await checkHistoryPage.point4).getText())
        expect(await checkHistoryPage.point5).toBeDisplayed()
        console.log(await (await checkHistoryPage.point5).getText())
        console.log("Frequently Asked Question Displayed")
    });

    it("TC_05 To Verify The View Sample Vehicle History Certificate Link Is Functional", async () => {
        browser.url('/history')
        await browser.pause(3000)
        await base.swipeUp()
        console.log('scrolling to Link')
        expect(await checkHistoryPage.certificateLink).toBeDisplayed()
        console.log(await (await checkHistoryPage.certificateLink).getText())
        await (await checkHistoryPage.certificateLink).click()
        console.log("User click on sample Vehicle History Certificate Link")
        expect(await checkHistoryPage.sampleCertificate).toBeDisplayed()
        console.log(await (await checkHistoryPage.sampleCertificate).getText())
        console.log("Sample Certificate Displayed")

    });

    it("TC_06 To Verify The Home Option Is Functional On History Page", async () => {
        browser.url('/history')
        expect(await checkHistoryPage.home).toBeDisplayed()
        console.log('Home tab displayed on history page')
        await (await checkHistoryPage.home).click()
        console.log("user clicked on home tab")
        await browser.pause(3000)
        expect(await checkHistoryPage.homeurl).toBeDisplayed()
        console.log(await (await checkHistoryPage.homeurl).getText())
        expect(browser).toHaveTitle("India's Most Trusted Motorplace to Buy & Sell Used Cars, Bikes, Scooters Online | Droom")
        console.log("After click on Home Tab user navigate to home page")
    });

  
});