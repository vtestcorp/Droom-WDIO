const { default: waitForDisplayed } = require("webdriverio/build/commands/element/waitForDisplayed");
class Base {
  async loginAsBuyer() {
    try {
      await (await $('.jss1')).waitForDisplayed({ timeout: 20000, timeoutMsg: "Popup not displayed" });
      await (await $('(//button[@class="close em-show-later"])[2]')).click();
    }
    catch { }
    await (await $('#user_details')).click();
    await (await $("a[class='btn btn-primary']")).click();
    await (await $("#userLogin")).setValue("vikasy898@gmail.com");
    await (await $(".d-letter-spacing-1[href='#viaPassword']")).click();
    await (await $("#password")).setValue("Vtest@123");
    await (await $("input[value='Login']")).click();
    await (await $("div[class='profile'] img[alt='Seller image']")).waitForDisplayed({ timeout: 10000 });
    await browser.pause(2000);
  }
  async getByResourceId(id) {
    const selector = 'new UiSelector().resourceId("' + id + '")'
    const a = await $(`android=${selector}`)
    return a
  }
  async getByText(text) {
    const selector = 'new UiSelector().text("' + text + '")'
    const a = await $(`android=${selector}`)
    return a
  }
  async CreateRequiRementspage() {
    const currentLocation = await $('//div[text()="Current Location"]')
    const newBtn = await $('(//span[text()="New"])[2]')
    const nextButton = await $('//span[text()="Next "]')
    const UsedButton = await $('//span[text()="Used"]')
    const selectCar = await $('(//span[@class="s-MuiButton-label"])[1]')
    const alsoNeed = await $('//p[text()="Do you also need?"]')
    const petrol = await $('(//span[@class="s-MuiIconButton-label"])[3]')
    const selectColor = await $('(//div[@class="s-MuiGrid-root s-MuiGrid-item s-MuiGrid-grid-xs-2"])[2]')
    await (await $('//i[@class="web-g-icon web-g-icon-my-requirement d-font-size-22 d-display-inline-block d-position-relative d-valign-middle"]')).click()
    const fuelType = await $('//p[text()="Fuel Type"]')
    selectCar.click()
    await (await $('//input[@id="react-select-2-input"]')).setValue("Pune")
    await (await $('//div[text()="Pune, Maharashtra, India"]')).click()
    nextButton.click()
    await (await $('//input[@placeholder="E.g Maruti Suzuki Swift 2017 LDI"]')).setValue("Swift")
    await (await $('(//li[@class="d-block d-margin-bottom-10 d-font-size-13"])[1]')).click()
    nextButton.click()
    expect(fuelType).toBeDisplayed()
    petrol.click()
    selectColor.moveTo()
    selectColor.click()
    await (await $('(//div[@class="s-MuiGrid-root s-MuiGrid-item s-MuiGrid-grid-xs-4"])[1]')).click()
    nextButton.click()
    await alsoNeed.waitForExist({timeout: 5000})
    nextButton.click()
    await (await $('//span[text()="Submit & View All Matches "]')).click()
    const requirements = await $('//span[text()=" View all Requirements "]')
    requirements.click()


  }

}
module.exports = new Base();