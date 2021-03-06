import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RequestService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RequestService {
  base = 'http://34.194.15.225';
  constructor(public http: Http) {  }

  getFields() {
      return this.http.get(`${this.base}/form-fields`).map(res => res.json());
  }

}
