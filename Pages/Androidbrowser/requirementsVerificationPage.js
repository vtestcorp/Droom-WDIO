const base = require("../../BaseClass/base");

class RequirementsVerification {
    get acceptcontinue() { return base.getByText('Accept & continue') }
    get next() { return base.getByText('Next') }
    get yes() { return base.getByResourceId('com.android.chrome:id/positive_button') }
    get allow() { return base.getByText('Allow') }
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
    get below() { return base.getByText('Below 20 Cr') }
    get Used() { return base.getByText('Used') }
    get any() { return base.getByText('Any') }
    get Below_Lakh() { return base.getByText('Below 5 Lakh') }
    get manual() { return base.getByText('manual') }

    async chromeConditions() {
        await (await this.acceptcontinue).click()
        await (await this.next).click()
        await (await this.yes).click()
    }
    async loginAsBuyer() {
        await (await this.allow).waitForDisplayed({ timeout: 60000 })
        await (await this.allow).click()
        await (await this.allow).click()
        await (await this.menu).click()
        await (await this.cancel).click()
        await (await this.login).click()
        await (await this.userLogin).setValue("Vikasy898@gmail.com")
        await (await this.loginPassword).click()
        await (await this.password).setValue("Vtest@123")
        await (await this.login).click()
        await (await this.manage_buying).waitForDisplayed({ timeout: 60000 })
    }
}
module.exports = new RequirementsVerification();