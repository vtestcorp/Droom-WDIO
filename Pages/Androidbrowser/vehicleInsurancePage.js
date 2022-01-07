const base = require("../../BaseClass/base")
class vehicleInsurance {
    get acceptcontinue() { return base.getByText('Accept & continue') }
    get next() { return base.getByText('Next') }
    get yes() { return base.getByText('No, thanks') }

    get heading(){return base.getByText("Get the Best Insurance Cover for your Vehicle")}
    get vehicle_Information() { return base.getByText('Vehicle Information') }
    get personal_Information() { return base.getByText('Personal Information') }
    get insurance_Information() { return base.getByText('Insurance Information') }
    get car() { return base.getByText('Car') }
    get bike() { return base.getByText('Bike') }
    get scooter() { return base.getByText('Scooter') }
    get vehicle_Details() { return base.getByText('Enter Your Vehicle Details') }
    get select_Dropdown() { return base.getByText('Select From Dropdown') }
    get Easy_Steps() { return base.getByText('Apply for Vehicle Insurance in 3 Easy Steps') }
    get next() { return base.getByText('Next') }
    get used_condition() { return $('//input[@id="used-condition"]') }
    


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

}
module.exports = new vehicleInsurance();