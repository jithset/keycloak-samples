var context = $evaluation.getContext();
var identity = context.getIdentity();
var contextAttributes = context.getAttributes();
var attributes = identity.getAttributes();
var age = attributes.getValue('age').asInt(0);
var claimUri = contextAttributes.getValue('claim-from-relativePath');

if (claimUri) {
    var uriParts = claimUri.asString(0).split('/');
    var amount = parseFloat(uriParts[3]);
    if (age<60 && amount > 100000) {
        $evaluation.deny();
    } else {
        $evaluation.grant();
    }
    
}
