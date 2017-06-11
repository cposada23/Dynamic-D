import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/map';

/*
  Generated class for the CheckboxValidator provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CheckboxValidator {

  constructor(public http: Http) {  }
  validateCheckboxes(boxes: FormControl)
   {
      var valid : boolean = false,
          k     : any;


      for (k in boxes.value)
      {
         var val = boxes.value[k];

         if (val)
         {
            valid = true;
            break;
         }
      }

      if (valid)
      {
         return null;
      }

      return {
         checkboxRequired: true
      };
   }

}
