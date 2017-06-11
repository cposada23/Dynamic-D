import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DynamicForm } from './dynamic-form';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Autosize } from '../autosize/autosize';

@NgModule({
  declarations: [
    DynamicForm,
    Autosize 
  ],
  imports: [
    ReactiveFormsModule,
    HttpModule,
    IonicPageModule.forChild(DynamicForm),
  ],
  exports: [
    DynamicForm,
    Autosize
  ]
})
export class DynamicFormModule {}
