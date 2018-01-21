package tech.paiter.medtest.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import tech.paiter.medtest.models.Medico;

import java.util.List;

@CrossOrigin()
@RepositoryRestResource(collectionResourceRel="medicos", path="medicos")
public interface MedicoRepository extends MongoRepository<Medico, String> {

}
