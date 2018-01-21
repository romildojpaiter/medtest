package tech.paiter.medtest.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import tech.paiter.medtest.models.Especialidade;
import tech.paiter.medtest.models.Estado;

@CrossOrigin()
@RepositoryRestResource(collectionResourceRel="especialidades", path="especialidades")
public interface EspecialidadeRepository extends MongoRepository<Especialidade, String> {

}
