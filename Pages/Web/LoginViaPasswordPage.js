class Login {
    get popup() { return $('.jss1') }
    get popupclose() { return $('(//button[@class="close em-show-later"])[2]') }
    get profileicon() { return $('#user_details') }
    get loginBtn() { return $('//a[text()="Log In"]') }
    get emailTB() { return $('#userLogin') }
    get loginViaPasswordBtn() { return $('.d-letter-spacing-1[href="#viaPassword"]') }
    get passwordTB() { return $('#password') }
    get login() { return $('//input[@type="submit"]') }
    get sellerName() {return $('(//div[@class="seller-name"])[2]')}
    get logo() { return $('//i[@class="ico web-g-icon-logo-desc d-display-inline-block d-valign-top d-font-size-32"]') }
    get logoutBtn() { return $('//a[text()="Log Out"]') }
    get errorMsgForInvalidPasswd() { return $('//small[@class="text-error text-left d-display-block"]') }
    get errorMsg() { return $('//span[@class="text-danger email-error text-left d-display-block"]') }
    get facebookLoginBtn() { return $('//a[text()="Login with Facebook"]') }
    get email() { return $('//input[@id="email"]') }
    get password() { return $('//input[@id="pass"]') }
    get facebooklogin() { return $('//input[@name="login"]') }
    get submitBtn() { return $('(//button[@type="submit"])[1]') }
    get welcomemsg() { return $('(//div[@class="seller-name"])[2]') }
    async loginViaPassword() {
        console.log('User Launch URL')
        await (await this.profileicon).moveTo()
        console.log('User move to profile')
        await (await this.loginBtn).click()
        console.log('User click on login button')
    }
    async loginwithValidCredentials() {
        await (await this.emailTB).setValue("Vtest1@gmail.com")
        await (await this.loginViaPasswordBtn).waitForDisplayed({ timeout: 2000 })
        await (await this.loginViaPasswordBtn).click()
        await (await this.passwordTB).waitForDisplayed({ timeout: 1000 })
        await (await this.passwordTB).setValue("Vtest@123")
        await (await this.login).waitForDisplayed({ timeout: 1000 })
        await (await this.login).click()
        console.log('User Successfully login to application with valid credentials')
    }
    async logout() {
        await (await this.profileicon).waitForDisplayed({ timeout: 1000 })
        await (await this.profileicon).moveTo()
        await (await this.logoutBtn).waitForDisplayed({ timeout: 4000 })
        await (await this.logoutBtn).click()
        console.log('User logout application')
    }
    async loginWithValidUsernameInvalidPassword() {
        await (await this.emailTB).setValue("Vtest1@gmail.com")
        console.log('User entered Valid Username')
        await (await this.loginViaPasswordBtn).click()
        await (await this.passwordTB).waitForDisplayed({ timeout: 2000 })
        await (await this.passwordTB).setValue("Vtest@12")
        console.log('User entered Invalid Password')
        await (await this.login).waitForDisplayed({ timeout: 2000 })
        await (await this.login).click()
        await (await this.loginViaPasswordBtn).waitForDisplayed({ timeout: 2000 })
        console.log('User is unable to login valid username & invalid password')
        await (await this.loginViaPasswordBtn).click()
    }
    async loginWithInvalidUserValidPassword() {
        await (await this.emailTB).setValue("Vtest13@gmail.com")
        console.log('User entered Invalid Username')
        await (await this.loginViaPasswordBtn).click()
        await (await this.passwordTB).setValue("Vtest@123")
        console.log('User entered Valid Password')
        await (await this.login).click()
        await (await this.loginViaPasswordBtn).waitForDisplayed({ timeout: 2000 })
        console.log('User is unable to login Invalid Username and Valid Password')
        await (await this.loginViaPasswordBtn).click()
    }
    async loginwithInValidCredentials() {
        await (await this.emailTB).setValue("Vtest13@gmail.com")
        await (await this.loginViaPasswordBtn).waitForDisplayed({ timeout: 2000 })
        await (await this.loginViaPasswordBtn).click()
        await (await this.passwordTB).setValue("Vtest@1237")
        await (await this.login).waitForDisplayed({ timeout: 2000 })
        await (await this.login).click()
        console.log('User unable to Login with Invalid Credentials')
        await (await this.loginViaPasswordBtn).click()
    }
    async verifyBlankUserName() {
        await (await this.loginViaPasswordBtn).waitForDisplayed({ timeout: 2000 })
        await (await this.loginViaPasswordBtn).click()
        console.log('User click on login via password button')
    }
    async verifyBlankPassword() {
        await (await this.emailTB).setValue("Vtest1@gmail.com")
        console.log('User entered Valid Username')
        await (await this.loginViaPasswordBtn).waitForDisplayed({ timeout: 2000 })
        await (await this.loginViaPasswordBtn).click()
        await (await this.login).waitForDisplayed({ timeout: 2000 })
        await (await this.login).click()
        console.log('User leave password textbox as a blankand click on login')
    }
}
module.exports = new Login();