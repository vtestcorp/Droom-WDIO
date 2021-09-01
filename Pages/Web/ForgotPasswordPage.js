class ForgotPassword{
    get popup() { return $('.jss1') }
    get popupclose() { return $('(//button[@class="close em-show-later"])[2]') }
    get profileicon() { return $('#user_details') }
    get loginBtn() { return $('//a[text()="Log In"]') }
    get emailTB() { return $('#userLogin') }
    get sellerName() {return $('//div[text()="Welcome, Vtest1 !"]')}
    get loginViaPasswordBtn() { return $('.d-letter-spacing-1[href="#viaPassword"]') }
    get forgotPasswordLink() {return $('//a[text()="Forgot Your Password?"]')}
    get loginwitholdPassword() {return $('//a[text()="Log In With Old Password "]')}
    get passwordTB() { return $('#password') }
    get login() { return $('//input[@type="submit"]') }



async loginViaPassword() {
    console.log('User Launch URL')
    await (await this.profileicon).moveTo()
    console.log('User move to profile')
    await (await this.loginBtn).click()
    console.log('User click on login button')
}
}


module.exports=new ForgotPassword();