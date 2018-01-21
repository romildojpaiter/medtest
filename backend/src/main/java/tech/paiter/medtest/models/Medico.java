package tech.paiter.medtest.models;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document
public class Medico {

    @Id
    private String id;

    @NotNull(message = "User Name is compulsory")
    private String primeiroNome;

    @DBRef
    private Especialidade especialidade;

    @DBRef
    private Status status;

    @DBRef
    private Estado estado;

    private String ultimoNome;

    private String email;

    private boolean ativo;

    private String cidade;

}
