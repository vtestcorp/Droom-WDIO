const base = require("../../BaseClass/base");
const requirementsVerificationPage = require("../../Pages/Androidbrowser/requirementsVerificationPage");
describe('Requirements Verification', async () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
    });
    it('TC_01 Validate all requirements created userLogin are displayed', async () => {
        await requirementsVerificationPage.chromeConditions()
        browser.url('/user/login')
        await requirementsVerificationPage.loginAsBuyer()
        console.log("Buyer login successfully")
        await base.swipeUp()
        await (await requirementsVerificationPage.my_Requirements).click()
        console.log("Clicked on my Requirement ")
        await (await requirementsVerificationPage.Add_New_Requirement).waitForDisplayed({ timeout: 20000 })
        expect(await requirementsVerificationPage.requirements).toBeDisplayed()
        console.log(" All requirements created displayed")
        console.log(await (await requirementsVerificationPage.requirements).getText())
    });
    it('TC_02 Verify requirements score is a display', async () => {
        await requirementsVerificationPage.chromeConditions()
        browser.url('/user/login')
        await requirementsVerificationPage.loginAsBuyer()
        console.log("Buyer login successfully")
        await base.swipeUp()
        await (await requirementsVerificationPage.my_Requirements).click()
        console.log("Clicked on my Requirement ")
        await (await requirementsVerificationPage.Add_New_Requirement).waitForDisplayed({ timeout: 20000 })
        expect(await requirementsVerificationPage.Score).toBeDisplayed()
        console.log(" score displayed")
        console.log(await (await requirementsVerificationPage.Score).getText())
        console.log(await (await requirementsVerificationPage.Score_Count).getText())
    });
    it('TC_03 Verify requirements name is editable', async () => {
        await requirementsVerificationPage.chromeConditions()
        browser.url('/user/login')
        await requirementsVerificationPage.loginAsBuyer()
        await base.swipeUp()
        await (await requirementsVerificationPage.my_Requirements).click()
        console.log("Clicked on my Requirement ")
        await (await requirementsVerificationPage.Add_New_Requirement).waitForDisplayed({ timeout: 20000 })
        await (await requirementsVerificationPage.search).click()
        console.log("requirements name is editable")
    });
    it('TC_04 Verify Add New Requirements link is available', async () => {
        await requirementsVerificationPage.chromeConditions()
        browser.url('/user/login')
        await requirementsVerificationPage.loginAsBuyer()
        console.log("Buyer login successfully")
        await base.swipeUp()
        await (await requirementsVerificationPage.my_Requirements).click()
        console.log("Clicked on my Requirement ")
        await (await requirementsVerificationPage.Add_New_Requirement).waitForDisplayed({ timeout: 20000 })
        expect(await requirementsVerificationPage.Add_New_Requirement).toBeDisplayed()
        console.log("+ Add New Requirements link is available")
        console.log(await (await requirementsVerificationPage.Add_New_Requirement).getText())
    });*/
    it('TC_05 Verify user should be able to edit Do You Wish to Exchange Your Vehicle option', async () => {
        await requirementsVerificationPage.chromeConditions()
        browser.url('/user/login')
        await requirementsVerificationPage.loginAsBuyer()
        console.log("Buyer login successfully")
        await base.swipeUp()
        await (await requirementsVerificationPage.my_Requirements).click()
        console.log("Clicked on my Requirement ")
        await (await requirementsVerificationPage.Add_New_Requirement).waitForDisplayed({ timeout: 20000 })
        expect(await requirementsVerificationPage.Add_New_Requirement).toBeDisplayed()
        console.log(await (await requirementsVerificationPage.Add_New_Requirement).getText())
        console.log(await (await requirementsVerificationPage.Score).getText())
        console.log(await (await requirementsVerificationPage.Score_Count).getText())
        expect(await requirementsVerificationPage.requirements).toBeDisplayed()
        console.log(await (await requirementsVerificationPage.requirements).getText())
        expect(await requirementsVerificationPage.Price_Range).toBeDisplayed()
        console.log(await (await requirementsVerificationPage.Price_Range).getText())
        expect(await requirementsVerificationPage.Used).toBeDisplayed()
        expect(await requirementsVerificationPage.any).toBeDisplayed()
        expect(await requirementsVerificationPage.best_Matches).toBeDisplayed()
        expect(await requirementsVerificationPage.my_Matches).toBeDisplayed()
    });
    it('TC_06 Verify payments status of requirements are display ', async () => {
        await requirementsVerificationPage.chromeConditions()
        browser.url('/user/login')
        await requirementsVerificationPage.loginAsBuyer()
        console.log("Buyer login successfully")
        await base.swipeUp()
        await (await requirementsVerificationPage.my_Requirements).click()
        await (await requirementsVerificationPage.Add_New_Requirement).waitForDisplayed({ timeout: 20000 })
        expect(await requirementsVerificationPage.Unlock_Fee_Payment).toBeDisplayed()
        console.log("Payments status of requirements are displayed")
        console.log(await (await requirementsVerificationPage.Unlock_Fee_Payment).getText())
    });
});