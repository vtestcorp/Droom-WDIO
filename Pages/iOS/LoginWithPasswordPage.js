const base = require("../../BaseClass/base");
class LoginWithPassword
{
 get mainPopup(){return base.getByAccessibilityID("Allow While Using App") }
 get locationPopup(){return base.getByAccessibilityID("Allow") }
 get skipBtn(){return base.getByClassChain('**/XCUIElementTypeButton[`label == "Skip"`]') }
 get byeOnDroom(){return base.getByAccessibilityID("Buy On Droom") }
 get services(){return base.getByAccessibilityID("homepopup-buy-service")}
 get backBtn(){return base.getByAccessibilityID("Back Icon Long")}
 //get incorrectCredPopup(){return base.getByAccessibilityID("android:id/parentPanel")}
 get incorrectCredMsg(){return base.getByAccessibilityID("User does not exist")}
 get blanckEmailMsg(){return base.getByResourceId("in.droom:id/textinput_error")}
 get blanckPasswordMsg(){return base.getByAccessibilityID("Please enter password")}
 get fbLoginBtn(){return base.getByResourceId("in.droom:id/btn_fb_login")}
 get fbEmailTxt(){return base.getByResourceId("m_login_email")}
 get fbPasswordTxt(){return base.getByResourceId("m_login_password")}
 get fbFinalLoginBtn(){return base.getByResourceId("login_password_step_element")}


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
   get login(){return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Login"`]')}
   //get login(){return base.getByPredicateString('label == "Login" AND name == "Login" AND value == "Login"')}
   get emailField(){return base.getByPredicateString('type == "XCUIElementTypeTextField"')}
    //get menu(){return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Menu"`]')}
   get menu(){return base.getByAccessibilityID('Menu')}
    get viaPassword(){return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Login Via Password"`]')}
    get passwordField(){return base.getByPredicateString('type == "XCUIElementTypeSecureTextField"')}
    get loginBtn(){return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Login"`][2]')}
    get userInfo(){return base.getByResourceId("in.droom:id/textview_userId")}
    get userlogo(){return base.getByAccessibilityID('sidemenu-user-placeholder')}
    get myAccount(){return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "My Account"`][2]')}
    get buy() { return base.getByAccessibilityID('Buy') }
    get myReq() { return base.getByClassChain('**/XCUIElementTypeStaticText[`label == My Requirements"`]') }
   }


module.exports=new LoginWithPassword() 
    