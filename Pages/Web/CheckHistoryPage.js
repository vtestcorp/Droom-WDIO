class CheckHistory{
    get popup() {return $('(//button[@class="close"])[7]')}
    get checkHistory() {return $('//a[text()="Check History"]')}
    get registredVehicleRegNo() {return $('//input[@id="vehicle_reg_no"]')}
    get checkHistoryBtn() {return $ ('//button[text()="Check History"]')}
    get vehicleCertificate() {return $('//h1[normalize-space()="Vehicle History Certificate"]')}
    get historylink() {return $('//a[text()="History"]')}
    get aboutTab() {return $('(//a[text()="About"])[1]')}
    get aboutHistory() {return $('//h2[text()="ABOUT HISTORY"]')}
    get whyHistory() {return $('//h2[text()="Why History"]')}
    get keyHighlights() {return $('//h2[text()="KEY HIGHLIGHTS"]')}
    get premiumCertificate() {return $('//a[text()="Premium Certificate"]')}
    get heading() {return $('//h2[@class="heading d-margin-0 d-margin-bottom-15 d-text-black d-font-size-18 text-center d-font-weight-500"]')}
    get goldCertificate() {return $('//input[@id = "gold"]')}
    get platinumCertificate() {return $('//input[@id = "platinum"]')}
    get sampleReport() {return $('//a[text()="View Sample Report"]')}
    get faq() {return $('//h2[text()="Faqs"]')}
    get faqList() {return $$('//li[@class="d-margin-0 d-margin-top-5 d-margin-bottom-30 d-font-size-20 d-text-gray"]')}
    get certificateLink() {return $('//a[text()="View Sample Vehicle History Certificate"]')}
    get sampleCertificate() {return $('//h4[@id="myModalLabel"]')}
    get homeTab() {return $('//a[text()="Home"]')}
    get list() {return $('ul')}
    get list1(){return $$('//li[@class="d-margin-0 d-margin-top-5 d-margin-bottom-30 d-font-size-20 d-text-gray"]')}
    get categories() {return $('//span[text()="Categories"]')}
    get history() {return $('//div[text()="History"]')}
    get close() {return $('(//span[text()="×"])[1]')}

}
module.exports=new CheckHistory();