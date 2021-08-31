class Login {

    get popup() { return $('.jss1') }
    get popupclose() { return $('(//button[@class="close em-show-later"])[2]') }
    get profileicon() { return $('#user_details') }
    get loginBtn() { return $('//a[text()="Log In"]') }
    get emailTB() { return $('#userLogin') }
    get loginViaPasswordBtn() { return $('.d-letter-spacing-1[href="#viaPassword"]') }
    get passwordTB() { return $('#password') }
    get login() { return $('//input[@type="submit"]') }
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
        await browser.pause('2000')
        await (await this.emailTB).setValue("poonam@vtestcorp.com")
        await browser.pause('10000')
        await (await this.loginViaPasswordBtn).click()
        await browser.pause('7000')
        await (await this.passwordTB).setValue("Punam@123")
        await browser.pause('7000')
        await (await this.login).click()
        await browser.pause('3000')
        console.log('User Successfully login to application with valid credentials')
    }

    async logout() {
        await browser.pause('5000')
        await (await this.profileicon).moveTo()
        await (await this.logoutBtn).click()
        console.log('User logout application')
    }

    async loginWithValidUsernameInvalidPassword() {
        await browser.pause('2000')
        await (await this.emailTB).setValue("poonam@vtestcorp.com")
        console.log('User entered Valid Username')
        await browser.pause('7000')
        await (await this.loginViaPasswordBtn).click()
        await browser.pause('7000')
        await (await this.passwordTB).setValue("Vtest@12")
        console.log('User entered Invalid Password')
        await browser.pause('7000')
        await (await this.login).click()
        await browser.pause('5000')
        console.log('User is unable to login valid username & invalid password')
        await (await this.loginViaPasswordBtn).click()
        //console.log(await this.errorMsgForInvalidPasswd).getText()
        await browser.pause('2000')

    }

    async loginWithInvalidUserValidPassword() {
        await browser.pause('2000')
        await (await this.emailTB).setValue("poonam1@vtestcorp.com")
        console.log('User entered Invalid Username')
        await browser.pause('7000')
        await (await this.loginViaPasswordBtn).click()
        await browser.pause('7000')
        await (await this.passwordTB).setValue("Punam@123")
        console.log('User entered Valid Password')
        await browser.pause('7000')
        await (await this.login).click()
        await browser.pause('5000')
        console.log('User is unable to login Invalid Username and Valid Password')
        await (await this.loginViaPasswordBtn).click()
        //console.log(await this.errorMsgForInvalidPasswd).getText()
        await browser.pause('2000')

    }

    async loginwithInValidCredentials() {
        await browser.pause('5000')
        await (await this.emailTB).setValue("poonam1@vtestcorp.com")
        await browser.pause('7000')
        await (await this.loginViaPasswordBtn).click()
        await browser.pause('7000')
        await (await this.passwordTB).setValue("Punam@12345")
        await browser.pause('7000')
        await (await this.login).click()
        await browser.pause('3000')
        console.log('User unable to Login with Invalid Credentials')
        await (await this.loginViaPasswordBtn).click()


    }

    async verifyBlankUserName() {
        await browser.pause('2000')
        await (await this.loginViaPasswordBtn).click()
        console.log('User click on login via password button')
        await browser.pause('3000')
    }

    async verifyBlankPassword() {
        await browser.pause('3000')
        await (await this.emailTB).setValue("poonam@vtestcorp.com")
        console.log('User entered Valid Username')
        await browser.pause('7000')
        await (await this.loginViaPasswordBtn).click()
        await browser.pause('7000')
        await (await this.login).click()
        console.log('User leave password textbox as a blankand click on login')
    }



}
module.exports = new Login();