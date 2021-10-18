const base = require("../../BaseClass/base")
class editRequirements {
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
    get bike() { return base.getByTextContains('Bike Bike') }
    get edit() { return base.getByTextContains('Edit') }
    get matches() { return base.getByTextContains('matches as per your requirement') }
    get click_back() { return base.getByClassNIndex('android.widget.Button', '0') }
    get View_All_R() { return base.getByText('View all Requirements') }
    get more_info() { return base.getByText('Great! More Information Gives Best Results') }
    get last_step() { return base.getByText('One Last Step Before We Get Matches') }
    get whats_budget() { return base.getByText(' What is Your Budget?') }
    get menu() { return base.getByText('Menu') }
    get select_vehicles() { return base.getByText('Select vehicles as per Your Budget, Purpose of buying & Family Size') }
    get show_more() { return base.getByText('show more') }
    get insurance() { return base.getByClassNIndex('android.view.View', '5') }
    get four_week() { return base.getByText('1 - 4 Weeks') }
    get Hyundai_Verna() { return base.getByText('Hyundai Verna') }
    get Honda_city() { return base.getByText('Honda City') }
    get more() { return base.getByText('More') }
    get immediately() { return base.getByText('Immediately') }
    get requirements() { return base.getByTextContains('Requirements') }
    get welcome() { return base.getByTextContains('Welcome') }
    get vehicle_name() { return base.getByTextContains('Car') }
    get new_Km_driven() { return base.getByTextContains('90 K-5 Lakh') }
    get vehicles_name() { return base.getByTextContains('Hyundai Verna, Honda City') }
    get Color() { return $('//input[@value="red"]') }
    get rc() { return $('(//div[@class="s-MuiGrid-root s-MuiGrid-item"])[5]') }
    get red() { return base.getByText('red') }
    get no_services() { return base.getByText('No Services') }
    get rc_tranfer() { return base.getByText('RC Transfer') }
    get price_range() { return $('//div[@class="noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"]') }
    get Toyota_Camry() { return base.getByText('Toyota Camry') }
    get new_price_range() { return base.getByText('20 Lakh-20 Cr') }
    get entLocation() { return $('//div[@class=" css-1hwfws3"]') }
    get selectLocation() { return $('//div[text()="Goa, India"]') }
    
    
    async editColor() {
        await browser.pause(5000)
        await (await this.car).click()
        await (await this.next_btn).click()
        await (await this.let_Droom_Suggest_for_you).click()
        await (await this.Sedan).click()
        await base.swipeUp()
        await base.swipeUp()
        await (await this.next_btn).click()
        await (await this.select_vehicles).waitForDisplayed({ timeout: 8000 })
        await (await this.Hyundai_Verna).click()
        await base.swipeUp()
        await (await this.next_btn).click()
    }
    async priceRange() {
        await browser.pause(5000)
        await (await this.car).click()
        await (await this.next_btn).click()
        await (await this.let_Droom_Suggest_for_you).click()
        await this.switchToWebview()
        await (await this.price_range).moveTo()
        await (await this.price_range).click()
        await this.switchToNativeApp()
        await (await this.Sedan).click()
        await base.swipeUp()
        await base.swipeUp()
        await (await this.next_btn).click()
        await (await this.select_vehicles).waitForDisplayed({ timeout: 8000 })
        await (await this.Toyota_Camry).click()
        await base.swipeUp()
        await (await this.next_btn).click()
    }
    async editLocation() {
        await browser.pause(5000)
        await (await this.car).click()
        await this.switchToWebview()
        await (await this.entLocation).setValue("Goa")
        await (await this.selectLocation).click()
        await this.switchToNativeApp()
        await (await this.next_btn).click()
        await (await this.let_Droom_Suggest_for_you).click()
        await this.switchToWebview()
        await (await this.price_range).moveTo()
        await (await this.price_range).click()
        await this.switchToNativeApp()
        await (await this.Sedan).click()
        await base.swipeUp()
        await base.swipeUp()
        await (await this.next_btn).click()
        await (await this.select_vehicles).waitForDisplayed({ timeout: 8000 })
        await (await this.Toyota_Camry).click()
        await base.swipeUp()
        await (await this.next_btn).click()
    }
    async editColor1() {
        await (await this.manual).click()
        await base.swipeUp()
        await this.swipeUp1()
        await (await this.next_btn).click()
        await (await this.not_Decided).click()
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.next_btn).click()
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.next_btn).click()
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.submit).click()
        await (await this.View_All_Matches).click()
    }
    async serviceYouNeed() {
        await (await this.manual).click()
        await base.swipeUp()
        await this.swipeUp1()
        await (await this.next_btn).click()
        await this.switchToWebview()
        await (await this.rc).click()
        await this.switchToNativeApp()
        await (await this.not_Decided).click()
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.next_btn).click()
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.next_btn).click()
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.submit).click()
        await (await this.View_All_Matches).click()
    }
    async editVehicle() {
        await browser.pause(5000)
        await (await this.car).click()
        await (await this.next_btn).click()
        await (await this.let_Droom_Suggest_for_you).click()
        await (await this.Sedan).click()
        await base.swipeUp()
        await base.swipeUp()
        await (await this.next_btn).click()
        await (await this.select_vehicles).waitForDisplayed({ timeout: 8000 })
        await (await this.Hyundai_Verna).click()
        await base.swipeUp()
        await (await this.next_btn).click()
        await (await this.manual).click()
        await base.swipeUp()
        await this.swipeUp1()
        await (await this.next_btn).click()
        await (await this.not_Decided).click()
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.next_btn).click()
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.next_btn).click()
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.submit).click()
        await (await this.View_All_Matches).click()
    }
    async editVehicle1() {
        await browser.pause(5000)
        await (await this.car).click()
        await (await this.next_btn).click()
        await (await this.let_Droom_Suggest_for_you).click()
        await (await this.Sedan).click()
        await base.swipeUp()
        await base.swipeUp()
        await (await this.next_btn).click()
        await (await this.select_vehicles).waitForDisplayed({ timeout: 8000 })
        await (await this.Hyundai_Verna).click()
        await (await this.Honda_city).click()
        await base.swipeUp()
        await (await this.next_btn).click()
        await (await this.manual).click()
        await base.swipeUp()
        await this.swipeUp1()
        await (await this.next_btn).click()
        await (await this.not_Decided).click()
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.next_btn).click()
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.next_btn).click()
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.submit).click()
        await (await this.View_All_Matches).click()
    }
    async HowQuicklyWantBuy() {
        await (await this.select_vehicles).waitForDisplayed({ timeout: 8000 })
        await base.swipeUp()
        await (await this.next_btn).click()
        await (await this.manual).click()
        await base.swipeUp()
        await this.swipeUp1()
        await (await this.next_btn).click()
        await (await this.not_Decided).click()
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.next_btn).click()
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.next_btn).click()
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.submit).click()
        await (await this.View_All_Matches).click()
    }
    async createReqForCar() {
        await (await this.current_Location).click()
        await (await this.car).click()
        //await (await this.cancel).click()
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
    async createRForCar1() {
        await (await this.current_Location).click()
        await (await this.car).click()
        //await (await this.cancel).click()
        await (await this.next_btn).click()
    }
    async createRForCar() {
        await (await this.current_Location).click()
        await (await this.car).click()
        //await (await this.cancel).click()
        await (await this.next_btn).click()
        await (await this.let_Droom_Suggest_for_you).click()
        await (await this.Sedan).click()
        await base.swipeUp()
        await base.swipeUp()
        await (await this.next_btn).click()
        await base.swipeUp()
        await (await this.next_btn).click()
        await (await this.manual).click()
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
    async switchToWebview() {
        let x = driver.getContexts()
            ; (await x).forEach(myFunction)
        function myFunction(elem) {
            if (elem.search("WEBVIEW") >= 0) {
                driver.switchContext(elem)
            }
        }

    }
    async switchToNativeApp() {
        let x = driver.getContexts()
            ; (await x).forEach(myFunction)
        function myFunction(elem) {
            if (elem.search("NATIVE_APP") >= 0) {
                driver.switchContext(elem)
            }
        }
    }
};
module.exports = new editRequirements();