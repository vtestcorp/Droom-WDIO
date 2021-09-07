const { default: $ } = require("webdriverio/build/commands/browser/$")

class VehicleInsurance {
 get insurance() { return $('//a[text()="Get Insurance"]') }
 get vehicleInsurance() {return $('//a[text()="Vehicle Information"]')}
 get msg() {return $('//h2[text()="Apply for Vehicle Insurance in 3 Easy Steps"]')}
 get personalInformation() {return $('//a[text()="Personal Information"]')}
 get insuranceInformation() {return $('//a[text()="Insurance Information"]')}
 get vehicleCondition() {return $('//h3[text()="Select Vehicle Condition"]')}
 get condition() {return $('(//label[text()="Used"])[1]')}
 get vehicleType() {return $('//label[text()="Car"]')}
 get registrationNo() {return $('//input[@id="rcNumber"]')}
 get vehicleDetails() {return $('//input[@name="product_title"]')}
 get nextBtn() {return $('(//button[text()="Next"])[1]')}
 get selectModel() {return $('(//a[@class="d-text-black"])[1]')}
 get heading() {return $('//h1[text()="Get the Best Insurance Cover for your Vehicle"]')}
 get name() {return $('//input[@name="first_name"]')}
 get email() {return $('//input[@name="email"]')}
 get phone() {return $('//input[@name="phone"]')}
 get nextButton() {return $('(//button[text()="Next"])[2]')}

 async vehicleInsuranceProcess() {
    await (await this.condition).click()
    await (await this.vehicleType).click()
    await (await this.registrationNo).setValue("MH13Y4444")
    console.log("User entered Valid Registration Number")
    await (await this.vehicleDetails).setValue("Tata Indigo 2003")
    await (await this.selectModel).click()
    console.log("User select Vehicle Model")
     await (await this.nextBtn).waitForDisplayed({ timeout: 5000 })
    await (await this.nextBtn).click()
    console.log("User Click On next Button")
    expect(await this.personalInformation).toBeDisplayed()
    console.log("Personal Information Tab Dispalyed")
    await (await this.name).clearValue()
    await(await this.name).setValue("Xyz")
    await (await this.email).clearValue()
    await(await this.email).setValue("xyz@gmail.com")
    await (await this.phone).clearValue()
    await(await this.phone).setValue("1234567890")
    await (await this.nextButton).waitForDisplayed({ timeout: 5000 })
    await (await this.nextButton).click()

 }

}
module.exports = new VehicleInsurance();