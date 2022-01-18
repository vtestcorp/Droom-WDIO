const ForgotPasswordPage = require("../../Pages/Web/ForgotPasswordPage")
describe("Forgot Password", () => {
    it("TC_01 Verify The Functionality Of Log In With Old Password In Forgot Password Page", async () => {
        try {
            await (await ForgotPasswordPage.popup).waitForDisplayed({ timeout: 20000, timeoutMsg: "Popup not displayed" })
            await (await ForgotPasswordPage.popupclose).click()
        }
        catch { }
        await ForgotPasswordPage.loginViaPassword()
        await (await ForgotPasswordPage.emailTB).setValue("Vtest1@gmail.com")
        console.log("User Entered Username")
        console.log(await (await ForgotPasswordPage.forgotPasswordLink).isClickable())
        await (await ForgotPasswordPage.forgotPasswordLink).click()
        console.log("User Click On Forgot Your Password? Link")
        await browser.switchWindow('https://qa2.droom.in/user/forgotpassword')
        console.log(await browser.getUrl())
        console.log("User Navigate To Forgot Password Page")
        console.log(await (await ForgotPasswordPage.loginwitholdPassword).isClickable())
        await (await ForgotPasswordPage.loginwitholdPassword).click()
        console.log("User Click On Login With Old Password")
        console.log(await browser.getUrl())
        console.log("User Navigate To Again Login Page")
        await (await ForgotPasswordPage.loginwithemail).click()
        await (await ForgotPasswordPage.emailTB).setValue("Vtest1@gmail.com")
        await (await ForgotPasswordPage.passwordTB).setValue("Vtest@123")
        await (await ForgotPasswordPage.login).click()
        expect(await ForgotPasswordPage.sellerName).toBeDisplayed()
        console.log(await (await ForgotPasswordPage.sellerName).getText())
        console.log("After entered old password user navigate to Home Page")
    });
});