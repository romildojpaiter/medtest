package tech.paiter.medtest.models;

import lombok.Data;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Status {

    @Id
    private String id;

    @NotEmpty(message = "Informe a descrição")
    private String descricao;

}
