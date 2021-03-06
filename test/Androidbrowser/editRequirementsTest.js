const editRequirementsPage = require("../../Pages/Androidbrowser/editRequirementsPage");
const base = require("../../BaseClass/base");
describe('Edit Requirements', async () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
    });
    it('TC_07 Verify user should be able to edit How Quickly Do You Want to Buy option', async () => {
       // await editRequirementsPage.chromeConditions()
        browser.url('/user/login')
        await base.androidBrowserProdLoginAsBuyer()
        await base.swipeUp()
        await (await editRequirementsPage.my_Requirements).click()
        await (await editRequirementsPage.new_Requirement).click()
        await editRequirementsPage.createRForCar()
        await base.swipeUp()
        await (await editRequirementsPage.menu).click()
        await (await editRequirementsPage.my_Requirements).click()
        await (await editRequirementsPage.new_Requirement).waitForDisplayed({ timeout: 7000 })
        await base.swipeUp()
        await (await editRequirementsPage.more).click()
        await base.swipeUp()
        expect(await editRequirementsPage.immediately).toBeDisplayed()
        console.log("Before Edit How Quickly Do You Want to Buy option")
        console.log(await (await editRequirementsPage.immediately).getText())
        await (await editRequirementsPage.edit).click()
        await editRequirementsPage.HowQuicklyWantBuy()
        await (await editRequirementsPage.View_All_R).click()
        await (await editRequirementsPage.new_Requirement).waitForDisplayed({ timeout: 7000 })
        await base.swipeUp()
        await (await editRequirementsPage.more).click()
        await base.swipeUp()
        expect(await editRequirementsPage.not_Decided).toBeDisplayed()
        console.log("After Edit How Quickly Do You Want to Buy option")
        console.log(await (await editRequirementsPage.not_Decided).getText())
    });

    it('TC_06 Verify user should be able to edit Vehicle Details', async () => {
        //await editRequirementsPage.chromeConditions()
        browser.url('/user/login')
        await base.androidBrowserProdLoginAsBuyer()
        await base.swipeUp()
        await (await editRequirementsPage.my_Requirements).click()
        await (await editRequirementsPage.new_Requirement).click()
        await editRequirementsPage.createRForCar1()
        await base.swipeUp()
        await (await editRequirementsPage.menu).click()
        await (await editRequirementsPage.my_Requirements).click()
        await (await editRequirementsPage.new_Requirement).waitForDisplayed({ timeout: 7000 })
        expect(await editRequirementsPage.vehicle_name).toBeDisplayed()
        console.log("Before Edit edit Vehicle Details")
        console.log(await (await editRequirementsPage.vehicle_name).getText())
        await base.swipeUp()
        await (await editRequirementsPage.edit).click()
        await editRequirementsPage.editVehicle()
        await (await editRequirementsPage.View_All_R).click()
        await (await editRequirementsPage.new_Requirement).waitForDisplayed({ timeout: 7000 })
        expect(await editRequirementsPage.Hyundai_Verna).toBeDisplayed()
        console.log("Before Edit edit Vehicle Details")
        console.log(await (await editRequirementsPage.Hyundai_Verna).getText())
    });
    it('TC_03 Verify user should be able to edit KMS Driven Range', async () => {
        //await editRequirementsPage.chromeConditions()
        browser.url('/user/login')
        await base.androidBrowserProdLoginAsBuyer()
        await base.swipeUp()
        await (await editRequirementsPage.my_Requirements).click()
        await (await editRequirementsPage.new_Requirement).click()
        await editRequirementsPage.createRForCar1()
        await base.swipeUp()
        await (await editRequirementsPage.menu).click()
        await (await editRequirementsPage.my_Requirements).click()
        await (await editRequirementsPage.new_Requirement).waitForDisplayed({ timeout: 7000 })
        expect(await editRequirementsPage.vehicle_name).toBeDisplayed()
        await base.swipeUp()
        await (await editRequirementsPage.more).click()
        console.log("Before Edit KMS Driven Range is Any")
        await editRequirementsPage.swipeUp1()
        await (await editRequirementsPage.edit).click()
        await editRequirementsPage.editVehicle()
        await (await editRequirementsPage.View_All_R).click()
        await (await editRequirementsPage.new_Requirement).waitForDisplayed({ timeout: 7000 })
        await base.swipeUp()
        await (await editRequirementsPage.more).click()
        expect(await editRequirementsPage.new_Km_driven).toBeDisplayed()
        console.log("After Edit KMS Driven Range is:")
        console.log(await (await editRequirementsPage.new_Km_driven).getText())
    });
    it('TC_09 Verify user should be able to edit  Vehicle Details and multiple vehicles', async () => {
       // await editRequirementsPage.chromeConditions()
        browser.url('/user/login')
        await base.androidBrowserProdLoginAsBuyer()
        await base.swipeUp()
        await (await editRequirementsPage.my_Requirements).click()
        await (await editRequirementsPage.new_Requirement).click()
        await editRequirementsPage.createRForCar1()
        await base.swipeUp()
        await (await editRequirementsPage.menu).click()
        await (await editRequirementsPage.my_Requirements).click()
        await (await editRequirementsPage.new_Requirement).waitForDisplayed({ timeout: 7000 })
        expect(await editRequirementsPage.vehicle_name).toBeDisplayed()
        console.log("Before Edit Vehicle Details")
        console.log(await (await editRequirementsPage.vehicle_name).getText())
        await base.swipeUp()
        await (await editRequirementsPage.edit).click()
        await editRequirementsPage.editVehicle1()
        await (await editRequirementsPage.View_All_R).click()
        await (await editRequirementsPage.new_Requirement).waitForDisplayed({ timeout: 7000 })
        expect(await editRequirementsPage.vehicles_name).toBeDisplayed()
        console.log("After Edit Vehicle Details")
        console.log(await (await editRequirementsPage.vehicles_name).getText())
    });
    it('TC_04 Verify user should be able to edit color', async () => {
       // await editRequirementsPage.chromeConditions()
        browser.url('/user/login')
        await base.androidBrowserProdLoginAsBuyer()
        await base.swipeUp()
        await (await editRequirementsPage.my_Requirements).click()
        await (await editRequirementsPage.new_Requirement).click()
        await editRequirementsPage.createRForCar1()
        await base.swipeUp()
        await (await editRequirementsPage.menu).click()
        await (await editRequirementsPage.my_Requirements).click()
        await (await editRequirementsPage.new_Requirement).waitForDisplayed({ timeout: 7000 })
        expect(await editRequirementsPage.vehicle_name).toBeDisplayed()
        console.log("Before Edit color is Any")
        await base.swipeUp()
        await (await editRequirementsPage.edit).click()
        await editRequirementsPage.editColor()
        await editRequirementsPage.switchToWebview()
        await (await editRequirementsPage.Color).click()
        await editRequirementsPage.switchToNativeApp()
        await editRequirementsPage.editColor1()
        await (await editRequirementsPage.View_All_R).click()
        await (await editRequirementsPage.new_Requirement).waitForDisplayed({ timeout: 7000 })
        await editRequirementsPage.swipeUp1()
        await (await editRequirementsPage.more).click()
        expect(await editRequirementsPage.red).toBeDisplayed()
        console.log("After Edit color is:")
        console.log(await (await editRequirementsPage.red).getText())
    });
    it('TC_05 Verify user should be able to edit Service You Need option', async () => {
        //await editRequirementsPage.chromeConditions()
        browser.url('/user/login')
        await base.androidBrowserProdLoginAsBuyer()
        await base.swipeUp()
        await (await editRequirementsPage.my_Requirements).click()
        await (await editRequirementsPage.new_Requirement).click()
        await editRequirementsPage.createRForCar1()
        await base.swipeUp()
        await (await editRequirementsPage.menu).click()
        await (await editRequirementsPage.my_Requirements).click()
        await (await editRequirementsPage.new_Requirement).waitForDisplayed({ timeout: 7000 })
        expect(await editRequirementsPage.vehicle_name).toBeDisplayed()
        console.log("Before edit Service You Need option is:")
        await editRequirementsPage.swipeUp1()
        await (await editRequirementsPage.more).click()
        await editRequirementsPage.swipeUp1()
        console.log(await (await editRequirementsPage.no_services).getText())
        await (await editRequirementsPage.edit).click()
        await editRequirementsPage.editColor()
        await editRequirementsPage.switchToWebview()
        await (await editRequirementsPage.Color).click()
        await editRequirementsPage.switchToNativeApp()
        await editRequirementsPage.serviceYouNeed()
        await (await editRequirementsPage.View_All_R).click()
        await (await editRequirementsPage.new_Requirement).waitForDisplayed({ timeout: 7000 })
        await editRequirementsPage.swipeUp1()
        await (await editRequirementsPage.more).click()
        expect(await editRequirementsPage.rc_tranfer).toBeDisplayed()
        console.log("After edit Service You Need option is:")
        console.log(await (await editRequirementsPage.rc_tranfer).getText())
    });
    it('TC_02 Verify user should be able to edit price range', async () => {
        //await editRequirementsPage.chromeConditions()
        browser.url('/user/login')
        await base.androidBrowserProdLoginAsBuyer()
        await base.swipeUp()
        await (await editRequirementsPage.my_Requirements).click()
        await (await editRequirementsPage.new_Requirement).click()
        await editRequirementsPage.createRForCar1()
        await base.swipeUp()
        await (await editRequirementsPage.menu).click()
        await (await editRequirementsPage.my_Requirements).click()
        await (await editRequirementsPage.new_Requirement).waitForDisplayed({ timeout: 7000 })
        expect(await editRequirementsPage.vehicle_name).toBeDisplayed()
        console.log("Old price range is Any")
        await editRequirementsPage.swipeUp1()
        await (await editRequirementsPage.edit).click()
        await editRequirementsPage.priceRange()
        await editRequirementsPage.serviceYouNeed()
        await (await editRequirementsPage.View_All_R).click()
        await (await editRequirementsPage.new_Requirement).waitForDisplayed({ timeout: 7000 })
        expect(await editRequirementsPage.new_price_range).toBeDisplayed()
        console.log("After edit Service You Need option is:")
        console.log(await (await editRequirementsPage.new_price_range).getText())
    });
    it('TC_01 Verify user should be able to edit location', async () => {
        //await editRequirementsPage.chromeConditions()
        browser.url('/user/login')
        await base.androidBrowserProdLoginAsBuyer()
        await base.swipeUp()
        await (await editRequirementsPage.my_Requirements).click()
        await (await editRequirementsPage.new_Requirement).click()
        await editRequirementsPage.createRForCar1()
        await base.swipeUp()
        await (await editRequirementsPage.menu).click()
        await (await editRequirementsPage.my_Requirements).click()
        await (await editRequirementsPage.new_Requirement).waitForDisplayed({ timeout: 7000 })
        expect(await editRequirementsPage.vehicle_name).toBeDisplayed()
        console.log("Before edit location is:")
        await editRequirementsPage.swipeUp1()
        await (await editRequirementsPage.more).click()
        await editRequirementsPage.swipeUp1()
        console.log(await (await editRequirementsPage.no_services).getText())
        await (await editRequirementsPage.edit).click()
        await editRequirementsPage.editLocation()
        await editRequirementsPage.serviceYouNeed()
        await (await editRequirementsPage.View_All_R).click()
        await (await editRequirementsPage.new_Requirement).waitForDisplayed({ timeout: 7000 })
        await editRequirementsPage.swipeUp1()
        await (await editRequirementsPage.more).click()
        expect(await editRequirementsPage.rc_tranfer).toBeDisplayed()
        console.log("After edit Service You Need option is:")
        console.log(await (await editRequirementsPage.rc_tranfer).getText())
    })
    it('TC_08 Verify user should be able to edit Do You Wish to Exchange Your Vehicle option', async () => {
       // await editRequirementsPage.chromeConditions()
        browser.url('/user/login')
        await base.androidBrowserProdLoginAsBuyer()
        await base.swipeUp()
        await (await editRequirementsPage.my_Requirements).click()
        await (await editRequirementsPage.new_Requirement).click()
        await editRequirementsPage.createRForCar1()
        await base.swipeUp()
        await (await editRequirementsPage.menu).click()
        await (await editRequirementsPage.my_Requirements).click()
        await (await editRequirementsPage.new_Requirement).waitForDisplayed({ timeout: 7000 })
        expect(await editRequirementsPage.vehicle_name).toBeDisplayed()
        await editRequirementsPage.swipeUp1()
        await (await editRequirementsPage.more).click()
        await editRequirementsPage.swipeUp1()
        console.log("Before edit Exchange Your Vehicle option is:")
        expect(await editRequirementsPage.exchangeBeforeEdit).toBeDisplayed()
        console.log(await (await editRequirementsPage.exchangeBeforeEdit).getText())
        await (await editRequirementsPage.edit).click()
        await editRequirementsPage.exchangeVehicle()
        await (await editRequirementsPage.View_All_R).click()
        await (await editRequirementsPage.new_Requirement).waitForDisplayed({ timeout: 7000 })
        await editRequirementsPage.swipeUp1()
        await (await editRequirementsPage.more).click()
        await editRequirementsPage.swipeUp1()
        expect(await editRequirementsPage.exchangeAfterEdit).toBeDisplayed()
        console.log("After edit Exchange Your Vehicle option is:")
        console.log(await (await editRequirementsPage.exchangeAfterEdit).getText())
    });

});
