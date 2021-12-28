const { getByAccessibilityID } = require('../../BaseClass/base');
const base = require('../../BaseClass/base');

class Search {
    get mainPopup(){return base.getByAccessibilityID("Allow While Using App") }
    get locationPopup(){return base.getByAccessibilityID("Allow") }
    get skipBtn(){return base.getByClassChain('**/XCUIElementTypeButton[`label == "Skip"`]') }
    get byeOnDroom(){return base.getByAccessibilityID("Buy On Droom") }
    get services(){return base.getByAccessibilityID("homepopup-buy-service")}
    get backBtn(){return base.getByAccessibilityID("Back Icon Long")}
    get onHomePage(){return base.getByClassChain('**/XCUIElementTypeButton[`label == "How Droom Works?"`][1]')}
   get search_Box() { return base.getByClassChain('**/XCUIElementTypeTextField[`value == "Search Car, Bike & Scooters"`]')}
   //get search_Box(){return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Droom Buyer - Shyam Mukul | Unicorn Offer - Grand Prize Winner"`]')}
   get searchBoxTxt() { return base.getByClassChain('**/XCUIElementTypeSearchField[`label == "Search..."`]')}
    get headingVehicle() { return base.getByAccessibilityID("Ktm New Motorcycle/Bikes")}
    get vistaLink() { return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Car"`][1]')}
    //get vistaLinkResult(){return base.getByAccessibilityID("Check Vehicle Price")}
    get trendingSearch(){return base.getByClassChain('**/XCUIElementTypeOther[`name == "Trending Searches"`]')}
    get submit_req() { return  base.getByAccessibilityID('Submit My Requirement') }
    get popular_search() { return ('//h5[normalize-space()="Trending Searches"]') }
    get ktmBikes(){return base.getByClassChain('**/XCUIElementTypeStaticText[`label == " KTM Bikes"`][1]')}
    get recent_search() { return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Recent Searches"`]') }
    get headingRecentSearch() { return ('//span[normalize-space()="Mahindra Thar 4X4 2015"]')}
    get sort(){return base.getByAccessibilityID('Sort')}
    get sortOptions(){return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Sorting"`]')}
    get mostRelevent(){return base.getByAccessibilityID('Most Relevant')}
    get nearMe(){return base.getByAccessibilityID('Near Me')}
    get priceLow(){return base.getByAccessibilityID('Price (Low to High)')}
    get priceHigh(){return base.getByAccessibilityID('Price (High to Low)')}
    get mostViewed(){return base.getByAccessibilityID('Most Viewed')}
    get filter(){return base.getByAccessibilityID('Filters')}
    get filters(){return base.getByClassChain('**/XCUIElementTypeStaticText[`label == "Filters"`]')}
    get locationFilter(){return base.getByClassChain('**/XCUIElementTypeButton[`label == "Location"`]')}
    get PriceFilter(){return base.getByAccessibilityID('Price Range')}
    get makeFilter(){return base.getByAccessibilityID("Make")}
    get BodyTypeFilter(){return base.getByAccessibilityID('Body Type')}
    get yearFilter(){return base.getByAccessibilityID("Year")}
    get buyerProtectionFilter(){base.getByAccessibilityID('Buyer Protection Available')}
    get colorFilter(){return base.getByAccessibilityID("Color")}
    get resetBtn(){return base.getByResourceId("Reset")}
    get applyFilter(){return base.getByAccessibilityID('Apply')}
    get KTM(){return base.getByAccessibilityID('KTM Bikes')}
    get TataNexon(){return base.getByAccessibilityID('TATA Nexon')}
    get countInfo() { return base.getByAccessibilityID('There are 110 Ktm new Motorcycle/Bikes available for sale online in Fixed Price. Ktm New Motorcycle/Bikes available at starting price of 142266. All Ktm New Motorcycle/Bikes come with 100% Refundable Token Amount. Few top Ktm new Motorcycle/Bike models are {other_models}. Select a Ktm new Motorcycle/Bike to know the latest offers, on road price, variants, specifications, pictures, mileage and reviews.')}
    async skipStartup()
 {
    await (await this.mainPopup).waitForDisplayed()
    await (await this.mainPopup).click()
    //await (await this.locationPopup).waitForDisplayed()
    //await (await this.locationPopup).click()
    await (await this.skipBtn).waitForDisplayed()
    await (await this.skipBtn).click()
    //await (await this.byeOnDroom).waitForDisplayed()
    //await (await this.services).click()
    //await (await this.backBtn).click()
 }

}
module.exports = new Search()
