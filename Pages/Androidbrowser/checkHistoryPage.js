const base = require("../../BaseClass/base")

class checkHistory {
    get acceptcontinue() { return base.getByText('Accept & continue') }
    get next() { return base.getByText('Next') }
    get yes() { return base.getByText('No, thanks') }
    get userLogin() { return base.getByResourceId('userLogin') }
    get Login_Password() { return base.getByText('Login Via Password') }
    get password() { return base.getByResourceId('password') }
    get login() { return base.getByText('Login') }
    get allow() { return base.getByText('Allow') }
    get manage_buying() { return base.getByText('Manage Your Buying and Selling, and Get Help on Your Vehicles') }
    get menu() { return base.getByText('Menu') }
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
    get pay_Best() { return base.getByText('Pay Best Match Unlock Fee') }
    get Droom_Pay() { return base.getByText('Droom Pay') }
    get cart() { return base.getByText('') }
    get Proceed_To_Checkout() { return base.getByText('Proceed To Checkout') }
    get name() { return base.getByText('Vtest1 Corp') }
    get mob_number() { return base.getByText('9999999999') }
    get Address() { return base.getByText('xyz, pune, 411014, maharashtra') }
    get Edit() { return base.getByText('Edit') }
    get Remove() { return base.getByContDesc('Remove') }
    get His() { return base.getByContDesc('Add Miles') }
    get per() { return base.getByTextContains('Premium Certificate') }
    get Check_any_Vehicle() { return base.getByTextContains('Check any Vehicle') }
    get vehicle_reg_no() { return base.getByContDesc('vehicle_reg_no') }
    get gold() { return base.getByContDesc('gold') }
    get platinum() { return base.getByContDesc('platinum') }
    get Sample_Report() { return base.getByText('View Sample Report') }
    get home() { return base.getByText('Home') }
    

    async chromeConditions() {
        await (await this.acceptcontinue).click()
        await (await this.next).click()
        await (await this.yes).click()
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
    async addToCart() {
        await (await this.pay_Best).click()
        await browser.pause(2000)
        await (await this.Droom_Pay).waitForDisplayed({ timeout: 10000 })
    }

};
module.exports = new checkHistory();