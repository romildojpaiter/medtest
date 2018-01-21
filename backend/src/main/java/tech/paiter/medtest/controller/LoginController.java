package tech.paiter.medtest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import tech.paiter.medtest.models.Usuario;
import tech.paiter.medtest.repositories.UsuarioRepository;

import org.springframework.data.rest.webmvc.ResourceNotFoundException;

@RestController
@RequestMapping(value="login")
public class LoginController {


    @Autowired
    UsuarioRepository usuarioRepository;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public Usuario login(@RequestBody Usuario usuario) {

        Usuario usuarioEncontrado = usuarioRepository.findByEmail(usuario.getEmail());

        if (usuarioEncontrado == null)
            throw new ResourceNotFoundException("Email não encontrado");

        if (usuarioEncontrado.getSenha().equals(usuario.getSenha()))
            return usuarioEncontrado;

        throw new ResourceNotFoundException("A senha é inválida");

    }


}
