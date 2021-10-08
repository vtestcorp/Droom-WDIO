const base = require("../../BaseClass/base")

class UnlockFeePayments {
    get acceptcontinue() { return base.getByText('Accept & continue') }
    get next() { return base.getByText('Next') }
    get yes() { return base.getByText('No, thanks') }
    get userLogin() { return base.getByResourceId('userLogin') }
    get Login_Password() { return base.getByText('Login Via Password') }
    get password() { return base.getByResourceId('password') }
    get login() { return base.getByText('Login') }
    get allow() { return base.getByText('Allow') }
    get manage_buying() { return base.getByText('Manage Your Buying and Selling, and Get Help on Your Vehicles') }
    get menu() { return base.getByTextContains('Menu') }
    get my_Requirements() { return base.getByTextContains('My Requirements') }
    get new_Requirement() { return base.getByText('+ Add New Requirement') }
    get car() { return base.getByTextContains('Car Car') }
    get cancel() { return base.getByText('x') }
    get Select() { return base.getByText('Select...') }
    get pune() { return base.getByText('Pune, Maharashtra, India') }
    get next_btn() { return base.getByText('Next') }
    get current_Location() { return base.getByText('Current Location') }
    get select_From() { return base.getByText('Select From Dropdown') }
    get let_Droom_Suggest_for_you() { return base.getByText('Let Droom Suggest for you') }
    get Sedan() { return base.getByText('Sedan Sedan') }
    get submit() { return base.getByText('Submit') }
    get View_All_Matches() { return base.getByText('View All Matches') }
    get page1() { return base.getByText('Let Us Know What You Are Looking For') }
    get add_More_Detail() { return base.getByText('Add More Detail') }
    get KMS_Driven_Range() { return base.getByText('KMS Driven Range') }
    get manual() { return base.getByText('Manual Manual') }
    get Close() { return base.getByContDesc('Close') }
    get not_Decided() { return base.getByText('Not Decided') }
    get best_Matches() { return base.getByTextContains('Best Matches') }
    get tokenForCar() { return base.getByText('Rs. 999 only') }
    get bike() { return base.getByTextContains('Bike Bike') }
    get bike() { return base.getByTextContains('Bike Bike') }
    async createRForCar() {
        await (await this.current_Location).click()
        await (await this.car).click()
        await (await this.cancel).click()
        await (await this.next_btn).click()
        await (await this.let_Droom_Suggest_for_you).click()
        await (await this.Sedan).click()
        await base.swipeUp()
        await base.swipeUp()
        await (await this.next_btn).click()
        await base.swipeUp()
        await (await this.next_btn).click()
        await (await this.manual).click()
        await this.swipeUp1()
        await (await this.next_btn).click()
        await (await this.not_Decided).click()
        await base.swipeUp()
        await (await this.next_btn).click()
        await base.swipeUp()
        await (await this.next_btn).click()
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.submit).click()
        await (await this.View_All_Matches).click()
    }
    async swipeUp1() {
        const { width, height } = await driver.getWindowRect()
        await browser.touchPerform([
            { action: 'press', options: { x: (width / 2), y: ((height / 5) * 2) } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: (width / 2), y: (height / 5) } },
            { action: 'release' }
        ]);
    }
    async chromeConditions() {
        await (await this.acceptcontinue).click()
        await (await this.next).click()
        await (await this.yes).click()
    }
    async loginAsBuyer() {
        await (await this.userLogin).setValue("vtest1@gmail.com")
        await browser.pause(2000)
        await (await this.Login_Password).click()
        await (await this.password).setValue("Vtest@123")
        await (await this.login).click()
        await (await this.allow).waitForDisplayed({ timeout: 60000 })
        await (await this.allow).click()
        await (await this.allow).click()
        await (await this.manage_buying).waitForDisplayed({ timeout: 7000 })
    }
};
module.exports = new UnlockFeePayments();