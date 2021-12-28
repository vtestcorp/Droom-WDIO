const base = require("../../BaseClass/base");
const checkHistoryPage = require("../../Pages/iOS/checkHistoryPage");
describe("Check History", () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
    });
    it("TC_01 Verify The Check History Functionality", async () => {
        //await base.skipStartup()
        await (await checkHistoryPage.menu).waitForEnabled({timeout: 30000 })
        expect(await checkHistoryPage.menu).toBeDisplayed()
        console.log("Menu is displayed")
        await (await checkHistoryPage.menu).click()
        console.log("Clicked on Menu")
        await(await checkHistoryPage.vehicleHistory).click()
        console.log("Clicked on vehicle History ")
        expect(await checkHistoryPage.pageheading).toBeDisplayed()
        console.log("Check History page displayed")
        expect(await checkHistoryPage.registrationNo).toBeDisplayed()
        console.log("Registration No Textbox Displayed")
        await (await checkHistoryPage.registrationNo).setValue("MH13Y4444")
        expect(await checkHistoryPage.checkhistoryBtn).toBeDisplayed()
        console.log("Check History Button Displayed")
        await (await checkHistoryPage.checkhistoryBtn).click()
        console.log("Clicked on Check History Button")
        expect(await checkHistoryPage.vehicleCertificate).toBeDisplayed()
        console.log("Vehicle History Certificate Displayed")
    });
    it("TC_02 Verify the About menu on History page", async () => {
        //await page.skipStartup()
        await (await checkHistoryPage.menu).click()
        console.log("Clicked on Menu")
        await(await checkHistoryPage.vehicleHistory).click()
        console.log("Clicked on vehicle History ")
        expect(await checkHistoryPage.pageheading).toBeDisplayed()
        console.log("Check History page displayed")
        expect(await checkHistoryPage.aboutHistory).toBeDisplayed()
        console.log("About History Dispalyed")
    
       });
   it("TC_04 Verify the list of FAQs is displayed on History page", async () => {
        //await page.skipStartup()
        await (await checkHistoryPage.menu).click()
        console.log("Clicked on Menu")
        await(await checkHistoryPage.vehicleHistory).click()
        console.log("Clicked on vehicle History ")
        expect(await checkHistoryPage.pageheading).toBeDisplayed()
        console.log("Check History page displayed")
        console.log("Scroll up FAQS list")
        await (await checkHistoryPage.faq1).isDisplayed()
        console.log("FAQ Displayed As=>")
        console.log (await (await checkHistoryPage.faq1).getText())
        console.log (await (await checkHistoryPage.faq2).getText())
    });
    it("TC_05 Verify the View Sample Vehicle History Certificate link is functional", async () => {
        //await page.skipStartup()
        await (await checkHistoryPage.menu).click()
        console.log("Clicked on Menu")
        await(await checkHistoryPage.vehicleHistory).click()
        console.log("Clicked on vehicle History ")
        expect(await checkHistoryPage.pageheading).toBeDisplayed()
        console.log("Check History page displayed")
        await (await checkHistoryPage.certificateLink).isDisplayed()
        console.log("view sample vehicle Histyory certificate link is displayed")
        await (await checkHistoryPage.certificateLink).click()
        expect(await checkHistoryPage.certificateHeading).toBeDisplayed()
        console.log("Sample Vehicle History Certificate shown to the User")

    });
    it("TC_06 Verify the Home  Option is functional on History page", async () => {
        //await page.skipStartup()
        await (await checkHistoryPage.menu).waitForEnabled({timeout: 30000 })
        expect(await checkHistoryPage.menu).toBeDisplayed()
        console.log("Menu is displayed")
        await (await checkHistoryPage.menu).click()
        console.log("Clicked on Menu")
        await(await checkHistoryPage.vehicleHistory).click()
        console.log("Clicked on vehicle History ")
        expect(await checkHistoryPage.pageheading).toBeDisplayed()
        console.log("Check History page displayed")
        expect(await checkHistoryPage.Home).toBeDisplayed()
        console.log("Home Link is Displayed on Vehicle History Page")
        await(await checkHistoryPage.Home).click()
        console.log("CLicked on Home link")
        expect(await checkHistoryPage.createReq).toBeDisplayed()
        console.log("Home Link is Functional")
        console.log("After click on Home link It shows create Requirement Page")

    });
});