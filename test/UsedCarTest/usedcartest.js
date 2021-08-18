
describe('Used Car',async () =>{
    
    it('Verify car option is the display with used Condition to the buyer',async () =>{
        await (await $('(//button[@class="close em-show-later"])[2]'))
        await (await $('#user_details').moveTo());
        const input = await $('//a[text()="Log In"]')
        input.click();
        await $('#userLogin').setValue("swapnali.payghan@vtestcorp.com") 
        const clickOnEmail = await $('//li[@class="active login-vai"]')
        clickOnEmail.click();
        await $('#password').setValue("Vtest@123")
        const EnterPAss = await $('//input[@value="Login"]')
        EnterPAss.click();
        await $('//span[text()="Submit "]').click()
        await $('(//span[@class="s-MuiButton-label"])[1]').click()
        await $('//span[text()="Used"]').click()
        const car = await $('//span[text()="Car"]')
        expect(car).toBeDisplayed()
        const bike = await $('//span[text()="Bike"]')
        expect(bike).toBeDisplayed()
        const scooter = await $('//span[text()="Scooter"]')
        expect(scooter).toBeDisplayed()
        const newButton = await $('(//span[text()="New"])[2]')
        expect(newButton).toBeDisplayed()
        const used = await $('//span[text()="Used"]')
        expect(used).toBeDisplayed()
        const usedButton = await $('(//input[@class="s-s42"])[2]')
        console.log(await usedButton.isSelected())
        const newRButton = await $('(//input[@class="s-s42"])[1]')
        console.log(await newRButton.isSelected())
        const location = await $('//p[text()="Location"]')
        expect(location).toBeDisplayed()
        const currentLocation = await $('//div[text()="Current Location"]')
        expect(currentLocation).toBeDisplayed()
        const nextButton = await $('//span[text()="Next "]')
        expect(nextButton).toBeDisplayed()
        
    });

    it('Verify user able to select location using location option',async () =>{
        browser.url('/');
        await $('//span[text()="Submit "]').click()
        await $('(//span[@class="s-MuiButton-label"])[1]').click()
        await $('//span[text()="Used"]').click()
        const car = await $('//span[text()="Car"]')
        expect(car).toBeDisplayed()
        const bike = await $('//span[text()="Bike"]')
        expect(bike).toBeDisplayed()
        const scooter = await $('//span[text()="Scooter"]')
        expect(scooter).toBeDisplayed()
        const newButton = await $('(//span[text()="New"])[2]')
        expect(newButton).toBeDisplayed()
        const used = await $('//span[text()="Used"]')
        expect(used).toBeDisplayed()
        const location = await $('//p[text()="Location"]')
        expect(location).toBeDisplayed()
        const currentLocation = await $('//div[text()="Current Location"]')
        expect(currentLocation).toBeDisplayed()
        const nextButton = await $('//span[text()="Next "]')
        expect(nextButton).toBeDisplayed() 
        currentLocation.click()
        const pune = await $('//div[text()="Pune, Maharashtra, India"]')
        expect(pune).toBeDisplayed()
        nextButton.click();
        
        
        
    });
    it('Verify error message without entering location',async () =>{
        browser.url('/');
        await $('//span[text()="Submit "]').click()
        await $('(//span[@class="s-MuiButton-label"])[1]').click()
        await $('//span[text()="Used"]').click()
        const car = await $('//span[text()="Car"]')
        expect(car).toBeDisplayed()
        const bike = await $('//span[text()="Bike"]')
        expect(bike).toBeDisplayed()
        const scooter = await $('//span[text()="Scooter"]')
        expect(scooter).toBeDisplayed()
        const newButton = await $('(//span[text()="New"])[2]')
        expect(newButton).toBeDisplayed()
        const used = await $('//span[text()="Used"]')
        expect(used).toBeDisplayed() 
        const location = await $('//p[text()="Location"]')
        expect(location).toBeDisplayed()
        const currentLocation = await $('//div[text()="Current Location"]')
        expect(currentLocation).toBeDisplayed()
        const nextButton = await $('//span[text()="Next "]')
        expect(nextButton).toBeDisplayed() 
        nextButton.moveTo();
        nextButton.click();
        //await $('(//span[@class="s-MuiButton-label"])[4]').click()
        const errerMsg = await $('//p[text()="Please Select The City"]')
        expect(errerMsg).toBeDisplayed()
        
        
        
    });

});