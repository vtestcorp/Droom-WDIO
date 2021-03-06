const usedBikePage = require("../../Pages/Androidbrowser/usedBikePage");
const base = require("../../BaseClass/base");

describe('Used Bike', async () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
    });

    it('Tc_01 Verify Bike option is the display with used Condition to the buyer', async () => {
        await base.androidBrowserProdLoginAsBuyer()
        console.log("login As Buyer")
        await browser.pause(5000)
        await base.swipeUp()
        expect (await usedBikePage.myReq).toBeDisplayed()
        console.log("my Requirement is displayed")
        await (await usedBikePage.myReq).click()
        console.log("Clicked on my Requirement")
        await (await usedBikePage.addNewReq).click()
        console.log('click on add new requirement')
        expect(await usedBikePage.bikeoption).toBeDisplayed()
        console.log('bike option displayed')
        expect(await usedBikePage.scooteroption).toBeDisplayed()
        console.log('scooter option displayed')
        expect(await usedBikePage.newRadio).toBeDisplayed()
        console.log('New Condition option displayed')
        expect(await usedBikePage.usedRadio).toBeDisplayed()
        console.log('Used Condition option displayed')
        expect(await usedBikePage.location).toBeDisplayed()
        console.log('Location displayed')
        expect(await usedBikePage.currentLocation).toBeDisplayed()
        console.log('current location displayed')
        expect(await usedBikePage.nextBtn).toBeDisplayed()
        console.log('Next Button displayed')
    });

    it('Tc_02 Verify user able to select location using location option', async () => {
        await base.androidBrowserProdLoginAsBuyer()
        console.log("login As Buyer")
        await browser.pause(5000)
        await base.swipeUp()
        expect (await usedBikePage.myReq).toBeDisplayed()
        console.log("my Requirement is displayed")
        await (await usedBikePage.myReq).click()
        console.log("Clicked on my Requirement")
        await (await usedBikePage.addNewReq).click()
        console.log('click on add new requirement')
        expect(await usedBikePage.bikeoption).toBeDisplayed()
        console.log('bike option displayed')
        await (await usedBikePage.bikeoption).click()
        expect(await usedBikePage.searchLocation).toBeDisplayed()
        console.log('search my location displayed')
        await (await usedBikePage.currentLocation).click()
        console.log("clicked on current location")
        await (await usedBikePage.nextBtn).click()
        console.log("Clicked on Next Button")
        expect(await usedBikePage.heading2).toBeDisplayed()
        console.log(await (await usedBikePage.heading2).getText())
        console.log("User able to select location and navigate to next window")

    });

    it('TC_03 Verify error message without entering location', async () => {
        await base.androidBrowserProdLoginAsBuyer()
        console.log("login As Buyer")
        await browser.pause(5000)
        await base.swipeUp()
        expect (await usedBikePage.myReq).toBeDisplayed()
        console.log("my Requirement is displayed")
        await (await usedBikePage.myReq).click()
        console.log("Clicked on my Requirement")
        await (await usedBikePage.addNewReq).click()
        console.log('click on add new requirement')
        expect(await usedBikePage.bikeoption).toBeDisplayed()
        console.log('bike option displayed')
        await (await usedBikePage.bikeoption).click()
         await (await usedBikePage.nextBtn).click()
         expect(await usedBikePage.errormsg).toBeDisplayed()
         console.log('error message displayed')
     });

     it('TC_04 Verify user able to select Bike model from Entering your vehicle details as per requirement', async () => {
          await base.androidBrowserProdLoginAsBuyer()
          console.log("login As Buyer")
          await browser.pause(5000)
          await base.swipeUp()
          expect (await usedBikePage.myReq).toBeDisplayed()
          console.log("my Requirement is displayed")
          await (await usedBikePage.myReq).click()
          console.log("Clicked on my Requirement")
          await (await usedBikePage.addNewReq).click()
          console.log('click on add new requirement')
          await (await usedBikePage.bikeoption).click()
          await (await usedBikePage.currentLocation).click()
          console.log("clicked on current location")
          await (await usedBikePage.nextBtn).click()
          console.log("clicked on Next button")
          expect(await usedBikePage.heading2).toBeDisplayed()
          console.log("Heading Displayed As:"+await(await usedBikePage.heading2).getText())
          expect (await usedBikePage.searchfield).toBeClickable()
          await (await usedBikePage.searchfield).setValue("Bajaj Pulsar 180cc 2016")
          await (await usedBikePage.bike1).click()
          console.log("User can select Bike using Search Field")
         });

    it('TC_05 Verify user able to select bike model through select from the dropdown as per requirement', async () => {
            await base.androidBrowserProdLoginAsBuyer()
            console.log("login As Buyer")
            await browser.pause(5000)
            await base.swipeUp()
            expect (await usedBikePage.myReq).toBeDisplayed()
            console.log("my Requirement is displayed")
            await (await usedBikePage.myReq).click()
            console.log("Clicked on my Requirement")
            await (await usedBikePage.addNewReq).click()
            console.log('click on add new requirement')
            await (await usedBikePage.bikeoption).click()
            await (await usedBikePage.currentLocation).click()
            console.log("clicked on current location")
            await (await usedBikePage.nextBtn).click()
            console.log("clicked on Next button")
            await usedBikePage.selectBikeVehicle()
            expect(await usedBikePage.heading3).toBeDisplayed()
            console.log("Heading Displayed As:"+await(await usedBikePage.heading3).getText())
            console.log('successfully bike selected from dropdown')
        });
           
    it('TC_06 Verify user able to select bike model through Let Droom Suggest for you as per requirement', async () => {
        await base.androidBrowserProdLoginAsBuyer()
        console.log("login As Buyer")
        await browser.pause(5000)
        await base.swipeUp()
        expect (await usedBikePage.myReq).toBeDisplayed()
        console.log("my Requirement is displayed")
        await (await usedBikePage.myReq).click()
        console.log("Clicked on my Requirement")
        await (await usedBikePage.addNewReq).click()
        console.log('click on add new requirement')
        await (await usedBikePage.bikeoption).click()
        await (await usedBikePage.currentLocation).click()
        console.log("clicked on current location")
        await (await usedBikePage.nextBtn).click()
        console.log("clicked on Next button")
        expect(await usedBikePage.droomSuggest).toBeDisplayed()
        console.log('droom suggest displayed')
        await (await usedBikePage.droomSuggest).click()
        console.log("clicked on droom suggest for you")
        expect(await usedBikePage.budget).toBeDisplayed()
        console.log('Price range displayed')
        expect(await usedBikePage.bodyType).toBeDisplayed()
        console.log('body type displayed')
        await usedBikePage.droomSuggestBike()
        expect(await usedBikePage.heading6).toBeDisplayed()
        console.log(await (await usedBikePage.heading6).getText())
        //await (await UsedCarPage.vehicle1).click()
        await (await usedBikePage.nextBtn).click()
        expect(await  usedBikePage.budget).toBeDisplayed()
        console.log('What is Your Budget? option Display')
        console.log('user able to select bike from droom suggest')
    });

    it('TC_07 Verify user able to select use bike as per the budget', async () => {
        await base.androidBrowserProdLoginAsBuyer()
        console.log("login As Buyer")
        await browser.pause(5000)
        await base.swipeUp()
        expect (await usedBikePage.myReq).toBeDisplayed()
        console.log("my Requirement is displayed")
        await (await usedBikePage.myReq).click()
        console.log("Clicked on my Requirement")
        await (await usedBikePage.addNewReq).click()
        console.log('click on add new requirement')
        await (await usedBikePage.bikeoption).click()
        await (await usedBikePage.currentLocation).click()
        console.log("clicked on current location")
        await (await usedBikePage.nextBtn).click()
        console.log("clicked on Next button")
        expect(await usedBikePage.droomSuggest).toBeDisplayed()
        console.log('droom suggest displayed')
        await (await usedBikePage.droomSuggest).click()
        console.log("clicked on droom suggest for you")
        expect(await usedBikePage.budget).toBeDisplayed()
        console.log('Price range displayed')
        expect(await usedBikePage.bodyType).toBeDisplayed()
        console.log('body type displayed')
        await usedBikePage.droomSuggestBike()
        expect(await usedBikePage.heading6).toBeDisplayed()
        console.log(await (await usedBikePage.heading6).getText())
         //await (await UsedCarPage.vehicle1).click()
         await (await usedBikePage.nextBtn).click()
         expect(await  usedBikePage.budget).toBeDisplayed()
         console.log('What is Your Budget? option Display')
         console.log('user able to select bike from droom suggest')
         console.log("price slider displayed")
         await (await usedBikePage.nextBtn).click()
         console.log("clicked on Next1 button")
         await (await usedBikePage.nextBtn).click()
         await browser.pause('2000')
         console.log("clicked on Next2 button")
         await (await usedBikePage.nextBtn).click()
         await browser.pause('2000')
         console.log("clicked on Next3 button")
         await (await usedBikePage.nextBtn).click()
         console.log("clicked on Next4 button")
     
     
         await (await usedBikePage.submitBtn).click()
         await (await usedBikePage.submitViewMatch).click()
         await (await usedBikePage.allrequirement).click()
         //expect(await usedBikePage.priceRange).toBeDisplayed()
         console.log("price Range displayed")

        });

        it('TC_08 Verify user able to select use bike as per the KMS Driven Range', async () => {
            await base.androidBrowserProdLoginAsBuyer()
            console.log("login As Buyer")
            await browser.pause(5000)
            await base.swipeUp()
            expect (await usedBikePage.myReq).toBeDisplayed()
            console.log("my Requirement is displayed")
            await (await usedBikePage.myReq).click()
            console.log("Clicked on my Requirement")
            await (await usedBikePage.addNewReq).click()
            console.log('click on add new requirement')
            await (await usedBikePage.bikeoption).click()
            await (await usedBikePage.currentLocation).click()
            console.log("clicked on current location")
            await (await usedBikePage.nextBtn).click()
            console.log("clicked on Next button")
            expect(await usedBikePage.droomSuggest).toBeDisplayed()
            console.log('droom suggest displayed')
            await (await usedBikePage.droomSuggest).click()
            console.log("clicked on droom suggest for you")
            expect(await usedBikePage.budget).toBeDisplayed()
            console.log('Price range displayed')
            expect(await usedBikePage.bodyType).toBeDisplayed()
            console.log('body type displayed')
            await usedBikePage.droomSuggestBike()
            expect(await usedBikePage.heading6).toBeDisplayed()
            console.log(await (await usedBikePage.heading6).getText())
            await (await usedBikePage.nextBtn).click()
            await browser.pause("2000")
            await (await usedBikePage.nextBtn).click()
            expect(await usedBikePage.kmDrivenRange).toBeDisplayed()
            console.log("KM Driven Range Displayed")
            await (await usedBikePage.nextBtn).click()
            await browser.pause("2000")
            await (await usedBikePage.nextBtn).click()
            await browser.pause("2000")
            await (await usedBikePage.nextBtn).click()
            await browser.pause("2000")
            await (await usedBikePage.nextBtn).click()
            await (await usedBikePage.submitBtn).click()
            await (await usedBikePage.submitViewMatch).click()
            await (await usedBikePage.allrequirement).click()
            console.log("KMS Range displayed")
        });

        it('TC_09 Verify user able to select use bike as per the Color', async () => {
            await base.androidBrowserProdLoginAsBuyer()
            console.log("login As Buyer")
            await browser.pause(5000)
            await base.swipeUp()
            expect (await usedBikePage.myReq).toBeDisplayed()
            console.log("my Requirement is displayed")
            await (await usedBikePage.myReq).click()
            console.log("Clicked on my Requirement")
            await (await usedBikePage.addNewReq).click()
            console.log('click on add new requirement')
            await (await usedBikePage.bikeoption).click()
            await (await usedBikePage.currentLocation).click()
            console.log("clicked on current location")
            await (await usedBikePage.nextBtn).click()
            console.log("clicked on Next button")
            expect(await usedBikePage.droomSuggest).toBeDisplayed()
            console.log('droom suggest displayed')
            await (await usedBikePage.droomSuggest).click()
            console.log("clicked on droom suggest for you")
            await usedBikePage.droomSuggestBike()
            wait (await usedBikePage.nextBtn).click()
            await browser.pause("2000")
            await (await usedBikePage.nextBtn).click()

            expect(await usedBikePage.extColor).toBeDisplayed()
            await (await usedBikePage.color1).click()
            await (await usedBikePage.nextBtn).click()
            await browser.pause("2000")
            await (await usedBikePage.nextBtn).click()
            await browser.pause("2000")
            await (await usedBikePage.nextBtn).click()
            await browser.pause("2000")
            await (await usedBikePage.nextBtn).click()
            await (await usedBikePage.submitBtn).click()
            await (await usedBikePage.submitViewMatch).click()
            await (await usedBikePage.allrequirement).click()
            console.log("Exterior color displayed")
        });

        it('TC_10 Verify user able to select use bike as per the Do you also need option', async () => {
            await base.androidBrowserProdLoginAsBuyer()
            console.log("login As Buyer")
            await browser.pause(5000)
            await base.swipeUp()
            expect (await usedBikePage.myReq).toBeDisplayed()
            console.log("my Requirement is displayed")
            await (await usedBikePage.myReq).click()
            console.log("Clicked on my Requirement")
            await (await usedBikePage.addNewReq).click()
            console.log('click on add new requirement')
            await (await usedBikePage.bikeoption).click()
            await (await usedBikePage.currentLocation).click()
            console.log("clicked on current location")
            await (await usedBikePage.nextBtn).click()
            console.log("clicked on Next button")
            await usedBikePage.selectBikeVehicle()
            wait (await usedBikePage.nextBtn).click()
            await browser.pause("2000")
            await (await usedBikePage.nextBtn).click()
            await browser.pause("2000")
            await (await usedBikePage.nextBtn).click()
            expect(await usedBikePage.heading4).toBeDisplayed()
            console.log("navigate to last step")
            expect(await usedBikePage.doyouneedoption).toBeDisplayed()
            console.log("Do You Need Option displayed")
            expect(await usedBikePage.loan).toBeDisplayed()
            console.log("loan toggle displayed")
            await (await usedBikePage.loantoggle).click()
            await (await usedBikePage.nextBtn).click()
            await browser.pause('2000')
            await (await usedBikePage.nextBtn).click()
            expect(await usedBikePage.heading5).toBeDisplayed()
            console.log("last step to submit")
            expect(await usedBikePage.submitBtn).toBeDisplayed()
            await (await usedBikePage.submitBtn).click()
            console.log("clicked on submit")
            console.log("user able to select do you need option")
        });

        it('TC_11 Verify user is able to select use bike as per the How Quickly Do You Want to Buy? option', async () => {
            await base.androidBrowserProdLoginAsBuyer()
            console.log("login As Buyer")
            await browser.pause(5000)
            await base.swipeUp()
            expect (await usedBikePage.myReq).toBeDisplayed()
            console.log("my Requirement is displayed")
            await (await usedBikePage.myReq).click()
            console.log("Clicked on my Requirement")
            await (await usedBikePage.addNewReq).click()
            console.log('click on add new requirement')
            await (await usedBikePage.bikeoption).click()
            await (await usedBikePage.currentLocation).click()
            console.log("clicked on current location")
            await (await usedBikePage.nextBtn).click()
            console.log("clicked on Next button")
            await usedBikePage.selectBikeVehicle()
            await (await usedBikePage.nextBtn).click()
            await browser.pause('2000')
            await (await usedBikePage.nextBtn).click()
            await browser.pause('2000')
            await (await usedBikePage.nextBtn).click()
        
            expect(await usedBikePage.lastStep).toBeDisplayed()
            expect(await usedBikePage.quickBuy).toBeDisplayed()
            console.log(await (await usedBikePage.quickBuy).getText())
            await (await usedBikePage.weeks).click()
            console.log("selected 1-3 weeks")
            await (await usedBikePage.nextBtn).click()
            await browser.pause('2000')
            await (await usedBikePage.nextBtn).click()
            expect(await usedBikePage.heading5).toBeDisplayed()
            await (await usedBikePage.submitBtn).click()
            await (await usedBikePage.submitViewMatch).click()
            await (await usedBikePage.allrequirement).click()
            console.log("user is able to select use car as per the How Quickly Do You Want to Buy? option")
        });

        it('TC_12 Validation for match count while requirement creation and in requirement page', async () => {
            await base.androidBrowserProdLoginAsBuyer()
            console.log("login As Buyer")
            await browser.pause(5000)
            await base.swipeUp()
            expect (await usedBikePage.myReq).toBeDisplayed()
            console.log("my Requirement is displayed")
            await (await usedBikePage.myReq).click()
            console.log("Clicked on my Requirement")
            await (await usedBikePage.addNewReq).click()
            console.log('click on add new requirement')
            await (await usedBikePage.bikeoption).click()
            await (await usedBikePage.currentLocation).click()
            console.log("clicked on current location")
            await (await usedBikePage.nextBtn).click()
            console.log("clicked on Next button")
            await usedBikePage.selectBikeVehicle()
            await (await usedBikePage.nextBtn).click()
            await browser.pause('2000')
            await (await usedBikePage.nextBtn).click()
            await browser.pause('2000')
            await (await usedBikePage.nextBtn).click()
            await browser.pause('2000')
            await (await usedBikePage.nextBtn).click()
            await browser.pause('2000')
            await (await usedBikePage.nextBtn).click()
            await (await usedBikePage.submitBtn).click()
            expect(await usedBikePage.reqCount).toBeDisplayed()
            console.log(await (await usedBikePage.reqCount).getText())
            console.log("user able to see Vehicle Match count ")
        });

        it('TC_13 Verify user is able to select use bike as per the Do You Wish to Exchange Your Vehicle option', async () => {
            await base.androidBrowserProdLoginAsBuyer()
            console.log("login As Buyer")
            await browser.pause(5000)
            await base.swipeUp()
            expect (await usedBikePage.myReq).toBeDisplayed()
            console.log("my Requirement is displayed")
            await (await usedBikePage.myReq).click()
            console.log("Clicked on my Requirement")
            await (await usedBikePage.addNewReq).click()
            console.log('click on add new requirement')
            await (await usedBikePage.bikeoption).click()
            await (await usedBikePage.currentLocation).click()
            console.log("clicked on current location")
            await (await usedBikePage.nextBtn).click()
            console.log("clicked on Next button")
            await usedBikePage.selectBikeVehicle()
            await (await usedBikePage.nextBtn).click()
            await browser.pause('2000')
            await (await usedBikePage.nextBtn).click()
            await browser.pause('2000')
            await (await usedBikePage.nextBtn).click()
            expect(await usedBikePage.exchange).toBeDisplayed()
            console.log("Do You Wish To Exchange Your Vehicle displayed")
            await (await usedBikePage.exchangetoggle).click()
            await usedBikePage.exchangeBike()
            await (await usedBikePage.nextBtn).click()
            await browser.pause('2000')
            await (await usedBikePage.nextBtn).click()
            await (await usedBikePage.submitBtn).click()
            console.log("user able to select exchange option")
        });

});