class ForgotPassword {
    get popup() { return $('(//div[@class="modal-body"])[23]') }
    get popupclose() { return $('#detectMyLocation') }
    get profileicon() { return $('#user_details') }
    get loginBtn() { return $('a[class="btn btn-primary btn-block"]') }
    get loginwithemail() {return $('(//button[@id="loginWithEmail"])')}
    get emailTB() { return $('#email') }
    get sellerName() { return $('(//div[@class="seller-name"])[2]') }
    get loginViaPasswordBtn() { return $('.d-letter-spacing-1[href="#viaPassword"]') }
    get forgotPasswordLink() { return $('//a[text()="Forgot Password"]') }
    get loginwitholdPassword() { return $('//a[text()="Log In With Old Password "]') }
    get passwordTB() { return $('#password') }
    get login() { return $('(//button[@id="continueEmail"])') }

    async loginViaPassword() {
        console.log('User Launch URL')
        await (await this.profileicon).moveTo()
        console.log('User move to profile')
        await (await this.loginBtn).click()
        console.log('User click on login button')
        await (await this.loginwithemail).click()
        console.log('User click on login button')

    }
}
module.exports = new ForgotPassword();