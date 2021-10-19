const base = require("../../BaseClass/base");
const vehicleInsurancePage = require("../../Pages/Androidbrowser/vehicleInsurancePage");

describe('Check History', async () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
    });
    it('TC_01 Verify the Functionality of Get Insurance', async () => {
        await vehicleInsurancePage.chromeConditions()
        browser.url('/insurance')
        console.log("insurance page displayed")
        expect(await vehicleInsurancePage.vehicle_Information).toBeDisplayed()
        console.log("Vehicle Information displayed")
        expect(await vehicleInsurancePage.personal_Information).toBeDisplayed()
        console.log("Personal Information displayed")
        expect(await vehicleInsurancePage.insurance_Information).toBeDisplayed()
        console.log("Insurance Information displayed")
        await base.swipeUp()
        expect(await vehicleInsurancePage.car).toBeDisplayed()
        console.log("Car option displayed")
        expect(await vehicleInsurancePage.bike).toBeDisplayed()
        console.log("Bike option displayed")
        expect(await vehicleInsurancePage.scooter).toBeDisplayed()
        console.log("Scooter option displayed")
    });
    it('TC_02 Verify the process to Apply for Vehicle Insurance in 3 Easy Steps', async () => {
        await vehicleInsurancePage.chromeConditions()
        browser.url('/insurance')
        console.log("insurance page displayed")
        expect(await vehicleInsurancePage.vehicle_Information).toBeDisplayed()
        console.log("Vehicle Information displayed")
        expect(await vehicleInsurancePage.personal_Information).toBeDisplayed()
        console.log("Personal Information displayed")
        expect(await vehicleInsurancePage.insurance_Information).toBeDisplayed()
        console.log("Insurance Information displayed")
    });
    it('TC_03 Verify Select vehicle Condition -Used functionality', async () => {
        await vehicleInsurancePage.chromeConditions()
        browser.url('/insurance')
        console.log("insurance page displayed")
        expect(await vehicleInsurancePage.vehicle_Information).toBeDisplayed()
        console.log("Vehicle Information displayed")
        expect(await vehicleInsurancePage.personal_Information).toBeDisplayed()
        console.log("Personal Information displayed")
        expect(await vehicleInsurancePage.insurance_Information).toBeDisplayed()
        console.log("Insurance Information displayed")
        await vehicleInsurancePage.switchToWebview()
        expect(await vehicleInsurancePage.used_condition).toBeDisplayed()
        console.log("used button isSelected")
        await vehicleInsurancePage.switchToNativeApp()
    });

});