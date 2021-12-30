const base = require("../../BaseClass/base")

class CheckHistory{

    get mainPopup(){return base.getByResourceId("in.droom:id/btn_close") }
    get vehicleHistory() {return base.getByText("Vehicle History")}
    get registrationNo() {return base.getByResourceId("vehicle_reg_no")}
    get checkhistoryBtn() {return base.getByResourceId("submit_history")}
    get headingCheckHistory() {return base.getByText("CHECK ANY VEHICLE’S HISTORY ONLINE!")}
    get vehicleCertificate() {return base.getByText("Vehicle History Certificate")}
    get toggleBtn() {return base.getByText("Toggle navigation")}
    get Home() {return base.getByResourceId("Home")}
    

    

}

module.exports=new CheckHistory()