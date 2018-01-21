package tech.paiter.medtest.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import tech.paiter.medtest.models.Estado;
import tech.paiter.medtest.models.Status;

@CrossOrigin()
@RepositoryRestResource(collectionResourceRel="status", path="status")
public interface StatusRepository extends MongoRepository<Status, String> {

}
