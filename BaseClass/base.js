const { default: waitForDisplayed } = require("webdriverio/build/commands/element/waitForDisplayed");
class Base
{
 get mainPopup(){return this.getByResourceId("in.droom:id/btn_close") }
 get myAccount(){return this.getByText("My Account")}
 get emailText(){return this.getByResourceId("in.droom:id/email_field")}
 get loginViaPassBtn(){return this.getByResourceId("in.droom:id/btn_login_via_password")}
 get passText(){return this.getByResourceId("in.droom:id/password_field")}
 get showPassword(){return this.getByResourceId("in.droom:id/text_input_end_icon")}
 get loginFinal(){return this.getByResourceId("in.droom:id/btn_login_via_otp_email")}
 get afterLoginPopup(){return this.getByResourceId("in.droom:id/imgViewForClose")}
 get userInfo(){return this.getByResourceId("in.droom:id/user_info_flow")}

 get mainPopup(){return this.getByAccessibilityID("Allow While Using App") }
 get locationPopup(){return this.getByAccessibilityID("Allow") }
 get skipBtn(){return this.getByClassChain('**/XCUIElementTypeButton[`label == "Skip"`]') }
 get byeOnDroom(){return this.getByAccessibilityID("Buy On Droom") }
 get services(){return this.getByAccessibilityID("homepopup-buy-service")}
 get backBtn(){return this.getByAccessibilityID("Back Icon Long")}

 get menu(){return this.getByClassChain('Menu')}

     async loginAsBuyer()
    {
      // try{
      // await (await $('.jss1')).waitForDisplayed({timeout:20000,timeoutMsg:"Popup not displayed"});
      // await (await $('(//button[@class="close em-show-later"])[2]')).click();}
      // catch{ }
      await(await $("//span[normalize-space()='Delhi']")).click()
      await(await $('#user_details')).click();
      await(await $("a[class='btn btn-primary']")).click();
      await(await $("#userLogin")).setValue("vtest1@gmail.com");
      await(await $(".d-letter-spacing-1[href='#viaPassword']")).click();
      await(await $("#password")).setValue("Vtest@123");
      await(await $("input[value='Login']")).click();
      await(await $("div[class='profile'] img[alt='Seller image']")).waitForDisplayed({timeout:10000});
      await browser.pause(2000);      
    }

    
    async getByResourceId(id)
    {
      const selector = 'new UiSelector().resourceId("'+id+'")'
      const a=await $(`android=${selector}`)
      return a
    }
    async getByContDesc(desc)
    {
      const selector = 'new UiSelector().description("'+desc+'")'
      const a=await $(`android=${selector}`)
      return a
    }
    async getByText(text)
    {
      const selector = 'new UiSelector().text("'+text+'")'
      const a=await $(`android=${selector}`)
      return a
    }
    async getByTextContains(text)
    {
      const selector = 'new UiSelector().textContains("'+text+'")'
      const a=await $(`android=${selector}`)
      return a
    }
    async getByResourceIdNText(id,text)
    {
      const selector = 'new UiSelector().resourceId("'+id+'").text("'+text+'")'
      const a=await $(`android=${selector}`)
      return a
    }
    async getByResourceIdNIndex(id,index)
    {
      const selector = 'new UiSelector().resourceId("'+id+'").index("'+index+'")'
      const a=await $(`android=${selector}`)
      return a
    }
    async getByPredicateString(string)
    {
      const a=await $(`-ios predicate string:${string}`)
      return a
    }
    async getByClassChain(string)
    {
      const a=await $(`-ios class chain:${string}`)
      return a
    }
   /* async getByName(string)
    {
      const selector = 'type == '+string+''
     // const a=await $(`-ios predicate string:${selector}`)
      return a
      
    }*/
    async getByAccessibilityID(id)
    {
      const a=await $(`~${id}`)
      return a
    }
    async getByClassNameIOS(name)
    {
      const a=await $(`${name}}`)
      return a
    }
    async scrollToExactText(text)
    {
      const bottomElementSelector = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("${text}"))`
      await $(`android=${bottomElementSelector}`)
    }
    async iosscrollToExactText(text)
    {
      const bottomElementSelector = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("${text}"))`
      await $(`ios=${bottomElementSelector}`)
    }
    async scrollToTextContain(text)
    {
      const bottomElementSelector = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().textContains("${text}"))`
      await $(`android=${bottomElementSelector}`)
    }
    async scrollToResourceID(id)
    {
      const bottomElementSelector = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("${id}"))`
      await $(`android=${bottomElementSelector}`)
    }
    async swipeUp()
    {
      const {width,height} = await driver.getWindowRect()
      await browser.touchPerform([
        { action: 'press', options: { x: (width/2), y: ((height/3)*2) }},
        { action: 'wait', options: { ms: 1000}},
        { action: 'moveTo', options: { x: (width/2), y:  (height/3)}},
        { action: 'release' }
      ]);
    }
    async androidLoginAsBuyer()
    {
         await (await this.mainPopup).isDisplayed()
         await (await this.mainPopup).click()
         await (await this.myAccount).click()
         await (await this.emailText).setValue("vtest1@gmail.com")
         await (await this.loginViaPassBtn).click()
         await (await this.passText).setValue("Vtest@123")
         await (await this.showPassword).click()
         await (await this.loginFinal).click()
         expect(await this.userInfo).toBeDisplayed()
         console.log("User is able to Login using valid credentials")
    }

    async skipStartup()
    {
       await (await this.mainPopup).waitForDisplayed()
       await (await this.mainPopup).click()
      // await (await this.locationPopup).waitForDisplayed()
       // await (await this.locationPopup).click()
       await (await this.skipBtn).waitForDisplayed()
       await (await this.skipBtn).click()
       //await (await this.byeOnDroom).waitForDisplayed()
       //await (await this.services).click()
       //await (await this.backBtn).click()
    }

    get login(){return this.getByClassChain('**/XCUIElementTypeStaticText[`label == "Login"`]')}
    //get emailField(){return this.getByAccessibilityID('Email ID / Mobile Number')}
    get emailField(){return this.getByPredicateString('type == "XCUIElementTypeTextField"')}
    get viaPassword(){return this.getByClassChain('**/XCUIElementTypeStaticText[`label == "Login Via Password"`]')}
    get passwordField(){return this.getByPredicateString('type == "XCUIElementTypeSecureTextField"')}
    get loginBtn(){return this.getByClassChain('**/XCUIElementTypeStaticText[`label == "Login"`][2]')}
    get userInfo(){return this.getByResourceId("in.droom:id/textview_userId")}
    get userlogo(){return this.getByAccessibilityID('sidemenu-user-placeholder')}
get myAccount(){return this.getByClassChain('**/XCUIElementTypeStaticText[`label == "My Account"`][2]')}
    async iosLoginAsBuyer()
    {
          await (await this.menu).click()
          console.log("CLicked on Menu")
         await (await this.login).waitForDisplayed()
         await (await this.login).click()
         console.log("CLicked on Login Button")
         await (await this.emailField).click()
         console.log("Clicked on Email Field")
         await (await this.emailField).setValue("vtest1@gmail.com")
         console.log("Set Email ID for login")
         await (await this.viaPassword).click()
         await (await this.passwordField).setValue("Vtest@123")
         console.log("Entered Password for account")
         //await (await this.showPassword).click()
         await (await this.loginBtn).click()
         console.log("Clicked on Login button")
         await (await this.menu).waitForDisplayed()
         expect(await this.menu).toBeDisplayed()
         console.log("User is able to Login using valid credentials")
    }
}
module.exports=new Base()
