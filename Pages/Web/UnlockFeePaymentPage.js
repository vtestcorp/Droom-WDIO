class unlockFeePayment {
     get buy() {return $('//a[text()="Buy"]')}
     get carCategory() {return $('(//div[text()="Car"])[2]')}
     get bikeCategory() {return $('(//div[text()="bike"])[1]')}
     get addnewRequirement() {return $('//span[text()=" + Add New Requirement"]')}
   // get submitRequirement() { return $('//i[@class="web-g-icon web-g-icon-my-requirement d-font-size-22 d-display-inline-block d-position-relative d-valign-middle"]') }
    get carOption() { return $('(//span[@class="s-MuiButton-label"])[1]') }
    get Condition() { return $('//span[text()="Used"]') }
    get newButton() {return $('(//span[text()="New"])[1]')}
    get currentLocation() { return $('//div[text()="Current Location"]') }
    get nextButton() { return $('//span[text()="Next "]') }
    get nextButton1() {return $('//span[text()="Next"]')}
    get vehicleDetails() { return $('//label[text()="Enter Your Vehicle Details"]') }
    get vehicleName() { return $('//input[@placeholder="E.g Maruti Suzuki Swift 2017 LDI"]') }
    get selectVehicle() { return $('//a[text()="Maruti Suzuki Swift GLAM 2005"]') }
    get basicDetails() { return $('//h5[text()="Now Share Your Dream Vehicle Basic Details"]') }
    get lastStep() { return $('//h5[text()="Last Step to Go! "]') }
    get insurance() { return $('(//span[@class="s-MuiIconButton-label"])[2]') }
    get loan() { return $('(//span[@class="s-MuiIconButton-label"])[3]') }
    get RCTransfer() { return $('(//span[@class="s-MuiIconButton-label"])[4]') }
    get roadSideAssistance() { return $('(//span[@class="s-MuiIconButton-label"])[5]') }
    get submit() {return $('//span[text()="Submit"]')}
    get viewMatch() {return $('//span[text()="View All Matches "]')}
   // get submitAndView() { return $('//span[text()="Submit & View All Matches "]') }
    get bestMatches() { return $('//span[text()="Best Matches"]') }
    get carpayButton() { return $('//p[text()="999"]') }
    get bikeOption() { return $('//span[text()="Bike"]') }
    get bikeName() { return $('//input[@placeholder="E.g Bajaj Pulsar 2018 150cc"]') }
    get bikeModel() { return $('(//li[@class="d-block d-margin-bottom-10 d-font-size-13"])[1]') }
    get bikepayButton() { return $('//p[text()="499"]') }
    get payBestMatchFee() { return $('//span[text()="Pay Best Match Unlock Fee"]') }
    get continueToPay() { return $('//button[text()="Continue to Pay  ₹ "]') }
    get addressTab() { return $('//span[text()="Address"]') }
    get paymentTab() { return $('//span[text()="Payment Method"]') }
    get reviewPayTab() { return $('//span[text()="Review & Pay"]') }
   // get name() { return $('//h6[text()="Name"]') }
    get email() { return $('//h6[text()="Email"]') }
    get phone() { return $('//h6[text()="Phone"]') }
    get continueToAddress() { return $('//a[text()="Continue to Addresses"]') }
    get pincode() { return $('//input[@id="pincode"]') }
    get address() { return $('//textarea[@id="address_field"]') }
    get saveBtn() { return $('//button[text()="Save"]') }
    get continueToPay() { return $('//input[@value="Continue to Payment"]') }
    get paymentPageHeading() { return $('//h2[text()="Choose How You Want to Pay  ₹ "] ') }
    get selectAnotherVehicle() { return $('//p[text()=" Add Another Vehicle"]') }
    get clickOnMatch() { return $('(//div[@class="bm-MuiPaper-root bm-MuiPaper-elevation0 bm-MuiPaper-rounded"])[1]') }
    get bookNowButton() {return $('//button[text()="Book Now"]')}
    get proceedTocheckout() { return $('//span[text()="Proceed to Checkout"]') }
    get selectvehicle1() { return $('(//a[contains(text(),"Honda City")])[3]') }
    get selectvehicle2() { return $('(//a[contains(text(),"Honda City")])[5]') }
    get payBestMatchFee() { return $('//span[text()="Pay Best Match Unlock Fee"]') }
    get addressTab() { return $('//a[text()=" Address"]') }
    get editAddress() { return $('(//a[text()="Edit"])[1]') }
    get removeAddress() { return $('//a[text()="Remove"]') }
    get addNewAdd() {return $('//span[text()="Add New Address"]')}
    get name() {return $('//span[@class="crtadd-MuiTypography-root crtadd-MuiFormControlLabel-label crtadd-MuiTypography-body1"]')}
    get selectBike1() { return $('(//a[contains(text(),"Bajaj Pulsar")])[3]') }
    get selectBike2() { return $('(//a[contains(text(),"Bajaj Pulsar")])[4]') }
    get clocation() {return $('//input[@id="react-select-2-input"]')}
    get punelocation() {return $('//div[text()="Pune, Maharashtra, India"]')}
    get add1() {return $('//div[@class="crtadd-crtadd49"]')}
    get logo() {return $('//a[@href="/"]')}
    //new locator
    get home() {return $('//a[text()="Home"]')}
    get heading() {return $('//h5[text()="Great! More Information Gives Best Results"]')}

    

    async submitRequirements() {
        await (await this.submitRequirement).waitForExist()
        await (await this.submitRequirement).click()
        console.log('User click on submit requirements ')
    }
    async SelectCarCondition() {
        await (await this.carOption).click()
        console.log('Select Car from option ')
        await (await this.Condition).click()
        console.log('select used car condition ')
    }
    async selectCurrentLocation() {
        await (await this.currentLocation).click()
        await (await this.newButton).click()
        await (await this.Condition).click()
        await (await this.nextButton).click()
        console.log('Click on next Button')
    }
    async enterYourVehicleDetails() {
        await (await this.vehicleDetails).waitForExist()
        console.log('vehicle Details Displayed')
    }
    async selectCar() {
        await (await this.vehicleName).setValue("Swift")
        await (await this.selectVehicle).click()
        console.log('User selected vehicle as per the requirement ')
        await (await this.nextButton).click()
        console.log('Click on next Button')
    }
    async basicDetailsDisplay() {
        await (await this.basicDetails).waitForExist({ timeout: 20000 })
        console.log('Now Share Your Dream Vehicle Basic Details Display')
        await (await this.nextButton).click()
        console.log('Click on next Button')
    }
    async lastStepforcomplete() {
        //await (await this.lastStep).waitForExist({ timeout: 20000 })
        await browser.pause('2000')
        //await (await this.insurance).click()
      // await (await this.loan).click()
       // await (await this.RCTransfer).click()
       // await (await this.roadSideAssistance).click()
        await (await this.nextButton).click()
        console.log('Click on next Button')
        await browser.pause('2000')
        //await (await this.nextButton).click()
      //  console.log('Click on next Button')
       // await browser.pause('2000')
        await (await this.nextButton1).click()
        console.log('Click on next Button1')
    }
    async SelectBikeCondition() {
        await (await this.bikeOption).click()
        console.log('Select Bike From Option')
        await (await this.Condition).click()
        console.log('select used Bike condition ')
    }
    async selectBike() {
        await (await this.bikeName).setValue("pulsar")
        await (await this.bikeModel).click()
        console.log('User selected Bike as per the requirement')
        await (await this.nextButton).click()
        console.log('Click on next Button')
        await (await this.nextButton).click()
        await browser.pause('2000')
        await (await this.nextButton).click()
        console.log('Click on next Button')
        await browser.pause('2000')
        await (await this.nextButton1).click()
        console.log('Click on next Button1') 
        
    }

    async verifyAccountTab() {
        await (await this.accountTab).click()
        console.log('Click on Account Tab')
        console.log('Application shows user Details: ')
    }

    async selectCarForBestMatch() {
        await (await this.vehicleName).setValue("Honda City")
        await (await this.selectvehicle1).click()
       // await (await this.selectAnotherVehicle).waitForExist()
       // await (await this.selectAnotherVehicle).click()
       // await (await this.vehicleName).setValue("Honda City")
     //   await (await this.selectvehicle2).click()
        console.log("User selected vehicle as per the requirement")
        await (await this.nextButton).click()
        console.log("clicked on next button")
    }
    async selectBikeForBestMatch() {
        await (await this.bikeName).setValue("Pulsar")
        await (await this.selectBike1).click()
        await (await this.selectAnotherVehicle).waitForExist()
        await (await this.selectAnotherVehicle).click()
        await (await this.bikeName).setValue("pulsar")
        await (await this.selectBike2).click()
        console.log("User selected Bike as per the requirement")
        await (await this.nextButton).click()
      
    }
    async selectCurrentLocationForMatch() {
        await (await this.clocation).setValue("Pune")
        await (await this.punelocation).click()
        await (await this.newButton).click()
        await (await this.Condition).click()
        await (await this.nextButton).click()
        console.log('Click on next Button')
    }
    
}
module.exports = new unlockFeePayment();