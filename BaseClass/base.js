const { default: waitForDisplayed } = require("webdriverio/build/commands/element/waitForDisplayed");
class Base
{
 get mainPopup(){return this.getByResourceId("in.droom:id/btn_close") }
 //get mainPopup() { return $('//a[@href="https://qa2.droom.in/user/login")}
 get myAccount(){return this.getByText("My Account")}
 get emailText(){return this.getByResourceId("in.droom:id/email_field")}
 get loginViaPassBtn(){return this.getByResourceId("in.droom:id/btn_login_via_password")}
 get passText(){return this.getByResourceId("in.droom:id/password_field")}
 get showPassword(){return this.getByResourceId("in.droom:id/text_input_end_icon")}
 get loginFinal(){return this.getByResourceId("in.droom:id/btn_login_via_otp_email")}
 get afterLoginPopup(){return this.getByResourceId("in.droom:id/imgViewForClose")}
 get userInfo(){return this.getByResourceId("in.droom:id/user_info_flow")}
      async loginAsBuyer() {
    try {
      await (await $('.jss1')).waitForDisplayed({ timeout: 20000, timeoutMsg: "Popup not displayed" });
      await (await $('(//button[@class="close em-show-later"])[2]')).click();
    }
    catch { }
      await(await $('[class="ico global-web global-web-user"]')).click();
      await (await $('//a[@href="https://qa2.droom.in/user/login"]')).click();
      await(await $("#loginWithEmail")).click();
      await(await $("#email")).setValue("vtest1@gmail.com");
      await(await $("#password")).click();
      await(await $("#password")).setValue("Vtest@123");
     await(await $("#continueBtn")).click();
      await(await $("div[class='profile'] img[alt='Seller image']")).waitForDisplayed({timeout:10000});
      await browser.pause(2000);      
    }
    async getByResourceId(id)
    {
      const selector = 'new UiSelector().resourceId("'+id+'")'
      const a=await $(`android=${selector}`)
      return a
    }

    async getByText(text)
    {
      const selector = 'new UiSelector().text("'+text+'")'
      const a=await $(`android=${selector}`)
      return a
    }
    async getByContDesc(desc)
    {
      const selector = 'new UiSelector().description("'+desc+'")'
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
    async getByResourceTextNIndex(text,index)
    {
      const selector = 'new UiSelector().textContains("'+text+'").index('+index+')'
      const a=await $(`android=${selector}`)
      return a

    }
    async getByResourceIdNIndex(id,index)
    {
      const selector = 'new UiSelector().resourceId("'+id+'").index("'+index+'")'
      const a=await $(`android=${selector}`)
      return a
    }
  
    async scrollToExactText(text)
    {
      const bottomElementSelector = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("${text}"))`
      const bottomEl =await $(`android=${bottomElementSelector}`)
    }
    async scrollToTextContain(text)
    {
      const bottomElementSelector = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().textContains("${text}"))`
      const bottomEl =await $(`android=${bottomElementSelector}`)
    }
  
    async scrollToResourceID(id)
    {
      const bottomElementSelector = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("${id}"))`
      const bottomEl =await $(`android=${bottomElementSelector}`)
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
    async switchToWebview()
    {
       let x = driver.getContexts()
       ;(await x).forEach(myFunction)
      function myFunction(elem) {
           if(elem.search("WEBVIEW")>=0)
           {
            driver.switchContext(elem)
           }
       }
    }
    async switchToNativeApp()
    {
        let x = driver.getContexts()
        ;(await x).forEach(myFunction)
       function myFunction(elem) {
           if(elem.search("NATIVE_APP")>=0)
           {
            driver.switchContext(elem)
           }
       }
    }
}
module.exports=new Base()