const base = require("../../BaseClass/base");

class RequirementsVerification
{
    get my_requirement() { return base.getByResourceId('in.droom:id/textview_my_requirement') }
    get txt_more() { return base.getByResourceId('in.droom:id/txt_more') }
    get txt_total_req() { return base.getByResourceId('in.droom:id/txt_total_req') }
    get tsmb_score() { return base.getByResourceId('in.droom:id/smb_score') }
    get txt_title() { return base.getByResourceId('in.droom:id/txt_title') }
    get renameRequirement() { return base.getByText('Rename Requirement') }
    get addNewRequirement() { return base.getByResourceId('in.droom:id/addNewRequirement') }
    get txt_token_amount_paid() { return base.getByResourceId('in.droom:id/txt_token_amount_paid') }
    get makeModel() { return base.getByResourceId('in.droom:id/makeModelTV') }
    get priceRangeView() { return base.getByResourceId('in.droom:id/priceRangeView') }
    get conditionView() { return base.getByResourceId('in.droom:id/conditionView') }
    get yearView() { return base.getByResourceId('in.droom:id/yearView') }
    get best_match_section() { return base.getByResourceId('in.droom:id/best_match_section') }
    get my_match_section() { return base.getByResourceId('in.droom:id/my_match_section') }
    get km_view() { return base.getByResourceId('in.droom:id/km_view') }
    get manual_view() { return base.getByResourceId('in.droom:id/manual_view') }
    get petrol_view() { return base.getByResourceId('in.droom:id/petrol_view') }
    get maroon_view() { return base.getByResourceId('in.droom:id/maroon_view') }
    get hatchback_view() { return base.getByResourceId('in.droom:id/hatchback_view') }
    get location_view() { return base.getByResourceId('in.droom:id/location_view') }
}
module.exports = new RequirementsVerification();