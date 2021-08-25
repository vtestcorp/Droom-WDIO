const { default: $ } = require("webdriverio/build/commands/element/$");

describe("Check History", ()=>{
    it("TC_01_To_Verify_Functionality_Of_Check_History", async()=>{
        //await(await $('(//button[@class="close em-show-later"])[2]')).click();
        await(await $('#user_details')).moveTo();
        //await(await $("a[@class='btn btn-primary']")).click();
        await (await $('//a[text()="Log In"]')).click();
        await(await $('#userLogin')).setValue("poonam@vtestcorp.com");
        await(await $(".d-letter-spacing-1[href='#viaPassword']")).click();
        await(await $("#password")).setValue("Punam@123");
        await(await $('//input[@type="submit"]')).click();
        console.log('User Successfully login to application with valid credentials');
        await browser.pause(10000)
        await (await $ ('(//button[@class="close"])[7]')).click();
        await (await $('//a[text()="Check History"]')).click();
        await (await $('//input[@id="vehicle_reg_no"]')).setValue("MH13 Y 4444");
        console.log('User entered Valid Registration Number');
        await (await $('//button[text()="Check History"]')).click();
        const ele= await $('//h1[normalize-space()="Vehicle History Certificate"]')
        expect(ele).toBeDisplayed()
        console.log('Application show Vehicle History Certificate');
        browser.url('https://droom.in/');
        expect(browser).toHaveTitle('History');
        console.log('Navigate to History Page'); 
       // await(await $('#user_details')).moveTo();
       //await(await $('//a[text()="Log Out"]')).click();

    });

    it("TC_02_To_Verify_About_Menu_On_History_Page", async()=>{
        browser.url('/')
        await (await $('//a[text()="Check History"]')).click();
        await (await $('(//a[text()="About"])[1]')).click();
        console.log('User click on ABOUT Tab on check history Page');
       const ele1= await $ ('//h2[text()="ABOUT HISTORY"]')
       expect(ele1).toBeDisplayed()
       const ele2= await $ ('//h2[text()="Why History"]')
       expect(ele2).toBeDisplayed()
       const ele3= await $ ('//h2[text()="KEY HIGHLIGHTS"]')
       expect(ele3).toBeDisplayed()
       console.log('All Points are displayed in About Page');
        
       

    });

    it("TC_03_To_Verify_Premium_Certificate_On_History_Page", async()=>{
        browser.url('/')
        await (await $('//a[text()="Check History"]')).click();
        await (await $('//a[text()="Premium Certificate"]')).click();
        await (await $('//input[@id="vehicle_reg_no"]')).setValue("MH13 Y 4444");
        console.log('User entered Valid Registration Number');
        const goldbtn= $('//input[@id = "gold"]')
        expect(goldbtn).toBeDisplayed()
        console.log('Application shows gold Certificate');
        const platinumbtn= $('//input[@id = "platinum"]')
        expect (platinumbtn).toBeDisplayed()
        console.log('Application shows platinum Certificate');
    });

    it("TC_04_To_Verify_The_List_Of_FAQs_Is_Displayed_On_History_Page", async()=>{
        browser.url('/')
        await (await $('//a[text()="Check History"]')).click();
        //await (await $('//h2[text()="Faqs"]')).click();
        const ele= await $('//h2[text()="Faqs"]')
        await ele.scrollIntoView();
        expect(ele).toBeDisplayed()
        
        console.log('Application shows FAQ Points');
       const list1= await $$('//li[@class="d-margin-0 d-margin-top-5 d-margin-bottom-30 d-font-size-20 d-text-gray"]').find(element=>{
        //const list= await $$('//div[@class="faq-lists"]').find(element=>{
       console.log(element.getText())
       });
       const list=$('ul')   
       expect (list).toHaveChildren(5)
    });

    it("TC_06_To_Verify_The_Home_Option_Is_Functional_On_History_Page", async()=>{

        browser.url('/')
        await (await $('//a[text()="Check History"]')).click();
        await (await $('//a[text()="Home"]')).click()
        //India's Most Trusted Motorplace to Buy & Sell Used Cars, Bikes, Scooters Online | Droom
        var url= browser.getUrl();
        console.log(url);
        expect(url)
    });

    });