const LoginWithPasswordPage = require('../../Pages/androidbrowser/LoginViaPasswordPage')
describe("Login Via Password", () => {

    beforeEach(async () => {
    await driver.closeApp()
    await driver.launchApp()
    });
   it("TC_01 Login With Valid Username and Valid Password", async () => {
     
      try {
         await (await LoginWithPasswordPage.allowBtn).waitForDisplayed({ timeout: 20000, timeoutMsg: "Popup not displayed" })
         await (await LoginWithPasswordPage.allowBtn).click()
      }
      catch { }
   
      await browser.url('/user/login')
      console.log('User Launch URL')
      expect(await LoginWithPasswordPage.loginToAccount).toBeDisplayed()
      console.log("Login To Your account Page displayed")
      expect(await LoginWithPasswordPage.loginwithemailBtn).toBeDisplayed()
       console.log("Login With Password Displayed")
      await(await LoginWithPasswordPage.loginwithemailBtn).click()
      console.log("Clicked on Login with Email")
      await browser.pause(3000)
       await(await LoginWithPasswordPage.emailField).waitForDisplayed()
      expect(await LoginWithPasswordPage.emailField).toBeDisplayed()
      console.log("Enter Email Text field displayed")
      expect(await LoginWithPasswordPage.passwordField).toBeDisplayed()
      console.log("Enter Password Text field displayed")
      await (await LoginWithPasswordPage.emailField).setValue("vtest1@gmail.com")
      console.log("Set value for EmailID")
      await(await LoginWithPasswordPage.passwordField).setValue("Vtest@123")
      console.log("Set value for Password")
      await(await LoginWithPasswordPage.continueBtn).click()
      console.log("Clicked on Continue Button after setting ID and Password")
      expect(await LoginWithPasswordPage.myAccount).toBeDisplayed()
      console.log("User Logged in Successfully")
   });
   
   it("TC_02 Login with Valid UserName and Invalid Password", async () => {
       await browser.url('/user/login')
      console.log('User Launch URL')
      expect(await LoginWithPasswordPage.loginToAccount).toBeDisplayed()
      console.log("Login To Your account Page displayed")
      expect(await LoginWithPasswordPage.loginwithemailBtn).toBeDisplayed()
       console.log("Login With Password Displayed")
      await(await LoginWithPasswordPage.loginwithemailBtn).click()
      console.log("CLicked on Login with Email")
      await browser.pause(3000)
      await(await LoginWithPasswordPage.emailField).waitForDisplayed()
      expect(await LoginWithPasswordPage.emailField).toBeDisplayed()
      console.log("Enter Email Text field displayed")
      expect(await LoginWithPasswordPage.passwordField).toBeDisplayed()
      console.log("Enter Password Text field displayed")
      await (await LoginWithPasswordPage.emailField).setValue("vtest1@gmail.com")
      console.log("Set value for EmailID")
      await(await LoginWithPasswordPage.passwordField).setValue("Vtest@12345")
      console.log("Set Incorrect value for Password")
      await(await LoginWithPasswordPage.continueBtn).click()
      console.log("Clicked on Continue Button after setting ID and Incorrect Password")
      expect(await LoginWithPasswordPage.errorMsgForInvalidPasswd).toBeDisplayed()
      expect(await LoginWithPasswordPage.errorMsgForInvalidPasswd).toHaveTextContaining('Your username or password is incorrect')
      console.log("Error message displayed as : Your username or password is incorrect")
   });
   it("TC_03 Login with InValid UserName and Valid Password", async () => {
     await browser.url('/user/login')
      console.log('User Launch URL')
      expect(await LoginWithPasswordPage.loginToAccount).toBeDisplayed()
      console.log("Login To Your account Page displayed")
      expect(await LoginWithPasswordPage.loginwithemailBtn).toBeDisplayed()
       console.log("Login With Password Displayed")
      await(await LoginWithPasswordPage.loginwithemailBtn).click()
      console.log("CLicked on Login with Email")
      await browser.pause(3000)
      await(await LoginWithPasswordPage.emailField).waitForDisplayed()
      expect(await LoginWithPasswordPage.emailField).toBeDisplayed()
      console.log("Enter Email Text field displayed")
      expect(await LoginWithPasswordPage.passwordField).toBeDisplayed()
      console.log("Enter Password Text field displayed")
      await (await LoginWithPasswordPage.emailField).setValue("vtest@gmail.com")
      console.log("Set Incorrect value for EmailID")
      await(await LoginWithPasswordPage.passwordField).setValue("Vtest@123")
      console.log("Set value for Password")
      await(await LoginWithPasswordPage.continueBtn).click()
      console.log("Clicked on Continue Button after setting ID and Password")
      expect(await LoginWithPasswordPage.errorMsgForInvalidId).toBeDisplayed()
      expect(await LoginWithPasswordPage.errorMsgForInvalidId).toHaveTextContaining('User does not exist')
      console.log("Error message displayed as : User does not exist")
   });
   it("TC_04 Login With InValid Username and InValid Password", async () => {
     await browser.url('/user/login')
      console.log('User Launch URL')
      expect(await LoginWithPasswordPage.loginToAccount).toBeDisplayed()
      console.log("Login To Your account Page displayed")
      expect(await LoginWithPasswordPage.loginwithemailBtn).toBeDisplayed()
      console.log("Login With Email Displayed")
      await(await LoginWithPasswordPage.loginwithemailBtn).click()
      console.log("Clicked on Login with Email")
      await browser.pause(3000)
      await(await LoginWithPasswordPage.emailField).waitForDisplayed()
      expect(await LoginWithPasswordPage.emailField).toBeDisplayed()
      console.log("Enter Email Text field displayed")
      expect(await LoginWithPasswordPage.passwordField).toBeDisplayed()
      console.log("Enter Password Text field displayed")
      await (await LoginWithPasswordPage.emailField).setValue("vtest@gmail.com")
      console.log("Set Incorrect value for EmailID")
      await(await LoginWithPasswordPage.passwordField).setValue("Vtest@12345")
      console.log("Set Incorrect value for Password")
      await(await LoginWithPasswordPage.continueBtn).click()
      console.log("Clicked on Continue Button after setting ID and Password")
      expect(await LoginWithPasswordPage.errorMsgForInvalidId).toBeDisplayed()
      expect(await LoginWithPasswordPage.errorMsgForInvalidId).toHaveTextContaining('User does not exist')
      console.log("Error message displayed as : User does not exist")
   });
   it("TC_05 To Verify Login Functionality With Blank Username", async () => {
      await browser.url('/user/login')
      console.log('User Launch URL')
      expect(await LoginWithPasswordPage.loginToAccount).toBeDisplayed()
      console.log("Login To Your account Page displayed")
      expect(await LoginWithPasswordPage.loginwithemailBtn).toBeDisplayed()
      console.log("Login with Email Displayed")
      await(await LoginWithPasswordPage.loginwithemailBtn).click()
      console.log("CLicked on Login with Email")
      await browser.pause(3000)
      await(await LoginWithPasswordPage.emailField).waitForDisplayed()
      expect(await LoginWithPasswordPage.emailField).toBeDisplayed()
      console.log("Enter Email Text field displayed")
      expect(await LoginWithPasswordPage.passwordField).toBeDisplayed()
      console.log("Enter Password Text field displayed")
      await (await LoginWithPasswordPage.emailField).setValue("vtest@gmail.com")
      console.log("Set Incorrect value for EmailID")
      await(await LoginWithPasswordPage.passwordField).setValue("Vtest@12345")
      console.log("Set Incorrect value for Password")
      await(await LoginWithPasswordPage.continueBtn).click()
      console.log("Clicked on Continue Button after setting ID and Password")
      expect(await LoginWithPasswordPage.errorMsgForBlankID).toBeDisplayed()
      expect(await LoginWithPasswordPage.errorMsgForBlankID).toHaveTextContaining('Please enter a valid Email address.')
      console.log("Error message displayed as :Please enter a valid Email address.")
    
   });
   it("TC_06 To Verify Login Functionality With Valid Username Blank Password", async () => {
      await browser.url('/user/login')
      console.log('User Launch URL')
      expect(await LoginWithPasswordPage.loginToAccount).toBeDisplayed()
      console.log("Login To Your account Page displayed")
      expect(await LoginWithPasswordPage.loginwithemailBtn).toBeDisplayed()
      console.log("Login with Email Displayed")
      await(await LoginWithPasswordPage.loginwithemailBtn).click()
      console.log("CLicked on Login with Email")
      await browser.pause(3000)
      await(await LoginWithPasswordPage.emailField).waitForDisplayed()
      expect(await LoginWithPasswordPage.emailField).toBeDisplayed()
      console.log("Enter Email Text field displayed")
      expect(await LoginWithPasswordPage.passwordField).toBeDisplayed()
      console.log("Enter Password Text field displayed")
      await (await LoginWithPasswordPage.emailField).setValue("vtest@gmail.com")
      console.log("Set Incorrect value for EmailID")
      await(await LoginWithPasswordPage.passwordField).setValue("Vtest@12345")
      console.log("Set Incorrect value for Password")
      await(await LoginWithPasswordPage.continueBtn).click()
      console.log("Clicked on Continue Button after setting ID and Password")
      expect(await LoginWithPasswordPage.errorMsgForBlankPass).toBeDisplayed()
      expect(await LoginWithPasswordPage.errorMsgForBlankPass).toHaveTextContaining('Please enter a password.')
      console.log("Error message displayed as :Please enter a password.")
   });
   
   it("TC_01 To Verify Login With Social Login", async () => {
     await browser.url('/user/login')
      console.log('User Launch URL')
      expect(await LoginWithPasswordPage.loginToAccount).toBeDisplayed()
      console.log("Login To Your account Page displayed")
      await(await LoginWithPasswordPage.loginWithFacebook).waitForDisplayed()
      expect(await LoginWithPasswordPage.loginWithFacebook).toBeDisplayed()
      console.log("Login With FaceBook option is displayed")
      await(await LoginWithPasswordPage.loginWithFacebook).click()
      console.log("Clicked on Login With Facebook")
      expect(await LoginWithPasswordPage.faceBookPage).toBeDisplayed()
      console.log("User Gets Redirected to the FaceBook Page")
      expect(await LoginWithPasswordPage.faceBookPage).toHaveTextContaining('Log in to your Facebook account to connect to Droom')
      console.log("User able to login with Facebook option ")
   });
   
});