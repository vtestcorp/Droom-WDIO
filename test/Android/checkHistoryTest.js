const base = require("../../BaseClass/base");
const CheckHistoryPage = require("../../Pages/Android/checkHistoryPage");
describe("Check History", () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
    });
    it("TC_01 Verify The Check History Functionality", async () => {
        await (await CheckHistoryPage.mainPopup).isDisplayed()
        await (await CheckHistoryPage.mainPopup).click()
        console.log('Application Launched')
        await CheckHistoryPage.traverseToVehicleHistory()
        await base.scrollToExactText("Check History")
        expect(await CheckHistoryPage.registrationNo).toBeDisplayed()
        console.log("Registration No Textbox Displayed")
        await (await CheckHistoryPage.registrationNo).setValue("MH13Y4444")
        expect(await CheckHistoryPage.checkhistoryBtn).toBeDisplayed()
        console.log("Check History Button Displayed")
        await (await CheckHistoryPage.checkhistoryBtn).click()
        await (await CheckHistoryPage.smallpopUp).waitForExist()
        console.log("Help pop Up is Displayed")
        await (await CheckHistoryPage.smallpopUp).click()
        console.log("Pop up handled Successfully")
        expect(await CheckHistoryPage.vehicleCertificate).toBeDisplayed()
        console.log("Vehicle History Certificate Displayed")
    });
    it("TC_02 Verify the About menu on History page", async () => {
        await (await CheckHistoryPage.mainPopup).isDisplayed()
        await (await CheckHistoryPage.mainPopup).click()
        console.log('Application Launched')
        await CheckHistoryPage.traverseToVehicleHistory()
        await base.scrollToExactText("ABOUT HISTORY")
        expect(await CheckHistory.aboutHistory).toBeDisplayed()
        console.log("About History Dispalyed=>")
        console.log(await(await checkHistoryPage.textAboutHistory).getText())
       });
    it("TC_04 Verify the list of FAQs is displayed on History page", async () => {
        await base.androidLoginAsBuyer()
        await browser.pause("2000")
        await (await CheckHistoryPage.buy).click()
        console.log("clicked on buy ")
        await (await CheckHistoryPage.certification).click()
        console.log("Clicked on Certification Services")
        await base.scrollToExactText(CheckHistoryPage.vehicleHistory)
        console.log("Scroll up Vehicle History")
        await (await CheckHistoryPage.vehicleHistory).click()
        console.log("Clicked on Vehicle History")
        await base.scrollToExactText(CheckHistoryPage.faqs)
        expect(await CheckHistoryPage.text1).toBeDisplayed()
        console.log("Can I sell Vehicle History certificate? Displayed")
        expect(await CheckHistoryPage.text2).toBeDisplayed()
        console.log("How is a Droom Vehicle certificate helpful? Displayed")
    });
    it("TC_05 Verify the View Sample Vehicle History Certificate link is functional", async () => {
        await base.androidLoginAsBuyer()
        await browser.pause("2000")
        await (await CheckHistoryPage.buy).click()
        console.log("clicked on buy ")
        await (await CheckHistoryPage.certification).click()
        console.log("Clicked on Certification Services")
        await base.scrollToExactText(CheckHistoryPage.vehicleHistory)
        console.log("Scroll up Vehicle History")
        await (await CheckHistoryPage.vehicleHistory).click()
        console.log("Clicked on Vehicle History")
        await base.swipeUp()
        await (await CheckHistoryPage.historyCertificate).click()
        expect(await CheckHistoryPage.myModalLabel).toBeDisplayed()
        console.log("Sample Vehicle History Certificate link Displayed")

    });
});