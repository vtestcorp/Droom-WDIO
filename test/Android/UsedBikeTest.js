const { default: pause } = require('webdriverio/build/commands/browser/pause');
const base = require('../../BaseClass/base')
const UsedBikePage = require("../../Pages/Android/UsedBikePage");
describe('Used Bike', () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
    });
    it('Tc_01 Verify Bike option is the display with used Condition to the buyer', async () => {
        await base.androidLoginAsBuyer()
        console.log("login As Buyer")
        await browser.pause("1000")
        await (await UsedBikePage.buy).click()
        await (await UsedBikePage.bikeimg).click()
        console.log("selected bike")
        expect(await UsedBikePage.caroption).toBeDisplayed()
        console.log('Car option displayed')
        expect(await UsedBikePage.scooteroption).toBeDisplayed()
        console.log('scooter option displayed')
        expect(await UsedBikePage.newRadio).toBeDisplayed()
        console.log('New Condition option displayed')
        expect(await UsedBikePage.usedRadio).toBeDisplayed()
        console.log('Used Condition option displayed')
        expect(await UsedBikePage.location).toBeDisplayed()
        console.log('Location displayed')
        expect(await UsedBikePage.searchLocation).toBeDisplayed()
        console.log('search my location displayed')
        expect(await UsedBikePage.nextBtn).toBeDisplayed()
        console.log('Next Button displayed')
    });

    it('Tc_03 Verify error message without entering location', async () => {
        await base.androidLoginAsBuyer()
        await (await UsedBikePage.buy).click()
        await (await UsedBikePage.bikeimg).click()
        console.log("selected bike")
        await (await UsedBikePage.bikeoption).click()
        await (await UsedBikePage.nextBtn).click()
        expect(await UsedBikePage.errormsg).toBeDisplayed()
        console.log('error message displayed')
    });

    it('Tc_02 Verify user able to select location using location option', async () => {
        await base.androidLoginAsBuyer()
        await (await UsedBikePage.buy).click()
        await (await UsedBikePage.bikeimg).click()
        await (await UsedBikePage.bikeoption).click()
        expect(await UsedBikePage.searchLocation).toBeDisplayed()
        console.log('search my location displayed')
        await (await UsedBikePage.searchLocation).click()
        console.log("clicked on search my location")
        await (await UsedBikePage.cityName).click()
        console.log("selected city")
        await (await UsedBikePage.nextBtn).click()
        expect(await UsedBikePage.heading1).toBeDisplayed()
        console.log("User able to select location and navigate to next window")
    });
    it('Tc_04 Verify user able to select Bike model from Entering your vehicle details as per requirement', async () => {
        await base.androidLoginAsBuyer()
        await (await UsedBikePage.buy).click()
        await (await UsedBikePage.bikeimg).click()
        await (await UsedBikePage.bikeoption).click()
        await (await UsedBikePage.searchLocation).click()
        console.log("clicked on search my location")
        await (await UsedBikePage.cityName).click()
        console.log("selected city")
        await (await UsedBikePage.nextBtn).click()
        console.log("clicked on Next button")
        expect(await UsedBikePage.heading1).toBeDisplayed()
        console.log("Heading Displayed As:"+await(await UsedBikePage.heading1).getText())
        expect (await UsedBikePage.searchfield).toBeClickable()
        console.log("User can select Bike using Search Field")
    });

    it('Tc_05 Verify user able to select bike model through select from the dropdown as per requirement', async () => {
        await base.androidLoginAsBuyer()
        await (await UsedBikePage.buy).click()
        await (await UsedBikePage.bikeimg).click()
        await (await UsedBikePage.bikeoption).click()
        await (await UsedBikePage.searchLocation).click()
        console.log("clicked on search my location")
        await (await UsedBikePage.cityName).click()
        console.log("selected city")
        await (await UsedBikePage.nextBtn).click()
        console.log("clicked on Next button")
        expect(await UsedBikePage.heading1).toBeDisplayed()
        await browser.pause('2000')
        expect(await UsedBikePage.selectVehicle).toBeDisplayed()
        await (await UsedBikePage.selectVehicle).click()
        await UsedBikePage.selectBikeVehicle()
        await (await UsedBikePage.nextBtn).click()
        expect(await UsedBikePage.bikeName).toBeDisplayed()
        expect(await UsedBikePage.addmoreVehicle).toBeDisplayed()
        console.log('successfully bike selected from dropdown')
});

});