package tech.paiter.medtest.models;

import lombok.Data;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Estado {

    @Id
    private String id;

    @NotEmpty(message = "Infome o nome do Estado")
    private String nome;

    @NotEmpty(message = "Infome a sigla do Estado")
    private String sigla;
}
