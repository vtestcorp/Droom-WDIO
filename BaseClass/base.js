const { default: waitForDisplayed } = require("webdriverio/build/commands/element/waitForDisplayed");
class Base
{
  get menu() {return this.getByText("Menu")}
 get login() {return this.getByText("Login")}
 get loginwithemailBtn() {return this.getByText("Login with Email")}
 get emailText(){return this.getByResourceId("in.droom:id/email_field")}
 get continueBtn() {return this.getByText("Continue")}
 //get loginViaPassBtn(){return this.getByResourceId("in.droom:id/btn_login_via_password")}
 get passText(){return this.getByResourceId("in.droom:id/password_field")}
 get showPassword(){return this.getByResourceId("in.droom:id/text_input_end_icon")}
// get loginFinal(){return this.getByResourceId("in.droom:id/btn_login_via_otp_email")}
 get afterLoginPopup(){return this.getByResourceId("in.droom:id/imgViewForClose")}

 //get userInfo(){return this.getByResourceId("in.droom:id/user_info_flow")}
 get userInfo() {return this.getByResourceId("in.droom:id/textview_useremail")}
 async loginAsBuyer()
 {
   try{
   await (await $('.jss1')).waitForDisplayed({timeout:20000,timeoutMsg:"Popup not displayed"});
   await (await $('(//button[@class="close em-show-later"])[2]')).click();}
   catch{ }
   await(await $('#user_details')).click();
   await(await $("a[class='btn btn-primary btn-block']")).click();
   await(await $('(//button[@id="loginWithEmail"])')).click();
   //await(await $("#email")).setValue("vtest1@gmail.com");
  await(await $("#email")).setValue("vikasy898@gmail.com");
   //await(await $(".d-letter-spacing-1[href='#viaPassword']")).click();
   await(await $("#password")).setValue("Vtest@123");
   //await(await $("#password")).setValue("Hemant@123");
   await(await $('(//button[@id="continueEmail"])')).click();
   //await(await $("input[value='Login']")).click();
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
    async scrollToExactText(text)
    {
      const bottomElementSelector = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("${text}"))`
      await $(`android=${bottomElementSelector}`)
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
        //await (await this.mainPopup).isDisplayed()
        // await (await this.mainPopup).click()
         //await (await this.myAccount).click()
         await (await this.menu).click()
         await (await this.login).click()
         await (await this.loginwithemailBtn).click()
        await (await this.emailText).setValue("vtest1@gmail.com")
        // await (await this.loginViaPassBtn).click()
         await (await this.passText).setValue("Vtest@123")
        // await (await this.showPassword).click()
         //await (await this.loginFinal).click()
        // expect(await this.userInfo).toBeDisplayed()
        await(await this.continueBtn).click()
        expect(await this.userInfo).toBeDisplayed()
         console.log("User is able to Login using valid credentials")
    }

}
module.exports=new Base()
