const base = require("../../BaseClass/base");
const usedbikepage = require("../../Pages/Web/usedbikepage");

describe('Used Bike', async () => {
    it('Tc_01 Verify Bike option is the display with used Condition to the buyer', async () => {
        await base.loginAsBuyer()
        await usedbikepage.submitRequirement()
        await usedbikepage.bikeCondition()
        expect(await usedbikepage.carimg).toBeDisplayed()
        console.log('Car option displayed')
        expect(await usedbikepage.scooter).toBeDisplayed()
        console.log('scooter option displayed')
        expect(usedbikepage.newButton).toBeDisplayed()
        console.log('New option displayed under condition')
        expect(await usedbikepage.used).toBeDisplayed()
        console.log('Used option displayed under condition')
        expect(await usedbikepage.usedButton).toBeDisplayed()
        console.log('Used redio button displayed')
        expect(await usedbikepage.newRButton).toBeDisplayed()
        console.log('New redio button displayed')
        expect(await usedbikepage.location).toBeDisplayed()
        console.log('Location input box displayed')
        expect(await usedbikepage.currentLocation).toBeDisplayed()
        console.log('Current Location displayed')
        expect(await usedbikepage.nextButton).toBeDisplayed()
        console.log('New button displayed')
    });
    it('Tc_02 Verify error message without entering location', async () => {
        await usedbikepage.clickOnNext()
        expect(usedbikepage.errorMsg).toBeDisplayed()
        await usedbikepage.selectCity()
        console.log('Error message Displayed')
    });
    it('Tc_03 Verify user able to select location using location option', async () => {
        await usedbikepage.cLocation()
        expect(await usedbikepage.currentLocation).toBeDisplayed()
        console.log('Current Location displayed')
    });
    it('Tc_04 Verify user able to select Bike model from Entering your vehicle details as per requirement', async () => {
        await usedbikepage.clickOnNext()
        await usedbikepage.waitForVehicleDetails()
        await usedbikepage.selectBike()
        expect(await usedbikepage.bikeName).toBeDisplayed()
        expect(await usedbikepage.addBtn).toBeDisplayed()
        console.log('successfully bike selected ')
    });
    it('Tc_05 Verify user able to select bike model through select from the dropdown as per requirement', async () => {
        await usedbikepage.deleteCarRecord()
        await usedbikepage.slectFromDropDown()
        await usedbikepage.selectBikeVehicle()
        await usedbikepage.clickOnNext()
        expect(await usedbikepage.bikeName).toBeDisplayed()
        expect(await usedbikepage.addBtn).toBeDisplayed()
        console.log('successfully bike selected from dropdown')
    });
    it('Tc_06 Verify user able to select bike model through Let Droom Suggest for you as per requirement', async () => {
        await usedbikepage.basicDetailsDisplay()
        await usedbikepage.clickOnBack()
        await usedbikepage.letDroomSuggest()
        expect(await usedbikepage.gudget).toBeDisplayed()
        console.log('What is Your Budget? option Display')
        expect(await usedbikepage.body).toBeDisplayed()
        console.log('Body Type option Display')
        expect(await usedbikepage.age).toBeDisplayed()
        console.log('Age of Vehicle Display')
        expect(await usedbikepage.more).toBeDisplayed()
    });
    it('Tc_07 Verify user able to select use bike as per the Color', async () => {
        await usedbikepage.clickOnGoBack()
        await usedbikepage.slectFromDropDown()
        await usedbikepage.selectBikeVehicle()
        await usedbikepage.clickOnNext()
        await usedbikepage.basicDetailsDisplay()
        expect(await usedbikepage.gudget).toBeDisplayed()
        await usedbikepage.selectColorFromList()
        await usedbikepage.clickOnNext()
        await usedbikepage.clickOnNext()
        expect(await usedbikepage.almostDone).toBeDisplayed()
        await usedbikepage.clickOnSubmit()
        await usedbikepage.clickOngetRequirements()
        console.log(await(await usedbikepage.extColor).getText())
        expect(await usedbikepage.newRequirements).toBeDisplayed()
    });
    it('Tc_08 Verify user able to select use bike as per the Do you also need option', async () => {
        await usedbikepage.clickOnSubmitRequirements()
        await usedbikepage.bikeCondition()
        await usedbikepage.cLocation()
        await usedbikepage.clickOnNext()
        await usedbikepage.waitForVehicleDetails()
        await usedbikepage.selectBike()
        await usedbikepage.clickOnNext()
        expect(await usedbikepage.bikeName).toBeDisplayed()
        expect(await usedbikepage.addBtn).toBeDisplayed()
        await usedbikepage.selectColorFromList()
        await usedbikepage.clickOnNext()
        await usedbikepage.selectDoYouAlsoNeed()
        await usedbikepage.clickOnNext()
        expect(await usedbikepage.almostDone).toBeDisplayed()
        await usedbikepage.clickOnSubmit()
        await usedbikepage.clickOngetRequirements()
        console.log(await(await usedbikepage.service).getText())
        expect(await usedbikepage.newRequirements).toBeDisplayed()
    });
    it('Tc_09 Verify user is able to select use bike as per the How Quickly Do You Want to Buy? option', async () => {
        await usedbikepage.clickOnSubmitRequirements()
        await usedbikepage.bikeCondition()
        await usedbikepage.cLocation()
        await usedbikepage.clickOnNext()
        await usedbikepage.waitForVehicleDetails()
        await usedbikepage.selectBike()
        await usedbikepage.clickOnNext()
        expect(await usedbikepage.bikeName).toBeDisplayed()
        expect(await usedbikepage.addBtn).toBeDisplayed()
        await usedbikepage.selectColorFromList()
        await usedbikepage.clickOnNext()
        await usedbikepage.selectDoYouAlsoNeed()
        await usedbikepage.selectHowQuickly()
        await usedbikepage.clickOnNext()
        expect(await usedbikepage.almostDone).toBeDisplayed()
        await usedbikepage.clickOnSubmit()
        await usedbikepage.clickOngetRequirements()
        console.log(await(await usedbikepage.needToBuy).getText())
        expect(await usedbikepage.newRequirements).toBeDisplayed()

    });
    it('Tc_10 Validation for match count while req creation and in req page', async () => {
        await usedbikepage.clickOnSubmitRequirements()
        await usedbikepage.bikeCondition()
        await usedbikepage.cLocation()
        await usedbikepage.clickOnNext()
        await usedbikepage.waitForVehicleDetails()
        await usedbikepage.selectBike()
        await usedbikepage.clickOnNext()
        expect(await usedbikepage.bikeName).toBeDisplayed()
        expect(await usedbikepage.addBtn).toBeDisplayed()
        await usedbikepage.selectColor()
        await usedbikepage.clickOnNext()
        await usedbikepage.clickOnNext()
        expect(await usedbikepage.almostDone).toBeDisplayed()
        await usedbikepage.clickOnSubmit()
        await usedbikepage.clickOngetRequirements()
        expect(await usedbikepage.newRequirements).toBeDisplayed()
    });
    it('Tc_11 Verify user is able to select use bike as per the Do You Wish to Exchange Your Vehicle option', async () => {
        await usedbikepage.clickOnSubmitRequirements()
        await usedbikepage.bikeCondition()
        await usedbikepage.cLocation()
        await usedbikepage.clickOnNext()
        await usedbikepage.waitForVehicleDetails()
        await usedbikepage.selectBike()
        await usedbikepage.clickOnNext()
        expect(await usedbikepage.bikeName).toBeDisplayed()
        expect(await usedbikepage.addBtn).toBeDisplayed()
        await usedbikepage.clickOnNext()
        await usedbikepage.selectDoYouAlsoNeed()
        await usedbikepage.selectHowQuickly()
        await usedbikepage.exchangeVehicle()
        await (await usedbikepage.clickOnCar).click()
        await expect(await usedbikepage.bikeOption).toBeDisplayed()
        await expect(await usedbikepage.scooterOption).toBeDisplayed()
        await (await usedbikepage.bikeOption).click()
        await usedbikepage.selectBikeVehicle()
        await usedbikepage.Enterkms()
        await usedbikepage.clickOnNext()
        expect(await usedbikepage.almostDone).toBeDisplayed()
        await usedbikepage.clickOnSubmit()
        await usedbikepage.clickOngetRequirements()
        expect(await usedbikepage.newRequirements).toBeDisplayed()
    });
});