const base = require("../../BaseClass/base");
class Login {
    get menu(){return base.getByText("Menu") }
    get login(){return base.getByText("Login")}
    get loginToAccount(){return base.getByText("Login to Your Account")}
    get loginwithemailBtn(){return base.getByText("Email Login with Email")}
    get emailField(){return base.getByResourceId("email")}
    get passwordField(){return base.getByResourceId("password")}
    get Forgotpassword(){return base.getByText("Forgot Password")}
    get continueBtn(){return base.getByResourceId("continueEmail")}
    get myAccount(){return base.getByText("My Account")}
    get allowBtn(){return base.getByText("Allow")}
    get errorMsgForInvalidPasswd(){return base.getByText("Your username or password is incorrect")}
    get errorMsgForInvalidId(){return base.getByText("User does not exist")}
    get errorMsgForBlankID(){return base.getByText("Please enter a valid Email address.")}
    get errorMsgForBlankPass(){return base.getByText("Please enter a password.")}
    get loginWithFacebook(){return base.getByContDesc("Refresh Login with Facebook")}
    get faceBookPage(){return base.getByText("Log in to your Facebook account to connect to Droom")}
}
module.exports = new Login();