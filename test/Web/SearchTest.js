const base = require('../../BaseClass/base')
const Base = require('../../BaseClass/base')
const searchPage = require('../../Pages/Web/searchPage')
describe('Search', () => {
    it('TC_01 Verify Search functionality on Main header', async () => {
        try{
            await (await $('.jss1')).waitForDisplayed({timeout:20000,timeoutMsg:"Popup not displayed"});
            await (await $('(//button[@class="close em-show-later"])[2]')).click();}
            catch{ }
        expect(await searchPage.search_Box).toBeDisplayed()
        console.log(await (await searchPage.search_Box ).isClickable())
        await (await searchPage.search_Box).click()
        await (await searchPage.search_Box).setValue("thar")
        console.log("Sending text to search an Item")
        await (await searchPage.mahindraThar).click()
        expect(await searchPage.headingVehicle).toBeDisplayed()
        console.log("Mahindra Thar Heading is shown")
        expect(await searchPage.headingVehicle).toHaveTextContaining("Mahindra Thar")
        console.log("Using Seacth box user is able to search required items")
    });
    it('TC_02 Verify Search functionality on Vista Link', async () => {
        await (await (searchPage.home)).click()
        console.log("Scrolling to the Vista Link")
        await (await searchPage.shop_by_category).waitForExist({ timeout: 5000 })
        await (await searchPage.buyingTools).scrollIntoView()
        console.log("Scrolling to the Buying Tool");
        await (await searchPage.car).scrollIntoView()
        console.log("Scrolling to the Vista link of Cars")
        expect(await searchPage.vistaLink).toBeDisplayed()
        console.log(await (await searchPage.vistaLink).getText())
        await (await searchPage.car).click()
        console.log("Clicked On Vista Link of New and Used Cars for Sale")
        expect(await searchPage.car_Heading).toHaveTextContaining("Cars for Sale")
        console.log("User able to navigate to required page by clicking related Vista Links")
    });
   it('TC_03 Verify the functionality of Popular Search', async () => {
        try{
            await (await searchPage.home2).click();}
            catch{ }
             try{
            await (await $('.jss1')).waitForDisplayed({timeout:20000,timeoutMsg:"Popup not displayed"});
            await (await $('(//button[@class="close em-show-later"])[2]')).click();}
            catch{ }
        await (await searchPage.search_Box).click()
        console.log("Clicked on Search Box")
        expect(await searchPage.popular_search).toBeDisplayed()
        await (await searchPage.popular_search).moveTo()
        console.log("Moved to Trending Searches")
        expect(await searchPage.trendingItem).toBeDisplayed()
        expect(await searchPage.trendingItem).toHaveTextContaining("TATA")
        console.log("TATA Nexon Displayed under the Trending Searches")
    });
    it('TC_04 Verify the functionality of recent Search', async () => {
        try{
            await (await searchPage.home2).click();}
            catch{ }
             try{
            await (await $('.jss1')).waitForDisplayed({timeout:20000,timeoutMsg:"Popup not displayed"});
            await (await $('(//button[@class="close em-show-later"])[2]')).click();}
            catch{ }
        await (await searchPage.search_Box).click()
        console.log("Clicked on Search Box")
        console.log("Scrolling to the Recent Searches")
        expect(await searchPage.recent_search).toBeDisplayed()
        console.log(await (await searchPage.recent_search).getText())
        expect(await searchPage.recent_search_Heading).toHaveTextContaining("Mahindra Thar 4X4 2015")
        console.log("Recently Searched items shown under Recent Search Tab")
    });
    it('TC_05 Verify Auto_Select functionality', async () => {
        expect(searchPage.search_Box).toBeDisplayed()
        await (await searchPage.search_Box).click()
        await (await searchPage.search_Box).setValue("thar")
        console.log("Sent characters to the Search Box")
        await (await searchPage.mahindraThar).click()
        expect(await searchPage.headingVehicle).toBeDisplayed()
        expect(await searchPage.headingVehicle).toHaveTextContaining("Mahindra Thar")
        console.log("Items Autoselect fuctinality Works Successfully")
    });
    it('TC_06 Verify Vehicle count after seach an item', async () => {
        try{
            await (await searchPage.home2).click();}
            catch{ }
             try{
            await (await $('.jss1')).waitForDisplayed({timeout:20000,timeoutMsg:"Popup not displayed"});
            await (await $('(//button[@class="close em-show-later"])[2]')).click();}
            catch{ }
        expect(searchPage.search_Box).toBeDisplayed()
        console.log("Search Box is Present On Home Page")
        await (await searchPage.search_Box).click()
        console.log("Clicked on Search Box")
        await (await searchPage.item).click()
        console.log("Selected the item to be search")
        expect(await searchPage.count).toBePresent()
        console.log("Result shown with available count-->")
        console.log(await (await searchPage.count).getText())
        console.log("Using Search box user is able to search and the count of available items is shown")
    });
    it('TC 07 Verify the Filter functionality', async () => {
        try{
            await (await searchPage.home2).click();}
            catch{ }
            try{
                await (await $('.jss1')).waitForDisplayed({timeout:20000,timeoutMsg:"Popup not displayed"});
                await (await $('(//button[@class="close em-show-later"])[2]')).click();}
                catch{ }
        expect(await searchPage.search_Box).toBeDisplayed()
        await (await searchPage.search_Box).click();
        await (await searchPage.search_Box).setValue("Creta")
        console.log("Sending text to search an Item")
        await (await searchPage.creta).click()
        expect(await searchPage.headingAfterFilter).toBeDisplayed()
        expect(await searchPage.condition).toBeDisplayed()
        console.log("Condition filter is displayed")
        await(await searchPage.condition).click()
        expect(await searchPage.newCondition).toBeDisplayed()
        console.log("New Filter is Displayed")
        await(await searchPage.newCondition).click()
        expect(await searchPage.used_vehicle).toHaveTextContaining("Used")
        console.log("Used Hyundai Creta shown after applying Filter the Vehicle Using -> Vehicle Condition-->New")
    });
    it('TC 08 Verify the Sorting functionality', async () => {
        try{
            await (await searchPage.home2).click();}
            catch{ }
            try{
                await (await $('.jss1')).waitForDisplayed({timeout:20000,timeoutMsg:"Popup not displayed"});
                await (await $('(//button[@class="close em-show-later"])[2]')).click();}
                catch{ }
        expect(await searchPage.search_Box).toBeDisplayed()
        await (await searchPage.search_Box).click()
        await (await searchPage.search_Box).setValue("Activa")
        console.log("Sending text to search an Item")
        await (await searchPage.activa).click()
        console.log("Using Search box user is able to search required items")
        expect(await searchPage.SortingForActiva).toBeDisplayed()
        await (await searchPage.SortingForActiva).click()
        expect(await searchPage.SortByPrice).toBeDisplayed()
        await (await searchPage.SortByPrice).moveTo()
        await (await searchPage.SortByPrice).click()
        expect(await searchPage.used_vehicle).toBeDisplayed()
        expect(await searchPage.used_vehicle).toHaveTextContaining("used")
        console.log("After sorting  functinality according to Prices result shown ")
    });
});