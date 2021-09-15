const Base = require('../../BaseClass/base')
const VehicleInsurance = require('../../Pages/Web/VehicleInsurancePage')
describe("Vehicle Insurance", () => {
   it("TC_01 Verify The Functionality Of Get Insurance", async () => {
        await Base.loginAsBuyer()
        await (await VehicleInsurance.insurance).click()
        console.log("After click on Get Insurance Tab User Navigate to Insurance Page")
        console.log(await browser.getUrl())
        expect(browser).toHaveTitle("Car Insurance Online – Buy Bike & Scooter Insurance at Best Price | Droom")
        expect(await VehicleInsurance.heading).toBeDisplayed()
        console.log(await (await VehicleInsurance.heading).getText())
        expect(await VehicleInsurance.vehicleInsurance).toBeDisplayed()
        console.log("Vehicle Information Tab Dispalyed")
        await (await VehicleInsurance.usedcondition).click()
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
        await browser.back()
        await (await VehicleInsurance.insurance).click()
        expect(await VehicleInsurance.msg).toBeDisplayed()
        console.log(await (await VehicleInsurance.msg).getText())
        expect(await VehicleInsurance.vehicleInsurance).toBeDisplayed()
        console.log("Vehicle Information Tab Dispalyed")
        await VehicleInsurance.vehicleInsuranceProcess()
        expect(await VehicleInsurance.nextButton).toBeDisplayed()
        console.log(await (await VehicleInsurance.nextButton).isClickable())
        console.log("Next Button Displayed")
        expect(await VehicleInsurance.insuranceInformation).toBeDisplayed()
        console.log("Insurance Information Tab Displayed")
    });
    it("TC_03 Verify Select Vehicle Condition Used Functionality", async () => {
        await browser.back()
        expect(await VehicleInsurance.insurance).toBeDisplayed()
        console.log(await (await VehicleInsurance.insurance).isClickable())
        console.log("Get Insurance is Displayed")
        await (await VehicleInsurance.insurance).click()
        expect(await VehicleInsurance.usedcondition).toBeDisplayed()
        console.log("Condition of Vehicle USED Displayed")
        await (await VehicleInsurance.usedcondition).click()
        await (await VehicleInsurance.vehicleType).click()
        await (await VehicleInsurance.registrationNo).setValue("MH13Y4444")
        console.log("User entered Valid Registration Number")
        await (await VehicleInsurance.vehicleDetails).setValue("Tata Indigo 2003")
        await (await VehicleInsurance.selectModel).click()
        console.log("User select Vehicle Model")
        await (await VehicleInsurance.nextBtn).waitForDisplayed({ timeout: 5000 })
        expect(await VehicleInsurance.nextBtn).toBeDisplayed()
        console.log("After Selecting Vehicle Details Next Button Displayed")
        await (await VehicleInsurance.nextBtn).click()
        expect(await VehicleInsurance.personalInformation).toBeDisplayed()
        console.log("Personal Information Tab Displayed")
    });
    it("TC_04 Verify Select Vehicle Condition New Functionality", async () => {
        await browser.back()
        expect(await VehicleInsurance.insurance).toBeDisplayed()
        console.log(await (await VehicleInsurance.insurance).isClickable())
        console.log("Get Insurance is Clickable")
        await (await VehicleInsurance.insurance).click()
        await (await VehicleInsurance.newCondition).waitForDisplayed({ timeout: 5000 })
        expect(await VehicleInsurance.newCondition).toBeDisplayed()
        console.log("Condition of Vehicle New Displayed")
        await (await VehicleInsurance.newCondition).click()
        await (await VehicleInsurance.vehicleType).click()
        expect(await VehicleInsurance.vehicleDetails).toBeDisplayed()
        console.log("Vehicle Details TextBoX displayed")
        await (await VehicleInsurance.vehicleDetails).setValue("Tata Indigo 2003")
        await (await VehicleInsurance.selectModel).click()
        await (await VehicleInsurance.nextBtn).click()
        expect(await VehicleInsurance.personalInformation).toBeDisplayed()
        console.log("Personal Information Tab Displayed")
    });
    it("TC_05 Verify Select From Dropdown Functionality", async () => {
        await browser.back()
        expect(await VehicleInsurance.insurance).toBeDisplayed()
        console.log(await (await VehicleInsurance.insurance).isClickable())
        console.log("Get Insurance is Clickable")
        await (await VehicleInsurance.insurance).click()
        await (await VehicleInsurance.newCondition).waitForDisplayed({ timeout: 5000 })
        expect(await VehicleInsurance.newCondition).toBeDisplayed()
        console.log("Condition of Vehicle New Displayed")
        await (await VehicleInsurance.newCondition).click()
        await (await VehicleInsurance.dropDown).click()
        await (await VehicleInsurance.makedropDown).click()
        await (await VehicleInsurance.makeValue).click()
        await (await VehicleInsurance.modelDropdown).click()
        await (await VehicleInsurance.modelValue).click()
        await (await VehicleInsurance.yearDropdown).click()
        await (await VehicleInsurance.yearValue).click()
        await (await VehicleInsurance.trimDropDown).click()
        await (await VehicleInsurance.trimValue).click()
        expect(await VehicleInsurance.nextBtn).toBeDisplayed()
        console.log("After Selecting Value From DropDown Next Button Displayed")
        console.log(await (await VehicleInsurance.nextBtn).isClickable())
        await (await VehicleInsurance.nextBtn).click()
        expect(await VehicleInsurance.personalInformation).toBeDisplayed()
        console.log("Personal Information Tab Displayed")
        expect(VehicleInsurance.name).toHaveValue('Vtest1', { ignoreCase: true })
        expect(VehicleInsurance.email).toHaveValue('Vtest1@gmail.com', { ignoreCase: true })
        expect(VehicleInsurance.phone).toHaveValue('999999999', { ignoreCase: true })
    });

it("TC_06 Verify Select Make Functionality Of  Select From Dropdown option", async () => {
    await browser.back()
    expect(await VehicleInsurance.insurance).toBeDisplayed()
    console.log("Get Insurance Displayed")
    await (await VehicleInsurance.insurance).click()
    await (await VehicleInsurance.newCondition).waitForDisplayed({ timeout: 5000 })
    expect(await VehicleInsurance.newCondition).toBeDisplayed()
    console.log("Condition of Vehicle New Displayed")
    await (await VehicleInsurance.newCondition).click()
    await (await VehicleInsurance.dropDown).click()
    expect(await VehicleInsurance.makedropDown).toBeDisplayed()
    console.log("Make Dropdown Displayed")
    console.log(await (await VehicleInsurance.makedropDown).isClickable())
    await (await VehicleInsurance.makedropDown).click()
    await (await VehicleInsurance.makeValue).click()    
});
it("TC_07 Verify Select Model Functionality Of Select From Dropdown option", async () => {
    await browser.back()
    expect(await VehicleInsurance.insurance).toBeDisplayed()
    console.log("Get Insurance Displayed")
    await (await VehicleInsurance.insurance).click()
    await (await VehicleInsurance.newCondition).waitForDisplayed({ timeout: 5000 })
    expect(await VehicleInsurance.newCondition).toBeDisplayed()
    console.log("Condition of Vehicle New Displayed")
    await (await VehicleInsurance.newCondition).click()
    await (await VehicleInsurance.dropDown).click()
    expect(await VehicleInsurance.makedropDown).toBeDisplayed()
    console.log("Make Dropdown Displayed")
    await (await VehicleInsurance.makedropDown).click()
    await (await VehicleInsurance.makeValue).click()   
    expect(await VehicleInsurance.modelDropdown).toBeDisplayed()
    console.log("Model Dropdown Displayed")
    await (await VehicleInsurance.modelDropdown).click()
    await (await VehicleInsurance.modelValue).click()

});
it("TC_08 Verify Select Year Functionality Of Select From Dropdown Option", async () => {
    await browser.back()
    expect(await VehicleInsurance.insurance).toBeDisplayed()
    console.log("Get Insurance Displayed")
    await (await VehicleInsurance.insurance).click()
    await (await VehicleInsurance.newCondition).waitForDisplayed({ timeout: 5000 })
    expect(await VehicleInsurance.newCondition).toBeDisplayed()
    console.log("Condition of Vehicle New Displayed")
    await (await VehicleInsurance.newCondition).click()
    await (await VehicleInsurance.dropDown).click()
    expect(await VehicleInsurance.makedropDown).toBeDisplayed()
    console.log("Make Dropdown Displayed")
    await (await VehicleInsurance.makedropDown).click()
    await (await VehicleInsurance.makeValue).click() 
    expect(await VehicleInsurance.modelDropdown).toBeDisplayed()
    console.log("Model Dropdown Displayed")  
    await (await VehicleInsurance.modelDropdown).click()
    await (await VehicleInsurance.modelValue).click()
    expect(await VehicleInsurance.yearDropdown).toBeDisplayed()
    console.log("Year Dropdown Displayed")
    await (await VehicleInsurance.yearDropdown).click()
    await (await VehicleInsurance.yearValue).click()
});
it("TC_09 Verify Select Trim Functionality Of Select From Dropdown option", async () => {
    await browser.back()
    expect(await VehicleInsurance.insurance).toBeDisplayed()
    console.log("Get Insurance Displayed")
    await (await VehicleInsurance.insurance).click()
    await (await VehicleInsurance.newCondition).waitForDisplayed({ timeout: 5000 })
    expect(await VehicleInsurance.newCondition).toBeDisplayed()
    console.log("Condition of Vehicle New Displayed")
    await (await VehicleInsurance.newCondition).click()
    await (await VehicleInsurance.dropDown).click()
    await (await VehicleInsurance.makedropDown).click()
    await (await VehicleInsurance.makeValue).click()   
    await (await VehicleInsurance.modelDropdown).click()
    await (await VehicleInsurance.modelValue).click()
    expect(await VehicleInsurance.yearDropdown).toBeDisplayed()
    console.log("Year Dropdown Displayed")
    await (await VehicleInsurance.yearDropdown).click()
    await (await VehicleInsurance.yearValue).click()
    expect(await VehicleInsurance.trimDropDown).toBeDisplayed()
    console.log("Trim Dropdown Displayed")
    await (await VehicleInsurance.trimDropDown).click()
    await (await VehicleInsurance.trimValue).click()
});
it("TC_10 Verify the Back Button Functionality on Personal Information page of Insurance", async () => {
        await browser.back()
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
        await (await VehicleInsurance.vehicleDetails).setValue("Tata Indigo LS 2003")
        await (await VehicleInsurance.selectModel).click()
        console.log("User select Vehicle Model")
        await (await VehicleInsurance.nextBtn).waitForDisplayed({ timeout: 5000 })
        await (await VehicleInsurance.nextBtn).click()
        console.log("User Click On next Button")
        expect(await VehicleInsurance.name).toBeDisplayed()
        console.log("Name displayed on Personal Information")
        expect(await VehicleInsurance.email).toBeDisplayed()
        console.log("EmailID displayed on Personal Information")
        expect(await VehicleInsurance.Number).toBeDisplayed()
        console.log("Contact Number displayed on Personal Information")
        expect(await VehicleInsurance.BackBtn1).toBeDisplayed()
        console.log("Back Button Shown on Vehicle Information Page")
        await (await VehicleInsurance.BackBtn1).click()
        await (await VehicleInsurance.vehicleCondition).waitForDisplayed({ timeout: 5000 })
        expect(await VehicleInsurance.vehicleCondition).toBeDisplayed()
        console.log("After ckick on Back Button user able to navigate to Pravious Page")
    });
    it("TC_11 Verify the Next Button Functionality on Personal Information page of Insurance", async () => {
        await browser.back()
        await (await VehicleInsurance.insurance).click()
        console.log("After click on Get Insurance Tab User Navigate to Insurance Page")
        console.log(await browser.getUrl())
        expect(browser).toHaveTitle("Car Insurance Online – Buy Bike & Scooter Insurance at Best Price | Droom")
        expect(await VehicleInsurance.heading).toBeDisplayed()
        console.log(await (await VehicleInsurance.heading).getText())
        expect(await VehicleInsurance.vehicleInsurance).toBeDisplayed()
        console.log("Vehicle Information Tab Dispalyed")
        await (await VehicleInsurance.condition).click()
        console.log("Clicked on Used Vehicle ")
        await (await VehicleInsurance.vehicleType).click()
        console.log("Clicked on Car type of Vehicle")
        await (await VehicleInsurance.registrationNo).setValue("MH13Y4444")
        console.log("User entered Valid Registration Number")
        await (await VehicleInsurance.vehicleDetails).setValue("Tata Indigo LS 2003")
        await (await VehicleInsurance.selectModel).click()
        console.log("User select Vehicle Model")
        await (await VehicleInsurance.nextBtn).waitForDisplayed({ timeout: 5000 })
        await (await VehicleInsurance.nextBtn).click()
        console.log("User Click On next Button")
        expect(await VehicleInsurance.name).toBeDisplayed()
        console.log("Personal Information is displayed")
        await(await VehicleInsurance.nextBtn2).click()
        expect(await VehicleInsurance.PhoneVerification).toBeDisplayed()
        console.log(await (await VehicleInsurance.OTPMsg).getText())
        console.log("After sending OTP message displayed on Phone verification Page")
    });
    it("TC_12 Verify the fields on Personal Information", async () => {
        await browser.back()
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
        await (await VehicleInsurance.vehicleDetails).setValue("Tata Indigo LS 2003")
        await (await VehicleInsurance.selectModel).click()
        console.log("User select Vehicle Model")
        await (await VehicleInsurance.nextBtn).click()
        console.log("User Click On next Button")
        console.log(await (await VehicleInsurance.name).getText())
        console.log(await (await VehicleInsurance.email).getText())
        console.log(await (await VehicleInsurance.phone).getText())
        expect(await VehicleInsurance.BackBtn1).toBeDisplayed()
        console.log("Back Button is shown")
        expect(await VehicleInsurance.nextBtn2).toBeDisplayed()
        console.log("Next button is Shown")
    });
    it("TC_13 Verify the functionality of Select a vehicle Type", async () => {
        await browser.back()
        expect(await VehicleInsurance.insurance).toBeDisplayed()
        console.log(await (await VehicleInsurance.insurance).isClickable())
        console.log("Get Insurance is Clickable")
        await (await VehicleInsurance.insurance).click()
        await (await VehicleInsurance.NewCondition).waitForDisplayed({ timeout: 5000 })
        expect(await VehicleInsurance.NewCondition).toBeDisplayed()
        console.log("Condition of Vehicle New Displayed")
        await (await VehicleInsurance.NewCondition).click()
        console.log(await (await VehicleInsurance.NewCondition).isClickable())
        expect(await VehicleInsurance.vehicleType).toBeDisplayed()
        console.log("Vehicle Types Displayed")
        console.log(await (await VehicleInsurance.vehicleType).isClickable())
        await (await VehicleInsurance.vehicleType).click()
        console.log("User able Click on Car")
        expect(await VehicleInsurance.Bike).toBeDisplayed()
        console.log("Bike is Displayed");
        console.log(await (await VehicleInsurance.Bike).isClickable())
        await(await VehicleInsurance.Bike).click()
        console.log("User able to Click on Bike")
        expect(await VehicleInsurance.Scooter).toBeDisplayed()
        console.log("Scooter is Displayed");
        console.log(await (await VehicleInsurance.Scooter).isClickable())
        await(await VehicleInsurance.Scooter).click()
        console.log("User able to Click on Scooter")
    });
});