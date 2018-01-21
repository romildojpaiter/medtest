package tech.paiter.medtest.models;

import lombok.Data;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Especialidade {

    @Id
    private String id;

    @NotEmpty(message = "Informa a descrição")
    @Indexed(unique = true)
    private String descricao;

}
