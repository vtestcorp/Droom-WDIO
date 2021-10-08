const base = require('../../BaseClass/base')
class obv {
    get moreOptions(){return base.getByText("More actions")}
    get menu (){return base.getByContDesc("Menu")}
    get valuation(){return base.getByText("Valuation")}
    get pricingCalculator(){return base.getByText("Used Vehicle Pricing Calculator")}
    get IwanttoBuy(){return base.getByText("I Want to Buy")}
    get IwanttoSell(){return base.getByText("I Want to Sell")}
    get fromIndividual(){return base.getByText("From Individual")}
    get fromDealer(){return base.getByText("From Dealer")}
async traverseToValuation() {}
    console.log("Traversing to ECO")  
    await (await this.menu).click()
    console.log("Clicked on Menu")
    await base.scrollToExactText("Valuation")
    await (await this.valuation).click()
    console.log("Clicked on Valuation ")
}
}
module.exports = new obv()