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
     async loginAsBuyer()
    {
      try{
      await (await $('.jss1')).waitForDisplayed({timeout:20000,timeoutMsg:"Popup not displayed"});
      await (await $('(//button[@class="close em-show-later"])[2]')).click();}
      catch{ }
      await(await $('#user_details')).click();
      await(await $("a[class='btn btn-primary']")).click();
      await(await $("#userLogin")).setValue("vikasy898@gmail.com");
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

}
module.exports=new Base()
