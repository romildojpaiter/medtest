package tech.paiter.medtest.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import tech.paiter.medtest.models.Especialidade;
import tech.paiter.medtest.models.Estado;
import tech.paiter.medtest.models.Medico;
import tech.paiter.medtest.models.Status;

@Configuration
public class RepositoryConfig extends RepositoryRestConfigurerAdapter {


    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Medico.class)
              .exposeIdsFor(Especialidade.class)
              .exposeIdsFor(Status.class)
              .exposeIdsFor(Estado.class);

    }
}
