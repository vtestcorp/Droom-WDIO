const Base = require('../../BaseClass/base');

class Search {
    get search_Box() { return $('//input[@id="main_search"]') }
    get mahindraThar() { return $('//span[text()="Mahindra Thar 4X4 2015"]') }
    get headingVehicle() { return $('//div[@title="Mahindra Thar 4X4 2015"]') }
    get vistaLink() { return $('//label[text()="Car"]') }
    get car_Heading(){return $('//h1[normalize-space()="Cars for Sale"]')}
    get insuranceHeading() { return $('//h1[normalize-space()="Get the Best Insurance Cover for your Vehicle"]') }
    get popular_search() { return $('//h5[normalize-space()="Trending Searches"]') }
    get submit_req() { return $('//span[normalize-space()="Submit My Requirement"]') }
    get recent_search() { return $('//h5[normalize-space()="Recent Searches"]') }
    get headingRecentSearch() { return $('//span[normalize-space()="Mahindra Thar 4X4 2015"]') }
    get home() { return $('//span[text()="Home"]') }
    get recent_search_Heading() { return $('//span[contains(text(),"Mahindra Thar 4X4 2015")]') }
    get item() { return $('(//li[@class="d-display-block d-margin-bottom-5"])[2]') }
    get count() { return $('//span[contains(text(),"(Showing")]') }
    get creta() { return $('(//span[contains(text(),"Hyundai Creta")])[1]') }
    get activa() { return $('(//span[contains(text(),"Honda Activa")])[1]') }
    get activaHeading() { return $('//strong[normalize-space()="Honda Activa"]') }
    get SortingForActiva() { return $('//label[normalize-space()="Most Relevant"]') }
    get SortByPrice() { return $('//a[normalize-space()="Price (Low to High)"]') }
    get headingAfterFilter() { return $('//h1[contains(text(),"No results found for")]') }
    get trendingItem() { return $('(//a[@href="https://droom.in/cars/new/tata-nexon"][1])') }
    get Filte_conditionNew(){return $('//input[@data-type="new"]')}
    get browseByCategory(){return $('//h2[contains(text(),"Browse")]')}
    get shop_by_category() { return $('//span[contains(text(),"Shop by Category")]') }
    get buyingTools(){return $('//h2[text()="Buying & Selling Tools"]')}
    get search2(){return $('//input[@placeholder="Search..."]')}
    get home2(){return $('//a[normalize-space()="Home"]')}
}
module.exports = new Search()
