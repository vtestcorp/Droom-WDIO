class RequirementsPageVerification
{
    get requirements() { return $('(//a[text()="My Requirements"])[1]') }
    get count() { return $('//p[@class="r-MuiTypography-root r-r6 r-MuiTypography-body1 r-MuiTypography-gutterBottom"]') }
    get score() { return $('(//div[@class="r-MuiTypography-root r-MuiTypography-caption r-MuiTypography-colorTextSecondary"])[1]') }
    get edit() { return $('(//span[@class="r-MuiIconButton-label"])[1]') }
    get newRequirements() { return $('//span[text()=" + Add New Requirement"]') }
    get name() { return $('(//input[@class="r-MuiInputBase-input"])[1]') }
    get priceRange() { return $('(//div[@class="r-MuiGrid-root r-r51 r-MuiGrid-item r-MuiGrid-grid-xs-4 r-MuiGrid-grid-sm-3"])[1]') }
    get condition() { return $('(//span[text()="Condition"])[1]') }
    get year() { return $('(//span[text()="Year"])[1]') }
    get km() { return $('(//div[@class="r-MuiTypography-root r-MuiTypography-body1"])[1]') }
    get transmission() { return $('(//div[@class="r-MuiTypography-root r-MuiTypography-body1"])[2]') }
    get Color() { return $('(//div[text()="Ext Color"])[1]') }
    get Body() { return $('(//div[text()="Body Type"])[1]') }
    get payment() { return $('(//span[text()="Unlock Fee Payment Pending"])[1]') }
}
module.exports = new RequirementsPageVerification();