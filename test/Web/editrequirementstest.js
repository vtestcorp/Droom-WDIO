const base = require("../../BaseClass/base");
const editrequirementspage = require("../../Pages/Web/editrequirementspage");

describe('Requirements page verification', async () => {
    it('Tc_01 Verify user should be able to edit location', async () => {
        await base.loginAsBuyer()
        await base.CreateRequiRementspage()
        await (await editrequirementspage.editBtn).click()
        await (await editrequirementspage.almostDone).waitForExist({ timeout: 20000 })
        expect(editrequirementspage.almostDone).toBeDisplayed()
        expect(editrequirementspage.matches).toBeDisplayed()
        expect(editrequirementspage.lastStep).toBeDisplayed()
        expect(editrequirementspage.socreBtn).toBeDisplayed()
        await editrequirementspage.goBackTillLocation()
        await editrequirementspage.Enterloaction()
        await editrequirementspage.submitRequirements()
        expect(editrequirementspage.rLocation).toBeDisplayed()
        console.log(await (await editrequirementspage.rLocation).getText())
    });
    it('Tc_04 Verify user should be able to edit color', async () => {
        await (await editrequirementspage.editBtn).click()
        expect(await editrequirementspage.almostDone).toBeDisplayed()
        expect(await editrequirementspage.matches).toBeDisplayed()
        expect(await editrequirementspage.lastStep).toBeDisplayed()
        expect(await editrequirementspage.socreBtn).toBeDisplayed()
        await editrequirementspage.goBackTillColor()
        await (await editrequirementspage.newColor).click()
        await (await editrequirementspage.nextButton).click()
        await (await editrequirementspage.nextButton).click()
        await (await editrequirementspage.submitAndView).click()
        await (await editrequirementspage.requirement).click()
        console.log(await (await editrequirementspage.newExtColor).getText())
    });
    it('Tc_05 Verify user should be able to edit Do you also need option', async () => {
        await (await editrequirementspage.editBtn).waitForDisplayed()
        await (await editrequirementspage.editBtn).click()
        await (await editrequirementspage.matches).waitForDisplayed()
        await editrequirementspage.goBackTillDoYouAlsoNeed()
        await (await editrequirementspage.insurance).click()
        await (await editrequirementspage.loan).click()
        await (await editrequirementspage.RCTransfer).click()
        await (await editrequirementspage.roadSideAssistance).click()
        await (await editrequirementspage.nextButton).click()
        await (await editrequirementspage.nextButton).click()
        await (await editrequirementspage.submitAndView).click()
        await (await editrequirementspage.requirement).click()
        console.log(await (await editrequirementspage.service1).getText())
    });
    it('Tc_07 Verify user should be able to edit How Quickly Do You Want to Buy option', async () => {
        await (await editrequirementspage.editBtn).click()
        await (await editrequirementspage.matches).waitForDisplayed()
        await editrequirementspage.goBackTillDoYouAlsoNeed()
        await (await editrequirementspage.notDecided).click()
        await (await editrequirementspage.nextButton).click()
        await (await editrequirementspage.submitAndView).click()
        await (await editrequirementspage.requirement).waitForDisplayed({ timeout: 10000 })
        await (await editrequirementspage.requirement).click()
        console.log(await (await editrequirementspage.needToBuy).getText())
    });
    it('Tc_08 Verify user should be able to edit Do You Wish to Exchange Your Vehicle option', async () => {
        await (await editrequirementspage.editBtn).click()
        await (await editrequirementspage.almostDone).waitForDisplayed()
        await editrequirementspage.goBackTillDoYouAlsoNeed()
        await (await editrequirementspage.exchange).click()
        await editrequirementspage.selectVehicle()
        await (await editrequirementspage.nextButton).click()
        await (await editrequirementspage.submitAndView).click()
        await (await editrequirementspage.requirement).click()
        console.log(await (await editrequirementspage.exchanges).getText())
    });
    it('Tc_06 Verify user should be able to edit  Vehicle Details', async () => {
        await (await editrequirementspage.editBtn).click()
        await (await editrequirementspage.almostDone).waitForDisplayed()
        await editrequirementspage.goBackTillVehicle()
        await (await editrequirementspage.deleteVehicle).click()
        await (await editrequirementspage.enterV).setValue("BMW")
        await (await editrequirementspage.selectSwift).click()
        await (await editrequirementspage.nextButton).click()
        await (await editrequirementspage.nextButton).click()
        await (await editrequirementspage.nextButton).click()
        await (await editrequirementspage.submitAndView).click()
        await (await editrequirementspage.requirement).click()
        console.log(await (await editrequirementspage.carName).getText())
    });
    it('Tc_09 Verify user should be able to edit  Vehicle Details and multiple vehicles', async () => {
        await (await editrequirementspage.editBtn).click()
        await (await editrequirementspage.almostDone).waitForDisplayed()
        await editrequirementspage.goBackTillVehicle()
        await (await editrequirementspage.anotherVehicle).click()
        await (await editrequirementspage.enterV).setValue("BMW")
        await (await editrequirementspage.selectSwift).click()
        await (await editrequirementspage.nextButton).click()
        await (await editrequirementspage.nextButton).click()
        await (await editrequirementspage.nextButton).click()
        await (await editrequirementspage.submitAndView).click()
        await (await editrequirementspage.requirement).click()
        console.log(await (await editrequirementspage.carName).getText())
    });
});
