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

  constructor(public http: Http) {  }

  getFields() {
    return [
      {
          "type": "checkbox",
          "label": "Aplicaciones preferidas",
          "name": "appPreference",
          "required": true,
          "values": [
              "Facebook",
              "Spotify",
              "Uber",
              "Youtube",
              "Linkedin",
              "Gmail"
          ]
      },
      {
          "type": "radio",
          "label": "Género",
          "name": "gender",
          "required": true,
          "values": [
              "Masculino",
              "Femenino"
          ]
      }
      ,
      {
          "type": "select",
          "label": "Ciudad",
          "name": "city",
          "required": true,
          "values": [
              "Bogotá",
              "Medellin",
              "Cali"
          ]
      },
      {
          "type": "textarea",
          "label": "Cuéntanos un poco sobre ti",
          "name": "cv",
          "required": true
      },
      {
          "type": "text",
          "label": "Dirección",
          "name": "address",
          "required": true
      }
    ];
  }

}
