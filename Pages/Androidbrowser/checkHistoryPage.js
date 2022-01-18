const base = require("../../BaseClass/base")

class checkHistory {

    get title() {return base.getByText('CHECK ANY VEHICLE’S HISTORY ONLINE!')}
    get registredVehicleRegNo() {return base.getByResourceId('vehicle_reg_no')}
    get checkHistoryBtn() {return base.getByText('Check History')}
    get certificateLink() {return base.getByText('View Sample Vehicle History Certificate')}
    get vehicleCertificate() {return base.getByText('Vehicle History Certificate')}
    get faq() {return base.getByText('FAQS')}
    get point1() {return base.getByText('Can I sell Vehicle History certificate?')}
    get point2() {return base.getByText('How is a Droom Vehicle certificate helpful?')}
    get point3() {return base.getByText('Why is the Vehicle History certificate I am looking for not available on the website?')}
    get point4() {return base.getByText('How will I receive my Vehicle History certificate?')}
    get point5() {return base.getByText('What is the cost of History certificate?')}
    get sampleCertificate() {return base.getByText('Sample Vehicle History Certificate')}
    get home() {return base.getByText('Home')}
    get homeurl() {return base.getByResourceId('com.android.chrome:id/url_bar')}

    
    async swipeUp1() {
        const { width, height } = await driver.getWindowRect()
        await browser.touchPerform([
            { action: 'press', options: { x: (width / 2), y: ((height / 5) * 2) } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: (width / 2), y: (height / 5) } },
            { action: 'release' }
        ]);
    }
    async addToCart() {
        await (await this.pay_Best).click()
        await browser.pause(2000)
        await (await this.Droom_Pay).waitForDisplayed({ timeout: 10000 })
    }

};
module.exports = new checkHistory();