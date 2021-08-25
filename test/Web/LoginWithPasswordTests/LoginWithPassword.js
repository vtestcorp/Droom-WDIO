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
       console.log(browser.getUrl());
        browser.url('https://droom.in/');
        expect(browser).toHaveTitle('My StoreManager | Droom');
        //const ele=$('//a[text()="Subscribe"]')
        //expect(ele).toBeDisplayed()
        await(await $('#user_details')).moveTo();
        //browser.pause('20000');
       // browser.closeWindow();
       await(await $('//a[text()="Log Out"]')).click();
      });

      // it("TC_02_Login with Valid UserName and Invalid Password", async()=>{
      //    allureReporter.addFeature("TC_02_Login With Valid Username and Valid Password");
      //    browser.url('/')
      //    await(await $('#user_details')).moveTo();
      //    await (await $('//a[text()="Log In"]')).click();
      //    await(await $('#userLogin')).setValue("poonam@vtestcorp.com");
      //    await(await $(".d-letter-spacing-1[href='#viaPassword']")).click();
      //    await(await $("#password")).setValue("Vtest@12");
      //    await(await $('//input[@type="submit"]')).click();
      //    browser.pause('20000');
      //    //await(await $('//div[@id="div-gpt-ad-1617177992772-0"]'))
      //    //const errorpopup= $('//div[@id="div-gpt-ad-1617177992772-0"]')
      //    //expect(errorpopup).toBeDisplayed()
      //    //div[@class='"toast toast-error"]
      //    const errormsg= $('//small[@class="text-error text-left d-display-block"]')
      //    expect (errormsg).toBeDisplayed()
      //    console.log('User is unable to login valid username & invalid password')
      //    console.log('error popup shows:User Does not exists')
      // });

      // it("TC_03_Login with Valid UserName and Invalid Password", async()=>{
      //    browser.url('/')
      //    await(await $('#user_details')).moveTo();
      //    await (await $('//a[text()="Log In"]')).click();
      //    await(await $('#userLogin')).setValue("poonam1@vtestcorp.com");
      //    await(await $(".d-letter-spacing-1[href='#viaPassword']")).click();
      //    await(await $("#password")).setValue("Punam@123");
      //    await(await $('//input[@type="submit"]')).click();
      //    const errormsg= $('//div[@class="toast toast-error"]')
      //    expect (errormsg).toBeDisplayed()
      //    console.log('User is unable to login Invalid username & Valid password')
      //    console.log('error popup shows: User Does not exists')
      // });

      // it("TC_04_Login With InValid Username and InValid Password", async()=>{
      //    ////div[@class='toast-message']
         
      //    browser.url('/')
      //     await(await $('#user_details')).moveTo();
      //     await (await $('//a[text()="Log In"]')).click();
      //     await(await $('#userLogin')).setValue("poonam1@vtestcorp.com");
      //     await(await $(".d-letter-spacing-1[href='#viaPassword']")).click();
      //     await(await $("#password")).setValue("vtest@123");
      //     await(await $('//input[@type="submit"]')).click();
      //     const errormsg= $('//div[@class="toast-message"]')
      //     expect (errormsg).toBeDisplayed()
      //     console.log('User is unable to login Invalid Credentials')
      //     console.log('error popup shows: User Does not exists')
 
      //    });
 
      //    it("TC_05_To_Verify_Login_Functionality_With_Blank_Username", async()=>{
      //      ////span[@class='text-danger email-error text-left d-display-block']
      //      browser.url('/')
      //      await(await $('#user_details')).moveTo();
      //      await (await $('//a[text()="Log In"]')).click();
      //      let ele = await $('//a[normalize-space()="Login Via Password"]')
      //      let clickable= await ele.isClickable();
      //      //const isEnabled = await ele.isEnabled();
      //      console.log(clickable);
      //      await(await $(".d-letter-spacing-1[href='#viaPassword']")).click();
      //      const usernameerrormsg=$('//span[@class="text-danger email-error text-left d-display-block"]')
      //      expect(usernameerrormsg).toBeDisplayed()
      //      console.log('User is unable to click on Login Via Password button')
      //      console.log('error message: Please Enter A Valid Email Id or Mobile Number')
   
      //    });
      //    it("TC_06_To_Verify_Login_Functionality_With Valid_Username_Blank_Password", async()=>{
      //      ////small[@class='text-error text-left d-display-block']
      //      browser.url('/')
      //     await(await $('#user_details')).moveTo();
      //     await (await $('//a[text()="Log In"]')).click();
      //     await(await $('#userLogin')).setValue("poonam@vtestcorp.com");
      //     await(await $(".d-letter-spacing-1[href='#viaPassword']")).click();
      //     await(await $('//input[@type="submit"]')).click();
      //     const passwrderrormsg= $('//small[@class="text-error text-left d-display-block"]')
      //     expect(passwrderrormsg).toBeDisplayed();
      //     console.log('User unable to login with valid email and blank password')
      //     console.log('error message: Please enter a password')
 
      //    });
 
     
      //    it("TC_01_To_Verify_Login_With_Social_Login", async()=>{
      //       browser.url('/')
      //       await(await $('#user_details')).moveTo();
      //       await (await $('//a[text()="Log In"]')).click();
      //       browser.pause('30000')
      //       const facebookloginBtn= $ ('//a[text()="Login with Facebook"]')
      //       expect (facebookloginBtn).toBeDisplayed()
      //       await(await $('//a[text()="Login with Facebook"]')).click();
      //      await browser.switchWindow('facebook.com')
      //      await (await $('//input[@id="email"]')).setValue("matade10@rediffmail.com");
      //      await (await $('//input[@id="pass"]')).setValue("punuganu123");
      //      console.log('User entered facebook credentials for droom login');
      //      await (await $('//input[@name="login"]')).click();
      //      //await (await $('(//button[@type="submit"])[1]')).click();
      //      browser.back()
      //      const ele=$('(//div[@class="seller-name"])[2]')
      //      expect (ele).toHaveTextContaining('Welcome,')
      //      console.log('User sucessfully login to droom through facebook credentials');

      //    });

      });