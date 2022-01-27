const base = require('../../BaseClass/base');

class Search {
    get mainPopup(){return base.getByResourceId("in.droom:id/btn_close")}
    get search_Box() { return base.getByText("Search…")}
    get searchBoxTxt() { return base.getByResourceId("in.droom:id/searchEditText")}
    get headingVehicle() { return base.getByResourceId("in.droom:id/listing_name")}
    get home(){return base.getByText("Home")}
    get vistaLink() { return base.getByText("Super Cars")}
    get vistaLinkResult(){return base.getByText("Luxury / Super Cars")}
    get trendingSearch(){return base.getByResourceId("in.droom:id/txtViewForSort")}
    get popular_search() { return ('//h5[normalize-space()="Trending Searches"]') }
    get submit_req() { return ('//span[normalize-space()="Submit My Requirement"]') }
    get recent_search() { return ('//h5[normalize-space()="Recent Searches"]') }
    get headingRecentSearch() { return ('//span[normalize-space()="Mahindra Thar 4X4 2015"]')}
    get home() { return ('//span[text()="Home"]') }
    get recent_search_Heading(){return ('//span[contains(text(),"Mahindra Thar 4X4 2015")]')}
    get item (){return ('(//li[@class="d-display-block d-margin-bottom-5"])[2]')}
    get count() { return ('//span[contains(text(),"(Showing")]') }
    get creta() { return ('(//span[contains(text(),"Hyundai Creta")])[1]') }
    get activa() { return ('(//span[contains(text(),"Honda Activa")])[1]') }
    get activaHeading() { return ('//strong[normalize-space()="Honda Activa"]') }
    get filterForActiva() { return ('//label[normalize-space()="Most Relevant"]') }
    get priceFilter(){return ('//a[normalize-space()="Price (Low to High)"]')}
    get headingAfterFilter(){return ('//h1[contains(text(),"No results found for")]')}
}
module.exports = new Search()
