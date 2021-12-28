const Base = require('../../BaseClass/base')
const searchPage = require('../../Pages/ios/SearchPage')
describe('Search', () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
    });
    it('TC_01 Verify Search functionality on Main header', async () => {
       // await Base.skipStartup()  
        var searchItem="KTM Bikes"
          expect(searchPage.search_Box).toBeDisplayed()
          console.log("Search Box is displayed")
          await (await searchPage.search_Box).click()
          console.log("Clicked on search Box")
          await browser.pause(2000)
          await (await searchPage.searchBoxTxt).setValue(searchItem)
          console.log("Searching for "+searchItem)
          await (await searchPage.KTM).click()
          console.log("Clicked On KTM Bikes")
          expect(await searchPage.headingVehicle).toBeDisplayed()
          console.log("After click on required Item Expected page displayed")
          expect(await searchPage.KTM).toHaveTextContaining(searchItem)
          console.log("Using Seacth box User is able to search required items")
          console.log("First element displayed as : "+await(await searchPage.KTM).getText())
      });
    it('TC_02 Verify Search functionality on Vista Link', async () => {
        //await Base.skipStartup()
        console.log('Application Launched')
        console.log("Scrolling to the Vista Link")
        expect(await searchPage.vistaLink).toBeDisplayed()
        console.log("Vista link of zcheck Vehicle Price is Displayed")
        await (await searchPage.vistaLink).click()
        console.log("Clicked On Vista Link of Check Price")
        expect(await searchPage.sort).toBeDisplayed()
        console.log("User able to navigate to required page of Sort anf Filter  by clicking related Vista Links")
    });
     it('TC_03 Verify the functionality of Popular Search', async () => {  
        //await Base.skipStartup()
        expect(searchPage.search_Box).toBeDisplayed()
        console.log("Search Box is Displayed")
        await (await searchPage.search_Box).click()
        expect(await searchPage.trendingSearch).toBeDisplayed()
        console.log("Trending Searches is Displayed");
        await expect(searchPage.ktmBikes).toHaveTextContaining("KTM")
        console.log("trending search op[tion KTM is Displayed under the Trending Searches")
     });

     it('TC_04 Verify Auto_Select functionality', async () => {
       // await Base.skipStartup()  
       var searchItem="KTM Bikes"
       expect(searchPage.search_Box).toBeDisplayed()
       console.log("Search Box is displayed")
       await (await searchPage.search_Box).click()
       console.log("Clicked on search Box")
       await browser.pause(2000)
       await (await searchPage.searchBoxTxt).setValue(searchItem)
       console.log("Searching for "+searchItem)
       await (await searchPage.KTM).click()
       console.log("Clicked On KTM Bikes")
       expect(await searchPage.headingVehicle).toBeDisplayed()
       console.log("After click on required Item Expected page displayed")
       expect(await searchPage.KTM).toHaveTextContaining(searchItem)
       console.log("Using Seacth box User is able to search required items")
       console.log("First element displayed as : "+await(await searchPage.KTM).getText())
       console.log("Autoselect Functionality Works for Search")
    });

    it('TC 05 Verify the Sorting functionality', async () => {
        //await Base.skipStartup()
        var searchItem="KTM Bikes"
        expect(searchPage.search_Box).toBeDisplayed()
        await (await searchPage.search_Box).click()
        console.log("Searching for item")
        await (await searchPage.KTM).click()
        console.log("Using Seacth box User is able to search required items")
        expect(await searchPage.sort).toBeDisplayed()
        console.log("Sort opton is availbale on Page")
        await(await searchPage.sort).click()
        console.log("Clicked On Sort Option")
        console.log("Sorting Options displayed as ->: "+await(await  searchPage.mostRelevent).getText())
        console.log(await (await searchPage.nearMe).getText())
        console.log(await (await searchPage.priceLow).getText())
        console.log(await (await searchPage.priceHigh).getText())
        expect(await searchPage.mostRelevent).toBeDisplayed()
        console.log("Expected Sorting option is availbale")
        await(await searchPage.mostRelevent).click()
        console.log("Selected Most relevent option for Filter")
        expect(await searchPage.headingVehicle).toBeDisplayed()
        console.log(await (await searchPage.headingVehicle).getText())
        console.log("Expected list is displayed according to applied Sorting Option")
        });
    it('TC 06 Verify the Filter for Used and New vehicle', async () => {
       // await Base.skipStartup()
        var searchItem="KTM Bikes"
        expect(searchPage.search_Box).toBeDisplayed()
        await (await searchPage.search_Box).click()
        console.log("Searching for item")
        await (await searchPage.KTM).click()
        console.log("Using Seacth box User is able to search required items")
        expect(await searchPage.filter).toBeDisplayed()
        console.log("Filter opton is availbale on Page")
        await(await searchPage.filter).click()
        console.log("Clicked On Filter Option")
        expect(await searchPage.filters).toBeDisplayed()
        console.log("Filters option page is displayed")
        console.log("Available Filter Options are-->")
        expect(await searchPage.locationFilter).toBeDisplayed()
        console.log(await(await searchPage.locationFilter).getText())
        expect(await searchPage.PriceFilter).toBeDisplayed()
        console.log(await(await searchPage.PriceFilter).getText())
        expect(await searchPage.modelFilter).toBeDisplayed()
        console.log(await(await searchPage.modelFilter).getText())
        expect(await searchPage.yearFilter).toBeDisplayed()
        console.log(await(await searchPage.yearFilter).getText())
        expect(await searchPage.makeFilter).toBeDisplayed()
        console.log(await(await searchPage.makeFilter).getText())
        expect(await searchPage.BodyTypeFilter).toBeDisplayed()
        console.log(await(await searchPage.BodyTypeFilter).getText())
        expect(await searchPage.colorFilter).toBeDisplayed()
        console.log(await(await searchPage.colorFilter).getText())
      //  expect(await searchPage.buyerProtectionFilter).toBeDisplayed()
       // console.log(await(await searchPage.buyerProtectionFilter).getText())
        await(await searchPage.makeFilter).click()
        console.log("Clicked on Make filter")
        await(await searchPage.KTM).click()
        console.log("Clicked on KTM make filter")
        await(await searchPage.applyFilter).click()
        console.log("Clicked on Apply Filter Button")
        expect(await searchPage.headingVehicle).toBeDisplayed()
        console.log(await(await searchPage.headingVehicle).getText())
        console.log("Expected result shown using applied Filter")
    });
it('TC_07 Verify Vehicle count after seach an item', async () => {
    //await Base.skipStartup()
    var searchItem="KTM Bikes"
    expect(searchPage.search_Box).toBeDisplayed()
    console.log("Search Box is displayed")
    await (await searchPage.search_Box).click()
    console.log("Clicked on search Box")
    await browser.pause(2000)
    await (await searchPage.searchBoxTxt).setValue(searchItem)
    console.log("Searching for "+searchItem)
    await (await searchPage.KTM).click()
    console.log("Clicked On KTM Bikes")
    expect(await searchPage.headingVehicle).toBeDisplayed()
    console.log("After click on required Item Expected page displayed")
    expect(searchPage.countInfo).toBeDisplayed()
    console.log("Information and count of searched item get displayed")
});
    it('TC_08 Verify the functionality of recent Search', async () => {
        //await Base.skipStartup()
        expect(searchPage.search_Box).toBeDisplayed()
        console.log("Search Box is displayed")
        await (await searchPage.search_Box).click()
        console.log("Text box to search and Item get displayed")
        await (await searchPage.searchBoxTxt).click()
        console.log("Clicked on serach Text Box")
        expect (await searchPage.trendingSearch).toBeDisplayed()
        console.log("Trending searches displayed")
        expect (await searchPage.recent_search).toBeDisplayed()
        console.log("Recent Rearches Displayed")
    });
    
    });
   



