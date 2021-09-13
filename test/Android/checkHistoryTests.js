const base = require("../../BaseClass/base");
const CheckHistoryPage = require("../../Pages/Android/CheckHistoryPage");
describe("Check History", () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
    });

    it("TC_01 Verify The Check History Functionality", async () => {
        await (await CheckHistoryPage.mainPopup).isDisplayed()
        await (await CheckHistoryPage.mainPopup).click()
        console.log('Application Launched')
        expect(await CheckHistoryPage.vehicleHistory).toBeDisplayed()
        console.log("Vehicle History Tab Displayed")
        await (await CheckHistoryPage.vehicleHistory).click()
        expect(await CheckHistoryPage.registrationNo).toBeDisplayed()
        console.log("Registration No Textbox Displayed")
        await (await CheckHistoryPage.registrationNo).setValue("MH13Y4444")
        expect(await CheckHistoryPage.checkhistoryBtn).toBeDisplayed()
        console.log("Check History Button Displayed")
        await (await CheckHistoryPage.checkhistoryBtn).click()
        expect(await CheckHistoryPage.vehicleCertificate).toBeDisplayed()
        console.log("Vehicle History Certificate Displayed")
    });
   });