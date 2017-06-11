import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  LoadingController } from 'ionic-angular';
import { RequestService } from '../../providers/request-service';
/**
 * Generated class for the DynamicForm component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'dynamic-form',
  templateUrl: 'dynamic-form.html',
  providers:[RequestService]
})
export class DynamicForm  implements OnInit {
  
  fields: Array<Object>;
  form: FormGroup;
  loading:any;
  constructor(private formBuilder: FormBuilder, private loadingController:LoadingController, private requestService: RequestService) { 
    
  }

  ngOnInit(): void {
      this.fields = this.requestService.getFields();
      this.form = this.toFormmGroup(this.fields);
  }

  toFormmGroup(fields:Array<Object>){
    let group = {};
    fields.forEach(field => {
      if(field['type']!=='checkbox'){
        group[field['name']] = field['required'] ? new FormControl('', Validators.required)
                                               : new FormControl('');
      }else{
        let opciones = {};
        field['values'].forEach(value => {
          opciones[value] = new FormControl(false);
        });
        group[field['name']] = new FormGroup(opciones, Validators.required);
      }
      
    });
    return  new FormGroup(group);
  }

   getFields() {
    this.presentLoading();
    setTimeout(()=>{
      this.fields = this.requestService.getFields();
      this.loading.dismiss();
    },1000);
  }

  send(){
    console.log("value", this.form.value);
  }

  presentLoading() {
    this.loading = this.loadingController.create({
      content: 'Duendes trabajando...'
    });

    this.loading.present();
  }


}
