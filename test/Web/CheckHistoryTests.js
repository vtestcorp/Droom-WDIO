const CheckHistory = require('../../Pages/Web/CheckHistoryPage')
const Base = require('../../BaseClass/base')
describe("Check History", () => {
    it("TC_01 To Verify Functionality Of Check History", async () => {
        await Base.loginAsBuyer()
        await (await CheckHistory.checkHistory).click()
        await (await CheckHistory.registredVehicleRegNo).setValue("MH13 Y 4444")
        console.log("User entered Valid Registration Number")
        await (await CheckHistory.checkHistoryBtn).click()
        expect(await CheckHistory.vehicleCertificate).toBeDisplayed()
        console.log("Application show Vehicle History Certificate")
        console.log("Navigate to History Page")
    });
    it("TC_02 To Verify About Menu On History Page", async () => {
        await (await CheckHistory.checkHistory).click()
        await (await CheckHistory.aboutTab).click()
        console.log("User click on ABOUT Tab on check history Page")
        expect(await CheckHistory.aboutHistory).toBeDisplayed()
        console.log("About History Dispalyed")
        expect(await CheckHistory.whyHistory).toBeDisplayed()
        console.log("Why History dispalyed")
        expect(await CheckHistory.keyHighlights).toBeDisplayed()
        console.log("Key Highlights Displayed")
        console.log("All Points are displayed in About Page")
    });
    it("TC_03 To Verify Premium Certificate On History Page", async () => {
        await (await CheckHistory.checkHistory).click()
        await (await CheckHistory.premiumCertificate).click()
        await (await CheckHistory.registredVehicleRegNo).setValue("MH13 Y 4444")
        console.log("User entered Valid Registration Number")
        expect(await CheckHistory.goldCertificate).toBeDisplayed()
        console.log("Application shows gold Certificate")
        expect(await CheckHistory.platinumCertificate).toBeDisplayed()
        console.log("Application shows platinum Certificate")
    });
    it("TC_04 To Verify The List Of FAQs Is Displayed On History Page", async () => {
        await (await CheckHistory.checkHistory).click()
        await (await CheckHistory.faq).click()
        console.log("Application shows FAQ")
        await (await CheckHistory.faq).scrollIntoView()
        expect(await CheckHistory.faq).toBeDisplayed()
        expect(await CheckHistory.list).toHaveChildren(5)
        console.log("Application shows FAQ Points")
    });
    it("TC_05 To Verify The View Sample Vehicle History Certificate Link Is Functional", async () => {
        await (await CheckHistory.checkHistory).click()
        console.log("User click on Check History")
        await (await CheckHistory.certificateLink).click()
        console.log("User click on sample Vehicle History Certificate Link")
        expect(await CheckHistory.sampleCertificate).toBeDisplayed()
        console.log(await (await CheckHistory.sampleCertificate).getText())
        console.log("Sample Certificate Displayed")
    });
    it("TC_06 To Verify The Home Option Is Functional On History Page", async () => {
        browser.url('/')
        await (await CheckHistory.checkHistory).waitForDisplayed({ timeout: 2000 })
        console.log(await (await CheckHistory.checkHistory).isClickable())
        await (await CheckHistory.checkHistory).click()
        console.log("User click on Check History")
        await (await CheckHistory.checkHistory).waitForDisplayed({ timeout: 2000 })
        console.log(await (await CheckHistory.homeTab).isClickable())
        await (await CheckHistory.homeTab).click()
        console.log(await browser.getUrl())
        expect(browser).toHaveTitle("India's Most Trusted Motorplace to Buy & Sell Used Cars, Bikes, Scooters Online | Droom")
        console.log("After click on Home Tab user navigate to home page")
    });
});