# Sample Application Using Keycloak JS Policy

## Overview

Policy check based on users age and the amount submitted to withdraw. 
Single end point ```/api/amount-withdraw/{amount}```

### Conditions

* Only user with accountant role can access this api.
* User with age over 60 can withdraw amount above ```100,000```



