# Server Installation and Configuration Guide

need to decide 

* to manage server configuration at runtime (standalone or domain mode)
* configure a shared database for Keycloak storage
* set up encryption and HTTPS,
* finally set up Keycloak to run in a cluster.

## Choosing OS

Before deploying Keycloak in a production environment you need to decide which type of operating mode you are going to use. Will you run Keycloak within a cluster? Do you want a centralized way to manage your server configurations? Your choice of operating mode affects how you configure databases, configure caching and even how you boot the server.

## Standalone Mode

Standalone operating mode is only useful when you want to run one, and only one Keycloak server instance. 

It is not recommended that you use standalone mode in production as you will have a single point of failure. 

## Domain Clustered Mode

Domain mode is a way to centrally manage and publish the configuration for your servers.

Running a cluster in standard mode can quickly become aggravating as the cluster grows in size. Every time you need to make a configuration change, you have to perform it on each node in the cluster. Domain mode solves this problem by providing a central place to store and publish configurations. It can be quite complex to set up, but it is worth it in the end. This capability is built into the WildFly Application Server which Keycloak derives from.

### concepts of running in domain mode.

* domain controller 

The domain controller is a process that is responsible for storing, managing, and publishing the general configuration for each node in the cluster. This process is the central point from which nodes in a cluster obtain their configuration.

* host controller

The host controller is responsible for managing server instances on a specific machine. You configure it to run one or more server instances. The domain controller can also interact with the host controllers on each machine to manage the cluster. To reduce the number of running process, a domain controller also acts as a host controller on the machine it runs on.

* domain profile

A domain profile is a named set of configuration that can be used by a server to boot from. A domain controller can define multiple domain profiles that are consumed by different servers.

* server group

A server group is a collection of servers. They are managed and configured as one. You can assign a domain profile to a server group and every service in that group will use that domain profile as their configuration.

## Domain Configuration

> domain/configuration

Any changes you make to this file while the domain controller is running will not take effect and may even be overwritten by the server. Instead use the command line scripting or the web console of WildFly.

### Profile 

### domain.xml
> clustured
```
<profile name="auth-server-clustered">
           ​...
​</profile
```

> socket binding groups

```
domain.sh -Djboss.http.port=80
```

