const base = require("../../BaseClass/base");
class Search {
    get searchBox(){return base.getByResourceId('main_search')}
    get searchBoxHeader (){return base.getByResourceId('header_search_box')}
    get helpPopUp(){return base.getByText("x")}
    get trendingSearch() { return base.getByResourceId("as_trendings") }
    get recentSearch() { return base.getByResourceId("as_recent") }
    get submitMyReq(){return base.getByText("Submit My Requirement")}
    get mainSearchResult(){return base.getByResourceId("main_search_results")}
    get cretaResult(){return base.getByText("Hyundai Creta 1.6 SX AT Diesel 2019")}
    get tharResult(){return base.getByText("Mahindra Thar AX Optional 4 STR Convertible Diesel MT BS6 2020")}
    get activaResult(){return base.getByText("Honda Activa 3G 110cc 2017")}
    get bikeVistaLink(){return base.getByText("Bike")}
    get countInfo(){return base.getByText("Read More")}
    get vistaLinkResult(){return base.getByText("breadcrumb")}
    get sort(){return base.getByText(" Sort")}
    get sortingLable(){return base.getByResourceId("sortingModalLabel")}
    get mostRelevent(){return base.getByText("Most Relevant")}
    get nearMe(){return base.getByText("Near Me")}
    get priceLowToHigh(){return base.getByText("Price (Low to High)")}
    get pricehighToLow(){return base.getByText("Price (High to Low)")}
    get kmsdriven(){return base.getByText("KMs Driven (Min to Max)")}
    get Year(){return base.getByText("Year (Newest to Oldest)")}
    get fullCircle(){return base.getByText("Full Circle Trust Score (High to Low)")}
    get mostViewed(){return base.getByText("Most Viewed")}
    get mostRecent(){return base.getByText("Most Recent")}
    get sortResultNew(){return base.getByText("New")}
    get sortResult1(){return base.getByText("Honda Activa 3G 110cc 2016")}
    get sortResult2(){return base.getByText("Honda Activa 110cc 2017")}
    get hondaResult(){return base.getByText("Honda City 1.5 V MT 2019")}
    get filter(){return base.getByText(" Filters")}
    get locationFilter(){return base.getByText("Location")}
    get PriceFilter(){return base.getByText("Price Range")}
    get modelFilter(){return base.getByText("Model")}
    get yearFilter(){return base.getByText("Year")}
    get certificationFilter(){return base.getByText("Certification Tools")}
    get makeFilter(){return base.getByText("Make")}
    get BodyTypeFilter(){return base.getByText("Body Type")}
    get colorFilter(){return base.getByText("Exterior Color")}
    get warrantyFilter(){return base.getByText("Warranty And Inspection")}
    get HistoryFilter(){return base.getByText("History Available")}
    get videoFilter(){return base.getByText("Video Available")}
    get sellerRatingFilter(){return base.getByText("Seller Ratings")}
    get resetBtn(){return base.getByText("Reset")}
    get applyFilter(){return base.getByText("Apply")}
    get filterResult(){return base.getByText("Honda City E i-DTEC 2015")}
    get droomLogo(){return base.getByText("Droom Logo")}
    async loginAsBuyer() {
        await (await this.allow).waitForDisplayed({ timeout: 60000 })
        await (await this.allow).click()
        await (await this.allow).click()
        await (await this.menu).click()
        await (await this.cancel).click()
        await (await this.login).click()
        await (await this.userLogin).setValue("vtest1@gmail.com")
        await (await this.loginPassword).click()
        await (await this.password).setValue("Vtest@123")
        await (await this.login).click()
       await (await this.manage_buying).waitForDisplayed({ timeout: 60000 })
    }
}
module.exports = new Search();