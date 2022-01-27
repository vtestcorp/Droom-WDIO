const loginData = require('../../Pages/Web/loginData')
const base = require("../../BaseClass/base");
const page = require("../../Pages/Android/LoginWithPassword")

describe("Login Via Password", ()=>{
   beforeEach(async  ()=>{
      await driver.closeApp()
      await driver.launchApp()
    });  
      it("TC01_Login With Valid Username and Valid Password", async()=>{
         await (await page.menu).click()
         console.log("Clicked on Menu")
         await (await page.logi).click()
         console.log("Clicked on Login button")
         await (await page.loginwithemailBtn).click()
         console.log("Clicked on Login with Email button")
         await (await page.emailText).setValue(loginData.validUserName)
         console.log("User Entered Valid UserName")
         await (await page.passText).setValue(loginData.validPassword)
         console.log("User Entered Valid Password")
         await(await page.continueBtn).click()
         expect(await page.userInfo).toBeDisplayed()
         console.log("User is able to Login using valid credentials")
      });
      it("TC02_Login with Valid UserName and Invalid Password", async()=>{
         await (await page.menu).click()
         console.log("Clicked on Menu")
         await (await page.login).click()
         console.log("Clicked on Login button")
         await (await page.loginwithemailBtn).click()
         console.log("Clicked on Login with Email button")
         await (await page.emailText).setValue(loginData.validUserName)
         console.log("User Entered Valid UserName")
         await (await page.passText).setValue(loginData.invalidPassword)
         console.log("User Entered Invalid Password")
         await(await page.continueBtn).click()
         await (await page.incorrectCredPopup).waitForDisplayed()
         expect(await page.incorrectCredMsg).toHaveTextContaining('Your username or password is incorrect')
         console.log("Error message displayed as : Your username or password is incorrect")
      });

      it("TC03_Login with Invalid UserName and Valid Password", async()=>{
         await (await page.menu).click()
         console.log("Clicked on Menu")
         await (await page.login).click()
         console.log("Clicked on Login button")
         await (await page.loginwithemailBtn).click()
         console.log("Clicked on Login with Email button")
         await (await page.emailText).setValue(loginData.invalidUsername)
         console.log("User Entered Invalid UserName")
         await (await page.passText).setValue(loginData.validPassword)
         console.log("User Entered Valid Password")
         await(await page.continueBtn).click()
         await (await page.incorrectCredPopup).waitForDisplayed()
         expect(await page.incorrectCredMsg).toHaveTextContaining('User does not exist')
         console.log("Error message displayed as : User does not exist")
      });

      it("TC04 Login With Invalid Username and Invalid Password", async()=>{
         await (await page.menu).click()
         console.log("Clicked on Menu")
         await (await page.login).click()
         console.log("Clicked on Login button")
         await (await page.loginwithemailBtn).click()
         console.log("Clicked on Login with Email button")
         await (await page.emailText).setValue(loginData.invalidUsername)
         console.log("User Entered Invalid UserName")
         await (await page.passText).setValue(loginData.invalidPassword)
         console.log("User Entered Invalid Password")
         await(await page.continueBtn).click()
         await (await page.incorrectCredPopup).waitForDisplayed()
         expect(await page.incorrectCredMsg).toHaveTextContaining('User does not exist')
         console.log("Error message displayed as : User does not exist")
         });
 
         it("TC05 To Verify Login Functionality With Blank Username", async()=>{
         await (await page.menu).click()
         console.log("Clicked on Menu")
         await (await page.login).click()
         console.log("Clicked on Login button")
         await (await page.loginwithemailBtn).click()
         console.log("Clicked on Login with Email button")
         console.log("Email textbox leave as blank")
         await (await page.passText).setValue(loginData.validPassword)
         console.log("User Entered Valid Password")
         await(await page.continueBtn).click()
          expect(await page.blankEmailMsg).toHaveTextContaining('Please Enter Email')
         console.log("Error message displayed as : Please Enter Email")
         });

         it("TC06 To Verify Login Functionality With Valid Username Blank Password", async()=>{
         await (await page.menu).click()
         console.log("Clicked on Menu")
         await (await page.login).click()
         console.log("Clicked on Login button")
         await (await page.loginwithemailBtn).click()
         console.log("Clicked on Login with Email button")
         await (await page.emailText).setValue(loginData.validUserName)
         console.log("User Entered Valid UserName")
         await(await page.continueBtn).click()
         expect(await page.blanckPasswordMsg).toHaveTextContaining('Please enter password')
         console.log("Error message displayed as : Please enter password")
         });
   });