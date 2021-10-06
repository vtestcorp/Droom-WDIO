const base = require("../../BaseClass/base");
const requirementsVerificationPage = require("../../Pages/Android/requirementsVerificationPage");

describe('Requirements Verification', async () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
    });
    it('TC_01 Validate all requirements created are displayed', async () => {
        await base.androidLoginAsBuyer()
        console.log("Buyer login successfully")
        await (await requirementsVerificationPage.my_requirement).click()
        console.log("Clicked on my requirement")
        expect(await requirementsVerificationPage.txt_total_req).toBeDisplayed()
        console.log("All requirements displayed")
        console.log(await (await requirementsVerificationPage.txt_total_req).getText())
    });
    it('TC_02 Verify requirements score is a display', async () => {
        await base.androidLoginAsBuyer()
        console.log("Buyer login successfully")
        await (await requirementsVerificationPage.my_requirement).click()
        console.log("Clicked on my requirement")
        expect(await requirementsVerificationPage.tsmb_score).toBeDisplayed()
        console.log(await (await requirementsVerificationPage.tsmb_score).getText())
    });
    it('TC_03 Verify requirements name is editable', async () => {
        await base.androidLoginAsBuyer()
        console.log("Buyer login successfully")
        await (await requirementsVerificationPage.my_requirement).click()
        console.log("Clicked on my requirement")
        await (await requirementsVerificationPage.txt_more).click()
        console.log("Clicked on my more option")
        await (await requirementsVerificationPage.txt_title).click()
        expect(await requirementsVerificationPage.renameRequirement).toBeDisplayed()
        console.log(await (await requirementsVerificationPage.renameRequirement).getText())
        console.log("Requirements name is editable")
        
    });
    it('TC_04 Verify Add New Requirements link is available', async () => {
        await base.androidLoginAsBuyer()
        console.log("Buyer login successfully")
        await (await requirementsVerificationPage.my_requirement).click()
        console.log("Clicked on my requirement")
        expect(await requirementsVerificationPage.addNewRequirement).toBeDisplayed()
        console.log(await (await requirementsVerificationPage.addNewRequirement).getText())
        console.log("Add New Requirements link is available")
    });
    it('TC_05 Verify user should be able to edit Do You Wish to Exchange Your Vehicle option ', async () => {
        await base.androidLoginAsBuyer()
        console.log("Buyer login successfully")
        await (await requirementsVerificationPage.my_requirement).click()
        console.log("Clicked on my requirement")
        await (await requirementsVerificationPage.txt_more).click()
        console.log("Clicked on my more option")
        expect(await requirementsVerificationPage.addNewRequirement).toBeDisplayed()
        console.log(await (await requirementsVerificationPage.addNewRequirement).getText())
        expect(await requirementsVerificationPage.txt_title).toBeDisplayed()
        console.log(await (await requirementsVerificationPage.txt_title).getText())
        expect(await requirementsVerificationPage.makeModel).toBeDisplayed()
        console.log(await (await requirementsVerificationPage.makeModel).getText())
        expect(await requirementsVerificationPage.priceRangeView).toBeDisplayed()
        console.log(await (await requirementsVerificationPage.priceRangeView).getText())
        expect(await requirementsVerificationPage.conditionView).toBeDisplayed()
        console.log(await (await requirementsVerificationPage.conditionView).getText())
        expect(await requirementsVerificationPage.yearView).toBeDisplayed()
        console.log(await (await requirementsVerificationPage.yearView).getText())
        expect(await requirementsVerificationPage.best_match_section).toBeDisplayed()
        console.log(await (await requirementsVerificationPage.best_match_section).getText())
        expect(await requirementsVerificationPage.my_match_section).toBeDisplayed()
        console.log(await (await requirementsVerificationPage.my_match_section).getText())
        expect(await requirementsVerificationPage.km_view).toBeDisplayed()
        console.log(await (await requirementsVerificationPage.km_view).getText())
        expect(await requirementsVerificationPage.manual_view).toBeDisplayed()
        console.log(await (await requirementsVerificationPage.manual_view).getText())
        expect(await requirementsVerificationPage.petrol_view).toBeDisplayed()
        console.log(await (await requirementsVerificationPage.petrol_view).getText())
        expect(await requirementsVerificationPage.maroon_view).toBeDisplayed()
        console.log(await (await requirementsVerificationPage.maroon_view).getText())
        expect(await requirementsVerificationPage.hatchback_view).toBeDisplayed()
        console.log(await (await requirementsVerificationPage.hatchback_view).getText())
    });
    it('TC_06  Verify payments status of requirements are display ', async () => {
        await base.androidLoginAsBuyer()
        console.log("Buyer login successfully")
        await (await requirementsVerificationPage.my_requirement).click()
        console.log("Clicked on my requirement")
        await (await requirementsVerificationPage.txt_more).click()
        console.log("Clicked on my more option")
        expect(await requirementsVerificationPage.txt_token_amount_paid).toBeDisplayed()
        console.log(await (await requirementsVerificationPage.txt_token_amount_paid).getText())
        console.log("Payments status of requirements are display")
    });

});