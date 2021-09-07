const LoginWithPasswordPage = require('../../Pages/Web/LoginWithPasswordPage');

describe("Login Via Password", () => {

   it("TC_01_Login With Valid Username and Valid Password", async () => {
      try {

         await LoginWithPasswordPage.popup.waitForDisplayed({ timeout: 20000, timeoutMsg: "Popup not displayed" });
         await LoginWithPasswordPage.popupclose.click();
      }
      catch { }
      await LoginWithPasswordPage.loginViaPassword()
      await LoginWithPasswordPage.loginwithValidCredentials()
      await expect(browser).toHaveTitle('My StoreManager | Droom');
      console.log('After login user navigate to StoreManager Page')
      console.log("User is able to Login using valid credentials")
      await LoginWithPasswordPage.logout()

   });

   it("TC_02_Login with Valid UserName and Invalid Password", async () => {
      try {
         await LoginWithPasswordPage.popup.waitForDisplayed({ timeout: 20000, timeoutMsg: "Popup not displayed" });
         await LoginWithPasswordPage.popupclose.click();
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
         await LoginWithPasswordPage.popup.waitForDisplayed({ timeout: 20000, timeoutMsg: "Popup not displayed" });
         await LoginWithPasswordPage.popupclose.click();
      }
      catch { }
      await LoginWithPasswordPage.loginViaPassword()
      await LoginWithPasswordPage.loginWithInvalidUserValidPassword()
      await expect(LoginWithPasswordPage.errorMsgForInvalidPasswd).toBeDisplayed()
      expect(await LoginWithPasswordPage.errorMsgForInvalidPasswd).toHaveTextContaining('User does not exist')
      console.log("Error message displayed as : User does not exist")

   });

   it("TC_04_Login With InValid Username and InValid Password", async () => {
      try {
         await (await LoginWithPasswordPage.popup.waitForDisplayed({ timeout: 20000, timeoutMsg: "Popup not displayed" }));
         await (await LoginWithPasswordPage.popupclose.click())
      }
      catch { }

      await LoginWithPasswordPage.loginViaPassword()
      await LoginWithPasswordPage.loginwithInValidCredentials()
      await expect(LoginWithPasswordPage.errorMsgForInvalidPasswd).toBeDisplayed()
      expect(await LoginWithPasswordPage.errorMsgForInvalidPasswd).toHaveTextContaining('User does not exist')
      console.log("Error message displayed as : User does not exist")


   });

   it("TC_05_To Verify Login Functionality With Blank Username", async () => {
      try {
         await (await LoginWithPasswordPage.popup.waitForDisplayed({ timeout: 20000, timeoutMsg: "Popup not displayed" }));
         await (await LoginWithPasswordPage.popupclose.click())
      }
      catch { }
      browser.url('/')
      await LoginWithPasswordPage.loginViaPassword()
      await LoginWithPasswordPage.verifyBlankUserName()
      await expect(LoginWithPasswordPage.errorMsg).toBeDisplayed()
      expect(await LoginWithPasswordPage.errorMsg).toHaveTextContaining('Please Enter A Valid Mobile Number')
      console.log("Error message displayed as : Please Enter A Valid Mobile Number")


   });
   it("TC_06_To Verify Login Functionality With Valid Username Blank Password", async () => {
      try {
         await (await LoginWithPasswordPage.popup.waitForDisplayed({ timeout: 20000, timeoutMsg: "Popup not displayed" }));
         await (await LoginWithPasswordPage.popupclose.click())
      }
      catch { }

      await LoginWithPasswordPage.loginViaPassword()
      await LoginWithPasswordPage.verifyBlankPassword()
      await expect(LoginWithPasswordPage.errorMsgForInvalidPasswd).toBeDisplayed()
      expect(await LoginWithPasswordPage.errorMsgForInvalidPasswd).toHaveTextContaining('Please enter password')
      console.log("Error message displayed as : Please enter password")

   });


   it("TC_01_To Verify Login With Social Login", async () => {
      try {
         await LoginWithPasswordPage.popup.waitForDisplayed({ timeout: 20000, timeoutMsg: "Popup not displayed" });
         await LoginWithPasswordPage.popupclose.click();
      }
      catch { }
      await LoginWithPasswordPage.loginViaPassword()
      await (await LoginWithPasswordPage.facebookLoginBtn).click()
      await browser.switchWindow('facebook.com')
      await (await LoginWithPasswordPage.email).setValue("matade10@rediffmail.com")
      await (await LoginWithPasswordPage.password).setValue("punuganu123")
      console.log("User entered facebook credentials for droom login")
      await (await LoginWithPasswordPage.facebooklogin).click()
      await browser.switchWindow('droom.in')
      browser.refresh()
      expect(await LoginWithPasswordPage.welcomemsg).toHaveTextContaining('Welcome,')
      console.log("User sucessfully login to droom through facebook credentials")


   });

});