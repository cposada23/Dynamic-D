import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  LoadingController, AlertController } from 'ionic-angular';
import { RequestService } from '../../providers/request-service';
import { CheckboxValidator } from '../../providers/checkbox-validator';
@Component({
  selector: 'dynamic-form',
  templateUrl: 'dynamic-form.html',
  providers:[RequestService, CheckboxValidator]
})
export class DynamicForm  implements OnInit {
  
  fields: Array<Object>;
  form: FormGroup;
  loading:any;
  error: string = "Internet";
  constructor(private alertController:AlertController, private checkValidator: CheckboxValidator, private formBuilder: FormBuilder, private loadingController:LoadingController, private requestService: RequestService) { 
    
  }

  ngOnInit(): void {
      this.getFields();
  }

  toFormGroup(fields:Array<Object>){
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
        group[field['name']] = field['required'] ?  this.formBuilder.group(opciones, {validator: this.checkValidator.validateCheckboxes}): new FormGroup(opciones);
        //group[field['name']] =  new FormGroup(opciones);
      }
      
    });
    return  new FormGroup(group);
  }

   getFields() {
    this.presentLoading();
    this.requestService.getFields().subscribe(fields => {
      console.log("fields", fields);
      this.fields = fields;
      this.form = this.toFormGroup(this.fields);
      this.error = 'none';
      this.loading.dismiss();
    }, Error=> {
      this.error = "Internet";
      this.loading.dismiss();
    });
  }

  send(){
    console.log("value", this.form.value);
    this.showAlert(this.form.value);
  }

  presentLoading() {
    this.loading = this.loadingController.create({
      content: 'Duendes trabajando...'
    });

    this.loading.present();
  }

  showAlert(message) {
    let alert = this.alertController.create({
      title: 'Datos ingresados',
      message: message,
      buttons: ['Ok']
    });
    alert.present();
  }


}
