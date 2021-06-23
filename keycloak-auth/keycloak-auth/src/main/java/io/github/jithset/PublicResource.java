package io.github.jithset;

import io.github.jithset.models.ResponseDTO;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("public")
@Produces(MediaType.APPLICATION_JSON)
public class PublicResource {
    @GET
    public Response get() {

        ResponseDTO dto = new ResponseDTO(200, "Public Resource");
        return Response.ok(dto).build();
    }
}
