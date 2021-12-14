const base = require("../../BaseClass/base");
class LoginWithPassword
{
 get mainPopup(){return base.getByAccessibilityID("Allow While Using App") }
 get locationPopup(){return base.getByAccessibilityID("Allow") }
 get skipBtn(){return base.getByClassChain('**/XCUIElementTypeButton[`label == "Skip"`]') }
 get byeOnDroom(){return base.getByAccessibilityID("Buy On Droom") }
 get services(){return base.getByAccessibilityID("homepopup-buy-service")}
 get backBtn(){return base.getByAccessibilityID("Back Icon Long")}

 get myAccount(){return base.getByText("My Account")}
 get emailText(){return base.getByResourceId("in.droom:id/email_field")}
 get loginViaPassBtn(){return base.getByResourceId("in.droom:id/btn_login_via_password")}
 get passText(){return base.getByResourceId("in.droom:id/password_field")}
 get showPassword(){return base.getByResourceId("in.droom:id/text_input_end_icon")}
 get loginFinal(){return base.getByResourceId("in.droom:id/btn_login_via_otp_email")}
 get afterLoginPopup(){return base.getByResourceId("in.droom:id/imgViewForClose")}
 get userInfo(){return base.getByResourceId("in.droom:id/textview_userId")}
 
 
 get incorrectCredPopup(){return base.getByResourceId("android:id/parentPanel")}
 get incorrectCredMsg(){return base.getByResourceId("android:id/message")}
 
 get blanckEmailMsg(){return base.getByResourceId("in.droom:id/textinput_error")}
 get blanckPasswordMsg(){return base.getByResourceId("in.droom:id/textinput_error")}

 get fbLoginBtn(){return base.getByResourceId("in.droom:id/btn_fb_login")}
 get fbEmailTxt(){return base.getByResourceId("m_login_email")}
 get fbPasswordTxt(){return base.getByResourceId("m_login_password")}
 get fbFinalLoginBtn(){return base.getByResourceId("login_password_step_element")}
 

 async skipStartup()
 {
    await (await this.mainPopup).waitForDisplayed()
    await (await this.mainPopup).click()
    await (await this.locationPopup).waitForDisplayed()
    await (await this.locationPopup).click()
    await (await this.skipBtn).waitForDisplayed()
    await (await this.skipBtn).click()
    //await (await this.byeOnDroom).waitForDisplayed()
    //await (await this.services).click()
    //await (await this.backBtn).click()
 }

}
module.exports=new LoginWithPassword()