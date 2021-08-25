const Base = require('../../BaseClass/base')
const RPV = require('../../Pages/RequirementPageVerification/basic')
describe('Requirements Page Verification',()=>{
    it('Validating all created requirements are displayed',async()=>{
      await Base.loginAsBuyer();
      await browser.pause(5000);

    })
})