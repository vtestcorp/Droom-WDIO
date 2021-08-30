class Login
{

   get popup() {return $('.jss1')}
   get popupclose() {return $('(//button[@class="close em-show-later"])[2]')}
   get profileicon () {return $('#user_details')}
   get loginBtn () {return $('//a[text()="Log In"]')}
   get emailTB () {return $('#userLogin')}
   get loginViaPasswordBtn () {return $('.d-letter-spacing-1[href="#viaPassword"]')}
   get passwordTB () {return $('#password')}
   get login () {return $('//input[@type="submit"]')}
   get logoutBtn () {return $('//a[text()="Log Out"]')}
   get errorMsgForInvalidPasswd () {return $('//small[@class="text-error text-left d-display-block"]')}
   get errorMsg () {return $('//span[@class="text-danger email-error text-left d-display-block"]')}
   get facebookLoginBtn() {return $('//a[text()="Login with Facebook"]')}
   get email() {return $('//input[@id="email"]')}
   get password() {return $('//input[@id="pass"]')}
   get facebooklogin() {return $('//input[@name="login"]')}
   get submitBtn() {return $('(//button[@type="submit"])[1]')}
   get welcomemsg() {return $('(//div[@class="seller-name"])[2]')}

   

    async loginViaPassword()
    {
     console.log('User Launch URL')
     this.profileicon.moveTo()
     console.log('User move to profile')
     this.loginBtn.click()
      console.log('User click on login button')
   }
    async loginwithValidCredentials()
    {
        await browser.pause('2000')
        this.emailTB.setValue("poonam@vtestcorp.com")
        await browser.pause('10000')
        this.loginViaPasswordBtn.click()
        await browser.pause('7000')
        this.passwordTB.setValue("Punam@123")
        await browser.pause('7000')
        this.login.click()
        await browser.pause('3000')
        console.log('User Successfully login to application with valid credentials')
    }
     
    async logout()
    {
        await browser.pause('5000')
         this.profileicon.moveTo()
         this.logoutBtn.click()
         console.log('User logout application')
    }
   
    async loginWithValidUsernameInvalidPassword()
    {
        await browser.pause('2000')
        this.emailTB.setValue("poonam@vtestcorp.com")
        console.log('User entered Valid Username')
        await browser.pause('7000')
        this.loginViaPasswordBtn.click()
        await browser.pause('7000')
        this.passwordTB.setValue("Vtest@12")
        console.log('User entered Invalid Password')
        await browser.pause('7000')
        this.login.click()
        await browser.pause('5000')
        console.log('User is unable to login valid username & invalid password')
        this.loginViaPasswordBtn.click()
        console.log(this.errorMsgForInvalidPasswd.getText())
        await browser.pause('2000')

    }

    async loginWithInvalidUserValidPassword()
   {
    await browser.pause('2000')
    this.emailTB.setValue("poonam1@vtestcorp.com")
    console.log('User entered Invalid Username')
    await browser.pause('7000')
    this.loginViaPasswordBtn.click()
    await browser.pause('7000')
    this.passwordTB.setValue("Punam@123")
    console.log('User entered Valid Password')
    await browser.pause('7000')
    this.login.click()
    await browser.pause('5000')
    console.log('User is unable to login Invalid Username and Valid Password')
    this.loginViaPasswordBtn.click()
    console.log(this.errorMsgForInvalidPasswd.getText())
    await browser.pause('2000')

    }

    async loginwithInValidCredentials()
    {
        await browser.pause('5000')
        this.emailTB.setValue("poonam1@vtestcorp.com")
        await browser.pause('7000')
        this.loginViaPasswordBtn.click()
        await browser.pause('7000')
        this.passwordTB.setValue("Punam@12345")
        await browser.pause('7000')
        this.login.click()
        await browser.pause('3000')
        console.log('User unable to Login with Invalid Credentials')
        this.loginViaPasswordBtn.click()
       // await browser.pause('2000')

    }

    async verifyBlankUserName()
    {
        await browser.pause('2000')
       // let clickable= await loginViaPasswordBtn.isClickable();
       //console.log('User leave usename textbox as a blank')
       // console.log(clickable);
        this.loginViaPasswordBtn.click()
        console.log('User click on login via password button')
        await browser.pause('3000')
    }

    async verifyBlankPassword()
    {
        await browser.pause('3000')
        this.emailTB.setValue("poonam@vtestcorp.com")
        console.log('User entered Valid Username')
        await browser.pause('7000')
        this.loginViaPasswordBtn.click()
        await browser.pause('7000')
        this.login.click()
        console.log('User leave password textbox as a blankand click on login')
    }



}
module.exports= new Login();