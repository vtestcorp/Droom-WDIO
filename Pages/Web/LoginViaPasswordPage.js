class Login {
    get popup() { return $('(//div[@class="modal-body"])[23]') }
    get detectLocation() { return $('#detectMyLocation')}
    get profileicon() { return $('.user-login-global') }
    get loginBtn() { return $('//a[@class="btn btn-primary btn-block"]') }
    get loginWithEmail() { return $('#loginWithEmail')}
    get emailTB() { return $('#email') }
    get passwordTB() { return $('#password') }
    get login() {return $('#continueEmail')}
    get sellerName() {return $('(//div[@class="seller-name"])[2]')}
    get logo() { return $('//img[@class="d-display-block d-width-100"]') }
    get logoutBtn() { return $('//a[text()="Log Out"]') }
    get errorMsgForInvalidPasswd() { return $('(//div[@class="text-danger email-error text-left d-font-size-12 d-position-absolute"])[2]') }
    get errorMsg() { return $('//span[@class="text-danger email-error text-left d-display-block"]') }
    get facebookLoginBtn() { return $('(//a[@id="loginWithEmail"])[1]') }
    get email() { return $('//input[@id="email"]') }
    get password() { return $('//input[@id="pass"]') }
    get facebooklogin() { return $('//input[@name="login"]') }
    get submitBtn() { return $('(//button[@type="submit"])[1]') }
    get welcomemsg() { return $('(//div[@class="seller-name"])[2]') }
    async loginViaPassword() {
        console.log('User Launch URL')
        await (await this.profileicon).moveTo()
        console.log('User move to profile')
        await (await this.loginBtn).isClickable({ timeout: 1000 })
        await (await this.loginBtn).click()
        console.log('User click on login button')
    } 
    async loginwithValidCredentials() {
        await (await this.loginWithEmail).click()
        await (await this.emailTB).setValue("Vtest1@gmail.com")
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
        await (await this.loginWithEmail).click()
        await (await this.emailTB).setValue("Vtest1@gmail.com")
        console.log('User entered Valid Username')
        await (await this.passwordTB).setValue("Vtest@12")
        console.log('User entered Invalid Password')
        await (await this.login).waitForDisplayed({ timeout: 2000 })
        await (await this.login).click()
        console.log('User is unable to login valid username & invalid password')
    }
    async loginWithInvalidUserValidPassword() {
        await (await this.loginWithEmail).click()
        await (await this.emailTB).setValue("Vtest13@gmail.com")
        console.log('User entered Invalid Username')
        await (await this.passwordTB).setValue("Vtest@123")
        console.log('User entered Valid Password')
        await (await this.login).click()
        console.log('User is unable to login Invalid Username and Valid Password')
    }
    async loginwithInValidCredentials() {
        await (await this.loginWithEmail).click()
        await (await this.emailTB).setValue("Vtest13@gmail.com")
        await (await this.passwordTB).setValue("Vtest@1237")
        await (await this.login).waitForDisplayed({ timeout: 2000 })
        await (await this.login).click()
        console.log('User unable to Login with Invalid Credentials')
    }
    async verifyBlankUserName() {
        await (await this.loginWithEmail).click()
        await (await this.login).click()
        console.log('User click on login via password button')
    }
    async verifyBlankPassword() {
        await (await this.loginWithEmail).click()
        await (await this.emailTB).setValue("Vtest1@gmail.com")
        console.log('User entered Valid Username')
        await (await this.login).waitForDisplayed({ timeout: 2000 })
        await (await this.login).click()
        console.log('User leave password textbox as a blank and click on login')
    }
}
module.exports = new Login();