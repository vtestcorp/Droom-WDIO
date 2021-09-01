const base = require("../../BaseClass/base");
const requirementsverificationpage = require("../../Pages/Web/RequirementsVerificationPage");

describe('Requirements page verification', async () => {
    it('Validate all requirements created are displayed', async () => {
        await base.loginAsBuyer()
        await (await requirementsverificationpage.requirements).click()
        expect(await requirementsverificationpage.count).toBeDisplayed()
        console.log(await (await requirementsverificationpage.count).getText())


    });
    it('Verify requirements score is a display', async () => {
        await browser.back()
        await (await requirementsverificationpage.requirements).click()
        await expect(await requirementsverificationpage.score).toBeDisplayed()
        console.log(await (await requirementsverificationpage.score).getText())


    });
    it('Verify requirements name is editable', async () => {
        await browser.back()
        await (await requirementsverificationpage.requirements).click()
        await expect(await requirementsverificationpage.edit).toBeDisplayed()
        console.log(await (await requirementsverificationpage.edit).getText())


    });
    it('Verify Add New Requirements link is available', async () => {
        await browser.back()
        await (await requirementsverificationpage.requirements).click()
        await expect(await requirementsverificationpage.newRequirements).toBeDisplayed()
        console.log(await (await requirementsverificationpage.newRequirements).getText())


    });
    it('Verify all static contents are display', async () => {
        await browser.back()
        await (await requirementsverificationpage.requirements).click()
        await expect(await requirementsverificationpage.name).toBeDisplayed()
        console.log(await (await requirementsverificationpage.name).getText())
        await expect(await requirementsverificationpage.priceRange).toBeDisplayed()
        console.log(await (await requirementsverificationpage.priceRange).getText())
        await expect(await requirementsverificationpage.condition).toBeDisplayed()
        console.log(await (await requirementsverificationpage.condition).getText())
        await expect(await requirementsverificationpage.year).toBeDisplayed()
        console.log(await (await requirementsverificationpage.year).getText())
        await expect(await requirementsverificationpage.km).toBeDisplayed()
        console.log(await (await requirementsverificationpage.km).getText())
        await expect(await requirementsverificationpage.transmission).toBeDisplayed()
        console.log(await (await requirementsverificationpage.transmission).getText())
        await expect(await requirementsverificationpage.Color).toBeDisplayed()
        console.log(await (await requirementsverificationpage.Color).getText())
        await expect(await requirementsverificationpage.Body).toBeDisplayed()
        console.log(await (await requirementsverificationpage.Body).getText())
    });
    it(' Verify payments status of requirements are display', async () => {
        await browser.back()
        await (await requirementsverificationpage.requirements).click()
        await expect(requirementsverificationpage.payment).toBeDisplayed()
        console.log(await (await requirementsverificationpage.payment).getText())


    });

});
