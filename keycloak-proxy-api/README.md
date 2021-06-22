# Quarkus Application

Sample Quarkus application test Keycloak policy enforcement.

## Issue 

cannot connect to Policy Enforcer from api behind nginx proxy

[error.log](#)

```
2021-06-22 08:37:44,028 ERROR [io.qua.run.Application] (Quarkus Main Thread) Failed to start application (with profile dev): java.net.ConnectException: Connection refused
my-api         | 	at java.base/sun.nio.ch.Net.connect0(Native Method)
my-api         | 	at java.base/sun.nio.ch.Net.connect(Net.java:576)
my-api         | 	at java.base/sun.nio.ch.Net.connect(Net.java:565)
my-api         | 	at java.base/sun.nio.ch.NioSocketImpl.connect(NioSocketImpl.java:588)
my-api         | 	at java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:333)
my-api         | 	at java.base/java.net.Socket.connect(Socket.java:645)
my-api         | 	at org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:121)
my-api         | 	at org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:180)
my-api         | 	at org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:144)
my-api         | 	at org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:134)
my-api         | 	at org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:605)
my-api         | 	at org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:440)
my-api         | 	at org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:835)
my-api         | 	at org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)
my-api         | 	at org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)
my-api         | 	at org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:56)
my-api         | 	at org.keycloak.authorization.client.util.HttpMethod.execute(HttpMethod.java:84)
my-api         | 	at org.keycloak.authorization.client.util.HttpMethodResponse$3.execute(HttpMethodResponse.java:68)
my-api         | 	at org.keycloak.authorization.client.resource.ProtectedResource$5.call(ProtectedResource.java:226)
my-api         | 	at org.keycloak.authorization.client.resource.ProtectedResource$5.call(ProtectedResource.java:222)
my-api         | 	at org.keycloak.authorization.client.resource.ProtectedResource.find(ProtectedResource.java:230)
my-api         | 	at org.keycloak.authorization.client.resource.ProtectedResource.findByName(ProtectedResource.java:131)
my-api         | 	at org.keycloak.adapters.authorization.PolicyEnforcer.configureDefinedPaths(PolicyEnforcer.java:174)
my-api         | 	at org.keycloak.adapters.authorization.PolicyEnforcer.configurePaths(PolicyEnforcer.java:160)
my-api         | 	at org.keycloak.adapters.authorization.PolicyEnforcer.<init>(PolicyEnforcer.java:76)
my-api         | 	at io.quarkus.keycloak.pep.runtime.KeycloakPolicyEnforcerAuthorizer.init(KeycloakPolicyEnforcerAuthorizer.java:139)
my-api         | 	at io.quarkus.keycloak.pep.runtime.KeycloakPolicyEnforcerAuthorizer_Subclass.init$$superaccessor6(KeycloakPolicyEnforcerAuthorizer_Subclass.zig:1103)
my-api         | 	at io.quarkus.keycloak.pep.runtime.KeycloakPolicyEnforcerAuthorizer_Subclass$$function$$6.apply(KeycloakPolicyEnforcerAuthorizer_Subclass$$function$$6.zig:53)
my-api         | 	at io.quarkus.arc.impl.AroundInvokeInvocationContext.proceed(AroundInvokeInvocationContext.java:54)
my-api         | 	at io.quarkus.arc.runtime.devconsole.InvocationInterceptor.proceed(InvocationInterceptor.java:63)
my-api         | 	at io.quarkus.arc.runtime.devconsole.InvocationInterceptor.monitor(InvocationInterceptor.java:51)
my-api         | 	at io.quarkus.arc.runtime.devconsole.InvocationInterceptor_Bean.intercept(InvocationInterceptor_Bean.zig:521)
my-api         | 	at io.quarkus.arc.impl.InterceptorInvocation.invoke(InterceptorInvocation.java:41)
my-api         | 	at io.quarkus.arc.impl.AroundInvokeInvocationContext.perform(AroundInvokeInvocationContext.java:41)
my-api         | 	at io.quarkus.arc.impl.InvocationContexts.performAroundInvoke(InvocationContexts.java:32)
my-api         | 	at io.quarkus.keycloak.pep.runtime.KeycloakPolicyEnforcerAuthorizer_Subclass.init(KeycloakPolicyEnforcerAuthorizer_Subclass.zig:1054)
my-api         | 	at io.quarkus.keycloak.pep.runtime.KeycloakPolicyEnforcerRecorder.setup(KeycloakPolicyEnforcerRecorder.java:20)
my-api         | 	at io.quarkus.deployment.steps.KeycloakPolicyEnforcerBuildStep$setup-429927437.deploy_0(KeycloakPolicyEnforcerBuildStep$setup-429927437.zig:126)
my-api         | 	at io.quarkus.deployment.steps.KeycloakPolicyEnforcerBuildStep$setup-429927437.deploy(KeycloakPolicyEnforcerBuildStep$setup-429927437.zig:40)
my-api         | 	at io.quarkus.runner.ApplicationImpl.doStart(ApplicationImpl.zig:697)
my-api         | 	at io.quarkus.runtime.Application.start(Application.java:90)
my-api         | 	at io.quarkus.runtime.ApplicationLifecycleManager.run(ApplicationLifecycleManager.java:100)
my-api         | 	at io.quarkus.runtime.Quarkus.run(Quarkus.java:66)
my-api         | 	at io.quarkus.runtime.Quarkus.run(Quarkus.java:42)
my-api         | 	at io.quarkus.runtime.Quarkus.run(Quarkus.java:119)
my-api         | 	at io.quarkus.runner.GeneratedMain.main(GeneratedMain.zig:29)
my-api         | 	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
my-api         | 	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:78)
my-api         | 	at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
my-api         | 	at java.base/java.lang.reflect.Method.invoke(Method.java:567)
my-api         | 	at io.quarkus.runner.bootstrap.StartupActionImpl$3.run(StartupActionImpl.java:134)
my-api         | 	at java.base/java.lang.Thread.run(Thread.java:831)

```

## How to Run

```
docker-compose -f ./infra/docker-compose.yml up
```

