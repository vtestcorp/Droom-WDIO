const base = require("../../BaseClass/base");
const usedbikepage = require("../../Pages/Web/usedbikepage");

describe('Used Bike', async () => {
    it('Verify Bike option is the display with used Condition to the buyer', async () => {
        await base.loginAsBuyer()
        await usedbikepage.submitRequirement()
        await usedbikepage.bikeCondition()
        expect(await usedbikepage.carimg).toBeDisplayed()
        expect(await usedbikepage.scooter).toBeDisplayed()
        expect(await usedbikepage.newButton).toBeDisplayed()
        expect(await usedbikepage.used).toBeDisplayed()
        expect(await usedbikepage.usedButton).toBeDisplayed()
        expect(await usedbikepage.newRButton).toBeDisplayed()
        expect(await usedbikepage.location).toBeDisplayed()
        expect(await usedbikepage.currentLocation).toBeDisplayed()
        expect(await usedbikepage.nextButton).toBeDisplayed()

    });
    it('Verify user able to select location using location option', async () => {
        await usedbikepage.clickOnNext()
        expect(await usedbikepage.errorMsg).toBeDisplayed()
        await usedbikepage.selectCity()


    });

    it('Verify error message without entering location', async () => {
        await usedbikepage.cLocation()
        expect(await usedbikepage.currentLocation).toBeDisplayed()
        expect(await usedbikepage.carimg).toBeDisplayed()
        expect(await usedbikepage.scooter).toBeDisplayed()
        expect(await usedbikepage.newButton).toBeDisplayed()
        expect(await usedbikepage.used).toBeDisplayed()
        expect(await usedbikepage.usedButton).toBeDisplayed()
        expect(await usedbikepage.newRButton).toBeDisplayed()
        expect(await usedbikepage.location).toBeDisplayed()
        expect(await usedbikepage.currentLocation).toBeDisplayed()
        expect(await usedbikepage.nextButton).toBeDisplayed()


    });
    it('Verify user able to select Bike model from Entering your vehicle details as per requirement', async () => {
        await usedbikepage.clickOnNext()
        await usedbikepage.waitForVehicleDetails()
        await usedbikepage.selectBike()
        expect(await usedbikepage.bikeName).toBeDisplayed()
        expect(await usedbikepage.addBtn).toBeDisplayed()
    });
    it('Verify user able to select bike model through select from the dropdown as per requirement', async () => {

        await usedbikepage.deleteCarRecord()
        await usedbikepage.slectFromDropDown()
        await usedbikepage.selectBikeVehicle()
        await usedbikepage.clickOnNext()
        expect(await usedbikepage.bikeName).toBeDisplayed()
        expect(await usedbikepage.addBtn).toBeDisplayed()

    });
    it('Verify user able to select bike model through Let Droom Suggest for you as per requirement', async () => {
        await usedbikepage.basicDetailsDisplay()
        await usedbikepage.clickOnBack()
        await usedbikepage.letDroomSuggest()
        expect(await usedbikepage.gudget).toBeDisplayed()
        expect(await usedbikepage.body).toBeDisplayed()
        expect(await usedbikepage.age).toBeDisplayed()
        expect(await usedbikepage.more).toBeDisplayed()

    });
    it('Verify user able to select use bike as per the Color', async () => {
        await usedbikepage.clickOnGoBack()
        await usedbikepage.slectFromDropDown()
        await usedbikepage.selectBikeVehicle()
        await usedbikepage.clickOnNext()
        await usedbikepage.basicDetailsDisplay()
        expect(await usedbikepage.gudget).toBeDisplayed()
        await usedbikepage.selectColorFromList()
        await usedbikepage.clickOnNext()
        await browser.pause(2000)
        await usedbikepage.clickOnNext()
        expect(await usedbikepage.almostDone).toBeDisplayed()
        await usedbikepage.clickOnSubmit()
        await usedbikepage.clickOngetRequirements()
        expect(await usedbikepage.newRequirements).toBeDisplayed()
        await browser.pause(2000)



    });
    it('Verify user able to select use bike as per the Do you also need option', async () => {
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
        expect(await usedbikepage.newRequirements).toBeDisplayed()
        await browser.pause(2000)


    });
    it('Verify user is able to select use bike as per the How Quickly Do You Want to Buy? option', async () => {
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
        expect(await usedbikepage.newRequirements).toBeDisplayed()
        await browser.pause(2000)
    });
    it('Validation for match count while req creation and in req page', async () => {
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
        await browser.pause(2000)
        await usedbikepage.clickOnNext()
        expect(await usedbikepage.almostDone).toBeDisplayed()
        await usedbikepage.clickOnSubmit()
        await usedbikepage.clickOngetRequirements()
        expect(await usedbikepage.newRequirements).toBeDisplayed()
        await browser.pause(2000) 


         });
        it('Verify user is able to select use bike as per the Do You Wish to Exchange Your Vehicle option', async () => {
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
            await browser.pause(2000)

        });


    });