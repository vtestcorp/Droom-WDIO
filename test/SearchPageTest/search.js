describe('Search Validations', async () => {

    it('TC_01 Verify Search Functionlity on Main header', async () => {
        await (await $('#user_details')).moveTo();
        await (await $('//a[text()="Log In"]')).click();
        await (await $('#userLogin')).setValue("swapnali.payghan@vtestcorp.com");
        // await (await $('#userLogin')).setValue("vikasy898@gmail.com");
        await (await $(".d-letter-spacing-1[href='#viaPassword']")).click();
        await (await $("#password")).setValue("Vtest@123");
        await (await $('//input[@type="submit"]')).click();
        console.log('User Successfully login to application with valid credentials');

        const allows = await $('//a[text()="Log In"]')
        allows.click();
        const popup1 = await $('//button[@class="close em-show-later"]')
        popup1.click();

        const search = await $('//input[@id="main_search"]')
        expect(search).toBeDisplayed()
        search.click();
        search.setValue("thar");
        console.log("Sending text to search an Item");
        await $('(//span[contains(text(),"Mahindra")])[1]').click();
        const headingVehicle = await $('//strong[normalize-space()="Mahindra Thar"]')
        expect(headingVehicle).toHaveTextContaining("Mahindra Thar");
        console.log("Using Seacth box user is able to search required items");
        //await (await $('#user_details')).moveTo();
        //await (await $('//a[text()="Log Out"]')).click();
    });


    it('TC_02 Verify Search Functionlity on Vista Link', async () => {
        browser.url('/');
        const home = await $('//span[text()="Home"]')
        home.click();

        const allows = await $('//a[text()="Log In"]')
        allows.click();
        const popup1 = await $('//button[@class="close em-show-later"]')
        popup1.click();
        console.log("User clicking on Vista link");
        //const vistalink = await $('//a[text()="Car"]');

        const vistalink = await $('//a[@href="https://droom.in/car-bike-insurance"][1]');

        await vistalink.waitForDisplayed()
        await vistalink.waitForDisplayed({ timeout: 10000 })
        await vistalink.scrollIntoView();
        vistalink.click();
        // const headingVehicle = await $('//h1[normalize-space()="Cars for Sale"]')
        const headingVehicle = await $('//h1[normalize-space()="Get the Best Insurance Cover for your Vehicle"]')
        expect(headingVehicle).toHaveTextContaining("Insurance");
        console.log("User able to navigate to required page by clicking related Vista Links")
        // await (await $('#user_details')).moveTo();
        //await (await $('//a[text()="Log Out"]')).click();
    });

    it('TC_03 Verify the Functionlity of Popular Search', async () => {
        browser.url('/');
        console.log("Clicking on Home Button To check Popu;ar Seacrh functionality")
        const home = await $('//span[text()="Home"]')
        home.click();
        const popup1 = await $('//button[@class="close em-show-later"]')
        popup1.click();
        const allows = await $('//a[text()="Log In"]')
        allows.click();
        const search = await $('//input[@id="main_search"]')
        expect(search).toBeDisplayed()
        console.log("Search Button is displayed on Home page")
        search.click();
        console.log("CLicked on Search Box")
        const popular_search = await $('//h5[normalize-space()="Trending Searches"]')
        popular_search.moveTo();
        console.log("Moved to Trending Searches")
        const submit_req = await $('//span[normalize-space()="Submit My Requirement"]')
        expect(submit_req).toHaveTextContaining("Submit");
        console.log("Submit My requirement Displayed under the Trending Searches")
    });
    it('TC_04 Verify the Functionlity of recent Search', async () => {

        const msg = await $('//input[@class="btn btn-primary search submit-search"]')
        await msg.waitForExist({ timeout: 6000 })
        await $('//input[@placeholder="Search..."]').click();
        const recent_search = await $('//h5[normalize-space()="Recent Searches"]')
        recent_search.scrollIntoView();
        console.log("Scrolling to the Recent Searches");
        const headingVehicle = await $('//span[normalize-space()="Mahindra Thar 4X4 2015"]')
        expect(headingVehicle).toHaveTextContaining("Mahindra Thar 4X4 2015");
        console.log("Recently Searched items shown under Recent Search Tab")
    });

    it('TC_05 Verify Auto_Select Functionlity', async () => {
        browser.url('/');
        // const msg = await $('//input[@class="btn btn-primary search submit-search"]')
        //await msg.waitForExist({ timeout: 6000 })
        //const search=await $('//input[@placeholder="Search..."]')

        const popup1 = await $('//button[@class="close em-show-later"]')
        popup1.click();
        const allows = await $('//a[text()="Log In"]')
        allows.click();
        const search = await $('//input[@id="main_search"]')
        await search.waitForExist({ timeout: 5000 })
        search.click();
        search.setValue("thar");
        //console.log("Sending some text to search an Item");
        await $('(//span[contains(text(),"Mahindra")])[1]').click
        console.log("When user sent Thar it suggest all the options related to Mahindra Thar")
        //await $('(//span[contains(text(),"Mahindra")])[1]').click();

        const headingVehicle = await $('//strong[normalize-space()="Mahindra Thar"]')
        expect(headingVehicle).toHaveTextContaining("Mahindra Thar");
        console.log("Auto seach functinality works Successfully");
        //await (await $('#user_details')).moveTo();
        //await (await $('//a[text()="Log Out"]')).click();

    });

    it('TC_06 Verify Vehicle count after seach an item', async () => {
        browser.url('/');
        //const home = await $('//span[text()="Home"]')
       // home.click();
        const allows = await $('//a[text()="Log In"]')
        allows.click();
        const popup1 = await $('//button[@class="close em-show-later"]')
        popup1.click();
        const search = await $('//input[@id="main_search"]')
        expect(search).toBeDisplayed()
        search.click();
        search.clearValue();
        console.log("Cleared the search box");
        search.setValue("Mahindra");
        console.log("Sending text to search an Item");
        await $('(//span[contains(text(),"Mahindra")])[1]').click();
        const headingVehicle = await $('//strong[normalize-space()="Mahindra Thar"]')
        expect(headingVehicle).toHaveTextContaining("Showing");
        $(headingVehicle).getValue()
        console.log("Using Seacth box user is able to search and the count of available items is shown");
        //await (await $('#user_details')).moveTo();
        //await (await $('//a[text()="Log Out"]')).click();
    });

    it('TC 07 Verify the Sorting  Functinality', async () => {
        browser.url('/');
        const home = await $('//span[text()="Home"]')
        home.click();
        const allows = await $('//a[text()="Log In"]')
        allows.click();
        const popup1 = await $('//button[@class="close em-show-later"]')
        popup1.click();
        const search = await $('//input[@id="main_search"]')
        expect(search).toBeDisplayed()
        search.click();
        search.setValue("Creta");
        console.log("Sending text to search an Item");
        await $('(//span[contains(text(),"Hyundai Creta")])[1]').click();
    });

    it('TC 08 Verify the Filter Functinality', async () => {
        browser.url('/');
        const home = await $('//span[text()="Home"]')
        home.click();
        const allows = await $('//a[text()="Log In"]')
        allows.click();
        const popup1 = await $('//button[@class="close em-show-later"]')
        popup1.click();
        const search = await $('//input[@id="main_search"]')
        expect(search).toBeDisplayed()
        search.click();
        search.setValue("Activa");
        console.log("Sending text to search an Item");
        await $('(//span[contains(text(),"Honda Activa")])[1]').click();
        const headingVehicle = await $('//strong[normalize-space()="Honda Activa"]')
        expect(headingVehicle).toHaveTextContaining("Activa");
        console.log("Using Search box user is able to search required items");
        const filter = await $('//label[normalize-space()="Most Relevant"]')
        filter.click();
        const price = await $('//a[normalize-space()="Price (Low to High)"]')
        const heading_after_filter = await $('//h1[contains(text(),"No results found for")]')
        expect(headingVehicle).toHaveTextContaining("No results");
    });

    it('TC 09 Verify the  Functinality of Home Delivery filter', async () => {
        browser.url('/');
       // const home = await $('//span[text()="Home"]')
      //  home.click();
        const allows = await $('//a[text()="Log In"]')
        allows.click();
        const popup1 = await $('//button[@class="close em-show-later"]')
        popup1.click();
        const search = await $('//input[@id="main_search"]')
        expect(search).toBeDisplayed()
        search.click();
        search.setValue("Tata Nexon");
        console.log("Sending text to search an Item");
        await $('(//span[contains(text(),"Tata Nexon")])[1]').click();
        const home_delivery=$('//label[normalize-space()="Home Delivery"]')
        //scrollIntoView(home_delivery);
        home_delivery.click();
        const heading1=$('//h1[normalize-space()="New Cars In India"]')
       // scrollIntoView(heading1);
        const home_delivery_on_item=await $('//span [contains(text ( ),"Home Delivery")]')
        expect(home_delivery_on_item).toHaveTextContaining("Home Delivery");
        console.log("Home delivery option shown on the applicable items.")
    
    });


});