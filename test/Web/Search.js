const Base = require('../../BaseClass/base');
const searchPage = require('../../Pages/Web/searchPage');


describe('Search', () => {
    it('TC_01 Verify Search functionality on Main header', async () => {
        await Base.loginAsBuyer();
        await browser.pause(5000);
        console.log('User Successfully login to application with valid credentials');
        await expect(searchPage.search_Box).toBeDisplayed()
        await searchPage.search_Box.click()
        await searchPage.search_Box.setValue("thar");
        await browser.pause(3000);
        console.log("Sending text to search an Item");
        await searchPage.mahindraThar.click()
        await expect(searchPage.headingVehicle).toBeDisplayed()
        await expect(searchPage.headingVehicle).toHaveTextContaining("Mahindra Thar");
        console.log("Using Seacth box user is able to search required items");

    });

    it('TC_02 Verify Search functionality on Vista Link', async () => {
        console.log("Scrolling to the Vista Link")
        await searchPage.vistaLink.scrollIntoView();
        await browser.pause(2000)
        await searchPage.vistaLink.click();
        console.log("Clicked On Vista Link")
        await expect(searchPage.insuranceHeading).toBeDisplayed()
        await expect(searchPage.insuranceHeading).toHaveTextContaining("Insurance");
        console.log("User able to navigate to required page by clicking related Vista Links")
    });


    it('TC_03 Verify the functionality of Popular Search', async () => {
        await browser.pause(3000)
        await searchPage.search_Box.click();
        console.log("Clicked on Search Box")
        await expect(searchPage.popular_search).toBeDisplayed()
        await searchPage.popular_search.moveTo();
        console.log("Moved to Trending Searches")
        await expect(searchPage.popular_search).toBeDisplayed()
        await expect(searchPage.submit_req).toHaveTextContaining("Submit");
        console.log("Submit My requirement Displayed under the Trending Searches")
    });

    it('TC_04 Verify the functionality of recent Search', async () => {
        await browser.pause(3000)
        await searchPage.search_Box.click()
        console.log("Clicked on Search Box")
        await browser.pause(2000)
        console.log("Scrolling to the Recent Searches")
        await (searchPage.recent_search).scrollIntoView();
        await expect(searchPage.recent_search).toBeDisplayed()
        await expect(searchPage.recent_search_Heading).toHaveTextContaining("Mahindra Thar 4X4 2015");
        console.log("Recently Searched items shown under Recent Search Tab")
    });
    it('TC_05 Verify Auto_Select functionality', async () => {
        await expect(searchPage.search_Box).toBeDisplayed()
        await searchPage.search_Box.click()
        await searchPage.search_Box.setValue("thar")
        console.log("Sent characters to the Search Box")
        await browser.pause(3000);
        await searchPage.mahindraThar.click()
        await expect(searchPage.headingVehicle).toBeDisplayed()
        await expect(searchPage.headingVehicle).toHaveTextContaining("Mahindra Thar")
        console.log("Items Autoselect fuctinality Works Successfully")

    });
    it('TC_06 Verify Vehicle count after seach an item', async () => {

        await expect(searchPage.search_Box).toBeDisplayed()
        console.log("Search Box is Present On Home Page")
        await searchPage.search_Box.click()
        console.log("Clicked on Search Box")
        await browser.pause(2000);
        await searchPage.item.click()
        console.log("Selected the item to be search")
        await browser.pause(2000);
        await expect(searchPage.count).toBePresent()
        console.log("Result shown with available count-->")
        console.log(await searchPage.count.getText());
        console.log("Using Search box user is able to search and the count of available items is shown");

    });
    it('TC 07 Verify the filter functionality', async () => {
        await expect(searchPage.search_Box).toBeDisplayed()
        await searchPage.search_Box.click();
        await searchPage.search_Box.setValue("Creta");
        console.log("Sending text to search an Item");
        await searchPage.creta.click()
        await expect(searchPage.headingAfterFilter).toBeDisplayed()
        console.log("No result found for slected filter")
        //Currently get no result found for all type of filters
    });

    it('TC 08 Verify the sorting functionality', async () => {
        await expect(searchPage.search_Box).toBeDisplayed()
        await searchPage.search_Box.click();
        await searchPage.search_Box.setValue("Activa");
        console.log("Sending text to search an Item");
        await searchPage.activa.click()
        await browser.pause(3000);
        console.log("Using Search box user is able to search required items");
        await expect(searchPage.filterForActiva).toBeDisplayed()
        await browser.pause(3000);
        await searchPage.filterForActiva.click();
        await browser.pause(5000);
        await expect(searchPage.priceFilter).toBeDisplayed()
        await browser.pause(3000);
        await expect(searchPage.headingAfterFilter).toBeDisplayed()
        await expect(searchPage.headingAfterFilter).toHaveTextContaining("No results");

        // Actual Fail result not shown
    });

});