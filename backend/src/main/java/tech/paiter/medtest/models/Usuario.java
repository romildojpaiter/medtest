package tech.paiter.medtest.models;

import lombok.Data;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Usuario {

    public Usuario() {}

    public Usuario(String nome, String email, String senha){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    @Id
    private String id;

    @NotEmpty(message = "Informe o nome")
    private String nome;

    @Indexed(unique = true)
    @Email(message = "O email deve ser informado")
    private String email;

    @NotEmpty(message = "Informe a senha")
    private String senha;

}
