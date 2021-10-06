const base = require("../../BaseClass/base");
const searchPage = require("../../Pages/Androidbrowser/searchPage");
describe('Search', async () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
    });
    it('TC_03 Verify the Popular Search Functionality from the Home Page', async () => {  
    await browser.url('/')
    expect(await searchPage.searchBoxHeader).toBeDisplayed()
    console.log("Search Box heading is displayed");
    expect(searchPage.searchBox).toBeDisplayed()
    console.log("Search Box is Displayed")
    await (await searchPage.searchBox).click()
    console.log("Clicked On Search Box")
    await(await searchPage.trendingSearch).waitForDisplayed({timeout:10000})
    console.log("Trending Searches is Displayed")
    await expect(searchPage.mainSearchResult).toBeDisplayed()
    console.log("List of Vehicles Displayed under the Trending Searches")
    });
    it('TC_04 Verify the Auto-select Functionality of search on Home Page', async () => {
    await browser.url('/')
    var searchItem="Thar"  
    expect(searchPage.searchBox).toBeDisplayed()
    await (await searchPage.searchBox).click()
    await (await searchPage.searchBox).setValue(searchItem)
    console.log("Searching for "+searchItem)
    await driver.longPressKeyCode(66, undefined, undefined)
    expect(await searchPage.tharResult).toBeDisplayed()
    expect(await searchPage.tharResult).toHaveTextContaining(searchItem)
    console.log("Using Seacth box User is able to search required items")
    console.log("First element displayed as : "+await(await searchPage.tharResult).getText())
    });
    it('TC_05 Verify the Sorting  Functinality of Search', async () => {
    await browser.url('/')
    var searchItem="Activa"
    expect(searchPage.searchBox).toBeDisplayed()
    await (await searchPage.searchBox).click()
    await (await searchPage.searchBox).setValue(searchItem)
    console.log("Searching for "+searchItem)
    await driver.longPressKeyCode(66, undefined, undefined)
    expect(await searchPage.headingVehicle).toBeDisplayed()
    expect(await searchPage.headingVehicle).toHaveTextContaining(searchItem)
    console.log("Using Seacth box User is able to search required items")
    expect(await searchPage.sort).toBeDisplayed()
    console.log("Sort opton is availbale on Page")
    await(await searchPage.sort).click()
    console.log("Clicked On Sort Option")
    expect(await searchPage.sortingLable).toBeDisplayed()
    console.log("Sorting Lable is availbale on Page")
    console.log("Sorting Options displayed as ->:")
    console.log(await (await searchPage.nearMe).getText())
    console.log(await (await searchPage.priceLowToHigh).getText())
    console.log(await (await searchPage.pricehighToLow).getText())
    console.log(await (await searchPage.kmsdriven).getText())
    console.log(await (await searchPage.Year).getText())
    console.log(await (await searchPage.fullCircle).getText())
    console.log(await (await searchPage.mostViewed).getText())
    console.log(await (await searchPage.mostRecent).getText())
    console.log("Expected Sorting option is availbale")
    await(await searchPage.Year).click()
    console.log("Clicked on Year (Newest to Oldest)")
    await(await searchPage.sortResultNew).waitForDisplayed({timeout:6000})
    expect(await searchPage.sortResultNew).toBeDisplayed()
    console.log(await (await searchPage.sortResultNew).getText())
    await base.swipeUp()
    expect(await searchPage.sortResultNew).toBeDisplayed()
    console.log(await (await searchPage.sortResultNew).getText())
    console.log("Activa list is displayed according to applied Filter")
    });
});