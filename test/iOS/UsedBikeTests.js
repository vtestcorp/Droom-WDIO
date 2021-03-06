const base = require("../../BaseClass/base");
const usedbikepage = require("../../Pages/iOS/usedbikepage");

describe('Used Bike', async () => {

    beforeEach(async  ()=>{
      
        await driver.closeApp()
        await driver.launchApp()
      });
    it('TC_01 Verify Bike option is the display with used Condition to the buyer', async () => {
       // await base.skipStartup()
        expect (await usedbikepage.createReq).toBeDisplayed()
        console.log('Create Requirement Button is Displayed')
        await (await usedbikepage.createReq).click()
        console.log("Clicked on Create Requirement Button")
        expect (await usedbikepage.headingSelectPage).toBeDisplayed()
        console.log("Select Heading Displayed As:"+await(await usedbikepage.headingSelectPage).getText())
        expect (await usedbikepage.bikeOption).toBeDisplayed()
        console.log('Bike option Displayed Under I am looking for ')
        expect (await usedbikepage.used).toBeDisplayed()
        console.log('Used Option is displayed under Condition')
    });
    it('Tc_02 Verify user able to select location using location option', async () => {
       // await base.skipStartup()
        expect (await usedbikepage.createReq).toBeDisplayed()
        console.log('Create Requirement Button is Displayed')
        await (await usedbikepage.createReq).click()
        console.log("Clicked on Create Requirement Button")
        expect (await usedbikepage.headingSelectPage).toBeDisplayed()
        expect(await usedbikepage.location).toBeDisplayed()
        console.log('Current Location displayed')
        await (await usedbikepage.bySearch).click()
       console.log("Clicked on By search")
        expect(await usedbikepage.resetLocation).toBeDisplayed()
        console.log('Reset Location also displyed displayed')
    });
        it('TC_03 Verify error message without entering location', async () => {
        //await base.skipStartup()
        await (await usedbikepage.createReq).click()
        console.log("Clicked On Create Requirement")
        expect (await usedbikepage.createReq).toBeDisabled()
        console.log("Select Heading Displayed As:"+await(await usedbikepage.headingSelectPage).getText())
        expect(await usedbikepage.used).toBeDisplayed()
        console.log("Used Bike Option is Displayed")
        await (usedbikepage.nextButton).click()
        console.log("Clicked On Next Button")
        expect(usedbikepage.errorMsg).toBeDisplayed()
        console.log("Error message Displayed")
    });
    it('Tc_04 Verify user able to select Bike model from Entering your vehicle details as per requirement', async () => {
        //await  base.skipStartup()
        expect (await usedbikepage.createReq).toBeDisplayed()
        console.log('Create Requirement Button is Displayed')
        await (await usedbikepage.createReq).click()
        console.log("Clicked on Create Requirement Button")
        expect (await usedbikepage.page2heading).toBeDisplayed()
        console.log("Select Heading Displayed As:"+await(await usedbikepage.page2heading).getText())
        expect(await usedbikepage.bikeimg).toBeDisplayed()
        console.log("Bike Image is displayed")
        expect(await usedbikepage.bike).toBeDisplayed()
        console.log("Bike option is displayed")
        expect(await usedbikepage.newButton).toBeDisplayed()
        console.log("New Condition option is Displayed")
        await(await usedbikepage.used).click()
        console.log("Used Condition option is Displayed")
        await(await usedbikepage.bike).click()
        console.log("Clicked On Bike Option")
        expect(await usedbikepage.nextButton).toBeDisplayed()
        console.log("Next Button is displayed")
        expect(await usedbikepage.page3Heading).toBeDisplayed()
        console.log("Find Dream Bike Heading Displayed As:"+await(await usedbikepage.page3Heading).getText())
        expect(await usedbikepage.searchTitle).toBeDisplayed()
        console.log("Title Displayed As:"+await(await usedbikepage.searchTitle).getText())
        expect(await usedbikepage.vehicleDetails).toBeDisplayed()
        console.log("Enter Your Vehickle Details Displayed")
        await(await usedbikepage.bikeSearchTextField).click()
        console.log("Clicked2018 On Text field To eneter Required Vehicle Details")
        await (await usedbikepage.bikeSearchTextField).setValue("Bajaj Pulsar ")

        expect (await usedbikepage.findBike).toBeDisplayed()
        console.log("Find Dream Bike Heading Displayed As:"+await(await usedbikepage.findBike).getText())
        expect (await usedbikepage.searchField).toBeClickable()
        console.log("User can select Bike using Search Field")
    });
    it('Tc_05 Verify user able to select bike model through select from the dropdown as per requirement', async () => {
       // await base.iosLoginAsBuyer()
        expect (await usedbikepage.createReq).toBeDisplayed()
        console.log('Create Requirement Button is Displayed')
        await (await usedbikepage.createReq).click()
        console.log("Clicked on Create Requirement Button")
        expect (await usedbikepage.headingSelectPage).toBeDisplayed()
        console.log("Select Heading Displayed As:"+await(await usedbikepage.headingSelectPage).getText())
        expect(await usedbikepage.Bike).toBeDisplayed()
        console.log("Bike option is displayed")
        await(await usedbikepage.Bike).click()
        console.log("Clicked On Bike Option")
        expect(await usedbikepage.nextButton).toBeDisplayed()
        console.log("Next Button is displayed")
        await(await usedbikepage.nextButton).click()
        console.log("Clicked On Next Button")
        expect (await usedbikepage.droomSugg).toBeDisplayed()
        console.log("Droom Suggestyions Link Displayed As:"+await(await usedbikepage.droomSugg).getText())
        await(await usedbikepage.nextButton).click()
        console.log("Clicked On Next Button")
        expect(await usedbikepage.bodyTypeOnsugg).toBeDisplayed()
        console.log("Body Type displayed")
        expect(await usedbikepage.sportsBike).toBeDisplayed()
        console.log("Sports Bike option is displayed")
        console.log('successfully bike selected from dropdown')
    });
    it('Tc_06 Verify user able to select bike model through Let Droom Suggest for you as per requirement', async () => {
        //await base.iosLoginAsBuyer()
        expect (await usedbikepage.createReq).toBeDisplayed()
        console.log('Create Requirement Button is Displayed')
        await (await usedbikepage.createReq).click()
        console.log("Clicked on Create Requirement Button")
        expect (await usedbikepage.headingSelectPage).toBeDisplayed()
        console.log("Select Heading Displayed As:"+await(await usedbikepage.headingSelectPage).getText())
        expect(await usedbikepage.Bike).toBeDisplayed()
        console.log("Bike option is displayed")
        await(await usedbikepage.Bike).click()
        console.log("Clicked On Bike Option")
        expect(await usedbikepage.nextButton).toBeDisplayed()
        console.log("Next Button is displayed")
        await(await usedbikepage.nextButton).click()
        console.log("Clicked On Next Button")
        expect (await usedbikepage.droomSugg).toBeDisplayed()
        console.log("Droom Suggestyions Link Displayed As:"+await(await usedbikepage.droomSugg).getText())
        await(await usedbikepage.nextButton).click()
        console.log("Clicked On Next Button")
        expect(await  usedbikepage.budget).toBeDisplayed()
        console.log('user able to select bike model through Let Droom Suggest for you as per requirement')
    
    });
});