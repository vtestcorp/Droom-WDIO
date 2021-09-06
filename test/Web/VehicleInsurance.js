const Base = require('../../BaseClass/base')
const VehicleInsurance = require('../../Pages/Web/VehicleInsurancePage')
describe("Vehicle Insurance", () => {
    it("TC_01 Verify The  Functionality Of Get Insurance", async () => {
        await Base.loginAsBuyer()
        await (await VehicleInsurance.insurance).click()
        console.log("After click on Get Insurance Tab User Navigate to Insurance Page")
        console.log(await browser.getUrl())
        expect(browser).toHaveTitle("Car Insurance Online – Buy Bike & Scooter Insurance at Best Price | Droom")
        expect(await VehicleInsurance.heading).toBeDisplayed()
        console.log(await (await VehicleInsurance.heading).getText())
        expect(await VehicleInsurance.vehicleInsurance).toBeDisplayed()
        console.log("Vehicle Information Tab Dispalyed")
        await (await VehicleInsurance.condition).click()
        await (await VehicleInsurance.vehicleType).click()
        await (await VehicleInsurance.registrationNo).setValue("MH13Y4444")
        console.log("User entered Valid Registration Number")
        await (await VehicleInsurance.vehicleDetails).setValue("Tata Indigo 2003")
        await (await VehicleInsurance.selectModel).click()
        console.log("User select Vehicle Model")
        await (await VehicleInsurance.nextBtn).waitForDisplayed({ timeout: 5000 })
        await (await VehicleInsurance.nextBtn).click()
        console.log("User Click On next Button")
        await (await VehicleInsurance.personalInformation).waitForDisplayed({ timeout: 5000 })
        expect(await VehicleInsurance.personalInformation).toBeDisplayed()
        console.log("Personal Information Tab Displayed")
    });
    it("TC_02 Verify The Process To Apply For Vehicle Insurance In 3 Easy Steps", async () => {
        browser.url('/')
        await (await VehicleInsurance.insurance).click()
        expect(await VehicleInsurance.msg).toBeDisplayed()
        console.log(await (await VehicleInsurance.msg).getText())
        expect(await VehicleInsurance.vehicleInsurance).toBeDisplayed()
        console.log("Vehicle Information Tab Dispalyed")
        await VehicleInsurance.vehicleInsuranceProcess()
        expect(await VehicleInsurance.insuranceInformation).toBeDisplayed()
        console.log("Insurance Information Tab Displayed")
    });


});