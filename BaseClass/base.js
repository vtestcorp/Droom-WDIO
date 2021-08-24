const { default: waitForDisplayed } = require("webdriverio/build/commands/element/waitForDisplayed");

class Base
{
    async loginAsBuyer()
    {
        try{
      await (await $('.jss1')).waitForDisplayed({timeout:20000,timeoutMsg:"Popup not displayed"});}
      catch{ }
      await (await $('(//button[@class="close em-show-later"])[2]')).click();
      await(await $('#user_details')).click();
      await(await $("a[class='btn btn-primary']")).click();
      await(await $("#userLogin")).setValue("vikasy898@gmail.com");
      await(await $(".d-letter-spacing-1[href='#viaPassword']")).click();
      await(await $("#password")).setValue("Vtest@123");
      await(await $("input[value='Login']")).click();
      await(await $("div[class='profile'] img[alt='Seller image']")).waitForDisplayed({timeout:10000});
    }
}
module.exports=new Base();