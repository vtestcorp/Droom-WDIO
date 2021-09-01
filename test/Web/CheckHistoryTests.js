const CheckHistory = require('../../Pages/Web/CheckHistoryPage')
const Base = require('../../BaseClass/base')

describe("Check History", () => {
    it("TC_01_To Verify Functionality Of Check History", async () => {
        await Base.loginAsBuyer()
        await (await CheckHistory.checkHistory).click()
        await (await CheckHistory.registredVehicleRegNo).setValue("MH13 Y 4444")
        console.log("User entered Valid Registration Number")
        await (await CheckHistory.checkHistoryBtn).click()
        expect(await CheckHistory.vehicleCertificate).toBeDisplayed()
        console.log("Application show Vehicle History Certificate")
        console.log("Navigate to History Page")
    });

    it("TC_02_To Verify About Menu On History Page", async () => {
        await (await CheckHistory.checkHistory).click()
        await (await CheckHistory.aboutTab).click()
        console.log("User click on ABOUT Tab on check history Page")
        expect(await CheckHistory.aboutHistory).toBeDisplayed()
        console.log("About History Dispalyed")
        expect(await CheckHistory.whyHistory).toBeDisplayed()
        console.log("Why History dispalyed")
        expect(await CheckHistory.keyHighlights).toBeDisplayed()
        console.log("Key Highlights Displayed")
        console.log('All Points are displayed in About Page')


    });

    it("TC_03_To Verify Premium Certificate On History Page", async () => {
        await (await CheckHistory.checkHistory).click()
        await (await CheckHistory.premiumCertificate).click()
        await (await CheckHistory.registredVehicleRegNo).setValue("MH13 Y 4444")
        console.log("User entered Valid Registration Number")
        expect(await CheckHistory.goldCertificate).toBeDisplayed()
        console.log("Application shows gold Certificate")
        expect(await CheckHistory.platinumCertificate).toBeDisplayed()
        console.log("Application shows platinum Certificate")


    });

    it("TC_04_To Verify The List Of FAQs Is Displayed On History Page", async () => {
        await (await CheckHistory.checkHistory).click()
        await (await CheckHistory.faq).click()
        await (await CheckHistory.faq).scrollIntoView()
        expect(await CheckHistory.faq).toBeDisplayed()
        console.log("Application shows FAQ Points")
        expect(await CheckHistory.list).toHaveChildren(5)
        console.log("Application shows FAQ Points")

    });


    it("TC_05_To Verify The View Sample Vehicle History Certificate Link Is Functional", async () => {
        await (await CheckHistory.checkHistory).click()
        console.log("User click on Check History")
        await (await CheckHistory.certificateLink).click()
        console.log("User click on sample Vehicle History Certificate Link")
        expect(await CheckHistory.sampleCertificate).toBeDisplayed()
        console.log("Sample Certificate Displayed")
        console.log(await (await CheckHistory.sampleCertificate).getText())

    });

    it("TC_06_To Verify The Home Option Is Functional On History Page", async () => {
        await (await CheckHistory.checkHistory).click()
        console.log('User click on Check History')
        await (await CheckHistory.homeTab).click()
        console.log(await browser.getUrl())
        expect(browser).toHaveTitle("India's Most Trusted Motorplace to Buy & Sell Used Cars, Bikes, Scooters Online | Droom")
        console.log('After click on Home Tab user navigate to home page')
    });

});