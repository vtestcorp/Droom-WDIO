const Base = require('../../BaseClass/base');
const UsedCarPage = require('../../Pages/Web/UsedCarPage');

describe('Used Car', async () => {
  it('TC_01 Verify car option is the display with used Condition to the buyer', async () => {
    await Base.loginAsBuyer()
    await UsedCarPage.submitRequirement()
    await UsedCarPage.carCondition()
    expect(await UsedCarPage.carimg).toBeDisplayed()
    console.log('Car option displayed')
    expect(await UsedCarPage.scooter).toBeDisplayed()
    console.log('scooter option displayed')
    expect(UsedCarPage.newButton).toBeDisplayed()
    console.log('New option displayed under condition')
    expect(await UsedCarPage.used).toBeDisplayed()
    console.log('Used option displayed under condition')
    expect(await UsedCarPage.usedButton).toBeDisplayed()
    console.log('Used redio button displayed')
    expect(await UsedCarPage.newRButton).toBeDisplayed()
    console.log('New redio button displayed')
    expect(await UsedCarPage.location).toBeDisplayed()
    console.log('Location input box displayed')
    expect(await UsedCarPage.currentLocation).toBeDisplayed()
    console.log('Current Location displayed')
    expect(await UsedCarPage.nextButton).toBeDisplayed()
    console.log('New button displayed')
  });
  it('TC_03 Verify error message without entering location', async () => {
    await UsedCarPage.clickOnNext()
    expect(UsedCarPage.errorMsg).toBeDisplayed()
    await UsedCarPage.selectCity()
    console.log('Error message Displayed')

  });
  it('TC_02 Verify user able to select location using location option', async () => {
    await UsedCarPage.cLocation()
    expect(await UsedCarPage.currentLocation).toBeDisplayed()
    console.log('Current Location displayed')
  });
  it('TC_04 Verify user able to select car model from Entering your vehicle details as per requirement', async () => {
    await UsedCarPage.clickOnNext()
    await UsedCarPage.waitForVehicleDetails()
    await UsedCarPage.selectCar()
    expect(await UsedCarPage.carName).toBeDisplayed()
    expect(await UsedCarPage.addBtn).toBeDisplayed()
    console.log('successfully car selected ')
  });
  it('TC_05 Verify user able to select car model through select from the dropdown as per requirement', async () => {
    await UsedCarPage.deleteCarRecord()
    await UsedCarPage.slectFromDropDown()
    await UsedCarPage.selectVehicle()
    await UsedCarPage.clickOnNext()
    expect(await UsedCarPage.carName).toBeDisplayed()
    expect(await UsedCarPage.addBtn).toBeDisplayed()
    console.log('successfully car selected from dropdown')
    await UsedCarPage.closePopUp()
  });
  it('TC_06 Verify user able to select car model through Let Droom Suggest for you as per requirement', async () => {
    await UsedCarPage.clickOnSubmitRequirements()
    await (await UsedCarPage.carCancel).click()
    await UsedCarPage.letDroomSuggest()
    expect(await UsedCarPage.gudget).toBeDisplayed()
    console.log('What is Your Budget? option Display')
    expect(await UsedCarPage.body).toBeDisplayed()
    console.log('Body Type option Display')
    expect(await UsedCarPage.age).toBeDisplayed()
    console.log('Age of Vehicle Display')
    await UsedCarPage.closePopUp()

  });
  it('TC_08 Verify user able to select use car as per the Fuel type', async () => {
    browser.url('/')
    await UsedCarPage.clickOnSubmitRequirements()
    await UsedCarPage.carCondition()
    await (await UsedCarPage.currentLocation).click()
    await (await UsedCarPage.used).click()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.slectFromDropDown()
    await UsedCarPage.selectVehicle()
    await UsedCarPage.clickOnNext()
    expect(await UsedCarPage.gudget).toBeDisplayed()
    expect(await UsedCarPage.fuelType).toBeDisplayed()
    await UsedCarPage.selectPetrol()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.clickOnNext()
    expect(await UsedCarPage.almostDone).toBeDisplayed()
    await UsedCarPage.clickOnSubmit()
    await UsedCarPage.clickOngetRequirements()
    expect(await UsedCarPage.fuleTypes).toBeDisplayed()
    console.log(await (await UsedCarPage.fuleTypes).getText())
    expect(await UsedCarPage.newRequirements).toBeDisplayed()

  });
  it('TC_10 Verify user able to select use car as per the Exterior Color', async () => {
    browser.url('/')
    await UsedCarPage.clickOnSubmitRequirements()
    await UsedCarPage.carCondition()
    await UsedCarPage.cLocation()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.waitForVehicleDetails()
    await UsedCarPage.selectCar()
    await UsedCarPage.clickOnNext()
    expect(await UsedCarPage.carName).toBeDisplayed()
    expect(await UsedCarPage.addBtn).toBeDisplayed()
    await UsedCarPage.selectPetrol()
    await UsedCarPage.selectColor()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.clickOnNext()
    expect(await UsedCarPage.almostDone).toBeDisplayed()
    await UsedCarPage.clickOnSubmit()
    await UsedCarPage.clickOngetRequirements()
    expect(await UsedCarPage.extColor).toBeDisplayed()
    console.log(await (await UsedCarPage.extColor).getText())
    expect(await UsedCarPage.newRequirements).toBeDisplayed()
  });
  it('TC_11 Verify user able to select use car as per the Transmission Type', async () => {
    browser.url('/')
    await UsedCarPage.clickOnSubmitRequirements()
    await UsedCarPage.carCondition()
    await UsedCarPage.cLocation()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.waitForVehicleDetails()
    await UsedCarPage.slectFromDropDown()
    await UsedCarPage.selectVehicle()
    await UsedCarPage.clickOnNext()
    expect(await UsedCarPage.carName).toBeDisplayed()
    expect(await UsedCarPage.addBtn).toBeDisplayed()
    await UsedCarPage.selectPetrol()
    await UsedCarPage.selectColor()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.clickOnNext()
    expect(await UsedCarPage.almostDone).toBeDisplayed()
    await UsedCarPage.clickOnSubmit()
    await UsedCarPage.clickOngetRequirements()
    expect(await UsedCarPage.transmissionType).toBeDisplayed()
    console.log(await (await UsedCarPage.transmissionType).getText())
    expect(await UsedCarPage.newRequirements).toBeDisplayed()
  });
  it('TC_12 Verify user able to select use car as per the Do you also need option', async () => {
    browser.url('/')
    await UsedCarPage.clickOnSubmitRequirements()
    await UsedCarPage.carCondition()
    await UsedCarPage.cLocation()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.waitForVehicleDetails()
    await UsedCarPage.selectCar()
    await UsedCarPage.clickOnNext()
    expect(await UsedCarPage.carName).toBeDisplayed()
    expect(await UsedCarPage.addBtn).toBeDisplayed()
    await UsedCarPage.selectPetrol()
    await UsedCarPage.selectColor()
    await UsedCarPage.selectAutomatic()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.selectDoYouAlsoNeed()
    await UsedCarPage.clickOnNext()
    expect(await UsedCarPage.almostDone).toBeDisplayed()
    await UsedCarPage.clickOnSubmit()
    await UsedCarPage.clickOngetRequirements()
    expect(await UsedCarPage.service).toBeDisplayed()
    console.log(await (await UsedCarPage.service).getText())
    expect(await UsedCarPage.newRequirements).toBeDisplayed()
  });
  it('TC_13 Verify user is able to select use car as per the How Quickly Do You Want to Buy? option', async () => {
    browser.url('/')
    await UsedCarPage.clickOnSubmitRequirements()
    await UsedCarPage.carCondition()
    await UsedCarPage.cLocation()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.waitForVehicleDetails()
    await UsedCarPage.selectCar()
    await UsedCarPage.clickOnNext()
    expect(await UsedCarPage.carName).toBeDisplayed()
    expect(await UsedCarPage.addBtn).toBeDisplayed()
    await UsedCarPage.selectPetrol()
    await UsedCarPage.selectColor()
    await UsedCarPage.selectAutomatic()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.selectDoYouAlsoNeed()
    await UsedCarPage.selectHowQuickly()
    await UsedCarPage.clickOnNext()
    expect(await UsedCarPage.almostDone).toBeDisplayed()
    await UsedCarPage.clickOnSubmit()
    await UsedCarPage.clickOngetRequirements()
    expect(await UsedCarPage.needToBuy).toBeDisplayed()
    console.log(await (await UsedCarPage.needToBuy).getText())
    expect(await UsedCarPage.newRequirements).toBeDisplayed()
  });
  it('TC_14 Verify user is able to select use car as per the Do You Wish to Exchange Your Vehicle option', async () => {
    browser.url('/')
    await UsedCarPage.clickOnSubmitRequirements()
    await UsedCarPage.carCondition()
    await UsedCarPage.cLocation()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.waitForVehicleDetails()
    await UsedCarPage.selectCar()
    await UsedCarPage.clickOnNext()
    expect(await UsedCarPage.carName).toBeDisplayed()
    expect(await UsedCarPage.addBtn).toBeDisplayed()
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
    expect(await UsedCarPage.almostDone).toBeDisplayed()
    await UsedCarPage.clickOnSubmit()
    await UsedCarPage.clickOngetRequirements()
    expect(await UsedCarPage.exchangeV).toBeDisplayed()
    console.log(await (await UsedCarPage.exchangeV).getText())
    expect(await UsedCarPage.newRequirements).toBeDisplayed()
  });
  it('TC_15 Validation for match count while req creation and in req page', async () => {
    browser.url('/')
    await UsedCarPage.clickOnSubmitRequirements()
    await UsedCarPage.carCondition()
    await UsedCarPage.cLocation()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.waitForVehicleDetails()
    await UsedCarPage.selectCar()
    await UsedCarPage.clickOnNext()
    expect(await UsedCarPage.carName).toBeDisplayed()
    expect(await UsedCarPage.addBtn).toBeDisplayed()
    await UsedCarPage.selectPetrol()
    await UsedCarPage.selectColor()
    await UsedCarPage.selectAutomatic()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.clickOnNext()
    expect(await UsedCarPage.almostDone).toBeDisplayed()
    await UsedCarPage.clickOnSubmit()
  });
  it('TC_07 Verify user able to select use bike as per the budget', async () => {
    browser.url('/')
    await UsedCarPage.clickOnSubmitRequirements()
    await UsedCarPage.carCondition()
    await UsedCarPage.cLocation()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.waitForVehicleDetails()
    await UsedCarPage.selectCar()
    await UsedCarPage.clickOnNext()
    expect(await UsedCarPage.carName).toBeDisplayed()
    expect(await UsedCarPage.addBtn).toBeDisplayed()
    await (await UsedCarPage.Kmsbar).moveTo()
    await (await UsedCarPage.Kmsbar).click()
    await (await UsedCarPage.budgetBar).moveTo()
    await (await UsedCarPage.budgetBar).click()
    await UsedCarPage.selectPetrol()
    await UsedCarPage.selectColor()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.clickOnNext()
    expect(await UsedCarPage.almostDone).toBeDisplayed()
    await UsedCarPage.clickOnSubmit()
    await UsedCarPage.clickOngetRequirements()
    expect(await UsedCarPage.priceRange).toBeDisplayed()
    console.log(await (await UsedCarPage.priceRange).getText())
    expect(await UsedCarPage.newRequirements).toBeDisplayed()
  });
  it('TC_08 Verify user able to select use bike as per the KMS Driven Range', async () => {
    browser.url('/')
    await UsedCarPage.clickOnSubmitRequirements()
    await UsedCarPage.carCondition()
    await UsedCarPage.cLocation()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.waitForVehicleDetails()
    await UsedCarPage.selectCar()
    await UsedCarPage.clickOnNext()
    expect(await UsedCarPage.carName).toBeDisplayed()
    expect(await UsedCarPage.addBtn).toBeDisplayed()
    await (await UsedCarPage.Kmsbar).moveTo()
    await (await UsedCarPage.Kmsbar).click()
    await UsedCarPage.selectPetrol()
    await UsedCarPage.selectColor()
    await UsedCarPage.clickOnNext()
    await UsedCarPage.clickOnNext()
    expect(await UsedCarPage.almostDone).toBeDisplayed()
    await UsedCarPage.clickOnSubmit()
    await UsedCarPage.clickOngetRequirements()
    expect(await UsedCarPage.kmsrange).toBeDisplayed()
    console.log(await (await UsedCarPage.kmsrange).getText())
    expect(await UsedCarPage.newRequirements).toBeDisplayed()
  });

});