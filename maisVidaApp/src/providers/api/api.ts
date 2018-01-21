import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions, RequestOptionsArgs, Response, RequestMethod, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operators/map';

export enum Action { QueryStart, QueryStop };

@Injectable()
export class Api {

  process: EventEmitter<any> = new EventEmitter<any>();

  url: string = 'http://localhost:8080';

  constructor(public http: HttpClient,
              public _http: Http) {
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  postByRequest(endpoint: string, body: any, options?: RequestOptionsArgs) {
    let url = this.url + '/' + endpoint;
    return this._request(RequestMethod.Post, url, body, options);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }


  private _request(method: RequestMethod, url: string, body?: string, options?: RequestOptionsArgs) : Observable<Response> {

    let requestOptions = new RequestOptions(Object.assign({
        method: method,
        url: url,
        body: body
    }, options));

    if (!requestOptions.headers) {
        requestOptions.headers = new Headers();
    }

    requestOptions.headers.set("Content-type", "application/json")
    // requestOptions.headers.set("Authorization", this._buildAuthHeader());
    // requestOptions.headers.set("Access-Control-Allow-Origin", "*");

    return Observable.create((observer) => {
        this.process.next(Action.QueryStart);
        this._http.request(new Request(requestOptions))
        .map(res => res.json())
        .subscribe((res) => {
            observer.next(res);
            observer.complete();
        },
        (err) => {
            switch (err.status) {
            case 401:
                observer.error(err);
                break;
            default:
                observer.error(err);
                break;
            }
        });
        this.process.next(Action.QueryStop);
    })
}
}
