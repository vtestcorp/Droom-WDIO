const base = require("../../BaseClass/base");
const loginData = require('../../Pages/iOS/loginData')
const LoginWithPasswordPage = require("../../Pages/iOS/LoginWithPasswordPage")
const page = require("../../Pages/iOS/LoginWithPasswordPage")

describe("Login Via Password", ()=>{
   beforeEach(async  ()=>{
      await driver.closeApp()
      await driver.launchApp()
    });  
    it("TC02_Login with Valid UserName and Invalid Password", async()=>{
      //await page.skipStartup()
      await (await LoginWithPasswordPage.menu).click()
      console.log("Cicked on Menu")
      await (await LoginWithPasswordPage.login).waitForDisplayed()
      await (await LoginWithPasswordPage.login).click()
      console.log("CLicked on Login Button")
      await (await LoginWithPasswordPage.emailField).click()
      console.log("Clicked on Email Field")
      await (await LoginWithPasswordPage.emailField).setValue(loginData.validUserName)
      console.log("Set Email ID for login")
      await (await LoginWithPasswordPage.viaPassword).click()
      await (await LoginWithPasswordPage.passwordField).setValue(loginData.invalidPassword)
      console.log("Entered Password for account")
      await (await LoginWithPasswordPage.loginBtn).click()
      console.log("Clicked on Login button")
      expect(await LoginWithPasswordPage.incorrectCredMsg).toHaveTextContaining('User does not exist')
         console.log("Error message displayed as : User does not exist")
      });
   
      it("TC03_Login with Invalid UserName and Valid Password", async()=>{
         //await page.skipStartup()
          await (await LoginWithPasswordPage.menu).click()
          console.log("Clicked on Menu")
         await (await LoginWithPasswordPage.login).waitForDisplayed()
         await (await LoginWithPasswordPage.login).click()
         console.log("Cicked on Login Button")
         await (await LoginWithPasswordPage.emailField).click()
         console.log("Clicked on Email Field")
         await (await LoginWithPasswordPage.emailField).setValue(loginData.invalidUsername)
         console.log("Set Email ID for login")
         await (await LoginWithPasswordPage.viaPassword).click()
         await (await LoginWithPasswordPage.passwordField).setValue(loginData.validPassword)
         console.log("Entered Password for account")
         await (await LoginWithPasswordPage.loginBtn).click()
         console.log("Clicked on Login button")
         expect(await page.incorrectCredMsg).toHaveTextContaining('User does not exist')
         console.log("Error message displayed as : User does not exist")
      });

     it("TC04 Login With Invalid Username and Invalid Password", async()=>{
         //await page.skipStartup()
         await (await LoginWithPasswordPage.menu).click()
         console.log("Clicked on Menu")
        await (await LoginWithPasswordPage.login).waitForDisplayed()
        await (await LoginWithPasswordPage.login).click()
        console.log("CLicked on Login Button")
        await (await LoginWithPasswordPage.emailField).click()
        console.log("Clicked on Email Field")
        await (await LoginWithPasswordPage.emailField).setValue(loginData.invalidUsername)
        console.log("Set Email ID for login")
        await (await LoginWithPasswordPage.viaPassword).click()
        await (await LoginWithPasswordPage.passwordField).setValue(loginData.invalidPassword)
        console.log("Entered Password for account")
        await (await LoginWithPasswordPage.loginBtn).click()
        console.log("Clicked on Login button")
         console.log("Error message displayed as : User does not exist")
         expect(await page.incorrectCredMsg).toHaveTextContaining('User does not exist')
         console.log("Error message displayed as : User does not exist")
         });
         it("TC05 To Verify Login Functionality With Blank Username", async()=>{
         //await page.skipStartup()
         await (await LoginWithPasswordPage.menu).click()
         console.log("Clicked on Menu")
        await (await LoginWithPasswordPage.login).click()
        console.log("CLicked on Login Button")
        await (await LoginWithPasswordPage.emailField).click()
        console.log("Clicked on Email Field")
        await (await LoginWithPasswordPage.emailField).setValue(" ")
        console.log("Set Email ID for login")
        await (await LoginWithPasswordPage.viaPassword).click()
        await (await LoginWithPasswordPage.passwordField).setValue(loginData.validPassword)
        console.log("Entered Password for account")
        await (await LoginWithPasswordPage.loginBtn).click()
        console.log("Clicked on Login button")
         expect(await LoginWithPasswordPage.blanckEmailMsg).toHaveTextContaining('Please Enter A Valid Mobile Number')
         console.log("Error message displayed as : Please Enter A Valid Mobile Number")
         expect(await page.blanckEmailMsg).toHaveTextContaining('Please Enter A Valid Mobile Number')
         console.log("Error message displayed as : Please Enter A Valid Mobile Number")
         });

         it("TC06 To Verify Login Functionality With Valid Username Blank Password", async()=>{
         //await page.skipStartup()
         await (await LoginWithPasswordPage.menu).click()
         console.log("CLicked on Menu")
        await (await LoginWithPasswordPage.login).waitForDisplayed()
        await (await LoginWithPasswordPage.login).click()
        console.log("CLicked on Login Button")
        await (await LoginWithPasswordPage.emailField).click()
        console.log("Clicked on Email Field")
        await (await LoginWithPasswordPage.emailField).setValue(loginData.validUserName)
        console.log("Set Email ID for login")
        await (await LoginWithPasswordPage.viaPassword).click()
        await (await LoginWithPasswordPage.passwordField).setValue(" ")
        console.log("Entered Password for account")
        await (await LoginWithPasswordPage.loginBtn).click()
        console.log("Clicked on Login button")
        expect(await page.blanckPasswordMsg).toHaveTextContaining('Please enter password')
         console.log("Error message displayed as : Please enter password")
         });
      it("TC01_Login With Valid Username and Valid Password", async()=>{
      //await page.skipStartup()
      await (await LoginWithPasswordPage.menu).click()
      console.log("Cicked on Menu")
      await (await LoginWithPasswordPage.login).click()
      console.log("CLicked on Login Button")
      await (await LoginWithPasswordPage.emailField).click()
      console.log("Clicked on Email Field")
      await (await LoginWithPasswordPage.emailField).setValue(loginData.validUserName)
      console.log("Set Email ID for login")
      await (await LoginWithPasswordPage.viaPassword).click()
      await (await LoginWithPasswordPage.passwordField).setValue(loginData.validPassword)
      console.log("Entered Password for account")
      await (await LoginWithPasswordPage.loginBtn).click()
      console.log("Clicked on Login button")
      //await (await LoginWithPasswordPage.myReq).waitForDisplayed()
      expect(await LoginWithPasswordPage.myReq).toBeDisplayed()
      console.log("User is able to Login using valid credentials")
      }); 
   });