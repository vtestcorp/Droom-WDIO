const base = require("../../BaseClass/base");
class LoginWithPassword
{
    get menu() {return base.getByText("Menu")}
    get login() {return base.getByText("Login")}
    get loginwithemailBtn() {return base.getByText("Login with Email")}
    get emailText(){return base.getByResourceId("in.droom:id/email_field")}
    get passText(){return base.getByResourceId("in.droom:id/password_field")}
    get continueBtn() {return base.getByText("Continue")}
    get userInfo() {return base.getByResourceId("in.droom:id/textview_useremail")}
    get incorrectCredPopup(){return base.getByResourceId("android:id/parentPanel")}
    get incorrectCredMsg(){return base.getByResourceId("android:id/message")}
    get blankEmailMsg(){return base.getByResourceId("in.droom:id/textinput_error")}


}
module.exports=new LoginWithPassword()