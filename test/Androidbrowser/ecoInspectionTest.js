const Base = require('../../BaseClass/base')
const ecoPage = require('../../Pages/Androidbrowser/ecoInspectionPage')
describe('ECOInspection', () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
    });
 it('TC_01 Verify the Functionaliy of Buyer on ECO', async () => {
        await browser.url('/eco')   
        await (await ecoPage.Buyer).isDisplayed()
        console.log("Buyer is availbale on ECO page")
        await (await ecoPage.Seller).isDisplayed()
        console.log("Seller is availbale on ECO page")
        await (await ecoPage.Technician).isDisplayed()
        console.log("Technician is availbale on ECO page")
        await(await ecoPage.Buyer).click()
        console.log("Clicked on Buyer")
        expect(await ecoPage.Check_Repair_Estimate).toBeDisplayed()
        console.log("Check Repair Estimate is displayed")
        await(await ecoPage.Check_Repair_Estimate).click()
        console.log("Clicked on Check Repair Estimate")
        await(await ecoPage.checkRepairEstiHeading).waitForDisplayed({timeout:15000})
        expect(await ecoPage.checkRepairEstiHeading).toBeDisplayed()
        console.log("Heading is displayed as : "+await(await ecoPage.checkRepairEstiHeading).getText())
        
    });
     it('TC_02 Verify the Functionality of Seller on ECO with Register as Vendor', async () => {
        await browser.url('https://ecoinspection.in/signup')   
        //await  ecoPage.traverseToECO()
        //await (await ecoPage.Seller).click()
        //expect(ecoPage.RegiAsVendor).toBeDisplayed()
        //console.log("Register As a Vendor is Displayed")
        //await (await ecoPage.RegiAsVendor).click()
        //console.log("Clicked on Resister as Vendor")
        expect(ecoPage.createUrAccount).toBeDisplayed()
        console.log("Create Your Account heading is displayed")
        expect(ecoPage.mandatoryNote).toBeDisplayed()
        console.log("All fields are mandatory note is displayed")
        expect(ecoPage.fName).toBeDisplayed()
        console.log("Full Name fields shown")
        expect(ecoPage.emailId).toBeDisplayed()
        console.log("Email Id  fields shown")
        expect(ecoPage.PhoneNo).toBeDisplayed()
        console.log("Phone Number fields shown")
        expect(ecoPage.pinCode).toBeDisplayed()
        console.log(" Pin Code fields shown")
        Base.swipeUp()
        expect(ecoPage.cityName).toBeDisplayed()
        console.log("City Name fields shown")
        expect(ecoPage.state).toBeDisplayed()
        console.log("State fields shown")
        expect(ecoPage.Building).toBeDisplayed()
        console.log("Building/Area/Locality fields shown")
        expect(ecoPage.contactName).toBeDisplayed()
        console.log("Contact Name Filed is Shown")
        expect(ecoPage.contactEmail).toBeDisplayed()
        console.log("Contact Email Filed is Shown")
        Base.swipeUp()
        expect(ecoPage.contactPhone).toBeDisplayed()
        console.log("Contact Phone Filed is Shown")
        expect(ecoPage.submitBtn).toBeDisplayed()
        console.log("Submit Button  Filed is Shown")
        expect(ecoPage.flowForVendor).toBeDisplayed()
        console.log("Inspection flow for Vendor is Shown")        
    })
    it('TC_03:Verify the Functionality of Seller on ECO with Register as Technician', async () => {
        await browser.url('https://ecoinspection.in/signup') 
       // await ecoPage.traverseToECO()
       //expect(await ecoPage.Technician).toBeDisplayed()
       //console.log("Seller Displayed")
        //await (await ecoPage.Technician).click()
        //console.log("Clicked on Seller Option")
       // expect(ecoPage.seller_RegiAsTechnician).toBeDisplayed()
        //console.log("Register As a Technician is Displayed")
        //await browser.pause(5000)
        //await (await ecoPage.seller_RegiAsTechnician).click()
        //console.log("Clicked on Resister as Technician")

        expect(ecoPage.createUrAccount).toBeDisplayed()
        console.log("Create Your Account heading is displayed")
        expect(ecoPage.mandatoryNote).toBeDisplayed()
        console.log("All fields are mandatory note is displayed")
        expect(ecoPage.firstName).toBeDisplayed()
        console.log("First Name field is Shown")
        expect(ecoPage.lastName).toBeDisplayed()
        console.log("Last Name field is Shown")
        expect(ecoPage.emailId).toBeDisplayed()
        console.log("Email ID field is Shown")
        expect(ecoPage.phoneNo).toBeDisplayed()
        console.log("Phone Number field is Shown")
        expect(ecoPage.pinCode).toBeDisplayed()
        console.log("Pin Code field is Shown")
        expect(ecoPage.cityName).toBeDisplayed()
        console.log("Enter City  Name field is Shown")
        expect(ecoPage.stateTechnician).toBeDisplayed()
        console.log("State field is Shown")
        expect(ecoPage.area).toBeDisplayed()
        console.log("Building/Area/Locality field is Shown")
        expect(ecoPage.passwordTechnician).toBeDisplayed()
        console.log("Password field is Shown")
        expect(ecoPage.submitBtn).toBeDisplayed()
        console.log(" Submit Button is Shown")
    })
    it('TC_04 Verify Features on ECO for Four Wheelers', async () => {
       await browser.url('https://ecoinspection.in/signup') 
        //await  ecoPage.traverseToECO()
       //await (await ecoPage.Seller).isDisplayed()
       // console.log("Seller is availbale on ECO page")
        //await (await ecoPage.Seller).click()
        //expect(ecoPage.RegiAsVendor).toBeDisplayed()
        //console.log("Register As a Vendor is Displayed")
        //await (await ecoPage.RegiAsVendor).click()
        //console.log("Clicked on Resister as Vendor")
    
        await(await ecoPage.hamburgurOnEco).click()
        console.log("Traversing to the Features , SIgn Up, Services")
        await (await ecoPage.features).click()
        console.log("Clicked on Features")
        expect(await ecoPage.features_FourWheelers).toBeDisplayed()
        console.log("ECO inspection Page is Displayed for Four wheelers")
        expect(await ecoPage.chechPoint_FourWheeler).toBeDisplayed()
        console.log("checkpoint for four wheelers are displayed")
        expect(await ecoPage.assessment).toBeDisplayed()
        console.log(await (ecoPage.assessment).getText())
        console.log("Inspection Checkpoints for Four Wheeler Displayed");
    });
    it('TC_05 Verify Features on ECO for Two Wheelers', async () => {
        await browser.url('/ecoinspection.in') 
        expect(await ecoPage.featurs_TwoWheelers).toBeDisplayed()
        await(await ecoPage.featurs_TwoWheelers).click()
        console.log("Clicked on Two Wheelers");
        expect(await ecoPage.chechPoint_TwoWheeler).toBeDisplayed()
        console.log(await (await ecoPage.chechPoint_TwoWheeler).getText())
        console.log("Check Points for Two Wheeler displayed")
        expect(await ecoPage.tires_Wheels).toBeDisplayed()
        console.log(await (await ecoPage.tires_Wheels).getText())
    });
    it('TC_06 Verify Car Inspection Service on Eco', async () => {
         await browser.url('/eco') 
        expect(await ecoPage.ECO_Offering).toBeDisplayed()
        console.log("ECO Offering Heading displayed for Cars and the Bikes")
        expect(await ecoPage.Cars).toBeDisplayed()
        console.log("Cars option available under ECO offering")
        expect(await ecoPage.inspectionServices).toBeDisplayed()
        console.log("Inspection services displayed under ECO Offering")
        expect(await ecoPage.basicInspection).toBeDisplayed()
        console.log("Basic inspection is shown")
        await(await ecoPage.cars).click()
        console.log("Clicked On Cars Category")
        expect(await ecoPage.basicAmt).toBeDisplayed()
        console.log("Basic inspection Amount is shown")
        console.log(await (await ecoPage.basicAmt).getText())
       Base.scrollToTextContain("Premium")
        expect(await ecoPage.premiumAmt).toBeDisplayed()
        console.log("Premium inspection is Shown")
        console.log(await (await ecoPage.premiumAmt).getText())
        expect(await ecoPage.premiumPlusAmt).toBeDisplayed()
     
        console.log("Premium plus Inspection shown")
        console.log(await (await ecoPage.premiumPlusAmt).getText())
        expect(await ecoPage.viewSampleReport).toBeDisplayed()
        console.log("Link to Download Sample report is displayed")
    });
    it('TC_07 Verify Bike Inspection  Service on ECO', async () => {
       await browser.url('/eco') 
        expect(await ecoPage.ECO_Offering).toBeDisplayed()
        console.log("ECO Offering Heading displayed for Cars and the Bikes")
        expect(await ecoPage.Bikes).toBeDisplayed()
        console.log("Bikes option available under ECO offering")
        expect(await ecoPage.inspectionServices).toBeDisplayed()
        console.log("Inspection services displayed under ECO Offering")
        await(await ecoPage.Bikes).click()
        console.log("CLicked on Bikes Category")
        expect(await ecoPage.basicInspection).toBeDisplayed()
        console.log("Basic inspection is shown")
        expect(await ecoPage.basicAmtBike).toBeDisplayed()
        console.log("Basic inspection Amount for Bike is shown")
        console.log(await (await ecoPage.basicAmtBike).getText())
          Base.scrollToTextContain("Premium")
        Base.scrollToExactText("Premium Inspection")
        expect(await ecoPage.premiumAmtBike).toBeDisplayed()
        console.log("Premium inspection for Bike is Shown")
        console.log(await (await ecoPage.premiumAmtBike).getText())
        Base.scrollToExactText("Title Certificate")
        expect(await ecoPage.titleCertificate).toBeDisplayed()
        console.log("Premium plus Inspection Under Title Certificate is shown")
        console.log(await (await ecoPage.titleCertificate).getText())
        expect(await ecoPage.viewSampleReport).toBeDisplayed()
        expect(await ecoPage.titleAmt).toBeDisplayed()
        console.log("Title Certificate Amount is Shown")
        console.log(await (await ecoPage.titleAmt).getText())
        console.log("Link to Download Sample report is displayed")
    });
    it('TC_08 Verify scooter Inspection  Service on Eco', async () => {
        await browser.url('https://ecoinspection.in/signup') 
       // await (await ecoPage.Technician).click()
       // await (await ecoPage.seller_RegiAsVendor).waitForEnabled({ timeout: 1500 })
        //expect(ecoPage.seller_RegiAsVendor).toBeDisplayed()
       // console.log("Register As a Vendor is Displayed")
       // await (await ecoPage.seller_RegiAsVendor).click()
       // console.log("Clicked on Resister as Vendor")
        await(await ecoPage.hamburgurOnEco).click()
        console.log("Traversing to the Services,Features,Sign up Options")
         await Base.switchToWebview()
        expect(await ecoPage.service).toBeDisplayed()
        console.log("After click on Hamburger Menu Services tab is shown")
        await (await ecoPage.service).click()
        console.log("CLicked on")
        await Base.switchToNativeApp()
        await (await ecoPage.scooterInspection).click()
        console.log("Clicked on Scooter Inspection")
        expect(await ecoPage.scooterInspectionHeading).toBeDisplayed()
        console.log("Scooter Inspection Heading is shown")
        expect(await ecoPage.scooterInspectionHeading).toHaveTextContaining("Get A Used Scooter Inspection With ECO")
        console.log(await (await ecoPage.scooterInspectionHeading).getText())
        expect(await ecoPage.bookInspection).toBeDisplayed()
        console.log("Book Insoection Button is show")
    });
    it('TC_09 Verify Sign up functionality on ECO', async () => {
           await browser.url('https://ecoinspection.in/signup') 

        //await (await ecoPage.Seller).click()
        //await browser.pause(3000)
        //expect(ecoPage.seller_RegiAsVendor).toBeDisplayed()
        //console.log("Register As a Vendor is Displayed")
        //await (await ecoPage.seller_RegiAsVendor).waitForEnabled({ timeout: 1500 })
        //await (await ecoPage.seller_RegiAsVendor).click()
        //console.log("Clicked on Resister as Vendor")

        await(await ecoPage.hamburgurOnEco).click()
        console.log("Traversing to the Services,Features,Sign up Options")
        expect(await ecoPage.signUp).toBeDisplayed()
        await(await ecoPage.signUp).click()
        console.log("Clicked on Sign Up Functionality")
        expect(await ecoPage.signUpHeading).toBeDisplayed()
        console.log(await (await signUpHeading).getText())     
    });
    it('TC_10 Verify Watch ECO TV functionality', async () => {
        await browser.url('https://ecoinspection.in/signup')  
       // expect(ecoPage.Technician).toBeDisplayed()
        //console.log("Technician is Displayed")
       // await (await ecoPage.Technician).click()
       // await browser.pause(3000)
        //expect(ecoPage.RegiAsTechnician).toBeDisplayed()
        //console.log("Register As a Technician is Displayed")
        //await (await ecoPage.RegiAsTechnician).click()
        //console.log("Clicked on Resister as Technician")
       // await (await ecoPage.createUrAccount).waitForDisplayed({ timeout: 1500 })

        await(await ecoPage.hamburgurOnEco).click()
        console.log("Clicked on Menu")
        console.log("Traversing to the Services,Features,Sign up Options")
        await Base.switchToWebview()
        console.log("Web")
        expect(await ecoPage.watchEcoTv).toBeDisplayed()
        console.log("Watch Eco TV option displayed")
        await(await ecoPage.watchEcoTv).click()
        console.log("Clicked on Watch ECO TV")
        await Base.switchToNativeApp()
        console.log("Native")
        expect(await ecoPage.videoHeading).toBeDisplayed()
        concole.log("Video is displayed")
        expect(await ecoPage.closeVideo).toBeDisplayed()
        concole.log("Close Button is displayed to close the video")
});
});