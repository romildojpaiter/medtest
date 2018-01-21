import 'rxjs/add/operator/toPromise';
import { Injectable } from "@angular/core";
import { Api } from '../api/api';

@Injectable()
export class Status {

  constructor(public api: Api) { }

  getAll() {
    let esp = this.api.get('status').share();

    return esp;
  }

}
