const Base = require('../../BaseClass/base');
const UsedCarPage = require('../../Pages/Web/UsedCarPage');

describe('Used Car', async () => {
  it('Verify car option is the display with used Condition to the buyer', async () => {
    await Base.loginAsBuyer()
    await UsedCarPage.submitRequirement()
    await UsedCarPage.carCondition()
    await expect(UsedCarPage.carimg).toBeDisplayed()
    await expect(UsedCarPage.scooter).toBeDisplayed()
    await expect(UsedCarPage.newButton).toBeDisplayed()
    await expect(UsedCarPage.used).toBeDisplayed()
    await expect(UsedCarPage.usedButton).toBeDisplayed()
    await expect(UsedCarPage.newRButton).toBeDisplayed()
    await expect(UsedCarPage.location).toBeDisplayed()
    await expect(UsedCarPage.currentLocation).toBeDisplayed()
    await expect(UsedCarPage.nextButton).toBeDisplayed()


  });
  it('Verify error message without entering location', async () => {
    await UsedCarPage.clickOnNext()
    await expect(UsedCarPage.errorMsg).toBeDisplayed()
    await UsedCarPage.selectCity()


  });

  it('Verify user able to select location using location option', async () => {
    await UsedCarPage.cLocation()
    await expect(UsedCarPage.currentLocation).toBeDisplayed()


  });

  it('Verify user able to select car model from Entering your vehicle details as per requirement', async () => {
    await UsedCarPage.clickOnNext()
    await UsedCarPage.waitForVehicleDetails()
    await UsedCarPage.selectCar()
    await expect(UsedCarPage.carName).toBeDisplayed()
    await expect(UsedCarPage.addBtn).toBeDisplayed()
  });
  it('Verify user able to select car model through select from the dropdown as per requirement', async () => {

    await UsedCarPage.deleteCarRecord()
    await UsedCarPage.slectFromDropDown()
    await UsedCarPage.selectVehicle()
    await UsedCarPage.clickOnNext()
    await expect(UsedCarPage.carName).toBeDisplayed()
    await expect(UsedCarPage.addBtn).toBeDisplayed()

  });
  it('Verify user able to select car model through Let Droom Suggest for you as per requirement', async () => {
    await UsedCarPage.basicDetailsDisplay()
    await UsedCarPage.clickOnBack()
    //await expect(usedCarPage.carName).toBeDisplayed()
    await UsedCarPage.letDroomSuggest()
    await expect(UsedCarPage.gudget).toBeDisplayed()
    await expect(UsedCarPage.body).toBeDisplayed()
    await expect(UsedCarPage.age).toBeDisplayed()
    await expect(UsedCarPage.more).toBeDisplayed()





  });
  it('Verify user able to select use car as per the Fuel type', async () => {
    await UsedCarPage.clickOnGoBack()
    await UsedCarPage.slectFromDropDown()
    await UsedCarPage.selectVehicle()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.basicDetailsDisplay()
    await expect(UsedCarPage.gudget).toBeDisplayed()
    await expect(UsedCarPage.fuelType).toBeDisplayed()
    await UsedCarPage.selectPetrol()
    await UsedCarPage.clickOnNext()
    await browser.pause(2000)
    await UsedCarPage.clickOnNext()
    await expect(UsedCarPage.almostDone).toBeDisplayed()
    await UsedCarPage.clickOnSubmit()
    await UsedCarPage.clickOngetRequirements()
    await expect(UsedCarPage.newRequirements).toBeDisplayed()
    await browser.pause(2000)



  });
  it('Verify user able to select use car as per the Exterior Color', async () => {
    await UsedCarPage.clickOnSubmitRequirements()
    await UsedCarPage.carCondition()
    await UsedCarPage.cLocation()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.waitForVehicleDetails()
    await UsedCarPage.selectCar()
    await UsedCarPage.clickOnNext()
    await expect(UsedCarPage.carName).toBeDisplayed()
    await expect(UsedCarPage.addBtn).toBeDisplayed()
    await UsedCarPage.selectPetrol()
    await UsedCarPage.selectColor()
    //await UsedCarPage.selectAutomatic()
    await UsedCarPage.clickOnNext()
    await browser.pause(2000)
    await UsedCarPage.clickOnNext()
    await expect(UsedCarPage.almostDone).toBeDisplayed()
    await UsedCarPage.clickOnSubmit()
    await UsedCarPage.clickOngetRequirements()
    await expect(UsedCarPage.newRequirements).toBeDisplayed()
    await browser.pause(2000)


  });
  it('Verify user able to select use car as per the Transmission Type', async () => {
    await UsedCarPage.clickOnSubmitRequirements()
    await UsedCarPage.carCondition()
    await UsedCarPage.cLocation()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.waitForVehicleDetails()
    await UsedCarPage.slectFromDropDown()
    await UsedCarPage.selectVehicle()
    await UsedCarPage.clickOnNext()
    await expect(UsedCarPage.carName).toBeDisplayed()
    await expect(UsedCarPage.addBtn).toBeDisplayed()
    await UsedCarPage.selectPetrol()
    await UsedCarPage.selectColor()
    await UsedCarPage.clickOnNext()
    await browser.pause(2000)
    await UsedCarPage.clickOnNext()
    await expect(UsedCarPage.almostDone).toBeDisplayed()
    await UsedCarPage.clickOnSubmit()
    await UsedCarPage.clickOngetRequirements()
    await expect(UsedCarPage.newRequirements).toBeDisplayed()
    await browser.pause(2000)

  });
  it('Verify user able to select use car as per the Do you also need option', async () => {
    await UsedCarPage.clickOnSubmitRequirements()
    await UsedCarPage.carCondition()
    await UsedCarPage.cLocation()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.waitForVehicleDetails()
    await UsedCarPage.selectCar()
    await UsedCarPage.clickOnNext()
    await expect(UsedCarPage.carName).toBeDisplayed()
    await expect(UsedCarPage.addBtn).toBeDisplayed()
    await UsedCarPage.selectPetrol()
    await UsedCarPage.selectColor()
    await UsedCarPage.selectAutomatic()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.selectDoYouAlsoNeed()
    await UsedCarPage.clickOnNext()
    await expect(UsedCarPage.almostDone).toBeDisplayed()
    await UsedCarPage.clickOnSubmit()
    await UsedCarPage.clickOngetRequirements()
    await expect(UsedCarPage.newRequirements).toBeDisplayed()
    await browser.pause(2000)


  });
  it('Verify user is able to select use car as per the How Quickly Do You Want to Buy? option', async () => {
    await UsedCarPage.clickOnSubmitRequirements()
    await UsedCarPage.carCondition()
    await UsedCarPage.cLocation()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.waitForVehicleDetails()
    await UsedCarPage.selectCar()
    await UsedCarPage.clickOnNext()
    await expect(UsedCarPage.carName).toBeDisplayed()
    await expect(UsedCarPage.addBtn).toBeDisplayed()
    await UsedCarPage.selectPetrol()
    await UsedCarPage.selectColor()
    await UsedCarPage.selectAutomatic()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.selectDoYouAlsoNeed()
    await UsedCarPage.selectHowQuickly()
    await UsedCarPage.clickOnNext()
    await expect(UsedCarPage.almostDone).toBeDisplayed()
    await UsedCarPage.clickOnSubmit()
    await UsedCarPage.clickOngetRequirements()
    await expect(UsedCarPage.newRequirements).toBeDisplayed()
    await browser.pause(2000)
  });
  it('Verify user is able to select use car as per the Do You Wish to Exchange Your Vehicle option', async () => {
    await UsedCarPage.clickOnSubmitRequirements()
    await UsedCarPage.carCondition()
    await UsedCarPage.cLocation()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.waitForVehicleDetails()
    await UsedCarPage.selectCar()
    await UsedCarPage.clickOnNext()
    await expect(UsedCarPage.carName).toBeDisplayed()
    await expect(UsedCarPage.addBtn).toBeDisplayed()
    await UsedCarPage.selectPetrol()
    await UsedCarPage.selectColor()
    await UsedCarPage.selectAutomatic()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.selectDoYouAlsoNeed()
    await UsedCarPage.selectHowQuickly()
    await UsedCarPage.exchangeVehicle()
    await UsedCarPage.selectVehicle()
    await UsedCarPage.Enterkms()
    await UsedCarPage.clickOnNext()
    await expect(UsedCarPage.almostDone).toBeDisplayed()
    await UsedCarPage.clickOnSubmit()
    await UsedCarPage.clickOngetRequirements()
    await expect(UsedCarPage.newRequirements).toBeDisplayed()
    await browser.pause(2000)

  });
  it('Validation for match count while req creation and in req page', async () => {
    await UsedCarPage.clickOnSubmitRequirements()
    await UsedCarPage.carCondition()
    await UsedCarPage.cLocation()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.waitForVehicleDetails()
    await UsedCarPage.selectCar()
    await UsedCarPage.clickOnNext()
    await expect(UsedCarPage.carName).toBeDisplayed()
    await expect(UsedCarPage.addBtn).toBeDisplayed()
    await UsedCarPage.selectPetrol()
    await UsedCarPage.selectColor()
    await UsedCarPage.selectAutomatic()
    await UsedCarPage.clickOnNext()
    await browser.pause(2000)
    await UsedCarPage.clickOnNext()
    await expect(UsedCarPage.almostDone).toBeDisplayed()
    await UsedCarPage.clickOnSubmit()
    //await expect(usedCarPage.records).toBeDisplayed()


  });

});