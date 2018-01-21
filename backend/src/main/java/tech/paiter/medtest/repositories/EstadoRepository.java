package tech.paiter.medtest.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import tech.paiter.medtest.models.Estado;
import tech.paiter.medtest.models.Usuario;

@CrossOrigin()
@RepositoryRestResource(collectionResourceRel="estados", path="estados")
public interface EstadoRepository extends MongoRepository<Estado, String> {

}
