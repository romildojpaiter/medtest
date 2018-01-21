package tech.paiter.medtest.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import tech.paiter.medtest.models.Medico;
import tech.paiter.medtest.models.Usuario;

import java.util.List;

@CrossOrigin()
@RepositoryRestResource(collectionResourceRel="usuarios", path="usuarios")
public interface UsuarioRepository extends MongoRepository<Usuario, String> {

    Usuario findByEmail(String email);

}
