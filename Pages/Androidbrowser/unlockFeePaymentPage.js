const base = require("../../BaseClass/base")

class UnlockFeePayments {
    get buy() {return base.getByText('Buy')}
    get carCategory() {return base.getByText('Car')}
    get new_Requirement() { return base.getByText('+ Add New Requirement') }
    get location() {return base.getByResourceId('react-select-2-input')}
    get puneLocation() {return base.getByText('Pune, Maharashtra, India')}
    get next_btn() { return base.getByText('Next') }
    get menu() { return base.getByTextContains('Menu') }
    get new_Requirement() { return base.getByText('+ Add New Requirement') }
    get let_Droom_Suggest_for_you() { return base.getByText('Let Droom Suggest for you') }
    get Sedan() { return base.getByText('Sedan Sedan') }
    get submit() { return base.getByText('Submit') }
    get View_All_Matches() { return base.getByText('View All Matches') }
    get bikeCategory() {return base.getByText('Bike')}
    get bodyType() {return base.getByText('Commuter Commuter')}
    get bookNow() {return base.getByText('Book Now')}
    get proceedTocheckout() {return base.getByText('Proceed To Checkout')}
    get matchCar() {return $('(//img[@class="card-img-top"])[1]')}
    
    get acceptcontinue() { return base.getByText('Accept & continue') }
    get next() { return base.getByText('Next') }
    get yes() { return base.getByText('No, thanks') }
    get userLogin() { return base.getByResourceId('userLogin') }
    get Login_Password() { return base.getByText('Login Via Password') }
    get password() { return base.getByResourceId('password') }
    get login() { return base.getByText('Login') }
    get allow() { return base.getByText('Allow') }
    get manage_buying() { return base.getByText('Manage Your Buying and Selling, and Get Help on Your Vehicles') }
   
    get my_Requirements() { return base.getByTextContains('My Requirements') }
   
    get car() { return base.getByTextContains('Car Car') }
    get cancel() { return base.getByText('x') }
    get Select() { return base.getByText('Select...') }
    get pune() { return base.getByText('Pune, Maharashtra, India') }
    
    get current_Location() { return base.getByText('Current Location') }
    get select_From() { return base.getByText('Select From Dropdown') }
   
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
    get deliver_Address() { return base.getByText('Deliver To This Address') }
    get UPI() { return base.getByText('Paytm UPI Droom Recommended - Fast & Secured') }
    get Debit_Card() { return base.getByText('Debit Card') }
    get net_Banking() { return base.getByText('Net Banking') }
    get credit_card() { return base.getByText('Pay Via Credit Card') }
    get Paytm() { return base.getByText('PaytmCash Card') }
    get Cash_Card() { return base.getByText('') }
    get make() { return $('//select[@class="form-control floating-control pmmyt-make-f"]') }
    get selectMake() { return $('//option[text()="BMW"]') }
    get model() { return $('//select[@name="model"]') }
    get selectModel() { return $('//option[text()="F 650 GS"]') }
    get year() { return $('//select[@class="form-control floating-control pmmyt-year-f"]') }
    get selectyear() { return $('//option[text()="2015"]') }
    get trim() { return $('//select[@class="form-control floating-control pmmyt-trim-f"]') }
    get selectTrim() { return $('//option[text()="798CC"]') }
    get Color() { return $('//input[@value="red"]') }
    get tokenForBike() { return base.getByText('Rs. 499 only') }
    
    /*async selectCar(){
        await (await this.location).setValue("Pune")
        await (await this.puneLocation).click()
        await (await this.next_btn).click()
        console.log("User clicked on Next Button")
        
    }*/

    async chromeConditions() {
        await (await this.acceptcontinue).click()
        await (await this.next).click()
        await (await this.yes).click()
    }
    async selectCar() {
        await (await this.current_Location).click()
        await (await this.car).click()
        console.log("User select car")
        await (await this.next_btn).click()
        console.log("User clicked on Next button")
        await (await this.let_Droom_Suggest_for_you).click()
        await (await this.Sedan).click()
        await base.swipeUp()
        await (await this.next_btn).click()
        console.log("User clicked on Next button")
        await base.swipeUp()
        await (await this.next_btn).click()
        console.log("User clicked on Next button")
        await (await this.manual).click()
        await this.swipeUp1()
        await (await this.next_btn).click()
        console.log("User clicked on Next button")
        await (await this.not_Decided).click()
        await base.swipeUp()
        await (await this.next_btn).click()
        console.log("User clicked on Next button")
        await base.swipeUp()
        await (await this.next_btn).click()
        console.log("User clicked on Next button")
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.submit).click()
        console.log("User clicked on submit button")
        await (await this.View_All_Matches).click()
        console.log("User clicked on view all matches")
    }

    async selectBike(){
        await (await this.current_Location).click()
        await browser.pause(3000)
        await (await this.bike).click()
        await (await this.next_btn).click()
        console.log("User clicked on Next button")
        await (await this.let_Droom_Suggest_for_you).click()
        await (await this.bodyType).click()
        console.log('user select body type')
        await base.swipeUp()
        await (await this.next_btn).click()
        console.log("User clicked on Next button")
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.next_btn).click()
        console.log("User clicked on Next button")
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.next_btn).click()
        console.log("User clicked on Next button")
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.next_btn).click()
        console.log("User clicked on Next button")
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.next_btn).click()
        console.log("User clicked on Next button")
        await browser.pause(2000)
        await base.swipeUp()
        await (await this.submit).click()
        console.log("User clicked on submit button")
        await (await this.View_All_Matches).click()
        console.log("User clicked on view all matches")
    }
    async selectBike1() {
        await (await this.current_Location).click()
        await browser.pause(3000)
        await (await this.bike).click()
        //await (await this.cancel).click()
        await (await this.next_btn).click()
        await (await this.select_From).click()
        await this.switchToWebview()
        await (await this.make).click()
        await (await this.selectMake).click()
        await (await this.model).click()
        await (await this.selectModel).click()
        await (await this.year).click()
        await (await this.selectyear).click()
        await (await this.trim).click()
        await (await this.selectTrim).click()
        await this.switchToNativeApp()
        await base.swipeUp()
        await this.swipeUp1()
        await (await this.next_btn).click()
        await this.switchToWebview()
        await (await this.Color).click()
        await this.switchToNativeApp()
        await (await this.next_btn).click()
        await (await this.not_Decided).click()
        await this.swipeUp1()
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
    async addToCart() {
        await (await this.pay_Best).click()
        await browser.pause(2000)
        await (await this.Droom_Pay).waitForDisplayed({ timeout: 10000 })
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
module.exports = new UnlockFeePayments();