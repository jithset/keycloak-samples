# Quarkus Application

Sample Quarkus application test Keycloak policy enforcement.

## Issue 

cannot connect to Policy Enforcer from api behind nginx proxy

[error.log](#)

```
lb             | 172.20.0.1 - - [22/Jun/2021:14:53:34 +0000] "GET /auth/admin/realms/proxy-apis HTTP/1.1" 200 3550 "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36"
lb             | 172.20.0.1 - - [22/Jun/2021:14:53:34 +0000] "GET /auth/admin/realms/proxy-apis/authentication/flows HTTP/1.1" 200 4620 "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36"
lb             | 172.20.0.1 - - [22/Jun/2021:14:53:34 +0000] "GET /auth/admin/realms HTTP/1.1" 200 7058 "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36"
lb             | 172.20.0.1 - - [22/Jun/2021:14:53:34 +0000] "GET /auth/admin/realms/proxy-apis/clients/97498382-2443-4d3b-a402-4cd32652d0b7 HTTP/1.1" 200 2639 "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36"
lb             | 172.20.0.1 - - [22/Jun/2021:14:53:34 +0000] "GET /auth/admin/realms/proxy-apis/clients?first=0&max=20 HTTP/1.1" 200 8585 "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36"
my-api         | 2021-06-22 14:53:38,378 ERROR [io.qua.mut.run.MutinyInfrastructure] (executor-thread-1) Mutiny had to drop the following exception: java.lang.IllegalStateException: Response has already been written
my-api         | 	at io.vertx.core.http.impl.HttpServerResponseImpl.end(HttpServerResponseImpl.java:376)
my-api         | 	at io.vertx.core.http.impl.HttpServerResponseImpl.end(HttpServerResponseImpl.java:365)
my-api         | 	at io.vertx.core.http.impl.HttpServerResponseImpl.end(HttpServerResponseImpl.java:421)
my-api         | 	at io.quarkus.vertx.http.runtime.security.HttpAuthorizer$4$1.onItem(HttpAuthorizer.java:164)
my-api         | 	at io.quarkus.vertx.http.runtime.security.HttpAuthorizer$4$1.onItem(HttpAuthorizer.java:156)
my-api         | 	at io.smallrye.mutiny.operators.uni.UniOnItemTransformToUni$UniOnItemTransformToUniProcessor.onItem(UniOnItemTransformToUni.java:60)
my-api         | 	at io.smallrye.mutiny.operators.uni.builders.UniCreateFromKnownItem$KnownItemSubscription.forward(UniCreateFromKnownItem.java:38)
my-api         | 	at io.smallrye.mutiny.operators.uni.builders.UniCreateFromKnownItem$KnownItemSubscription.access$100(UniCreateFromKnownItem.java:26)
my-api         | 	at io.smallrye.mutiny.operators.uni.builders.UniCreateFromKnownItem.subscribe(UniCreateFromKnownItem.java:23)
my-api         | 	at io.smallrye.mutiny.operators.AbstractUni.subscribe(AbstractUni.java:36)
my-api         | 	at io.smallrye.mutiny.operators.uni.UniOnItemTransformToUni$UniOnItemTransformToUniProcessor.performInnerSubscription(UniOnItemTransformToUni.java:81)
my-api         | 	at io.smallrye.mutiny.operators.uni.UniOnItemTransformToUni$UniOnItemTransformToUniProcessor.onItem(UniOnItemTransformToUni.java:57)
my-api         | 	at io.smallrye.mutiny.operators.uni.UniOnItemTransform$UniOnItemTransformProcessor.onItem(UniOnItemTransform.java:43)
my-api         | 	at io.smallrye.mutiny.operators.uni.builders.UniCreateFromKnownItem$KnownItemSubscription.forward(UniCreateFromKnownItem.java:38)
my-api         | 	at io.smallrye.mutiny.operators.uni.builders.UniCreateFromKnownItem$KnownItemSubscription.access$100(UniCreateFromKnownItem.java:26)
my-api         | 	at io.smallrye.mutiny.operators.uni.builders.UniCreateFromKnownItem.subscribe(UniCreateFromKnownItem.java:23)
my-api         | 	at io.smallrye.mutiny.operators.AbstractUni.subscribe(AbstractUni.java:36)
my-api         | 	at io.smallrye.mutiny.operators.uni.UniOnItemTransform.subscribe(UniOnItemTransform.java:22)
my-api         | 	at io.smallrye.mutiny.operators.AbstractUni.subscribe(AbstractUni.java:36)
my-api         | 	at io.smallrye.mutiny.operators.uni.UniOnItemTransformToUni.subscribe(UniOnItemTransformToUni.java:25)
my-api         | 	at io.smallrye.mutiny.operators.AbstractUni.subscribe(AbstractUni.java:36)
my-api         | 	at io.smallrye.mutiny.groups.UniSubscribe.withSubscriber(UniSubscribe.java:50)
my-api         | 	at io.quarkus.vertx.http.runtime.security.HttpAuthorizer$4.onItem(HttpAuthorizer.java:156)
my-api         | 	at io.quarkus.vertx.http.runtime.security.HttpAuthorizer$4.onItem(HttpAuthorizer.java:146)
my-api         | 	at io.smallrye.mutiny.operators.uni.builders.UniCreateFromKnownItem$KnownItemSubscription.forward(UniCreateFromKnownItem.java:38)
my-api         | 	at io.smallrye.mutiny.operators.uni.builders.UniCreateFromKnownItem$KnownItemSubscription.access$100(UniCreateFromKnownItem.java:26)
my-api         | 	at io.smallrye.mutiny.operators.uni.builders.UniCreateFromKnownItem.subscribe(UniCreateFromKnownItem.java:23)
my-api         | 	at io.smallrye.mutiny.operators.AbstractUni.subscribe(AbstractUni.java:36)
my-api         | 	at io.smallrye.mutiny.groups.UniSubscribe.withSubscriber(UniSubscribe.java:50)
my-api         | 	at io.quarkus.vertx.http.runtime.security.HttpAuthorizer.doDeny(HttpAuthorizer.java:146)
my-api         | 	at io.quarkus.vertx.http.runtime.security.HttpAuthorizer.access$000(HttpAuthorizer.java:27)
my-api         | 	at io.quarkus.vertx.http.runtime.security.HttpAuthorizer$2.accept(HttpAuthorizer.java:126)
my-api         | 	at io.quarkus.vertx.http.runtime.security.HttpAuthorizer$2.accept(HttpAuthorizer.java:122)
my-api         | 	at io.smallrye.context.impl.wrappers.SlowContextualConsumer.accept(SlowContextualConsumer.java:21)
my-api         | 	at io.smallrye.mutiny.helpers.UniCallbackSubscriber.onItem(UniCallbackSubscriber.java:69)
my-api         | 	at io.smallrye.mutiny.operators.uni.builders.DefaultUniEmitter.complete(DefaultUniEmitter.java:36)
my-api         | 	at io.quarkus.vertx.http.runtime.security.HttpAuthorizer$1$1$1.run(HttpAuthorizer.java:74)
my-api         | 	at io.quarkus.runtime.CleanableExecutor$CleaningRunnable.run(CleanableExecutor.java:231)
my-api         | 	at java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)
my-api         | 	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)
my-api         | 	at org.jboss.threads.EnhancedQueueExecutor$Task.run(EnhancedQueueExecutor.java:2415)
my-api         | 	at org.jboss.threads.EnhancedQueueExecutor$ThreadBody.run(EnhancedQueueExecutor.java:1452)
my-api         | 	at org.jboss.threads.DelegatingRunnable.run(DelegatingRunnable.java:29)
my-api         | 	at org.jboss.threads.ThreadLocalResettingRunnable.run(ThreadLocalResettingRunnable.java:29)
my-api         | 	at java.base/java.lang.Thread.run(Thread.java:831)
my-api         | 	at org.jboss.threads.JBossThread.run(JBossThread.java:501)


```

## How to Run

```
docker-compose -f ./infra/docker-compose.yml up
```

