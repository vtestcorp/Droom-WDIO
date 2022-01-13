const base = require("../../BaseClass/base");

class RequirementsVerification {
    get welcomemsg() {return base.getByText('Welcome, Vtest1 !')}
   // get logo() {return base.}
    get menu() { return base.getByText('Menu') }
    get cancel() { return base.getByText('×') }
    get login() { return base.getByText('Login') }
    get userLogin() { return base.getByResourceId('userLogin') }
    get loginPassword() { return base.getByText('Login Via Password') }
    get password() { return base.getByResourceId('password') }
    get my_Requirements() { return base.getByText('My Requirements') }
    get manage_buying() { return base.getByText('Manage Your Buying and Selling, and Get Help on Your Vehicles') }
    get all_Requirements() { return base.getByResourceXpath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View[1]') }
    get Unlock_Fee_Payment() { return base.getByText('Unlock Fee Payment Pending') }
    get Score() { return base.getByText('Score') }
    get search() { return base.getByText('search') }
    get Add_New_Requirement() { return base.getByText('+ Add New Requirement') }
    get Unlock_Fee_Payment() { return base.getByText('Unlock Fee Payment Pending') }
    get requirements() { return base.getByTextContains('Requirements') }
    get Score_Count() { return base.getByTextContains('%') }
    get more() { return base.getByText('More') }
    get Price_Range() { return base.getByText('Price Range') }
    get Used() { return base.getByText('Used') }
    get any() { return base.getByText('Any') }
    get Below_Lakh() { return base.getByText('Below 5 Lakh') }
    get manual() { return base.getByText('manual') }
    get manual() { return base.getByText('Ext Color') }
    get best_Matches() { return base.getByTextContains('Best Matches') }
    get my_Matches() { return base.getByTextContains('My Matches') }
   
}
module.exports = new RequirementsVerification();