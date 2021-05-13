package io.github.jithset.resources;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.jboss.resteasy.reactive.RestPath;

import io.smallrye.mutiny.Uni;

@Path("/api/amount-withdraw")
public class WithdrawalResource {

    @GET
    @Path("/{amount}")
    @Produces(MediaType.TEXT_PLAIN)
    public Uni<String> withdrawAmount(@RestPath("amount") Double amount) {
        return Uni.createFrom().item("Success! Amount "+amount+" can be withdrawed");
    }
}
