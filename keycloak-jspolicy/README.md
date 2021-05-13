# Sample Application Using Keycloak JS Policy

## Overview

Policy check based on users age and the amount submitted to withdraw. 
Single end point ```/api/amount-withdraw/{amount}```

### Conditions

* Only user with accountant role can access this api.
* User with age over 60 can withdraw amount above ```100,000```


## Users


|Username|Role|Age|
|-------|-----|--|
|alice|accountant|65|
|bob|accountant|50|
|john|customer|40|

# Running Application

## Download Keycloak

1. Download Keyclock from [here](https://github.com/keycloak/keycloak/releases/download/12.0.4/keycloak-12.0.4.zip)
2. Place the file in a directory you choose.
3. Unpack the ZIP file using the appropriate unzip utility, such as unzip, tar, or Expand-Archive.

## Starting Keycloak Server

* Copy ```config/mylib.jar``` file to ```keycloak-12.0.4/standalone/deployments``` folder
* Start keycloak server

```
./bin/standalone.sh -Dkeycloak.profile.feature.upload_scripts=enabled
```
* Keycloak server will be started at default port ```:8080```

* Import ```config/realm-export.json``` from keycloak server administrative console.

## Quarkus application

* run using ```mvn quarkus:dev```

* Token Endpoint

```
http://localhost:8080/auth/realms/keycloak-realm/protocol/openid-connect/token

Authorization
username : backend-service
password : secret

x-www-form-urlencoded
grant_type : password
username: alice
password: alice

Response
access_token
```

* application end point 

```
http://localhost:8085/api/amount-withdraw/{amount}

Authorization : "Bearer {access_token}"
```




