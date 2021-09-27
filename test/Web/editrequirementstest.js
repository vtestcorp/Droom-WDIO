const base = require("../../BaseClass/base");
const editrequirementspage = require("../../Pages/Web/editrequirementspage");

describe('Requirements page verification', async () => {
    it('Tc_02 Verify user should be able to edit price range', async () => {
        await base.loginAsBuyer()
        await editrequirementspage.CreateRequiRement()
        console.log("Old Price Range:")
        expect(await editrequirementspage.priceRange).toBeDisplayed()
        console.log(await (await editrequirementspage.priceRange).getText())
        await (await editrequirementspage.newRequirements).waitForExist({ timeout: 10000 })
        await (await editrequirementspage.editBtn).click()
        await (await editrequirementspage.almostDone).waitForDisplayed({ timeout: 10000 })
        await editrequirementspage.goBackTillColor()
        await (await editrequirementspage.budgetBar).moveTo()
        await (await editrequirementspage.budgetBar).click()
        await editrequirementspage.clickOnNext()
        await (await editrequirementspage.yesBtn).waitForDisplayed({ timeout: 10000 })
        await editrequirementspage.clickOnNext()
        await (await editrequirementspage.continue).waitForDisplayed({ timeout: 10000 })
        await editrequirementspage.clickOnSubmit()
        await (await editrequirementspage.requirement).click()
        console.log("New Price Range:")
        expect(await editrequirementspage.priceRange).toBeDisplayed()
        console.log(await (await editrequirementspage.priceRange).getText())
    });
    it('Tc_03 Verify user should be able to edit KMS Driven Range', async () => {
        console.log("Old KMS Range:")
        expect(await editrequirementspage.kmsrange).toBeDisplayed()
        console.log(await (await editrequirementspage.kmsrange).getText())
        await (await editrequirementspage.newRequirements).waitForDisplayed({ timeout: 10000 })
        await (await editrequirementspage.editBtn).click()
        await (await editrequirementspage.almostDone).waitForDisplayed({ timeout: 10000 })
        await editrequirementspage.goBackTillColor()
        await (await editrequirementspage.selectcolor).click()
        await (await editrequirementspage.Kmsbar).moveTo()
        await (await editrequirementspage.Kmsbar).click()
        await editrequirementspage.clickOnNext()
        await (await editrequirementspage.yesBtn).waitForDisplayed({ timeout: 10000 })
        await editrequirementspage.clickOnNext()
        await editrequirementspage.clickOnSubmit()
        await (await editrequirementspage.requirement).click()
        console.log("New KMS Range:")
        expect(await editrequirementspage.kmsrange).toBeDisplayed()
        console.log(await (await editrequirementspage.kmsrange).getText())
    });
    it('Tc_04 Verify user should be able to edit color', async () => {
        console.log("Before Edit color:")
        expect(await editrequirementspage.newExtColor).toBeDisplayed()
        console.log(await (await editrequirementspage.newExtColor).getText())
        await (await editrequirementspage.editBtn).click()
        await editrequirementspage.goBackTillColor()
        await (await editrequirementspage.newColor).click()
        await editrequirementspage.clickOnNext()
        await editrequirementspage.clickOnNext()
        await editrequirementspage.clickOnSubmit()
        await (await editrequirementspage.requirement).click()
        console.log("After Edit color:")
        expect(await editrequirementspage.newExtColor).toBeDisplayed()
        console.log(await (await editrequirementspage.newExtColor).getText())
    });
    it('Tc_05 Verify user should be able to edit Do you also need option', async () => {
        browser.url('/')
        await editrequirementspage.CreateRequiRement()
        console.log("Before Edit Do You Need Option:")
        expect(await editrequirementspage.newExtColor).toBeDisplayed()
        console.log(await (await editrequirementspage.service1).getText())
        await (await editrequirementspage.editBtn).waitForDisplayed({ timeout: 10000 })
        await (await editrequirementspage.editBtn).click()
        await (await editrequirementspage.matches).waitForDisplayed({ timeout: 10000 })
        await editrequirementspage.goBackTillDoYouAlsoNeed()
        await (await editrequirementspage.insurance).click()
        await (await editrequirementspage.loan).click()
        await (await editrequirementspage.RCTransfer).click()
        await (await editrequirementspage.roadSideAssistance).click()
        await (await editrequirementspage.notDecided).click()
        await editrequirementspage.clickOnNext()
        await editrequirementspage.clickOnSubmit()
        await (await editrequirementspage.requirement).click()
        console.log("After Edit Do You Need Option:")
        expect(await editrequirementspage.newExtColor).toBeDisplayed()
        console.log(await (await editrequirementspage.service1).getText())
    });
    it('Tc_07 Verify user should be able to edit How Quickly Do You Want to Buy option', async () => {
        console.log("Before Edit How Quickly Do You Want to Buy option:")
        expect(await editrequirementspage.needToBuy).toBeDisplayed()
        console.log(await (await editrequirementspage.needToBuy).getText())
        await (await editrequirementspage.editBtn).click()
        await (await editrequirementspage.matches).waitForDisplayed({ timeout: 10000 })
        await editrequirementspage.goBackTillDoYouAlsoNeed()
        await (await editrequirementspage.notDecided).click()
        await editrequirementspage.clickOnNext()
        await editrequirementspage.clickOnSubmit()
        await (await editrequirementspage.requirement).click()
        console.log("After Edit How Quickly Do You Want to Buy option:")
        expect(await editrequirementspage.needToBuy).toBeDisplayed()
        console.log(await (await editrequirementspage.needToBuy).getText())
    });
    it('Tc_08 Verify user should be able to edit Do You Wish to Exchange Your Vehicle option', async () => {
        console.log("Before Edit You Wish to Exchange Your Vehicle option:")
        expect(await editrequirementspage.exchanges).toBeDisplayed()
        console.log(await (await editrequirementspage.exchanges).getText())
        await (await editrequirementspage.editBtn).click()
        await editrequirementspage.goBackTillDoYouAlsoNeed()
        await (await editrequirementspage.exchange).click()
        await editrequirementspage.selectVehicle()
        await editrequirementspage.clickOnNext()
        await editrequirementspage.clickOnSubmit()
        await (await editrequirementspage.requirement).click()
        console.log("After Edit You Wish to Exchange Your Vehicle option:")
        expect(await editrequirementspage.exchanges).toBeDisplayed()
        console.log(await (await editrequirementspage.exchanges).getText())
    });
    it('Tc_06 Verify user should be able to edit  Vehicle Details', async () => {
        browser.url('/')
        await editrequirementspage.CreateRequiRement()
        console.log("Before Edit Vehicle Details:")
        expect(await editrequirementspage.carName).toBeDisplayed()
        console.log(await (await editrequirementspage.carName).getText())
        await (await editrequirementspage.editBtn).click()
        await (await editrequirementspage.almostDone).waitForDisplayed({ timeout: 10000 })
        await editrequirementspage.goBackTillVehicle()
        await browser.pause(5000)
        await (await editrequirementspage.deleteVehicle).click()
        await (await editrequirementspage.enterV).setValue("BMW")
        await (await editrequirementspage.selectSwift).click()
        await editrequirementspage.clickOnNext()
        await editrequirementspage.clickOnNext()
        await editrequirementspage.clickOnNext()
        await editrequirementspage.clickOnSubmit()
        await (await editrequirementspage.requirement).click()
        console.log("After Edit Vehicle Details:")
        expect(await editrequirementspage.carName).toBeDisplayed()
        console.log(await (await editrequirementspage.carName).getText())
    });
    it('Tc_09 Verify user should be able to edit  Vehicle Details and multiple vehicles', async () => {
        browser.url('/')
        await editrequirementspage.CreateRequiRement()
        console.log("Before Edit Vehicle Details:")
        expect(await editrequirementspage.carName).toBeDisplayed()
        console.log(await (await editrequirementspage.carName).getText())
        await (await editrequirementspage.editBtn).click()
        await (await editrequirementspage.almostDone).waitForDisplayed({ timeout: 10000 })
        await editrequirementspage.goBackTillVehicle()
        await (await editrequirementspage.anotherVehicle).click()
        await (await editrequirementspage.enterV).setValue("BMW")
        await (await editrequirementspage.selectSwift).click()
        await (await editrequirementspage.nextButton).click()
        await (await editrequirementspage.nextButton).click()
        await editrequirementspage.clickOnNext()
        await (await editrequirementspage.continue).waitForDisplayed({ timeout: 10000 })
        await (await editrequirementspage.submitAndView).waitForDisplayed({ timeout: 10000 })
        await (await editrequirementspage.submitAndView).click()
        await (await editrequirementspage.requirement).click()
        console.log("After Edit Vehicle Details:")
        expect(await editrequirementspage.carName).toBeDisplayed()
        console.log(await (await editrequirementspage.carName).getText())
    });
    it('Tc_01 Verify user should be able to edit location', async () => {
        browser.url('/')
        await editrequirementspage.CreateRequiRement()
        console.log("Before Edit Location:")
        expect(await editrequirementspage.rLocation).toBeDisplayed()
        console.log(await (await editrequirementspage.rLocation).getText())
        await (await editrequirementspage.editBtn).click()
        await editrequirementspage.goBackTillLocation()
        await editrequirementspage.Enterloaction()
        await editrequirementspage.submitRequirements()
        expect(editrequirementspage.rLocation).toBeDisplayed()
        console.log("After Edit Location:")
        expect(await editrequirementspage.rLocation).toBeDisplayed()
        console.log(await (await editrequirementspage.rLocation).getText())
    });

});