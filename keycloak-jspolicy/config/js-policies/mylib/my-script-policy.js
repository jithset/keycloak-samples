var context = $evaluation.getContext();
var identity = context.getIdentity();
var attributes = identity.getAttributes();
var age = attributes.getValue('age').asInt(0);
if (age> 60) {
    print ("Granted");
    $evaluation.grant();    
}

