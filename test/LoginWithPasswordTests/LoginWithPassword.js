

//const LoginWithPassword = require("../../Pages/LoginWithPasswordPageObject/LoginWithPassword")
 var assert =require('assert');
//const { default: $ } = require('webdriverio/build/commands/element/$');
describe("Login Via Password", ()=>{
    it("TC_01_Login With Valid Username and Valid Password", async()=>{
       //await(await $('(//button[@class="close em-show-later"])[2]')).click();
       await(await $('#user_details')).moveTo();
       //await(await $("a[@class='btn btn-primary']")).click();
       await (await $('//a[text()="Log In"]')).click();
       await(await $('#userLogin')).setValue("poonam@vtestcorp.com");
       await(await $(".d-letter-spacing-1[href='#viaPassword']")).click();
       await(await $("#password")).setValue("Punam@123");
       await(await $('//input[@type="submit"]')).click();
       console.log('User Successfully login to application with valid credentials');
      // browser.pause('20000');
       var loginurl = browser.getUrl();
       console.log(loginurl);
        browser.url('https://droom.in/');
        expect(browser).toHaveTitle('My StoreManager | Droom');
        //const ele=$('//a[text()="Subscribe"]')
        //expect(ele).toBeDisplayed()
        await(await $('#user_details')).moveTo();
        //browser.pause('20000');
       // browser.closeWindow();
       await(await $('//a[text()="Log Out"]')).click();
      });

      it("TC_02_Login with Valid UserName and Invalid Password", async()=>{
         //await(await $('(//button[@class="close em-show-later"])[2]')).click();
         browser.url('/')
         await(await $('#user_details')).moveTo();
         await (await $('//a[text()="Log In"]')).click();
         await(await $('#userLogin')).setValue("poonam@vtestcorp.com");
         await(await $(".d-letter-spacing-1[href='#viaPassword']")).click();
         await(await $("#password")).setValue("Vtest@12");
         await(await $('//input[@type="submit"]')).click();
         browser.pause('20000');
         //await(await $('//div[@id="div-gpt-ad-1617177992772-0"]'))
         //const errorpopup= $('//div[@id="div-gpt-ad-1617177992772-0"]')
         //expect(errorpopup).toBeDisplayed()
         ////div[@class='toast toast-error']
         const errormsg= $('//small[@class="text-error text-left d-display-block"]')
         expect (errormsg).toBeDisplayed()
         console.log('User is unable to login valid username & invalid password')
         console.log('error popup shows:User Does not exists')
      });
      it("TC_03_Login with Valid UserName and Invalid Password", async()=>{
         browser.url('/')
         await(await $('#user_details')).moveTo();
         await (await $('//a[text()="Log In"]')).click();
         await(await $('#userLogin')).setValue("poonam1@vtestcorp.com");
         await(await $(".d-letter-spacing-1[href='#viaPassword']")).click();
         await(await $("#password")).setValue("Punam@123");
         await(await $('//input[@type="submit"]')).click();
         const errormsg= $('//div[@class="toast toast-error"]')
         expect (errormsg).toBeDisplayed()
         console.log('User is unable to login Invalid username & Valid password')
         console.log('error popup shows: User Does not exists')
      });

     

 });