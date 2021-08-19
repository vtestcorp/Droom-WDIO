
describe('Search Validations', async () => {
       it('TC_02 Verify Search Functionlity on Vista Link', async () => {
       // browser.url('/');
        //  await (await $('(//button[@class="close em-show-later"])[2]'))
        await (await $('#user_details').moveTo());
        const input = await $('//a[text()="Log In"]')
        input.click();
        await $('#userLogin').setValue("vikasy898@gmail.com")

        const clickOnEmail = await $('//li[@class="active login-vai"]')
        clickOnEmail.click();
        await $('#password').setValue("Vtest@123")
        const EnterPAss = await $('//input[@value="Login"]')
        EnterPAss.click();
        await $('//span[text()="Submit "]').click()
        await browser.pause(3000)
        const popup1 = await $('//button[@class="close em-show-later"]')
        popup1.click();
        const allows = await $('//a[text()="Log In"]')
        allows.click();
        console.log("User clicking on Vista link of User cars for Sale");
        const vistalink = await $('//label[text()="Car"]')
        await vistalink.scrollIntoView();
        expect(vistalink).toBeDisplayed()
        vistalink.click();
        const headingVehicle = await $('//h1[normalize-space()="Cars for Sale"]')
        expect(headingVehicle).toHaveTextContaining("Cars for Sale");
        console.log("User able to navigate to required page by clicking related Vista Links")

    });

    it('TC_03 Verify Search Functionlity on Vista Link', async () => {
        browser.url('/');
        //  await (await $('(//button[@class="close em-show-later"])[2]'))
        await (await $('#user_details').moveTo());
        const input = await $('//a[text()="Log In"]')
        input.click();
        await $('#userLogin').setValue("vikasy898@gmail.com")

        const clickOnEmail = await $('//li[@class="active login-vai"]')
        clickOnEmail.click();
        await $('#password').setValue("Vtest@123")
        const EnterPAss = await $('//input[@value="Login"]')
        EnterPAss.click();
        await $('//span[text()="Submit "]').click()
        await browser.pause(3000)

        const popup1 = await $('//button[@class="close em-show-later"]')
        popup1.click();

        const allows = await $('//a[text()="Log In"]')
        allows.click();

        const search = await $('//input[@id="main_search"]')
        expect(search).toBeDisplayed()
        search.click();

        const popular_search = await $('//h5[normalize-space()="Trending Searches"]]')
        popular_search.moveTo();

        const submit_req = await $('//span[normalize-space()="Submit My Requirement"]')
        submit_req.toBeDisplayed();
        expect(headingVehicle).toHaveTextContaining("Trending Searches");
        


    });



});
