package tech.paiter.medtest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.paiter.medtest.models.Medico;
import tech.paiter.medtest.repositories.MedicoRepository;

@RestController
@RequestMapping(value="medico")
public class MedicoController {

    @Autowired
    MedicoRepository medicoRepository;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Medico salvar(@RequestBody Medico medico){

        Medico save = medicoRepository.save(medico);
        // System.out.println(save);
        return save;

    }
}
