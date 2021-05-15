## Different Mode

1. Standalone Mode

Standalone operating mode is only useful when you want to run one, and only one Keycloak server instance. It is not usable for clustered deployments and all caches are non-distributed and local-only.

2. Standalone Clustered Mode

Standalone clustered operation mode is for when you want to run Keycloak within a cluster. This mode requires that you have a copy of the Keycloak distribution on each machine you want to run a server instance. This mode can be very easy to deploy initially, but can become quite cumbersome. To make a configuration change you’ll have to modify each distribution on each machine.

3. Domain Mode

Domain mode is a way to centrally manage and publish the configuration for your servers.

[reference](https://github.com/andrewrothstein/ansible-keycloak)
