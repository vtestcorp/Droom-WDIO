const Base = require('../../BaseClass/base')
const searchPage = require('../../Pages/Android/SearchPage')
describe('Search', () => {
    beforeEach(async () => {
        await driver.closeApp()
        await driver.launchApp()
    });
    it('TC_01 Verify Search functionality on Main header', async () => {
          var searchItem="Thar"
          await (await searchPage.mainPopup).isDisplayed()
          await (await searchPage.mainPopup).click()
          console.log('Application Launched')
          expect(searchPage.search_Box).toBeDisplayed()
          await (await searchPage.search_Box).click()
          await (await searchPage.searchBoxTxt).setValue(searchItem)
          console.log("Searching for "+searchItem)
          await driver.longPressKeyCode(66, undefined, undefined)
          expect(await searchPage.headingVehicle).toBeDisplayed()
          expect(await searchPage.headingVehicle).toHaveTextContaining(searchItem)
          console.log("Using Seacth box User is able to search required items")
          console.log("First element displayed as : "+await(await searchPage.headingVehicle).getText())
      });
    it('TC_02 Verify Search functionality on Vista Link', async () => {
        await (await searchPage.mainPopup).isDisplayed()
        await (await searchPage.mainPopup).click()
        console.log('Application Launched')
        await Base.scrollToExactText("Super Cars")
        console.log("Scrolling to the Vista Link")
        expect(await searchPage.vistaLink).toBeDisplayed()
        console.log("Vista link of Super Car is Displayed")
        await (await searchPage.vistaLink).click()
        console.log("Clicked On Vista Link of Super Cars")
        expect(await searchPage.vistaLinkResult).toHaveTextContaining("Luxury / Super Cars")
        console.log("User able to navigate to required page by clicking related Vista Links")
    });
     it('TC_03 Verify the functionality of Popular Search', async () => {
         await (await searchPage.mainPopup).isDisplayed()
          await (await searchPage.mainPopup).click()
          console.log('Application Launched')
          expect(searchPage.search_Box).toBeDisplayed()
          console.log("Search Box is Displayed")
          await (await searchPage.search_Box).click()
          await(await searchPage.trendingSearch).toBeDisplayed()
         console.log("Trending Searches is Displayed");
         await searchPage.trendingSearch.moveTo();
         console.log("Moved to Trending Searches")
         await expect(searchPage.submit_req).toHaveTextContaining("Submit")
         console.log("Submit My requirement Displayed under the Trending Searches")
     });
    });

