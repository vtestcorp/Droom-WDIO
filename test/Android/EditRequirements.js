const base = require("../../BaseClass/base");
const page = require("../../Pages/Android/EditRequirements")

describe("Edit Requirements", ()=>{
   beforeEach(async  ()=>{
      await driver.closeApp()
      await driver.launchApp()
    });  

   it("TC01 Verify user should be able to edit location", async()=>{
      await base.androidLoginAsBuyer()
      await base.scrollToTextContain("My Requirements")
      await (await page.myRequirementsOpt).click()
      await (await page.totalReqLbl).waitForDisplayed()
      await base.scrollToExactText("Edit")
      await(await base.getByText("Edit")).click()
      await(await page.searchMyLocationBtn).waitForDisplayed()
      await(await page.searchMyLocationBtn).click()
      await(await page.searchMyLocationTxt).setValue("Delhi")
      await driver.pause(3000)
      await driver.longPressKeyCode(66, undefined, undefined);//hit Enter key
      await driver.pause(3000)
      
   });
});