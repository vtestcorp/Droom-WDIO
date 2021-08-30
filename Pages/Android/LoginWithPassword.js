const base = require("../../BaseClass/base");
class LoginWithPassword
{
 get mainPopup(){return base.getByResourceId("in.droom:id/btn_close") }
 get myAccount(){return base.getByText("My Account")}
 get emailText(){return base.getByResourceId("in.droom:id/email_field")}
 get loginViaPassBtn(){return base.getByResourceId("in.droom:id/btn_login_via_password")}
 get passText(){return base.getByResourceId("in.droom:id/password_field")}
 get showPassword(){return base.getByResourceId("in.droom:id/text_input_end_icon")}
 get loginFinal(){return base.getByResourceId("in.droom:id/btn_login_via_otp_email")}
 get afterLoginPopup(){return base.getByResourceId("in.droom:id/imgViewForClose")}
 get userInfo(){return base.getByResourceId("in.droom:id/user_info_flow")}
 
 get incorrectCredPopup(){return base.getByResourceId("android:id/parentPanel")}
 get incorrectCredMsg(){return base.getByResourceId("android:id/message")}
 
 get blanckEmailMsg(){return base.getByResourceId("in.droom:id/textinput_error")}
 get blanckPasswordMsg(){return base.getByResourceId("in.droom:id/textinput_error")}

 get fbLoginBtn(){return base.getByResourceId("in.droom:id/btn_fb_login")}
 

}
module.exports=new LoginWithPassword()