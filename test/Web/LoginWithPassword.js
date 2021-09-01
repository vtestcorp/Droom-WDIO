const LoginWithPasswordPage = require('../../Pages/Web/LoginWithPasswordPage')

describe("Login Via Password", () => {

   it("TC_01_Login With Valid Username and Valid Password", async () => {
      try {

         await (await LoginWithPasswordPage.popup).waitForDisplayed({ timeout: 20000, timeoutMsg: "Popup not displayed" });
         await (await LoginWithPasswordPage.popupclose).click();
      }
      catch { }
      await LoginWithPasswordPage.loginViaPassword()
      await LoginWithPasswordPage.loginwithValidCredentials()
      expect(await LoginWithPasswordPage.logo).toBeDisplayed()
      expect(await LoginWithPasswordPage.sellerName).toBeDisplayed()
      console.log(await (await LoginWithPasswordPage.sellerName).getText())
      console.log("After Successful login user should navigate to home page")
      await LoginWithPasswordPage.logout()

   });

   it("TC_02_Login with Valid UserName and Invalid Password", async () => {
      try {
         await (await LoginWithPasswordPage.popup).waitForDisplayed({ timeout: 20000, timeoutMsg: "Popup not displayed" });
         await (await LoginWithPasswordPage.popupclose).click();
      }
      catch { }
      await LoginWithPasswordPage.loginViaPassword()
      await LoginWithPasswordPage.loginWithValidUsernameInvalidPassword()
      expect(await LoginWithPasswordPage.errorMsgForInvalidPasswd).toBeDisplayed()
      expect(await LoginWithPasswordPage.errorMsgForInvalidPasswd).toHaveTextContaining('Your username or password is incorrect')
      console.log("Error message displayed as : Your username or password is incorrect")

   });

   it("TC_03_Login with InValid UserName and Valid Password", async () => {
      try {
         await (await LoginWithPasswordPage.popup).waitForDisplayed({ timeout: 20000, timeoutMsg: "Popup not displayed" });
         await (await LoginWithPasswordPage.popupclose).click();
      }
      catch { }
      await LoginWithPasswordPage.loginViaPassword()
      await LoginWithPasswordPage.loginWithInvalidUserValidPassword()
      expect(await LoginWithPasswordPage.errorMsgForInvalidPasswd).toBeDisplayed()
      expect(await LoginWithPasswordPage.errorMsgForInvalidPasswd).toHaveTextContaining('User does not exist')
      console.log("Error message displayed as : User does not exist")

   });

   it("TC_04_Login With InValid Username and InValid Password", async () => {
      try {
         await (await LoginWithPasswordPage.popup).waitForDisplayed({ timeout: 20000, timeoutMsg: "Popup not displayed" });
         await (await LoginWithPasswordPage.popupclose).click()
      }
      catch { }
      await LoginWithPasswordPage.loginViaPassword()
      await LoginWithPasswordPage.loginwithInValidCredentials()
      expect(await LoginWithPasswordPage.errorMsgForInvalidPasswd).toBeDisplayed()
      expect(await LoginWithPasswordPage.errorMsgForInvalidPasswd).toHaveTextContaining('User does not exist')
      console.log("Error message displayed as : User does not exist")


   });

   it("TC_05_To Verify Login Functionality With Blank Username", async () => {
      try {
         await (await LoginWithPasswordPage.popup).waitForDisplayed({ timeout: 20000, timeoutMsg: "Popup not displayed" });
         await (await LoginWithPasswordPage.popupclose).click()
      }
      catch { }
      await LoginWithPasswordPage.loginViaPassword()
      await LoginWithPasswordPage.verifyBlankUserName()
      expect(await LoginWithPasswordPage.errorMsg).toBeDisplayed()
      expect(await LoginWithPasswordPage.errorMsg).toHaveTextContaining('Please Enter A Valid Mobile Number')
      console.log("Error message displayed as : Please Enter A Valid Mobile Number")


   });
   it("TC_06_To Verify Login Functionality With Valid Username Blank Password", async () => {
      try {
         await (await LoginWithPasswordPage.popup).waitForDisplayed({ timeout: 20000, timeoutMsg: "Popup not displayed" });
         await (await LoginWithPasswordPage.popupclose).click()
      }
      catch { }

      await LoginWithPasswordPage.loginViaPassword()
      await LoginWithPasswordPage.verifyBlankPassword()
      expect(await LoginWithPasswordPage.errorMsgForInvalidPasswd).toBeDisplayed()
      expect(await LoginWithPasswordPage.errorMsgForInvalidPasswd).toHaveTextContaining('Please enter password')
      console.log("Error message displayed as : Please enter password")

   });


   it("TC_01_To Verify Login With Social Login", async () => {
      try {
         await (await LoginWithPasswordPage.popup).waitForDisplayed({ timeout: 20000, timeoutMsg: "Popup not displayed" });
         await (await LoginWithPasswordPage.popupclose).click();
      }
      catch { }
      await LoginWithPasswordPage.loginViaPassword()
      await (await LoginWithPasswordPage.facebookLoginBtn).click()
      await browser.switchWindow('facebook.com')
      await (await LoginWithPasswordPage.email).setValue("matade10@rediffmail.com")
      await (await LoginWithPasswordPage.password).setValue("punuganu@123")
      console.log("User entered facebook credentials for droom login")
      await (await LoginWithPasswordPage.facebooklogin).click()
      await browser.switchWindow('qa2.droom.in')
      browser.refresh()
      expect(await LoginWithPasswordPage.welcomemsg).toHaveTextContaining('Welcome,')
      console.log("User sucessfully login to droom through facebook credentials")


   });

});