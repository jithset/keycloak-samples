package io.github.jithset;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("public")
public class PublicResource {
    
    @GET
    public Response get() {
        return Response.ok("PublicResource : Hello World").build();
    }
}
