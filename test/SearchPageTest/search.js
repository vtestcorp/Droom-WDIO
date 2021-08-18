

describe('Search Validations', async () => {
    it('TC_01Verify Search Functionlity on Main header', async () => {
        // await(await $("a[@class='btn btn-primary']")).click();
        await (await $('#user_details')).moveTo();
        //await(await $("a[@class='btn btn-primary']")).click();
        await (await $('//a[text()="Log In"]')).click();
        //await(await $('#userLogin')).setValue("swapnali.payghan@vtestcorp.com");
        await (await $('#userLogin')).setValue("vikasy898@gmail.com");
        await (await $(".d-letter-spacing-1[href='#viaPassword']")).click();
        await (await $("#password")).setValue("Vtest@123");
        await (await $('//input[@type="submit"]')).click();
        //console.log('User Successfully login to application with valid credentials');

        const popup1 = await $('//button[@class="close em-show-later"]')
        popup1.click();

        const allows = await $('//a[text()="Log In"]')

        allows.click();

        const search = await $('//input[@id="main_search"]')
        expect(search).toBeDisplayed()
        search.click();
        search.setValue("thar");
        console.log("Sending text to search an Item");
        //span[normalize-space()='Thar']
        await $('(//span[contains(text(),"Mahindra")])[1]').click();

       const headingVehicle = await $('//strong[normalize-space()="Mahindra Thar"]')
        expect(headingVehicle).toHaveTextContaining("Mahindra Thar");
        console.log("Using Seacth box user is able to search required items");

        await (await $('//a[text()="Log Out"]')).click();
    });


    it('TC_02 Verify Search Functionlity on Vista Link', async () => {
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

        console.log("User clicking on Vista link of User cars for Sale");
        const vistalink = await $('//label[text()="Car"]')
        await vistalink.scrollIntoView();
        expect(vistalink).toBeDisplayed()
        vistalink.click();
        const headingVehicle = await $('//h1[normalize-space()="Cars for Sale"]')
        expect(headingVehicle).toHaveTextContaining("Cars for Sale");
        console.log("User able to navigate to required page by clicking related Vista Links")
    });

});
