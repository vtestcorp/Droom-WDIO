const Base = require('../../BaseClass/base');

class Search {
    get search_Box() { return $('//input[@id="main_search"]') }
    get mahindraThar() { return $('//span[text()="Mahindra Thar 4X4 2015"]') }
    get headingVehicle() { return $('//div[@title="Mahindra Thar 4X4 2015"]') }
    get vistaLink() { return $('//img[contains(@src,"http://qaapi2.droom.in/photos/images/droomresponsive/img/content/homepage-v5/cars.jpg")]') }
    get car(){return $('(//figcaption[contains(text(),"Car")])[2]')}
    get car_Heading(){return $('//h2[contains(text(),"Cars Up To ")]')}
    get insuranceHeading() { return $('//h1[normalize-space()="Get the Best Insurance Cover for your Vehicle"]') }
    get popular_search() { return $('//h5[normalize-space()="Trending Searches"]') }
    get submit_req() { return $('//span[normalize-space()="Submit My Requirement"]') }
    get recent_search() { return $('//h5[text()="Recent Searches"]') }
    get headingRecentSearch() { return $('//span[normalize-space()="Mahindra Thar CRDe 4x4 2015"]') }
    get home() { return $('//span[text()="Home"]') }
    get recent_search_Heading() { return $('//span[contains(text(),"Mahindra Thar CRDe 4x4 2015")]') }
    get item() { return $('(//li[@class="d-display-block d-margin-bottom-5"])[2]') }
    get count() { return $('//span[contains(text(),"(Showing")]') }
    get creta() { return $('(//span[contains(text(),"Hyundai Creta")])[1]') }
    get activa() { return $('(//span[contains(text(),"Honda Activa")])[1]') }
    get activaHeading() { return $('//strong[normalize-space()="Honda Activa"]') }
    get SortingForActiva() { return $('//div[@id="select-sort"]') }
    get SortByPrice() { return $('//li[normalize-space()="Price (High to Low)"]') }
    get headingAfterFilter() { return $('//h1[contains(text(),"No results found for")]') }
    get trendingItem() { return $('(//a[@href="https://droom.in/cars/new/tata-nexon"][1])') }
    get Filter_conditionNew(){return $('//input[@data-type="new"]')}
    get browseByCategory(){return $('//h2[contains(text(),"Browse")]')}
    get shop_by_category() { return $('//h2[contains(text(),"Shop by category")]') }
    get buyingTools(){return $('//h2[text()="Buying & Selling Tools"]')}
    get search2(){return $('//input[@placeholder="Search..."]')}
    get home2(){return $('//a[normalize-space()="Home"]')}
    get condition(){return $('//h2[normalize-space()="Condition"]')}
    get new_filter(){return $('//input[@data-type="new"]')}
    get used_vehicle(){return $('(//div[text()="used"])[1]')}
    get newCondition(){return $('//input[@name="checkedG2"]')}
}
module.exports = new Search()
