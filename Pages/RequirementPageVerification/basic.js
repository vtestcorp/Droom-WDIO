class RPVerification
{
    get username () { return $('(//button[@class="close em-show-later"])[2]') }

}
module.exports = new RPVerification()