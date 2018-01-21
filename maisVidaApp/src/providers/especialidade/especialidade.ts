import 'rxjs/add/operator/toPromise';
import { Injectable } from "@angular/core";
import { Api } from '../api/api';

@Injectable()
export class Especialidade {

  constructor(public api: Api) { }

  getAll() {
    let esp = this.api.get('especialidades').share();
    return esp;
  }

}
