const base = require("../../../BaseClass/base");
const page = require("../../../Pages/Android/LoginWithPassword")
describe("Login Via Password", ()=>{
   beforeEach(async  ()=>{
      await driver.closeApp()
      await driver.launchApp()
    });  

   it("TC_01_Login With Valid Username and Valid Password", async()=>{
         await (await page.mainPopup).isDisplayed()
         await (await page.mainPopup).click()
         await (await page.myAccount).click()
         await (await page.emailText).setValue("poonam@vtestcorp.com")
         await (await page.loginViaPassBtn).click()
         await (await page.passText).setValue("Punam@123")
         await (await page.showPassword).click()
         await (await page.loginFinal).click()
         await (await page.afterLoginPopup).waitForDisplayed()
         await (await page.afterLoginPopup).click()
         expect(await page.userInfo).toBeDisplayed()
         console.log("User is able to Login using valid credentials")
      });

      it("TC_02_Login with Valid UserName and Invalid Password", async()=>{
         await (await page.mainPopup).isDisplayed()
         await (await page.mainPopup).click()
         await (await page.myAccount).click()
         await (await page.emailText).setValue("poonam@vtestcorp.com")
         await (await page.loginViaPassBtn).click()
         await (await page.passText).setValue("Punam@1234")
         await (await page.showPassword).click()
         await (await page.loginFinal).click()
         await (await page.incorrectCredPopup).waitForDisplayed()
         expect(await page.incorrectCredMsg).toHaveTextContaining('Your username or password is incorrect')
         console.log("Error message displayed as : Your username or password is incorrect")
      });

      it("TC_03_Login with Invalid UserName and Valid Password", async()=>{
         await (await page.mainPopup).isDisplayed()
         await (await page.mainPopup).click()
         await (await page.myAccount).click()
         await (await page.emailText).setValue("poonam123@vtestcorp.com")
         await (await page.loginViaPassBtn).click()
         await (await page.passText).setValue("Punam@123")
         await (await page.showPassword).click()
         await (await page.loginFinal).click()
         await (await page.incorrectCredPopup).waitForDisplayed()
         expect(await page.incorrectCredMsg).toHaveTextContaining('User does not exist')
         console.log("Error message displayed as : User does not exist")
      });

      it("TC_04_Login With Invalid Username and Invalid Password", async()=>{
         await (await page.mainPopup).isDisplayed()
         await (await page.mainPopup).click()
         await (await page.myAccount).click()
         await (await page.emailText).setValue("poonam123@vtestcorp.com")
         await (await page.loginViaPassBtn).click()
         await (await page.passText).setValue("Punam@12345")
         await (await page.showPassword).click()
         await (await page.loginFinal).click()
         await (await page.incorrectCredPopup).waitForDisplayed()
         expect(await page.incorrectCredMsg).toHaveTextContaining('User does not exist')
         console.log("Error message displayed as : User does not exist")
         });
 
         it("TC_05 To Verify Login Functionality With Blank Username", async()=>{
            await (await page.mainPopup).isDisplayed()
            await (await page.mainPopup).click()
            await (await page.myAccount).click()
            await (await page.loginViaPassBtn).click()
            expect(await page.blanckEmailMsg).toHaveTextContaining('Please Enter A Valid Mobile Number')
            console.log("Error message displayed as : Please Enter A Valid Mobile Number")
         });

      it("TC_06 To Verify Login Functionality With Valid Username Blank Password", async()=>{
            await (await page.mainPopup).click()
            await (await page.myAccount).click()
            await (await page.emailText).setValue("poonam@vtestcorp.com")
            await (await page.loginViaPassBtn).click()
            await (await page.loginFinal).click()
            expect(await page.blanckPasswordMsg).toHaveTextContaining('Please enter password')
            console.log("Error message displayed as : Please enter password")
         });
 
     
      // it("TC_01_To_Verify_Login_With_Social_Login", async()=>{
      //    await (await page.mainPopup).click()
      //    await (await page.myAccount).click()
      //    await (await page.fbLoginBtn).click()

      //    expect(await page.blanckPasswordMsg).toHaveTextContaining('Please enter password')
      //    console.log("Error message displayed as : Please enter password")          
      // });
      });