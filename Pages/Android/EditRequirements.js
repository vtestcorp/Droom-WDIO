const base = require("../../BaseClass/base");

class EditRequirements
{
 get myRequirementsOpt(){return base.getByText("My Requirements")}
 get requirement(){return base.getByResourceIdNText("in.droom:id/txt_my_matches_count","(269)")}
 get totalReqLbl(){return base.getByResourceId("in.droom:id/txt_total_req")}
 get searchMyLocationBtn(){return base.getByResourceId("in.droom:id/openAutoComplete")}
 get searchMyLocationTxt(){return base.getByResourceId("in.droom:id/places_autocomplete_search_bar")}

}
module.exports=new EditRequirements()