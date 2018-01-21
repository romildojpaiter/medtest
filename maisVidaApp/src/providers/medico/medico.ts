import { Injectable } from "@angular/core";
import { Headers, RequestOptions } from "@angular/http";
import { Api } from '../api/api';
import { Item } from '../../models/item';
import 'rxjs/add/operator/toPromise';
import { query } from "@angular/core/src/animation/dsl";

@Injectable()
export class Medico {

  constructor(public api: Api) {}

  getEspecialidade(id) {
    let esp = this.api.get(`medicos/${id}/especialidade`).share();
    return esp;
  }

  delete(id) {
    return this.api.delete(`medicos/${id}`);
  }

  getAll() {
    let esp = this.api.get('medicos').share();
    return esp;
  }

  salvar(model: any) {
    let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    let med = this.api.post('medico', model, options).share();

    med.subscribe(
      res => {
        console.log("Success");
      },
      err => {
        console.log(err);
        console.log("fail");
      }
    )

    return med;
  }

}
