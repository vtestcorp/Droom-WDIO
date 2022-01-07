class RequirementsPageVerification
{
    get profile() { return $('.user-login-global')}
    get requirements() { return $('(//a[text()="My Requirements"])[1]') }
    get count() { return $('//p[@class="r-MuiTypography-root r-r6 r-MuiTypography-body1 r-MuiTypography-gutterBottom"]') }
    get score() { return $('(//div[@class="r-MuiTypography-root r-MuiTypography-caption r-MuiTypography-colorTextSecondary"])[1]') }
    get edit() { return $('(//span[@class="r-MuiIconButton-label"])[1]') }
    get newRequirements() { return $('//span[text()=" + Add New Requirement"]') }
    get name() { return $('//h2[@class="r-MuiBox-root r-r69 r-r37"]') }
    get priceRange() { return $('(//div[@class="r-MuiGrid-root r-r51 r-MuiGrid-item r-MuiGrid-grid-xs-4 r-MuiGrid-grid-sm-3"])[1]') }
    get condition() { return $('(//div[@class="r-MuiGrid-root r-r51 r-MuiGrid-item r-MuiGrid-grid-xs-4 r-MuiGrid-grid-sm-3"])[2]') }
    get year() { return $('(//div[@class="r-MuiGrid-root r-r51 r-MuiGrid-item r-MuiGrid-grid-xs-4 r-MuiGrid-grid-sm-3"])[3]') }
    get km() { return $('(//div[@class="r-MuiTypography-root r-MuiTypography-body1"])[1]') }
    get transmission() { return $('(//div[@class="r-MuiTypography-root r-MuiTypography-body1"])[2]') }
    get fuelType() { return $('(//div[@class="r-MuiTypography-root r-MuiTypography-body1"])[3]')}
    get Color() { return $('(//div[@class="r-MuiTypography-root r-MuiTypography-body1"])[4]') }
    get Body() { return $('(//div[@class="r-MuiTypography-root r-MuiTypography-body1"])[5]') }
    get location() { return $('(//div[@class="r-MuiTypography-root r-MuiTypography-body1"])[6]')}
    get payment() { return $('(//span[text()="Unlock Fee Payment Pending"])[1]') }
}
module.exports = new RequirementsPageVerification();