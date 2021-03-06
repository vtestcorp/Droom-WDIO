const base = require("../../BaseClass/base");
const requirementsverificationpage = require("../../Pages/Web/RequirementsVerificationPage");

describe('Requirements page verification', async () => {
    it('Tc_01 Validate all requirements created are displayed', async () => {
        await base.webProdLogin()
        await (await requirementsverificationpage.profile).click()
        await (await requirementsverificationpage.requirements).click()
        expect(await requirementsverificationpage.count).toBeDisplayed()
        console.log(await (await requirementsverificationpage.count).getText())
    });
    it('Tc_02 Verify requirements score is a display', async () => {
        await browser.back()
        await (await requirementsverificationpage.profile).click()
        await (await requirementsverificationpage.requirements).click()
        expect(await requirementsverificationpage.score).toBeDisplayed()
        console.log(await (await requirementsverificationpage.score).getText())
    });
    it('Tc_03 Verify requirements name is editable', async () => {
        await browser.back()
        await (await requirementsverificationpage.profile).click()
        await (await requirementsverificationpage.requirements).click()
        expect(await requirementsverificationpage.edit).toBeDisplayed()
        console.log(await (await requirementsverificationpage.edit).isDisplayed())
    });
    it('Tc04 Verify Add New Requirements link is available', async () => {
        await browser.back()
        await (await requirementsverificationpage.profile).click()
        await (await requirementsverificationpage.requirements).click()
        expect(await requirementsverificationpage.newRequirements).toBeDisplayed()
        console.log(await (await requirementsverificationpage.newRequirements).getText())
    });
    it('Tc_05 Verify all static contents are display', async () => {
        await browser.back()
        await (await requirementsverificationpage.profile).click()
        await (await requirementsverificationpage.requirements).click()
        expect(await requirementsverificationpage.name).toBeDisplayed()
        console.log(await (await requirementsverificationpage.name).getText())
        expect(await requirementsverificationpage.priceRange).toBeDisplayed()
        console.log(await (await requirementsverificationpage.priceRange).getText())
        expect(await requirementsverificationpage.condition).toBeDisplayed()
        console.log(await (await requirementsverificationpage.condition).getText())
        expect(await requirementsverificationpage.year).toBeDisplayed()
        console.log(await (await requirementsverificationpage.year).getText())
        expect(await requirementsverificationpage.km).toBeDisplayed()
        console.log(await (await requirementsverificationpage.km).getText())
        expect(await requirementsverificationpage.transmission).toBeDisplayed()
        console.log(await (await requirementsverificationpage.transmission).getText())
        expect(await requirementsverificationpage.fuelType).toBeDisplayed()
        console.log(await (await requirementsverificationpage.fuelType).getText())
        expect(await requirementsverificationpage.Color).toBeDisplayed()
        console.log(await (await requirementsverificationpage.Color).getText())
        expect(await requirementsverificationpage.Body).toBeDisplayed()
        console.log(await (await requirementsverificationpage.Body).getText())
        expect(await requirementsverificationpage.location).toBeDisplayed()
        console.log(await (await requirementsverificationpage.location).getText())
    });
    it('Tc_06 Verify payments status of requirements are display', async () => {
        await browser.back()
        await (await requirementsverificationpage.profile).click()
        await (await requirementsverificationpage.requirements).click()
        expect(requirementsverificationpage.payment).toBeDisplayed()
        console.log(await (await requirementsverificationpage.payment).getText())
    });
});
