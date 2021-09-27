const base = require("../../BaseClass/base");
const page = require("../../Pages/Android/editRequirementsPage")

describe("Edit Requirements", () => {
   beforeEach(async () => {
      await driver.closeApp()
      await driver.launchApp()
   });
   it("TC_01 Verify user should be able to edit location", async () => {
      await base.androidLoginAsBuyer()
      await base.scrollToTextContain("My Requirements")
      await (await page.myRequirementsOpt).click()
      await (await page.totalReqLbl).waitForDisplayed()
      await base.scrollToExactText("Edit")
      await (await base.getByText("Edit")).click()
      await (await page.searchMyLocationBtn).waitForDisplayed()
      await (await page.searchMyLocationBtn).click()
      await (await page.searchMyLocationTxt).setValue("Delhi")
      await driver.pause(3000)
      await driver.longPressKeyCode(66, undefined, undefined);//hit Enter key
      await driver.pause(3000)
   });
   it("TC_02 Verify user should be able to edit price range", async () => {
      await base.androidLoginAsBuyer()
      await (await page.myRequirementsOpt).click()
      await (await page.txt_edit).click()
      await page.selectLocation()
      await (await page.nextBtn).click()
      await (await page.selectManually).click()
      await (await page.sp_buy_make).click()
      await (await page.trim_make).click()
      await (await page.sp_buy_model).click()
      await (await page.trim_model).click()
      await (await page.sp_buy_year).click()
      await (await page.trim_year).click()
      await (await page.sp_buy_trim).click()
      await (await page.trim).click()
      await (await page.nextBtn1).click()
      await (await page.nextBtn).click()
      await page.scrollBuget()
   });
   it("TC_04 Verify user should be able to edit color", async () => {
      await base.androidLoginAsBuyer()
      await (await page.myRequirementsOpt).click()
      await (await page.txt_edit).click()
      await page.selectLocation()
      await (await page.nextBtn).click()
      await (await page.selectManually).click()
      await (await page.sp_buy_make).click()
      await (await page.trim_make).click()
      await (await page.sp_buy_model).click()
      await (await page.trim_model).click()
      await (await page.sp_buy_year).click()
      await (await page.trim_year).click()
      await (await page.sp_buy_trim).click()
      await (await page.trim).click()
      await (await page.nextBtn1).click()
      await (await page.nextBtn).click()
      await (await page.colorIndex).click()
      await (await page.nextBtn).click()
      await (await page.nextBtn2).click()
      await (await page.Matches).click()
      await (await page.viewRequirements).click()
      await (await page.txt_more).click()
      expect(await page.color).toBeDisplayed()
      console.log("After change color:")
      console.log(await (await page.color).getText())
   });
   it("TC_05 Verify user should be able to edit Service You Need option", async () => {
      await base.androidLoginAsBuyer()
      await (await page.myRequirementsOpt).click()
      await (await page.txt_edit).click()
      await page.selectLocation()
      await (await page.nextBtn).click()
      await (await page.selectManually).click()
      await (await page.sp_buy_make).click()
      await (await page.trim_make).click()
      await (await page.sp_buy_model).click()
      await (await page.trim_model).click()
      await (await page.sp_buy_year).click()
      await (await page.trim_year).click()
      await (await page.sp_buy_trim).click()
      await (await page.trim).click()
      await (await page.nextBtn1).click()
      await (await page.nextBtn).click()
      await (await page.colorIndex).click()
      await (await page.nextBtn).click()
      await (await page.insurance_toggle).click()
      await (await page.loan_toggle).click()
      await (await page.nextBtn2).click()
      await (await page.Matches).click()
      await (await page.viewRequirements).click()
      await (await page.txt_more).click()
      expect(await page.color).toBeDisplayed()
      console.log("After Edit color:")
      console.log(await (await page.color).getText())
      console.log("After Edit Service You Need option:")
      expect(await page.insurance).toBeDisplayed()
      expect(await page.loan).toBeDisplayed()
      console.log(await (await page.insurance).getText())
      console.log(await (await page.loan).getText())
   });
   it("TC_07 Verify user should be able to edit How Quickly Do You Want to Buy option", async () => {
      await base.androidLoginAsBuyer()
      await (await page.myRequirementsOpt).click()
      await (await page.txt_edit).click()
      await page.selectLocation()
      await (await page.nextBtn).click()
      await (await page.selectManually).click()
      await (await page.sp_buy_make).click()
      await (await page.trim_make).click()
      await (await page.sp_buy_model).click()
      await (await page.trim_model).click()
      await (await page.sp_buy_year).click()
      await (await page.trim_year).click()
      await (await page.sp_buy_trim).click()
      await (await page.trim).click()
      await (await page.nextBtn1).click()
      await (await page.nextBtn).click()
      await (await page.colorIndex).click()
      await (await page.nextBtn).click()
      await (await page.insurance_toggle).click()
      await (await page.loan_toggle).click()
      await (await page.radio_not_decided).click()
      await (await page.nextBtn2).click()
      await (await page.Matches).click()
      await (await page.viewRequirements).click()
      await (await page.txt_more).click()
      expect(await page.color).toBeDisplayed()
      console.log("After Edit color:")
      console.log(await (await page.color).getText())
      console.log("After Edit Service You Need option:")
      expect(await page.insurance).toBeDisplayed()
      expect(await page.loan).toBeDisplayed()
      console.log(await (await page.insurance).getText())
      console.log(await (await page.loan).getText())
      console.log("After Edit How Quickly Do You Want to Buy option:")
      console.log(await (await page.not_decided).getText())
   });
   it("TC_06 Verify user should be able to edit Vehicle Details", async () => {
      await base.androidLoginAsBuyer()
      await (await page.myRequirementsOpt).click()
      await (await page.txt_edit).click()
      await page.selectLocation()
      await (await page.nextBtn).click()
      await (await page.selectManually).click()
      await (await page.sp_buy_make).click()
      await (await page.trim_make).click()
      await (await page.sp_buy_model).click()
      await (await page.trim_model).click()
      await (await page.sp_buy_year).click()
      await (await page.trim_year).click()
      await (await page.sp_buy_trim).click()
      await (await page.trim).click()
      await (await page.nextBtn1).click()
      await (await page.nextBtn).click()
      await (await page.colorIndex).click()
      await (await page.nextBtn).click()
      await (await page.nextBtn2).click()
      await (await page.Matches).click()
      await (await page.viewRequirements).click()
      await (await page.txt_more).click()
      expect(await page.makeModelTV).toBeDisplayed()
      console.log("After Edit Vehicle Details:")
      console.log(await (await page.makeModel).getText())
   });
});