import 'rxjs/add/operator/toPromise';
import { Injectable } from "@angular/core";
import { Api } from '../api/api';

@Injectable()
export class Estado {

  constructor(public api: Api) { }

  getAll() {
    let esp = this.api.get('estados').share();

    return esp;
  }

}
