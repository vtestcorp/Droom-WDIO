const base = require("../../BaseClass/base");
class Search {
    get acceptcontinue() { return base.getByText('Accept & continue') }
    get searchBox (){return base.getByResourceId('main_search')}
    get searchBox2(){return base.getByClass("android.widget.EditText")}
    get searchBoxHeader (){return base.getByResourceId('header_search_box')}
    get helpPopUp(){return base.getByText("x")}
    get trendingSearch() { return base.getByResourceId("as_trendings") }
    get submitMyReq(){return base.getByText("Submit My Requirement")}
    get mainSearchResult(){return base.getByResourceId("main_search_results")}
    get tharResult(){return base.getByText("Mahindra Thar AX Optional 4 STR Convertible Diesel MT BS6 2020")}
    get activaResult(){return base.getByText("Honda Activa 3G 110cc 2017")}
    get sort(){return base.getByText("Sort")}
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
    get sortResultNew(){return base,getByText("New")}
    get sortResult1(){return base.getByText("Honda Activa 3G 110cc 2016")}
    get sortResult2(){return base.getByText("Honda Activa 110cc 2017")}

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