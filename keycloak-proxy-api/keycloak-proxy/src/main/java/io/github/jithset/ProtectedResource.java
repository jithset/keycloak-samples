package io.github.jithset;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("protected")
public class ProtectedResource {
    
    @GET
    public Response get() {
        return Response.ok("ProtectedResource : Hello World").build();
    }

}
